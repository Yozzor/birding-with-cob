import { NextRequest, NextResponse } from 'next/server';

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

// Fetch birds from iNaturalist API based on location
async function fetchBirdsByLocation(lat: number, lng: number, radius: number = 50): Promise<BirdSpecies[]> {
  try {
    // Use iNaturalist's observations endpoint to get birds observed in the area
    // CRITICAL: Use iconic_taxa=Aves AND taxon_id=3 to ensure ONLY birds
    const observationsUrl = `https://api.inaturalist.org/v1/observations?iconic_taxa=Aves&taxon_id=3&lat=${lat}&lng=${lng}&radius=${radius}&per_page=200&order=desc&order_by=observed_on&quality_grade=research&photos=true`;

    const response = await fetch(observationsUrl, {
      headers: {
        'User-Agent': 'BirdingWithCob/1.0.0 (https://birdingwithcob.com)',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`iNaturalist API error: ${response.status}`);
    }

    const data = await response.json();

    // Extract unique species from observations with strict bird filtering
    const speciesMap = new Map<number, any>();

    data.results.forEach((observation: any) => {
      if (observation.taxon &&
          observation.taxon.rank === 'species' &&
          observation.taxon.iconic_taxon_name === 'Aves') { // Double-check it's a bird
        const taxon = observation.taxon;

        // Additional validation: check if the scientific name suggests it's a bird
        const scientificName = taxon.name.toLowerCase();
        const commonName = (taxon.preferred_common_name || '').toLowerCase();

        // Skip if it contains non-bird keywords
        const nonBirdKeywords = ['mammal', 'insect', 'spider', 'deer', 'squirrel', 'mouse', 'rat', 'bat'];
        const isNonBird = nonBirdKeywords.some(keyword =>
          scientificName.includes(keyword) || commonName.includes(keyword)
        );

        if (!isNonBird && !speciesMap.has(taxon.id)) {
          speciesMap.set(taxon.id, taxon);
        }
      }
    });

    // Convert to our BirdSpecies format
    const birds: BirdSpecies[] = Array.from(speciesMap.values()).map((taxon: any) => ({
      id: taxon.id,
      name: taxon.name,
      common_name: taxon.preferred_common_name || taxon.name,
      rank: taxon.rank,
      rank_level: taxon.rank_level,
      iconic_taxon_name: taxon.iconic_taxon_name,
      default_photo: taxon.default_photo ? {
        id: taxon.default_photo.id,
        url: taxon.default_photo.url,
        medium_url: taxon.default_photo.medium_url,
        square_url: taxon.default_photo.square_url,
        attribution: taxon.default_photo.attribution,
        license_code: taxon.default_photo.license_code
      } : undefined,
      observations_count: taxon.observations_count || 0,
      wikipedia_url: taxon.wikipedia_url,
      ancestry: taxon.ancestry
    }));

    // Sort by observation count (most common first)
    birds.sort((a, b) => b.observations_count - a.observations_count);

    return birds;
  } catch (error) {
    console.error('Error fetching birds by location:', error);
    throw error;
  }
}

// Fallback: Get common birds if location-based search fails or returns few results
async function getFallbackBirds(): Promise<BirdSpecies[]> {
  try {
    // Use both iconic_taxa=Aves AND taxon_id=3 to ensure ONLY birds
    const url = `https://api.inaturalist.org/v1/taxa?iconic_taxa=Aves&taxon_id=3&rank=species&per_page=50&order=desc&order_by=observations_count&photos=true`;

    const response = await fetch(url, {
      headers: {
        'User-Agent': 'BirdingWithCob/1.0.0 (https://birdingwithcob.com)',
        'Accept': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`iNaturalist API error: ${response.status}`);
    }

    const data = await response.json();

    // Filter results to ensure they are birds only
    const birds: BirdSpecies[] = data.results
      .filter((taxon: any) => {
        // Strict filtering for birds only
        if (taxon.iconic_taxon_name !== 'Aves') return false;

        const scientificName = taxon.name.toLowerCase();
        const commonName = (taxon.preferred_common_name || '').toLowerCase();

        // Skip if it contains non-bird keywords
        const nonBirdKeywords = ['mammal', 'insect', 'spider', 'deer', 'squirrel', 'mouse', 'rat', 'bat'];
        const isNonBird = nonBirdKeywords.some(keyword =>
          scientificName.includes(keyword) || commonName.includes(keyword)
        );

        return !isNonBird;
      })
      .map((taxon: any) => ({
        id: taxon.id,
        name: taxon.name,
        common_name: taxon.preferred_common_name || taxon.name,
        rank: taxon.rank,
        rank_level: taxon.rank_level,
        iconic_taxon_name: taxon.iconic_taxon_name,
        default_photo: taxon.default_photo ? {
          id: taxon.default_photo.id,
          url: taxon.default_photo.url,
          medium_url: taxon.default_photo.medium_url,
          square_url: taxon.default_photo.square_url,
          attribution: taxon.default_photo.attribution,
          license_code: taxon.default_photo.license_code
        } : undefined,
        observations_count: taxon.observations_count || 0,
        wikipedia_url: taxon.wikipedia_url,
        ancestry: taxon.ancestry
      }));

    return birds;
  } catch (error) {
    console.error('Error fetching fallback birds:', error);
    return [];
  }
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const lat = parseFloat(searchParams.get('lat') || '0');
    const lng = parseFloat(searchParams.get('lng') || '0');
    const radius = parseInt(searchParams.get('radius') || '50');
    const query = searchParams.get('q') || '';
    
    // Validate coordinates
    if (lat === 0 && lng === 0) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Invalid coordinates provided'
        }, 
        { status: 400 }
      );
    }
    
    // Fetch birds for the location
    let birds = await fetchBirdsByLocation(lat, lng, radius);
    
    // If we get very few results, supplement with common birds
    if (birds.length < 20) {
      const fallbackBirds = await getFallbackBirds();
      // Merge and deduplicate
      const existingIds = new Set(birds.map(b => b.id));
      const additionalBirds = fallbackBirds.filter(b => !existingIds.has(b.id));
      birds = [...birds, ...additionalBirds.slice(0, 30 - birds.length)];
    }
    
    // Apply search filter if provided
    if (query) {
      const searchTerm = query.toLowerCase();
      birds = birds.filter(bird => 
        bird.common_name.toLowerCase().includes(searchTerm) ||
        bird.name.toLowerCase().includes(searchTerm)
      );
    }
    
    return NextResponse.json({
      success: true,
      results: birds.slice(0, 100), // Limit to 100 results
      total_results: birds.length,
      location: { lat, lng, radius },
      query: query || null
    });
    
  } catch (error) {
    console.error('Location-based bird search error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to search birds by location',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
}
