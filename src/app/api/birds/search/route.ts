import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

const DATA_DIR = join(process.cwd(), 'data');
const CACHE_DIR = join(DATA_DIR, 'cache');
const BIRDS_CACHE_FILE = join(CACHE_DIR, 'birds_cache.json');

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

interface CacheData {
  birds: BirdSpecies[];
  lastUpdated: string;
  totalCount: number;
}

// Cache duration: 24 hours
const CACHE_DURATION = 24 * 60 * 60 * 1000;

// Ensure cache directory exists
async function ensureCacheDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
  if (!existsSync(CACHE_DIR)) {
    await mkdir(CACHE_DIR, { recursive: true });
  }
}

// Load cached bird data
async function loadCachedBirds(): Promise<CacheData | null> {
  await ensureCacheDir();
  
  if (!existsSync(BIRDS_CACHE_FILE)) {
    return null;
  }
  
  try {
    const data = await readFile(BIRDS_CACHE_FILE, 'utf-8');
    const cacheData: CacheData = JSON.parse(data);
    
    // Check if cache is still valid
    const lastUpdated = new Date(cacheData.lastUpdated);
    const now = new Date();
    
    if (now.getTime() - lastUpdated.getTime() > CACHE_DURATION) {
      return null; // Cache expired
    }
    
    return cacheData;
  } catch (error) {
    console.error('Error loading cached birds:', error);
    return null;
  }
}

// Save bird data to cache
async function saveBirdsToCache(birds: BirdSpecies[], totalCount: number) {
  await ensureCacheDir();
  
  const cacheData: CacheData = {
    birds,
    lastUpdated: new Date().toISOString(),
    totalCount
  };
  
  try {
    await writeFile(BIRDS_CACHE_FILE, JSON.stringify(cacheData, null, 2));
  } catch (error) {
    console.error('Error saving birds to cache:', error);
  }
}

// Fetch birds from iNaturalist API
async function fetchBirdsFromAPI(page: number = 1, perPage: number = 200): Promise<{ birds: BirdSpecies[], totalResults: number }> {
  const url = `https://api.inaturalist.org/v1/taxa?iconic_taxa=Aves&rank=species&per_page=${perPage}&page=${page}&order=desc&order_by=observations_count&photos=true`;
  
  try {
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
    
    const birds: BirdSpecies[] = data.results.map((taxon: any) => ({
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
    
    return {
      birds,
      totalResults: data.total_results
    };
  } catch (error) {
    console.error('Error fetching birds from iNaturalist:', error);
    throw error;
  }
}

// Get comprehensive bird list (fetch multiple pages if needed)
async function getComprehensiveBirdList(): Promise<CacheData> {
  console.log('Fetching comprehensive bird list from iNaturalist...');
  
  let allBirds: BirdSpecies[] = [];
  let page = 1;
  let totalResults = 0;
  const perPage = 200; // Maximum allowed by iNaturalist
  
  // Fetch first page to get total count
  const firstPageData = await fetchBirdsFromAPI(page, perPage);
  allBirds = firstPageData.birds;
  totalResults = firstPageData.totalResults;
  
  // Calculate total pages needed (limit to reasonable amount for performance)
  const maxPages = Math.min(Math.ceil(totalResults / perPage), 50); // Limit to 10,000 birds
  
  // Fetch remaining pages
  for (page = 2; page <= maxPages; page++) {
    try {
      const pageData = await fetchBirdsFromAPI(page, perPage);
      allBirds = allBirds.concat(pageData.birds);
      
      // Add small delay to respect rate limits
      await new Promise(resolve => setTimeout(resolve, 100));
    } catch (error) {
      console.error(`Error fetching page ${page}:`, error);
      break; // Stop if we hit an error
    }
  }
  
  console.log(`Fetched ${allBirds.length} bird species from ${page - 1} pages`);
  
  // Save to cache
  await saveBirdsToCache(allBirds, totalResults);
  
  return {
    birds: allBirds,
    lastUpdated: new Date().toISOString(),
    totalCount: totalResults
  };
}

// Search birds by name
function searchBirds(birds: BirdSpecies[], query: string, limit: number = 50): BirdSpecies[] {
  if (!query || query.trim().length === 0) {
    return birds.slice(0, limit);
  }
  
  const searchTerm = query.toLowerCase().trim();
  
  // Score-based search for better relevance
  const scoredBirds = birds.map(bird => {
    let score = 0;
    const commonName = bird.common_name.toLowerCase();
    const scientificName = bird.name.toLowerCase();
    
    // Exact matches get highest score
    if (commonName === searchTerm || scientificName === searchTerm) {
      score = 1000;
    }
    // Starts with search term
    else if (commonName.startsWith(searchTerm) || scientificName.startsWith(searchTerm)) {
      score = 500;
    }
    // Contains search term
    else if (commonName.includes(searchTerm) || scientificName.includes(searchTerm)) {
      score = 100;
    }
    // Word boundary matches
    else {
      const words = searchTerm.split(' ');
      for (const word of words) {
        if (commonName.includes(word) || scientificName.includes(word)) {
          score += 50;
        }
      }
    }
    
    // Boost score based on observation count (popularity)
    score += Math.log10(bird.observations_count + 1) * 10;
    
    return { bird, score };
  })
  .filter(item => item.score > 0)
  .sort((a, b) => b.score - a.score)
  .slice(0, limit)
  .map(item => item.bird);
  
  return scoredBirds;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q') || '';
    const limit = Math.min(parseInt(searchParams.get('limit') || '50'), 200);
    const forceRefresh = searchParams.get('refresh') === 'true';
    
    // Try to load from cache first
    let cacheData = forceRefresh ? null : await loadCachedBirds();
    
    // If no cache or cache expired, fetch from API
    if (!cacheData) {
      cacheData = await getComprehensiveBirdList();
    }
    
    // Search birds
    const results = searchBirds(cacheData.birds, query, limit);
    
    return NextResponse.json({
      success: true,
      results,
      total_results: results.length,
      total_species: cacheData.totalCount,
      cached_species: cacheData.birds.length,
      last_updated: cacheData.lastUpdated,
      query: query || null
    });
    
  } catch (error) {
    console.error('Bird search error:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to search birds',
        details: error instanceof Error ? error.message : 'Unknown error'
      }, 
      { status: 500 }
    );
  }
}
