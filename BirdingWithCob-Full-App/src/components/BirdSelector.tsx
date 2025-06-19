'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, Loader2, RefreshCw } from 'lucide-react';

interface BirdSpecies {
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

interface BirdSelectorProps {
  selectedBird: BirdSpecies | null;
  onBirdSelect: (bird: BirdSpecies) => void;
  className?: string;
}

const BirdSelector: React.FC<BirdSelectorProps> = ({
  selectedBird,
  onBirdSelect,
  className = ''
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [birds, setBirds] = useState<BirdSpecies[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [totalSpecies, setTotalSpecies] = useState(0);
  const [cachedSpecies, setCachedSpecies] = useState(0);
  const [lastUpdated, setLastUpdated] = useState<string | null>(null);
  
  // Virtual scrolling state
  const [visibleStartIndex, setVisibleStartIndex] = useState(0);
  const [visibleEndIndex, setVisibleEndIndex] = useState(50);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const itemHeight = 120; // Height of each bird card
  const containerHeight = 400; // Height of the scrollable container
  const visibleCount = Math.ceil(containerHeight / itemHeight) + 5; // Buffer items

  // Debounced search
  const [debouncedQuery, setDebouncedQuery] = useState('');
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedQuery(searchQuery);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [searchQuery]);

  // Fetch birds from API
  const fetchBirds = async (query: string = '', forceRefresh: boolean = false) => {
    setLoading(true);
    setError(null);
    
    try {
      const params = new URLSearchParams();
      if (query) params.append('q', query);
      params.append('limit', '200');
      if (forceRefresh) params.append('refresh', 'true');
      
      const response = await fetch(`/api/birds/search?${params}`);
      const data = await response.json();
      
      if (!data.success) {
        throw new Error(data.error || 'Failed to fetch birds');
      }
      
      setBirds(data.results);
      setTotalSpecies(data.total_species);
      setCachedSpecies(data.cached_species);
      setLastUpdated(data.last_updated);
      
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch birds');
      console.error('Error fetching birds:', err);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchBirds();
  }, []);

  // Search when debounced query changes
  useEffect(() => {
    fetchBirds(debouncedQuery);
  }, [debouncedQuery]);

  // Virtual scrolling logic
  const visibleBirds = useMemo(() => {
    return birds.slice(visibleStartIndex, visibleEndIndex);
  }, [birds, visibleStartIndex, visibleEndIndex]);

  // Handle scroll for virtual scrolling
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const newStartIndex = Math.floor(scrollTop / itemHeight);
    const newEndIndex = Math.min(newStartIndex + visibleCount, birds.length);
    
    setVisibleStartIndex(newStartIndex);
    setVisibleEndIndex(newEndIndex);
  };

  // Calculate total height for virtual scrolling
  const totalHeight = birds.length * itemHeight;
  const offsetY = visibleStartIndex * itemHeight;

  const handleRefresh = () => {
    fetchBirds(debouncedQuery, true);
  };

  const formatLastUpdated = (dateString: string | null) => {
    if (!dateString) return 'Unknown';
    const date = new Date(dateString);
    return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
  };

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Search Header */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="pixel-font text-lg text-gray-800 retro-shadow">
            Select Bird Species
          </h3>
          <button
            onClick={handleRefresh}
            disabled={loading}
            className="pokedex-button flex items-center space-x-1 px-2 py-1 text-white pixel-font text-xs"
            title="Refresh bird database"
          >
            <RefreshCw className={`w-3 h-3 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
        
        {/* Search Input */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search birds by name..."
            className="pokedex-input w-full pl-10 pr-4 py-2 pixel-font text-xs"
          />
          {loading && (
            <Loader2 className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 animate-spin" />
          )}
        </div>

        {/* Stats */}
        <div className="flex items-center justify-between text-xs pixel-font text-gray-600">
          <span>
            Showing: {birds.length} of {cachedSpecies} cached ({totalSpecies} total)
          </span>
          <span>
            Updated: {formatLastUpdated(lastUpdated)}
          </span>
        </div>
      </div>

      {/* Error Display */}
      {error && (
        <div className="pokedex-container">
          <div className="pokedex-screen p-4 bg-red-50 border-red-200">
            <p className="pixel-font text-xs text-red-600">{error}</p>
          </div>
        </div>
      )}

      {/* Bird Grid with Virtual Scrolling */}
      <div className="pokedex-container">
        <div className="pokedex-screen p-4">
          <div
            ref={scrollContainerRef}
            className="relative overflow-auto"
            style={{ height: containerHeight }}
            onScroll={handleScroll}
          >
            {/* Virtual scrolling container */}
            <div style={{ height: totalHeight, position: 'relative' }}>
              <div
                style={{
                  transform: `translateY(${offsetY}px)`,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                }}
              >
                <div className="grid grid-cols-4 gap-2">
                  {visibleBirds.map((bird, index) => {
                    const actualIndex = visibleStartIndex + index;
                    const isSelected = selectedBird?.id === bird.id;
                    
                    return (
                      <button
                        key={bird.id}
                        onClick={() => onBirdSelect(bird)}
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
                            {bird.default_photo ? (
                              <img
                                src={bird.default_photo.square_url}
                                alt={bird.common_name}
                                className="w-full h-full object-cover rounded"
                                loading="lazy"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400">
                                <span className="pixel-font text-xs">No Photo</span>
                              </div>
                            )}
                          </div>
                          
                          {/* Bird Name */}
                          <div className="text-center">
                            <p className="pixel-font text-xs text-gray-800 truncate">
                              {bird.common_name}
                            </p>
                            <p className="pixel-font text-xs text-gray-500 truncate italic">
                              {bird.name}
                            </p>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Selected Bird Display */}
      {selectedBird && (
        <div className="pokedex-container">
          <div className="pokedex-screen p-4">
            <h4 className="pixel-font text-sm text-gray-800 mb-2">Selected:</h4>
            <div className="flex items-center space-x-3">
              {selectedBird.default_photo && (
                <img
                  src={selectedBird.default_photo.square_url}
                  alt={selectedBird.common_name}
                  className="w-12 h-12 object-cover rounded"
                />
              )}
              <div>
                <p className="pixel-font text-sm text-gray-800">
                  {selectedBird.common_name}
                </p>
                <p className="pixel-font text-xs text-gray-500 italic">
                  {selectedBird.name}
                </p>
                <p className="pixel-font text-xs text-gray-400">
                  {selectedBird.observations_count.toLocaleString()} observations
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BirdSelector;
