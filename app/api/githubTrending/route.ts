import { NextResponse } from 'next/server';

const tokens = (process.env.GITHUB_TOKEN || '').split(',');
let currentIndex = 0;

function getToken() {
  const t = tokens[currentIndex];
  currentIndex = (currentIndex + 1) % tokens.length;
  return t;
}

export async function GET() {
  const sinceDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
    .toISOString()
    .split("T")[0];

  try {
    const res = await fetch(
      `https://api.github.com/search/repositories?q=created:>${sinceDate}&sort=stars&order=desc&per_page=50`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          Authorization: `Bearer ${getToken()}`,
        },
        next: { revalidate: 60 * 60 * 6 },
      }
    );

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
