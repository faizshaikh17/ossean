import { NextRequest, NextResponse } from 'next/server';
import { getGithubTokens } from '@/lib/githubTokens';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);

    const language = searchParams.get('language') || '';
    const page = searchParams.get('page') || '1';

    const query = `stars:>1${language ? `+language:${language}` : ''}`;
    const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&per_page=100&page=${page}`;


    const res = await fetch(url, {
        headers: {
            Accept: 'application/vnd.github+json',
            Authorization: `Bearer ${getGithubTokens()}`,
        },
        next: {
            revalidate: 60 * 60 * 12, // 12h cache
        },
    });

    const data = await res.json();

    const response = NextResponse.json(data);
    response.headers.set('Cache-Control', 'public, s-maxage=43200, stale-while-revalidate');

    return response;
}
