'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface Repo {
  name: string;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  owner: { avatar_url: string };
  html_url: string;
}

const LANGUAGES = [
  'TypeScript', 'JavaScript', 'Python', 'Go', 'Rust', 'Java',
  'C++', 'C#', 'PHP', 'Ruby', 'Kotlin', 'Swift', 'Dart', 'Shell', 'Scala'
];

const getPopularity = (stars: number) => {
  if (stars >= 50000) return 'legendary';
  if (stars >= 10000) return 'famous';
  if (stars >= 1000) return 'popular';
  return 'rising';
};

const formatNumber = (num: number) =>
  num >= 1_000_000 ? (num / 1_000_000).toFixed(1) + 'M' :
    num >= 1000 ? (num / 1000).toFixed(1) + 'k' :
      num.toString();

const RepoLink = ({ repo }: { repo: Repo & { popularity: string } }) => (
  <Link href={repo.html_url} target="_blank" className="flex items-center gap-2 text-blue-400 hover:underline">
    <Image src={repo.owner.avatar_url} alt={repo.name} width={24} height={24} className="rounded-full" />
    {repo.name}
  </Link>
);

const TopicTags = ({ topics, language }: { topics: string[]; language: string | null }) => (
  <div className="flex flex-wrap gap-1">
    {(topics.length ? topics.slice(0, 3) : [language || '-']).map((t, i) => (
      <span key={i} className="bg-gray-700/40 text-xs text-gray-200 px-2 py-0.5 rounded">{t}</span>
    ))}
  </div>
);

export default function TrendingRepos() {
  const [repos, setRepos] = useState<(Repo & { popularity: string })[]>([]);
  const [language, setLanguage] = useState('');
  const [popularity, setPopularity] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/githubFilter?language=${language}&page=${page}`);
        const { items = [] } = await res.json();

        setRepos(items.map((repo: Repo) => ({
          ...repo,
          language: repo.language || null,
          topics: repo.topics || [],
          popularity: getPopularity(repo.stargazers_count || 0)
        })));
      } catch (err) {
        console.error('Fetch failed:', err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, [language, page]);

  const filtered = popularity ? repos.filter(r => r.popularity === popularity) : repos;

  return (
    <main className="min-h-screen px-4 py-6 text-sm text-white bg-black">
      <div className="max-w-7xl mx-auto mb-6 flex flex-col sm:flex-row justify-between gap-4">
        <h1 className="text-xl font-bold">Trending Repos</h1>
        <div className="flex flex-col sm:flex-row gap-3">
          <select value={language} onChange={e => setLanguage(e.target.value)} disabled={isLoading}
            className="bg-black border border-gray-700 rounded-md px-3 py-1.5 w-40">
            <option value="">All Languages</option>
            {LANGUAGES.map(lang => (
              <option key={lang} value={lang.toLowerCase()}>{lang}</option>
            ))}
          </select>
          <select value={popularity} onChange={e => setPopularity(e.target.value)} disabled={isLoading}
            className="bg-black border border-gray-700 rounded-md px-3 py-1.5 w-40">
            <option value="">All Popularity</option>
            <option value="legendary">Legendary (50k+)</option>
            <option value="famous">Famous (10k–50k)</option>
            <option value="popular">Popular (1k–10k)</option>
            <option value="rising">Rising (&lt;1k)</option>
          </select>
        </div>
      </div>

      {isLoading ? (
        <div className="text-center text-gray-400 flex items-center justify-center gap-2">
          <div className="size-5 border-2 border-white/50 border-t-transparent rounded-full animate-spin" />
          Loading repositories...
        </div>
      ) : filtered.length > 0 ? (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="border-b border-gray-700">
                  {['Repository', 'Language', 'Tags', 'Stars', 'Forks', 'Popularity'].map(h => (
                    <th key={h} className="text-left py-2 px-4">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((repo, i) => (
                  <tr key={i} className="border-b border-gray-800">
                    <td className="py-2 px-4"><RepoLink repo={repo} /></td>
                    <td className="py-2 px-4 text-gray-300">{repo.language || '-'}</td>
                    <td className="py-2 px-4"><TopicTags topics={repo.topics} language={repo.language} /></td>
                    <td className="py-2 px-4">{formatNumber(repo.stargazers_count)}</td>
                    <td className="py-2 px-4">{formatNumber(repo.forks_count)}</td>
                    <td className="py-2 px-4 text-gray-300 capitalize">{repo.popularity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {filtered.map((repo, i) => (
              <div key={i} className="border border-gray-800 p-4 rounded-lg bg-gray-900 space-y-2">
                {[
                  { label: 'Repository', value: <RepoLink repo={repo} /> },
                  { label: 'Language', value: repo.language || '-' },
                  { label: 'Tags', value: <TopicTags topics={repo.topics} language={repo.language} /> },
                  { label: 'Stars', value: formatNumber(repo.stargazers_count) },
                  { label: 'Forks', value: formatNumber(repo.forks_count) },
                  { label: 'Popularity', value: <span className="capitalize">{repo.popularity}</span> },
                ].map(({ label, value }) => (
                  <div key={label} className="flex justify-between text-sm">
                    <span className="text-gray-400">{label}</span>
                    <div className="text-right text-gray-300 max-w-[60%]">{value}</div>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-6 justify-center">
            <button onClick={() => setPage(p => Math.max(p - 1, 1))} disabled={page === 1 || isLoading}
              className="px-4 py-1.5 border border-gray-700 rounded-md hover:bg-gray-800 disabled:opacity-50">Previous</button>
            <button onClick={() => setPage(p => p + 1)} disabled={isLoading}
              className="px-4 py-1.5 border border-gray-700 rounded-md hover:bg-gray-800 disabled:opacity-50">Next</button>
          </div>
        </>
      ) : (
        <p className="text-center text-gray-400">No repositories found.</p>
      )}
    </main>
  );
}
