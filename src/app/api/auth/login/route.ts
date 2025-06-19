import { NextRequest, NextResponse } from 'next/server';
import { readFile, writeFile, mkdir } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import { cookies } from 'next/headers';
import { v4 as uuidv4 } from 'uuid';

const DATA_DIR = join(process.cwd(), 'data');
const AUTH_FILE = join(DATA_DIR, 'auth.json');

interface AuthData {
  username: string;
  password: string;
  sessions: { [sessionId: string]: { createdAt: string; expiresAt: string } };
}

// Default credentials (you can change these)
const DEFAULT_AUTH: AuthData = {
  username: 'admin',
  password: 'birdwatcher2025',
  sessions: {}
};

// Ensure data directory exists
async function ensureDataDir() {
  if (!existsSync(DATA_DIR)) {
    await mkdir(DATA_DIR, { recursive: true });
  }
}

// Load auth data
async function loadAuthData(): Promise<AuthData> {
  await ensureDataDir();
  
  if (!existsSync(AUTH_FILE)) {
    await saveAuthData(DEFAULT_AUTH);
    return DEFAULT_AUTH;
  }
  
  try {
    const data = await readFile(AUTH_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading auth data:', error);
    return DEFAULT_AUTH;
  }
}

// Save auth data
async function saveAuthData(authData: AuthData) {
  await ensureDataDir();
  await writeFile(AUTH_FILE, JSON.stringify(authData, null, 2));
}

// Clean expired sessions
function cleanExpiredSessions(authData: AuthData) {
  const now = new Date();
  const validSessions: { [key: string]: any } = {};
  
  for (const [sessionId, session] of Object.entries(authData.sessions)) {
    if (new Date(session.expiresAt) > now) {
      validSessions[sessionId] = session;
    }
  }
  
  authData.sessions = validSessions;
}

export async function POST(request: NextRequest) {
  try {
    const { username, password } = await request.json();
    
    const authData = await loadAuthData();
    
    // Clean expired sessions
    cleanExpiredSessions(authData);
    
    // Verify credentials
    if (username !== authData.username || password !== authData.password) {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
    
    // Create new session
    const sessionId = uuidv4();
    const now = new Date();
    const expiresAt = new Date(now.getTime() + 24 * 60 * 60 * 1000); // 24 hours
    
    authData.sessions[sessionId] = {
      createdAt: now.toISOString(),
      expiresAt: expiresAt.toISOString()
    };
    
    await saveAuthData(authData);
    
    // Set session cookie
    const cookieStore = await cookies();
    cookieStore.set('session', sessionId, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      expires: expiresAt
    });
    
    return NextResponse.json({ success: true, message: 'Logged in successfully' });
    
  } catch (error) {
    console.error('Login error:', error);
    return NextResponse.json({ error: 'Login failed' }, { status: 500 });
  }
}
