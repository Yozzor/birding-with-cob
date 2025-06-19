import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';
import { cookies } from 'next/headers';

export const dynamic = 'force-static';

const DATA_DIR = join(process.cwd(), 'data');
const AUTH_FILE = join(DATA_DIR, 'auth.json');

interface AuthData {
  username: string;
  password: string;
  sessions: { [sessionId: string]: { createdAt: string; expiresAt: string } };
}

// Load auth data
async function loadAuthData(): Promise<AuthData | null> {
  if (!existsSync(AUTH_FILE)) {
    return null;
  }
  
  try {
    const data = await readFile(AUTH_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    console.error('Error loading auth data:', error);
    return null;
  }
}

export async function GET() {
  try {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get('session')?.value;
    
    if (!sessionId) {
      return NextResponse.json({ authenticated: false });
    }
    
    const authData = await loadAuthData();
    if (!authData) {
      return NextResponse.json({ authenticated: false });
    }
    
    const session = authData.sessions[sessionId];
    if (!session) {
      return NextResponse.json({ authenticated: false });
    }
    
    // Check if session is expired
    if (new Date(session.expiresAt) <= new Date()) {
      return NextResponse.json({ authenticated: false });
    }
    
    return NextResponse.json({ authenticated: true });
    
  } catch (error) {
    console.error('Session verification error:', error);
    return NextResponse.json({ authenticated: false });
  }
}
