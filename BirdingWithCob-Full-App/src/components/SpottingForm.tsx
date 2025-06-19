'use client';

import { useState, useEffect } from 'react';
import { X, Search } from 'lucide-react';
import PhotoUpload from './PhotoUpload';

interface Bird {
  id: number;
  name: string;
  scientificName: string;
  type: string;
  rarity: string;
  habitat: string;
  description: string;
  spotted: boolean;
  image: string;
  photoUrl?: string;
  photoAttribution?: string;
}

interface LocationBird {
  id: number;
  name: string;
  common_name: string;
  rank: string;
  rank_level: number;
  iconic_taxon_name: string;
  default_photo?: {
    id: number;
    url: string;
    medium_url: string;
    square_url: string;
    attribution: string;
    license_code: string;
  };
  observations_count: number;
  wikipedia_url?: string;
  ancestry?: string;
}

interface SpottingFormProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (spottingData: SpottingFormData) => Promise<void>;
  latitude: number;
  longitude: number;
  birds: Bird[];
}

export interface SpottingFormData {
  birdId: string;
  birdName?: string;
  latitude: number;
  longitude: number;
  location?: string;
  notes?: string;
  photos?: string[];
  date?: string;
  instagramLink?: string;
}

export default function SpottingForm({ isOpen, onClose, onSubmit, latitude, longitude, birds }: SpottingFormProps) {
  const [selectedBird, setSelectedBird] = useState<LocationBird | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [notes, setNotes] = useState('');
  const [instagramLink, setInstagramLink] = useState('https://www.instagram.com/birdingwithcob/');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const [photoPreviewUrl, setPhotoPreviewUrl] = useState<string | null>(null);
  const [uploadingPhoto, setUploadingPhoto] = useState(false);

  // Location-based birds state
  const [locationBirds, setLocationBirds] = useState<LocationBird[]>([]);
  const [loadingBirds, setLoadingBirds] = useState(false);
  const [birdsError, setBirdsError] = useState<string | null>(null);

  // Fetch birds based on location when modal opens
  useEffect(() => {
    if (isOpen && latitude !== 0 && longitude !== 0) {
      fetchLocationBirds();
    }
  }, [isOpen, latitude, longitude]);

  const fetchLocationBirds = async () => {
    setLoadingBirds(true);
    setBirdsError(null);

    try {
      const response = await fetch(`/api/birds/location?lat=${latitude}&lng=${longitude}&radius=50`);
      const data = await response.json();

      if (data.success) {
        setLocationBirds(data.results);
      } else {
        setBirdsError(data.error || 'Failed to load birds for this location');
        // Fallback to global birds if location-based fails
        setLocationBirds([]);
      }
    } catch (error) {
      console.error('Error fetching location birds:', error);
      setBirdsError('Failed to load birds for this location');
      setLocationBirds([]);
    } finally {
      setLoadingBirds(false);
    }
  };

  // Filter birds based on search query
  const filteredBirds = locationBirds.filter(bird =>
    bird.common_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    bird.name.toLowerCase().includes(searchQuery.toLowerCase())
  ).slice(0, 50); // Limit to 50 results for performance

  const handlePhotoSelect = (file: File | null, previewUrl: string | null) => {
    setSelectedPhoto(file);
    setPhotoPreviewUrl(previewUrl);
  };

  const resetForm = () => {
    setSelectedBird(null);
    setSearchQuery('');
    setLocation('');
    setNotes('');
    setInstagramLink('https://www.instagram.com/birdingwithcob/');
    setSelectedPhoto(null);
    setPhotoPreviewUrl(null);
    setLocationBirds([]);
    setBirdsError(null);
  };

  const handleClose = () => {
    resetForm();
    onClose();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedBird) return;

    setIsSubmitting(true);
    const uploadedPhotos: string[] = [];

    try {
      // Upload photo if one is selected
      if (selectedPhoto) {
        setUploadingPhoto(true);

        // Validate file type and size
        if (!selectedPhoto.type.startsWith('image/')) {
          alert('Please select a valid image file');
          return;
        }

        if (selectedPhoto.size > 5 * 1024 * 1024) {
          alert('Photo must be less than 5MB');
          return;
        }

        // Upload to our local server
        const formData = new FormData();
        formData.append('photo', selectedPhoto);

        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });

        const uploadResult = await uploadResponse.json();

        if (!uploadResponse.ok) {
          alert(`Photo upload failed: ${uploadResult.error}`);
          return;
        }

        uploadedPhotos.push(uploadResult.url);
        setUploadingPhoto(false);
      }

      await onSubmit({
        birdId: selectedBird.id.toString(),
        birdName: selectedBird.common_name,
        latitude,
        longitude,
        location: location || undefined,
        notes: notes || undefined,
        photos: uploadedPhotos,
        date: new Date().toISOString(),
        instagramLink: instagramLink || undefined,
      });

      // Reset form and close
      resetForm();
      onClose();
    } catch (error) {
      console.error('Error submitting spotting:', error);
      alert('Failed to submit spotting. Please try again.');
    } finally {
      setIsSubmitting(false);
      setUploadingPhoto(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999] p-4">
      <div className="pokedex-container max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="pokedex-screen p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="pixel-font text-lg text-gray-800 retro-shadow">Add Bird Spotting</h2>
            <button
              onClick={handleClose}
              className="pokedex-control-button w-8 h-8 flex items-center justify-center text-white"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Location Info */}
          <div className="pokedex-text-area p-3 mb-4">
            <div className="pixel-font text-xs text-gray-700 mb-1">
              📍 Lat: {latitude.toFixed(4)}, Lng: {longitude.toFixed(4)}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Bird Selection */}
            <div>
              <label className="block pixel-font text-xs text-gray-700 mb-2">
                Select Bird Species
                {locationBirds.length > 0 && (
                  <span className="text-green-600 ml-2">
                    ({locationBirds.length} species found in this area)
                  </span>
                )}
              </label>

              {/* Search Input */}
              <div className="relative mb-3">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search birds by name..."
                  className="pokedex-input w-full pl-10 pr-4 py-2 pixel-font text-xs"
                />
              </div>

              {/* Bird Grid */}
              <div className="pokedex-container">
                <div className="pokedex-screen p-3">
                  {loadingBirds ? (
                    <div className="max-h-48 overflow-y-auto">
                      <div className="text-center mb-3">
                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto mb-1"></div>
                        <p className="pixel-font text-xs text-gray-600">Loading birds for this area...</p>
                      </div>

                      {/* Placeholder Bird Cards */}
                      <div className="grid grid-cols-3 gap-2">
                        {[1, 2, 3, 4, 5, 6].map((index) => (
                          <div
                            key={index}
                            className="pokedex-card aspect-square p-2 animate-pulse"
                          >
                            <div className="w-full h-full flex flex-col">
                              {/* Placeholder Image */}
                              <div className="flex-1 flex items-center justify-center bg-gray-200 rounded mb-1">
                                <div className="text-2xl opacity-50">🐦</div>
                              </div>

                              {/* Placeholder Name */}
                              <div className="text-center">
                                <div className="h-3 bg-gray-200 rounded w-full"></div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : birdsError ? (
                    <div className="flex items-center justify-center h-48">
                      <div className="text-center">
                        <p className="pixel-font text-xs text-red-600 mb-2">{birdsError}</p>
                        <button
                          type="button"
                          onClick={fetchLocationBirds}
                          className="pokedex-button px-3 py-1 text-white pixel-font text-xs"
                        >
                          Retry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="max-h-48 overflow-y-auto">
                      {filteredBirds.length === 0 ? (
                        <div className="text-center py-8">
                          <p className="pixel-font text-xs text-gray-500">
                            {searchQuery ? 'No birds found matching your search' : 'No birds found for this location'}
                          </p>
                          {searchQuery && (
                            <button
                              type="button"
                              onClick={() => setSearchQuery('')}
                              className="pokedex-button px-3 py-1 text-white pixel-font text-xs mt-2"
                            >
                              Clear Search
                            </button>
                          )}
                        </div>
                      ) : (
                        <div className="grid grid-cols-3 gap-2">
                          {filteredBirds.map((bird) => {
                            const isSelected = selectedBird?.id === bird.id;
                            return (
                              <button
                                key={bird.id}
                                type="button"
                                onClick={() => setSelectedBird(bird)}
                                className={`pokedex-card aspect-square p-2 transition-all duration-200 ${
                                  isSelected
                                    ? 'ring-2 ring-blue-400 bg-blue-50'
                                    : 'hover:bg-gray-50'
                                }`}
                                title={`${bird.common_name} (${bird.name})`}
                              >
                                <div className="w-full h-full flex flex-col">
                                  {/* Bird Image */}
                                  <div className="flex-1 flex items-center justify-center bg-gray-100 rounded mb-1">
                                    {bird.default_photo?.medium_url ? (
                                      <img
                                        src={bird.default_photo.medium_url}
                                        alt={bird.common_name}
                                        className="w-full h-full object-cover rounded"
                                        loading="lazy"
                                      />
                                    ) : (
                                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        <span className="text-lg">🐦</span>
                                      </div>
                                    )}
                                  </div>

                                  {/* Bird Name */}
                                  <div className="text-center">
                                    <p className="pixel-font text-xs text-gray-800 truncate">
                                      {bird.common_name}
                                    </p>
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Selected Bird Display */}
                  {selectedBird && (
                    <div className="mt-3 pt-3 border-t border-gray-200">
                      <h4 className="pixel-font text-xs text-gray-800 mb-2">Selected:</h4>
                      <div className="flex items-center space-x-2">
                        {selectedBird.default_photo?.medium_url && (
                          <img
                            src={selectedBird.default_photo.medium_url}
                            alt={selectedBird.common_name}
                            className="w-8 h-8 object-cover rounded"
                          />
                        )}
                        <div>
                          <p className="pixel-font text-xs text-gray-800">
                            {selectedBird.common_name}
                          </p>
                          <p className="pixel-font text-xs text-gray-500 italic">
                            {selectedBird.name}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Photo Upload */}
            <PhotoUpload
              onPhotoSelect={handlePhotoSelect}
              currentPhoto={photoPreviewUrl}
            />

            {/* Location */}
            <div>
              <label className="block pixel-font text-xs text-gray-700 mb-2">
                Location Name (Optional)
              </label>
              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="e.g., Central Park, New York"
                className="pokedex-input w-full px-3 py-2 pixel-font text-xs"
              />
            </div>

            {/* Instagram Link */}
            <div>
              <label className="block pixel-font text-xs text-gray-700 mb-2">
                Instagram Link
              </label>
              <input
                type="url"
                value={instagramLink}
                onChange={(e) => setInstagramLink(e.target.value)}
                placeholder="https://www.instagram.com/birdingwithcob/"
                className="pokedex-input w-full px-3 py-2 pixel-font text-xs"
              />
            </div>

            {/* Notes */}
            <div>
              <label className="block pixel-font text-xs text-gray-700 mb-2">
                Notes (Optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Describe your observation..."
                className="pokedex-input w-full px-3 py-2 h-20 pixel-font text-xs"
              />
            </div>

            {/* Submit Button */}
            <div className="flex space-x-3 pt-4">
              <button
                type="submit"
                disabled={!selectedBird || isSubmitting || uploadingPhoto}
                className="pokedex-button flex-1 text-white py-3 px-4 pixel-font text-xs disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {uploadingPhoto ? 'Uploading Photo...' : isSubmitting ? 'Adding...' : 'Add Spotting'}
              </button>
              <button
                type="button"
                onClick={handleClose}
                className="pokedex-control-button flex-1 text-white py-3 px-4 pixel-font text-xs"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
