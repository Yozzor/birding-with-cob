'use client';

import { useState, useEffect, useMemo, useCallback } from 'react';
import { Search, LogOut, LogIn } from 'lucide-react';
import dynamic from 'next/dynamic';
import SpottingForm, { SpottingFormData } from '../components/SpottingForm';

// Dynamically import the map component to avoid SSR issues
const WorldMap = dynamic(() => import('../components/WorldMap'), {
  ssr: false,
  loading: () => <div className="w-full h-full bg-gray-200 animate-pulse rounded"></div>
});

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
  userPhoto?: string;
  userNotes?: string;
  spottedLocation?: string;
  spottedDate?: string;
}

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

// Fetch birds from iNaturalist API - optimized for performance
const fetchBirds = async (): Promise<Bird[]> => {
  try {
    // Start with a reasonable number of popular birds for better performance
    const perPage = 500; // Good balance between variety and performance
    const response = await fetch(
      `https://api.inaturalist.org/v1/taxa?q=&rank=species&taxon_id=3&per_page=${perPage}&order=desc&order_by=observations_count`
    );
    const data = await response.json();

    if (!data.results) {
      console.error('No results from iNaturalist API');
      return [];
    }

    const birds = data.results.map((taxon: any) => ({
      id: taxon.id,
      name: taxon.name,
      scientificName: taxon.name,
      type: getBirdType(taxon.name),
      rarity: getRarity(taxon.conservation_status?.status),
      habitat: getHabitat(taxon.name),
      description: taxon.wikipedia_summary?.substring(0, 200) + '...' || 'A fascinating bird species with unique characteristics and behaviors.',
      spotted: false,
      image: getBirdEmoji(taxon.name),
      // Use higher quality image URLs
      photoUrl: taxon.default_photo?.url ? taxon.default_photo.url.replace('square', 'medium') : null,
      photoAttribution: taxon.default_photo?.attribution
    }));

    console.log(`Fetched ${birds.length} bird species from iNaturalist`);
    return birds;
  } catch (error) {
    console.error('Error fetching birds:', error);
    return [];
  }
};

// Helper functions
const getBirdType = (scientificName: string): string => {
  const name = scientificName.toLowerCase();
  if (name.includes('accipiter') || name.includes('buteo') || name.includes('falco')) return 'Raptor';
  if (name.includes('trochilus') || name.includes('calypte')) return 'Hummingbird';
  if (name.includes('corvus') || name.includes('cyanocitta')) return 'Corvid';
  if (name.includes('anas') || name.includes('mergus')) return 'Waterfowl';
  if (name.includes('turdus') || name.includes('sialia')) return 'Songbird';
  if (name.includes('charadrius') || name.includes('calidris')) return 'Shorebird';
  if (name.includes('picoides') || name.includes('melanerpes')) return 'Woodpecker';
  return 'Songbird';
};

const getRarity = (status?: string): string => {
  if (!status) return 'Common';
  if (status.includes('endangered') || status.includes('critical')) return 'Rare';
  if (status.includes('vulnerable') || status.includes('near_threatened')) return 'Uncommon';
  return 'Common';
};

const getHabitat = (scientificName: string): string => {
  const name = scientificName.toLowerCase();
  if (name.includes('anas') || name.includes('mergus')) return 'Wetlands';
  if (name.includes('accipiter') || name.includes('buteo')) return 'Forests and open areas';
  if (name.includes('charadrius') || name.includes('calidris')) return 'Shorelines and beaches';
  if (name.includes('picoides')) return 'Woodlands';
  return 'Various habitats';
};

const getBirdEmoji = (scientificName: string): string => {
  const name = scientificName.toLowerCase();
  if (name.includes('corvus')) return '🐦‍⬛';
  if (name.includes('cardinalis')) return '🐦';
  if (name.includes('anas')) return '🦆';
  if (name.includes('buteo') || name.includes('accipiter')) return '🦅';
  if (name.includes('trochilus')) return '🐦';
  if (name.includes('picoides')) return '🐦';
  return '🐦';
};

const getBirdTypeClass = (type: string): string => {
  const typeMap: { [key: string]: string } = {
    'raptor': 'type-raptor',
    'hummingbird': 'type-hummingbird',
    'corvid': 'type-corvid',
    'waterfowl': 'type-waterfowl',
    'songbird': 'type-songbird',
    'shorebird': 'type-shorebird',
    'woodpecker': 'type-woodpecker',
  };
  return typeMap[type.toLowerCase()] || 'type-unknown';
};

