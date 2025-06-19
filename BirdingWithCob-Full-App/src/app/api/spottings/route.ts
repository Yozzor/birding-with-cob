import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import { v4 as uuidv4 } from 'uuid';

const DATA_DIR = join(process.cwd(), 'data');
const SPOTTINGS_FILE = join(DATA_DIR, 'spottings.json');

interface Spotting {
  id: string;
  birdId: string;
  birdName?: string;
  latitude: number;
  longitude: number;
  date: string;
  notes: string;
  photos: string[];
  location?: string;
  instagramLink?: string;
}

// Ensure data directory exists
async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
}

// Load spottings from file
async function loadSpottings(): Promise<Spotting[]> {
  await ensureDataDir();

  if (!existsSync(SPOTTINGS_FILE)) {
    return [];
  }

  try {
    const data = await readFile(SPOTTINGS_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading spottings:', error);
    return [];
  }
}

// Save spottings to file
async function saveSpottings(spottings: Spotting[]) {
  await ensureDataDir();
  await writeFile(SPOTTINGS_FILE, JSON.stringify(spottings, null, 2));
}

// GET - Load all spottings
export async function GET() {
  try {
    const spottings = await loadSpottings();
    return NextResponse.json(spottings);
  } catch (error) {
    console.error('Error in GET /api/spottings:', error);
    return NextResponse.json({ error: 'Failed to load spottings' }, { status: 500 });
  }
}

// POST - Add new spotting
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const newSpotting: Spotting = {
      id: uuidv4(),
      birdId: body.birdId,
      birdName: body.birdName,
      latitude: body.latitude,
      longitude: body.longitude,
      date: body.date || new Date().toISOString(),
      notes: body.notes || '',
      photos: body.photos || [],
      location: body.location,
      instagramLink: body.instagramLink
    };

    const spottings = await loadSpottings();
    spottings.push(newSpotting);

    await saveSpottings(spottings);

    return NextResponse.json({ success: true, spotting: newSpotting });
  } catch (error) {
    console.error('Error in POST /api/spottings:', error);
    return NextResponse.json({ error: 'Failed to save spotting' }, { status: 500 });
  }
}
