import { NextResponse } from 'next/server';

const tokens = (process.env.GITHUB_TOKEN || '').split(',');
let currentIndex = 0;

function getToken() {
  const token = tokens[currentIndex];
  currentIndex = (currentIndex + 1) % tokens.length;
  return token;
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const repo = searchParams.get('repo');

  if (!repo) {
    return NextResponse.json({ error: 'Missing repo name' }, { status: 400 });
  }

  try {
    const res = await fetch(`https://api.github.com/repos/${repo}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
        Accept: 'application/json',
      },
      next: { revalidate: 60 * 60 * 6 },
    });

    if (!res.ok) {
      return NextResponse.json({ error: 'GitHub fetch error' }, { status: res.status });
    }

    const data = await res.json();
    const response = NextResponse.json(data);

    response.headers.set('Cache-Control', 'public, s-maxage=43200, stale-while-revalidate');

    return response;
  } catch (err) {
    console.error('GitHub fetch failed:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