const getRarityTypeClass = (rarity: string): string => {
  const rarityMap: { [key: string]: string } = {
    'common': 'type-normal',
    'uncommon': 'type-grass',
    'rare': 'type-fire',
    'legendary': 'type-dragon',
  };
  return rarityMap[rarity.toLowerCase()] || 'type-normal';
};

export default function BirdingWithCob() {
  const [birds, setBirds] = useState<Bird[]>([]);
  const [selectedBird, setSelectedBird] = useState<Bird | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('species');
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [spottedBirds, setSpottedBirds] = useState<Set<number>>(new Set());



  // Authentication states
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [loginForm, setLoginForm] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');

  // Modal form states
  const [userNotes, setUserNotes] = useState('');
  const [spottedLocation, setSpottedLocation] = useState('');

  // User spotting states
  const [userSpottings, setUserSpottings] = useState<UserSpotting[]>([]);
  const [showSpottingForm, setShowSpottingForm] = useState(false);
  const [pendingSpottingLocation, setPendingSpottingLocation] = useState<{lat: number, lng: number} | null>(null);

  // Check authentication status on load
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('/api/auth/verify');
        const data = await response.json();
        setIsAuthenticated(data.authenticated);
      } catch (error) {
        console.error('Auth check failed:', error);
        setIsAuthenticated(false);
      }
    };

    checkAuth();
  }, []);

  // Load data when component mounts
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      try {
        const [birdData, spottingsData] = await Promise.all([
          fetchBirds(),
          fetchUserSpottings()
        ]);

        setBirds(birdData);
        setUserSpottings(spottingsData);

        // Update spotted birds based on user spottings
        const spottedBirdIds = new Set(spottingsData.map(s => s.birdId));
        setSpottedBirds(spottedBirdIds);
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleBirdClick = useCallback((bird: Bird) => {
    setSelectedBird(bird);
    setShowModal(true);
  }, []);

  // Memoized filtering and sorting for performance with large datasets
  const filteredAndSortedBirds = useMemo(() => {
    const filtered = birds.filter(bird =>
      bird.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bird.scientificName.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return filtered.sort((a, b) => {
      switch (sortBy) {
        case 'species':
          return a.name.localeCompare(b.name);
        case 'location':
          return a.habitat.localeCompare(b.habitat);
        case 'recent':
          return spottedBirds.has(b.id) ? 1 : -1;
        default:
          return 0;
      }
    });
  }, [birds, searchTerm, sortBy, spottedBirds]);



  // Authentication functions
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(loginForm),
      });

      const data = await response.json();

      if (response.ok) {
        setIsAuthenticated(true);
        setShowLoginModal(false);
        setLoginForm({ username: '', password: '' });
      } else {
        setLoginError(data.error || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setLoginError('Login failed. Please try again.');
    }
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Fetch user spottings from API
  const fetchUserSpottings = async (): Promise<UserSpotting[]> => {
    try {
      const response = await fetch('/api/spottings');
      if (!response.ok) throw new Error('Failed to fetch spottings');
      const data = await response.json();

      return data.map((spotting: any) => ({
        id: spotting.id,
        birdId: parseInt(spotting.birdId),
        birdName: spotting.birdName || `Bird ${spotting.birdId}`,
        latitude: spotting.latitude,
        longitude: spotting.longitude,
        location: spotting.location,
        notes: spotting.notes,
        photos: spotting.photos || [],
        instagramLink: spotting.instagramLink,
        spottedAt: new Date(spotting.date),
      }));
    } catch (error) {
      console.error('Error fetching user spottings:', error);
      return [];
    }
  };

  // Handle adding a new spotting
  const handleAddSpotting = async (spottingData: SpottingFormData) => {
    try {
      const response = await fetch('/api/spottings', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(spottingData),
      });

      if (!response.ok) throw new Error('Failed to create spotting');

      const result = await response.json();
      const newSpotting = result.spotting;

      const userSpotting: UserSpotting = {
        id: newSpotting.id,
        birdId: parseInt(newSpotting.birdId),
        birdName: newSpotting.birdName || `Bird ${newSpotting.birdId}`,
        latitude: newSpotting.latitude,
        longitude: newSpotting.longitude,
        location: newSpotting.location,
        notes: newSpotting.notes,
        photos: newSpotting.photos || [],
        instagramLink: newSpotting.instagramLink,
        spottedAt: new Date(newSpotting.date),
      };

      setUserSpottings(prev => [userSpotting, ...prev]);
      setSpottedBirds(prev => new Set([...prev, parseInt(newSpotting.birdId)]));
    } catch (error) {
      console.error('Error adding spotting:', error);
      alert('Failed to add spotting. Please try again.');
    }
  };

  // Handle map click to add spotting (only if authenticated)
  const handleMapAddSpotting = (lat: number, lng: number) => {
    if (!isAuthenticated) return; // Only allow if authenticated
    setPendingSpottingLocation({ lat, lng });
    setShowSpottingForm(true);
  };

  const handleMarkAsSpotted = () => {
    if (selectedBird) {
      setSpottedBirds(prev => new Set([...prev, selectedBird.id]));
      // Here you would typically save to database
      setShowModal(false);
      setUserNotes('');
      setSpottedLocation('');
    }
  };



  if (loading) {
    return (
      <div className="min-h-screen relative overflow-hidden flex items-center justify-center loading-screen-bg">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/uploads/birdingbg1.jpg)',
            filter: 'brightness(0.7) blur(1px)'
          }}
        />

        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-40" />

        {/* Loading Content */}
        <div className="relative z-10 text-center px-4 max-w-md mx-auto">
          {/* Logo */}
          <div className="mb-8 flex justify-center">
            <img
              src="/uploads/birdingwithcoblogo.png"
              alt="Birding with Cob Logo"
              className="h-24 w-auto md:h-32 object-contain logo-float"
            />
          </div>

          {/* Title */}
          <h1 className="pixel-font text-2xl md:text-3xl text-white mb-6 retro-glow">
            Birding with Cob
          </h1>

          {/* Loading Animation */}
          <div className="mb-6">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>

            {/* Loading Text */}
            <p className="text-white text-lg mb-2 pixel-font">Loading...</p>
            <p className="text-gray-200 text-sm">Fetching bird species from iNaturalist</p>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-3 mb-4 overflow-hidden progress-shimmer">
            <div
              className="bg-gradient-to-r from-green-400 to-blue-500 h-3 rounded-full transition-all duration-1000"
              style={{ width: '60%' }}
            />
          </div>

          {/* Fun Loading Messages */}
          <div className="text-gray-300 text-xs pixel-font">
            <p className="animate-pulse">🐦 Preparing your birding adventure...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen relative"
      style={{
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1f2937 100%)',
        backgroundImage: 'url(/uploads/birdingbg1.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay for transparency */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(30, 58, 138, 0.8) 0%, rgba(31, 41, 55, 0.8) 100%)'
        }}
      />

      {/* Content wrapper */}
      <div className="relative z-10">
      {/* Pokédex-style Header */}
      <header className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 border-b-4 border-red-800 shadow-lg">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-blue-500 rounded-full border-2 border-white shadow-lg"></div>
            <h1 className="pixel-font text-2xl text-white retro-shadow">Birding with Cob</h1>
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-400 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
              <div className="w-3 h-3 bg-green-400 rounded-full"></div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <>
                <span className="text-sm pixel-font">Admin Mode</span>
                <button
                  onClick={handleLogout}
                  className="pokedex-button flex items-center space-x-1 px-3 py-1 text-white pixel-font text-xs"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <button
                onClick={() => setShowLoginModal(true)}
                className="pokedex-button flex items-center space-x-1 px-3 py-1 text-white pixel-font text-xs opacity-70 hover:opacity-100"
              >
                <LogIn className="w-4 h-4" />
                <span>Admin</span>
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-4">
        {/* Pokédex-style Controls */}
        <div className="mb-6 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-600" />
            <input
              type="text"
              placeholder="Search bird species..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pokedex-input w-full pl-10 pr-4 py-2 pixel-font text-sm"
            />
          </div>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="pokedex-input px-4 py-2 pixel-font text-sm"
          >
            <option value="species">Sort by Species</option>
            <option value="location">Sort by Location</option>
            <option value="recent">Sort by Recent</option>
          </select>
        </div>

        {/* Pokédex-style Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Side - World Map */}
          <div className="pokedex-container p-6">
            <div className="pokedex-screen p-4">
              <h2 className="pixel-font text-lg text-gray-800 mb-4 retro-shadow">World Map</h2>
              <div className="pokedex-image-container h-96">
                <WorldMap
                  spottedBirds={Array.from(spottedBirds)}
                  userSpottings={userSpottings}
                  onAddSpotting={handleMapAddSpotting}
                  isAuthenticated={isAuthenticated}
                />
              </div>
            </div>
          </div>

          {/* Right Side - Bird Grid */}
          <div className="pokedex-container p-6">
            <div className="pokedex-screen p-4">
              <h2 className="pixel-font text-lg text-gray-800 mb-4 retro-shadow">Bird Species</h2>
              <div className="max-h-96 overflow-y-auto">
                <div className="grid grid-cols-5 gap-2">
                  {filteredAndSortedBirds.slice(0, 100).map((bird, index) => {
                    const isSpotted = spottedBirds.has(bird.id);
                    return (
                      <button
                        key={bird.id}
                        onClick={() => handleBirdClick(bird)}
                        className={`pokedex-bird-card aspect-square border-3 rounded-lg overflow-hidden transition-all duration-300 hover-lift stagger-animation relative ${
                          isSpotted
                            ? 'border-green-500 bg-white shadow-lg hover:shadow-xl'
                            : 'border-gray-400 bg-gray-200 opacity-50 grayscale hover:opacity-70'
                        }`}
                        style={{ animationDelay: `${index * 0.02}s` }}
                      >
                      {isSpotted ? (
                        <>
                          {bird.photoUrl ? (
                            <img
                              src={bird.photoUrl}
                              alt={bird.name}
                              className="w-full h-full object-contain bg-gradient-to-br from-blue-50 to-green-50"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100 text-2xl">
                              🐦
                            </div>
                          )}
                          {/* Spotted indicator */}
                          <div className="absolute top-1 right-1 w-3 h-3 bg-green-500 rounded-full border border-white shadow-sm"></div>
                          {/* Bird number */}
                          <div className="absolute bottom-1 left-1 bg-black bg-opacity-70 text-white pixel-font text-xs px-1 rounded">
                            #{bird.id}
                          </div>
                        </>
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-gray-300 relative">
                          <div className="text-6xl text-gray-500 pixel-font mb-1">?</div>
                          <div className="pixel-font text-xs text-gray-600">#{bird.id}</div>
                          {/* Lock icon for undiscovered */}
                          <div className="absolute top-1 right-1 text-gray-500 text-xs">🔒</div>
                        </div>
                      )}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Discovery Counter */}
              <div className="mt-4 pokedex-text-area p-3">
                <div className="flex items-center justify-between pixel-font text-sm">
                  <span className="text-gray-700">Discovered:</span>
                  <span className="text-green-600 font-bold text-lg">
                    {spottedBirds.size} / {birds.length}
                  </span>
                </div>
                <div className="flex items-center justify-between pixel-font text-xs mt-1">
                  <span className="text-gray-600">Showing:</span>
                  <span className="text-blue-600">
                    {Math.min(filteredAndSortedBirds.length, 100)} of {filteredAndSortedBirds.length} filtered
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pokédex-style Bird Discovery Modal */}
      {showModal && selectedBird && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999] p-4">
          <div className="pokedex-container max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="pokedex-screen p-6">
              {/* Pokédex Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-red-500 rounded-full border-2 border-white"></div>
                  <h3 className="pixel-font text-lg text-gray-800 retro-shadow">#{selectedBird.id}</h3>
                </div>
                <div className="pixel-font text-xs text-gray-600">07/04/2025</div>
              </div>

              {/* Bird Name */}
              <h2 className="pixel-font text-xl text-gray-800 mb-4 retro-shadow">{selectedBird.name}</h2>

              {/* Bird Image Container */}
              <div className="pokedex-image-container mb-4 h-64 relative">
                {selectedBird.photoUrl ? (
                  <img
                    src={selectedBird.photoUrl}
                    alt={selectedBird.name}
                    className="w-full h-full object-contain bg-gradient-to-br from-blue-50 to-green-50"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center text-6xl">
                    🐦
                  </div>
                )}
              </div>

              {/* Type Badges */}
              <div className="flex space-x-2 mb-4">
                <span className={`type-badge ${getBirdTypeClass(selectedBird.type)} pixel-font text-xs px-3 py-1`}>
                  {selectedBird.type.toUpperCase()}
                </span>
                <span className={`type-badge ${getRarityTypeClass(selectedBird.rarity)} pixel-font text-xs px-3 py-1`}>
                  {selectedBird.rarity.toUpperCase()}
                </span>
              </div>

              {/* Bird Stats */}
              <div className="pokedex-text-area p-3 mb-4">
                <div className="grid grid-cols-2 gap-4 pixel-font text-xs">
                  <div>
                    <div className="text-gray-600">Habitat</div>
                    <div className="text-gray-800 font-semibold">{selectedBird.habitat}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Type</div>
                    <div className="text-gray-800 font-semibold">{selectedBird.type}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Rarity</div>
                    <div className="text-gray-800 font-semibold">{selectedBird.rarity}</div>
                  </div>
                  <div>
                    <div className="text-gray-600">Status</div>
                    <div className="text-green-600 font-semibold">
                      {spottedBirds.has(selectedBird.id) ? 'Spotted' : 'Not Spotted'}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="pokedex-text-area p-3 mb-4">
                <div className="pixel-font text-xs text-gray-700">
                  {selectedBird.description}
                </div>
              </div>

              {/* User Photos Section */}
              {(() => {
                const birdSpottings = userSpottings.filter(s => s.birdId === selectedBird.id);
                const allPhotos = birdSpottings.flatMap(s => s.photos || []);

                return allPhotos.length > 0 && (
                  <div className="mb-4">
                    <label className="block pixel-font text-xs text-gray-700 mb-2">
                      Your Photos
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {allPhotos.slice(0, 4).map((photoUrl, index) => (
                        <div key={index} className="pokedex-text-area p-1">
                          <img
                            src={photoUrl}
                            alt={`User photo ${index + 1}`}
                            className="w-full h-20 object-cover rounded"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}

              {/* Notes - Only show if authenticated */}
              {isAuthenticated && (
                <div className="mb-4">
                  <label className="block pixel-font text-xs text-gray-700 mb-2">
                    Notes
                  </label>
                  <textarea
                    value={userNotes}
                    onChange={(e) => setUserNotes(e.target.value)}
                    placeholder="Share your observations..."
                    className="pokedex-input w-full px-3 py-2 h-20 pixel-font text-xs"
                  />
                </div>
              )}

              {/* Location - Only show if authenticated */}
              {isAuthenticated && (
                <div className="mb-6">
                  <label className="block pixel-font text-xs text-gray-700 mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    value={spottedLocation}
                    onChange={(e) => setSpottedLocation(e.target.value)}
                    placeholder="Where did you spot this bird?"
                    className="pokedex-input w-full px-3 py-2 pixel-font text-xs"
                  />
                </div>
              )}

              {/* Pokédex-style Buttons */}
              <div className="flex space-x-3">
                {isAuthenticated && (
                  <button
                    onClick={handleMarkAsSpotted}
                    className="pokedex-button flex-1 text-white py-3 px-4 pixel-font text-xs"
                  >
                    Mark as Spotted
                  </button>
                )}
                <button
                  onClick={() => setShowModal(false)}
                  className="pokedex-control-button flex-1 text-white py-3 px-4 pixel-font text-xs"
                >
                  Close
                </button>
              </div>

              {/* Sound Button */}
              <div className="flex justify-center mt-4">
                <button className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center text-white hover:bg-gray-700 transition-colors">
                  🔊
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Spotting Form Modal - Only show if authenticated */}
      {showSpottingForm && pendingSpottingLocation && isAuthenticated && (
        <SpottingForm
          isOpen={showSpottingForm}
          onClose={() => {
            setShowSpottingForm(false);
            setPendingSpottingLocation(null);
          }}
          onSubmit={handleAddSpotting}
          latitude={pendingSpottingLocation.lat}
          longitude={pendingSpottingLocation.lng}
          birds={birds}
        />
      )}

      {/* Login Modal */}
      {showLoginModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-[9999] p-4">
          <div className="pokedex-container max-w-md w-full">
            <div className="pokedex-screen p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="pixel-font text-lg text-gray-800 retro-shadow">Admin Login</h3>
                <button
                  onClick={() => setShowLoginModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label className="block pixel-font text-xs text-gray-700 mb-2">
                    Username
                  </label>
                  <input
                    type="text"
                    value={loginForm.username}
                    onChange={(e) => setLoginForm(prev => ({ ...prev, username: e.target.value }))}
                    className="pokedex-input w-full px-3 py-2 pixel-font text-xs"
                    required
                  />
                </div>

                <div>
                  <label className="block pixel-font text-xs text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    value={loginForm.password}
                    onChange={(e) => setLoginForm(prev => ({ ...prev, password: e.target.value }))}
                    className="pokedex-input w-full px-3 py-2 pixel-font text-xs"
                    required
                  />
                </div>

                {loginError && (
                  <div className="text-red-600 pixel-font text-xs">
                    {loginError}
                  </div>
                )}

                <div className="flex space-x-3">
                  <button
                    type="submit"
                    className="pokedex-button flex-1 text-white py-3 px-4 pixel-font text-xs"
                  >
                    Login
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowLoginModal(false)}
                    className="pokedex-control-button flex-1 text-white py-3 px-4 pixel-font text-xs"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      </div>
    </div>
  );
}
