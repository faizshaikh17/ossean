// app/api/githubFilter/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { getGithubTokens } from '@/lib/githubTokens';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const language = searchParams.get('language') || '';
  const page = searchParams.get('page') || '1';

  const query = `stars:>1${language ? `+language:${language}` : ''}`;
  const url = `https://api.github.com/search/repositories?q=${query}&sort=forks&order=desc&per_page=100&page=${page}`;

  const token = getGithubTokens();
  if (!token) {
    return NextResponse.json(
      { error: 'GitHub token not configured' },
      { status: 500 }
    );
  }

  try {
    const res = await fetch(url, {
      headers: {
        Accept: 'application/vnd.github+json',
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 600 },
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: 'GitHub API error', status: res.status },
        { status: res.status }
      );
    }

    const data = await res.json();

    const response = NextResponse.json(data);
    response.headers.set(
      'Cache-Control',
      'public, s-maxage=600, stale-while-revalidate'
    );

    return response;
  } catch (err) {
    console.error('GitHub fetch failed:', err);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}