'use client';

import { useRef, useState, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface UserSpotting {
  id: string;
  birdId: number;
  birdName: string;
  latitude: number;
  longitude: number;
  location?: string;
  notes?: string;
  photos?: string[];
  instagramLink?: string;
  spottedAt: Date;
}

interface WorldMapProps {
  spottedBirds: number[];
  userSpottings?: UserSpotting[];
  onAddSpotting?: (lat: number, lng: number) => void;
  isAuthenticated?: boolean;
}

// Map click handler component
function MapClickHandler({ onAddSpotting }: { onAddSpotting?: (lat: number, lng: number) => void }) {
  useMapEvents({
    click: (e) => {
      if (onAddSpotting) {
        onAddSpotting(e.latlng.lat, e.latlng.lng);
      }
    },
  });
  return null;
}

export default function WorldMap({ spottedBirds, userSpottings = [], onAddSpotting, isAuthenticated = false }: WorldMapProps) {
  const mapRef = useRef<L.Map | null>(null);
  const [isAddingSpotting, setIsAddingSpotting] = useState(false);

  // Create custom icons for user spottings
  const userSpottingIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
    iconSize: [30, 48],
    iconAnchor: [15, 48],
    popupAnchor: [1, -42],
    shadowSize: [48, 48]
  });

  const handleAddSpotting = useCallback((lat: number, lng: number) => {
    if (onAddSpotting) {
      onAddSpotting(lat, lng);
    }
  }, [onAddSpotting]);

  return (
    <div className="w-full h-full rounded-lg overflow-hidden relative">
      {/* Add Spotting Button - Only show if authenticated */}
      {isAuthenticated && (
        <div className="absolute top-4 right-4 z-[500]">
          <button
            onClick={() => setIsAddingSpotting(!isAddingSpotting)}
            className={`pokedex-button px-3 py-2 text-white pixel-font text-xs shadow-lg ${
              isAddingSpotting ? 'bg-red-600' : 'bg-green-600'
            }`}
          >
            {isAddingSpotting ? '✕ Cancel' : '📍 Add Spotting'}
          </button>
        </div>
      )}

      {/* Instructions - Only show if authenticated and adding spotting */}
      {isAuthenticated && isAddingSpotting && (
        <div className="absolute top-16 right-4 z-[500] bg-white p-3 rounded-lg shadow-lg max-w-xs">
          <p className="pixel-font text-xs text-gray-700">
            Click anywhere on the map to add a bird spotting location!
          </p>
        </div>
      )}

      <MapContainer
        center={[20, 0]}
        zoom={2}
        style={{ height: '100%', width: '100%', cursor: isAddingSpotting ? 'crosshair' : 'grab' }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Map click handler for adding spottings */}
        {isAddingSpotting && <MapClickHandler onAddSpotting={handleAddSpotting} />}

        {/* User spotting markers */}
        {userSpottings.map((spotting) => (
          <Marker
            key={spotting.id}
            position={[spotting.latitude, spotting.longitude]}
            icon={userSpottingIcon}
          >
            <Popup>
              <div className="text-center min-w-[250px] max-w-[300px]">
                <h3 className="pixel-font text-sm font-bold text-gray-800 mb-3">
                  {spotting.birdName}
                </h3>

                {/* Photos */}
                {spotting.photos && spotting.photos.length > 0 && (
                  <div className="mb-3">
                    <div className={`grid gap-2 ${spotting.photos.length === 1 ? 'grid-cols-1' : 'grid-cols-2'}`}>
                      {spotting.photos.slice(0, 4).map((photo, index) => (
                        <img
                          key={index}
                          src={photo}
                          alt={`${spotting.birdName} photo ${index + 1}`}
                          className={`w-full object-cover rounded border shadow-sm ${
                            spotting.photos.length === 1 ? 'h-24' : 'h-20'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                )}

                <div className="text-xs text-gray-600 space-y-2">
                  <p>📍 {spotting.location || 'Unknown location'}</p>
                  <p>📅 {spotting.spottedAt.toLocaleDateString()}</p>
                  <p>🗺️ {spotting.latitude.toFixed(4)}, {spotting.longitude.toFixed(4)}</p>

                  {spotting.notes && (
                    <p className="mt-2 p-2 bg-gray-100 rounded text-left">
                      💭 {spotting.notes}
                    </p>
                  )}

                  {/* Instagram Link */}
                  {spotting.instagramLink && (
                    <div className="mt-2">
                      <a
                        href={spotting.instagramLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pokedex-button inline-flex items-center gap-1 px-3 py-2 pixel-font text-xs hover:bg-opacity-90 transition-all duration-200 instagram-button"
                      >
                        Read more on Instagram
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
