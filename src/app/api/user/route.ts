import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

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

// Check if user is authenticated
async function isAuthenticated(): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const sessionId = cookieStore.get('session')?.value;

    if (!sessionId) {
      return false;
    }

    const authData = await loadAuthData();
    if (!authData) {
      return false;
    }

    const session = authData.sessions[sessionId];
    if (!session) {
      return false;
    }

    // Check if session is expired
    if (new Date(session.expiresAt) <= new Date()) {
      return false;
    }

    return true;
  } catch (error) {
    console.error('Session verification error:', error);
    return false;
  }
}

// GET /api/user - Get current user info
export async function GET(request: NextRequest) {
  try {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    // For the custom auth system, we just return basic user info
    // Since we're using simple username/password auth, not email-based
    return NextResponse.json({
      id: 'admin',
      username: 'admin',
      role: 'admin',
      authenticated: true
    });
  } catch (error) {
    console.error('Error getting user:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT /api/user - Update current user
export async function PUT(request: NextRequest) {
  try {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { name } = body;

    // For the custom auth system, we just return the updated info
    // In a real app, you'd update this in your database
    return NextResponse.json({
      id: 'admin',
      username: 'admin',
      name: name || 'admin',
      role: 'admin',
      authenticated: true
    });
  } catch (error) {
    console.error('Error updating user:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
