'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useDebouncedCallback } from 'use-debounce';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';

interface Repo {
  name: string;
  language: string | null;
  topics: string[];
  stargazers_count: number;
  forks_count: number;
  owner: { avatar_url: string };
  html_url: string;
  popularity?: "legendary" | "famous" | "popular" | "rising";
}

type ColumnKey = keyof Pick<
  Repo,
  "name" | "language" | "topics" | "stargazers_count" | "forks_count" | "popularity"
>;

const columns: { key: ColumnKey; label: string }[] = [
  { key: "name", label: "Repository" },
  { key: "language", label: "Language" },
  { key: "topics", label: "Tags" },
  { key: "stargazers_count", label: "Stars" },
  { key: "forks_count", label: "Forks" },
  { key: "popularity", label: "Popularity" },
];

const LANGUAGES = [
  'TypeScript', 'JavaScript', 'Python', 'Go', 'Rust', 'Java',
  'C++', 'C#', 'PHP', 'Ruby', 'Kotlin', 'Swift', 'Dart', 'Shell', 'Scala'
];

const LANGUAGE_COLORS = {
  TypeScript: 'bg-blue-500/10 text-blue-400 border-blue-400/20',
  JavaScript: 'bg-yellow-500/10 text-yellow-400 border-yellow-400/20',
  Python: 'bg-emerald-500/10 text-emerald-400 border-emerald-400/20',
  Go: 'bg-cyan-500/10 text-cyan-400 border-cyan-400/20',
  Rust: 'bg-orange-500/10 text-orange-400 border-orange-400/20',
  Java: 'bg-red-500/10 text-red-400 border-red-400/20',
  'C++': 'bg-purple-500/10 text-purple-400 border-purple-400/20',
  'C#': 'bg-indigo-500/10 text-indigo-400 border-indigo-400/20',
  PHP: 'bg-violet-500/10 text-violet-400 border-violet-400/20',
  Ruby: 'bg-pink-500/10 text-pink-400 border-pink-400/20',
  Swift: 'bg-rose-500/10 text-rose-400 border-rose-400/20',
  Kotlin: 'bg-purple-600/10 text-purple-300 border-purple-300/20',
  Dart: 'bg-teal-500/10 text-teal-400 border-teal-400/20',
  Shell: 'bg-gray-500/10 text-gray-400 border-gray-400/20',
  Scala: 'bg-red-600/10 text-red-300 border-red-300/20',
  HTML: 'bg-orange-600/10 text-orange-300 border-orange-300/20',
  CSS: 'bg-blue-600/10 text-blue-300 border-blue-300/20',
  C: 'bg-gray-600/10 text-gray-300 border-gray-300/20',
  'Objective-C': 'bg-sky-600/10 text-sky-300 border-sky-300/20',
  R: 'bg-blue-700/10 text-blue-300 border-blue-300/20',
  default: 'bg-neutral-500/10 text-neutral-400 border-neutral-400/20',
};

const getPopularity = (stars: number): "legendary" | "famous" | "popular" | "rising" => {
  if (stars >= 50000) return 'legendary';
  if (stars >= 10000) return 'famous';
  if (stars >= 1000) return 'popular';
  return 'rising';
};

const formatNumber = (n: number) =>
  n >= 1e6 ? `${+(n / 1e6).toFixed(1)}M` :
    n >= 1e3 ? `${+(n / 1e3).toFixed(1)}k` :
      n.toString();

const renderCell = (repo: Repo, key: ColumnKey) => {
  const value = repo[key];

  switch (key) {
    case "name":
      return (
        <Link
          href={repo.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2 hover:text-yellow-300 transition"
        >
          <Image
            src={`${repo.owner.avatar_url}&s=24`}
            alt={`avatar`}
            width={24}
            height={24}
            className="rounded-full group-hover:opacity-80 transition"
            unoptimized
          />
          <span className="font-medium">{repo.name}</span>
        </Link>
      );

    case "language":
      if (!value) return <span className="text-neutral-400 text-sm">-</span>;
      const colorClass = LANGUAGE_COLORS[value as keyof typeof LANGUAGE_COLORS] ?? LANGUAGE_COLORS.default;
      return (
        <span className={`capitalize whitespace-nowrap font-semibold text-xs px-2.5 py-1 rounded-md border transition-all duration-200 w-fit hover:scale-105 hover:shadow-sm ${colorClass}`}>
          {value}
        </span>
      );

    case "popularity":
      return (
        <span
          className={`capitalize font-semibold text-xs w-fit px-2 py-1 rounded-md ${value === "legendary"
            ? "bg-yellow-500/10 text-yellow-400 border border-yellow-400/20"
            : value === "famous"
              ? "bg-purple-500/10 text-purple-400 border border-purple-400/20"
              : value === "popular"
                ? "bg-sky-500/10 text-sky-400 border border-sky-400/20"
                : "bg-green-500/10 text-green-400 border border-green-400/20"
            }`}
        >
          {value ?? "-"}
        </span>
      );

    case "topics":
      if (Array.isArray(value) && value.length > 0) {
        return (
          <div className="flex flex-wrap gap-1">
            {value.slice(0, 3).map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="bg-neutral-800/50 text-xs text-neutral-300 px-2 py-1 rounded-sm border border-neutral-700/30 font-medium hover:bg-neutral-700/50 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        );
      } else {
        return (
          <span className="bg-neutral-800/50 text-xs w-fit text-neutral-300 px-2 py-1 rounded-sm border border-neutral-700/30 font-medium">
            {repo.language || "-"}
          </span>
        );
      }

    case "stargazers_count":
    case "forks_count":
      return (
        <span className="font-mono font-medium tabular-nums tracking-wider text-sm">
          {typeof value === "number" ? formatNumber(value) : "0"}
        </span>
      );

    default:
      return <span className="text-neutral-400 text-sm">{value ?? "-"}</span>;
  }
};

export default function TrendingRepos() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [filtered, setFiltered] = useState<Repo[]>([]);
  const [language, setLanguage] = useState('');
  const [popularity, setPopularity] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchRepos = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`/api/githubDiscover?language=${language}&page=${page}`);
        if (!res.ok) throw new Error('Failed to fetch');

        const { items = [] } = await res.json();

        const enrichedRepos = items.map((repo: Repo) => ({
          ...repo,
          language: repo.language || null,
          topics: repo.topics || [],
          popularity: getPopularity(repo.stargazers_count || 0),
        }));

        setRepos(enrichedRepos);
        setFiltered(enrichedRepos);
      } catch (err) {
        console.error('Fetch failed:', err);
        setRepos([]);
        setFiltered([]);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRepos();
  }, [language, page]);

  const debouncedFilter = useDebouncedCallback((q: string) => {
    const filteredRepos = repos.filter((repo) => {
      const matchQuery = !q || (
        repo.name.toLowerCase().includes(q) ||
        repo.language?.toLowerCase().includes(q) ||
        repo.popularity?.toLowerCase().includes(q) ||
        repo.topics?.some((t) => t.toLowerCase().includes(q)) ||
        formatNumber(repo.stargazers_count).toLowerCase().includes(q) ||
        formatNumber(repo.forks_count).toLowerCase().includes(q)
      );

      const matchPopularity = !popularity || repo.popularity === popularity;

      return matchQuery && matchPopularity;
    });

    setFiltered(filteredRepos);
  }, 300);

  useEffect(() => {
    debouncedFilter(query.toLowerCase().trim());
  }, [query, repos, popularity, debouncedFilter]);

  return (
    <div className="relative w-full min-h-full p-8 z-10">
      <div className="flex flex-col gap-5 w-full z-10 mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
          <div className="flex flex-col w-full gap-5">
            <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium leading-[100%]">
              <span className="bg-gradient-to-r text-white/90">Discover</span>
            </div>
            <div className="relative w-full max-w-[19rem] ">
              <svg className="absolute left-2 top-1/2 -translate-y-1/2 w-4 h-4 font-medium text-neutral-500 pointer-events-none" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filter projects according to your niche"
                aria-label="Search repositories"
                className="pl-8 pr-2 py-1 w-full text-sm text-neutral-500 tracking-tight border-[2px] bg-transparent focus:outline-none focus:ring-1 focus:ring-yellow-300 transition"
                style={{
                  borderImage:
                    "conic-gradient(#d4d4d4 0deg, #171717 90deg, #d4d4d4 180deg, #171717 270deg, #d4d4d4 360deg) 1",
                }}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="appearance-none bg-black text-white border border-neutral-800/50 px-3 py-2 text-sm focus:outline-none focus:ring-[0.8px] focus:ring-yellow-300/40 transition"
            >
              <option value="">All Languages</option>
              {LANGUAGES.map((lang) => (
                <option
                  key={lang}
                  value={lang.toLowerCase()}
                  className="bg-black text-white"
                >
                  {lang}
                </option>
              ))}
            </select>

            <select
              value={popularity}
              onChange={(e) => setPopularity(e.target.value)}
              className="appearance-none bg-black text-white border border-neutral-800/50 px-3 py-2 text-sm focus:outline-none focus:ring-[0.8px] focus:ring-yellow-300/30 transition"
            >
              <option value="">All Popularity</option>
              <option value="legendary" className="bg-black text-white">Legendary</option>
              <option value="famous" className="bg-black text-white">Famous</option>
              <option value="popular" className="bg-black text-white">Popular</option>
              <option value="rising" className="bg-black text-white">Rising</option>
            </select>
          </div>
        </div>
      </div>

      {isLoading ? (
        <main className="min-h-screen flex flex-col gap-5 py-[10rem] items-center justify-start bg-transparent backdrop-blur-md text-white z-10" aria-busy="true">
          <div className="w-10 h-10 border-4 border-transparent border-t-yellow-300 rounded-full animate-spin" />
          <h1 className="text-base sm:text-lg font-medium text-neutral-300 tracking-tight">
            Banging Hard
          </h1>
        </main>
      ) : filtered.length > 0 ? (
        <>
          {/* Desktop Table */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full table-auto border-collapse bg-black/40 backdrop-blur-sm border border-neutral-800/50 overflow-hidden">
              <thead>
                <tr className="border-b border-neutral-800/50">
                  {columns.map(({ key, label }) => (
                    <th key={key} className={`${key === "topics" ? "text-center" : "text-left"} py-4 px-6 text-sm font-medium text-neutral-400 bg-neutral-900/30`}>
                      {label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((repo, idx) => (
                  <tr key={idx} className="border-b border-neutral-800/30 group hover:bg-neutral-900/20 transition">
                    {columns.map(({ key }) => (
                      <td key={key} className="py-4 px-6 text-sm">
                        {renderCell(repo, key)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Cards */}
          <div className="md:hidden space-y-4">
            {filtered.map((repo, idx) => (
              <div key={idx} className="border border-neutral-800/50 p-4 bg-black/40 backdrop-blur-sm space-y-5 hover:border-neutral-700 transition">
                <div className="flex flex-col gap-2 text-sm text-white font-medium">
                  {renderCell(repo, "name")}
                  {renderCell(repo, "language")}
                  {renderCell(repo, "topics")}
                  {renderCell(repo, "popularity")}

                </div>
                <div className="border-t border-neutral-800/50" />
                <div className="grid grid-cols-2 gap-4 text-sm">
                  {columns
                    .filter(({ key }) => ["stargazers_count", "forks_count"].includes(key))
                    .map(({ key, label }) => (
                      <div key={key} className="flex flex-col gap-0.5">
                        <span className="text-neutral-400 font-medium">{label}</span>
                        <div className="text-white font-semibold">
                          {renderCell(repo, key)}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-3 mt-8 justify-center">
            <button
              onClick={() => setPage(p => Math.max(p - 1, 1))}
              disabled={page === 1 || isLoading}
              className="hover:bg-neutral-900/20 cursor-pointer disabled:cursor-not-allowed bg-black/40 backdrop-blur-sm border border-neutral-800/50 px-4 py-2 text-white text-sm font-medium hover:border-neutral-700/60 transition-all duration-300 focus:outline-none focus:border-neutral-700/60 disabled:opacity-50 w-fit"
            >
              <ChevronsLeft />
            </button>
            <span className="hover:bg-neutral-900/20 disabled:cursor-not-allowed bg-black/40 backdrop-blur-sm border border-neutral-800/50 px-4 py-2 text-white text-sm font-medium hover:border-neutral-700/60 transition-all duration-300 focus:outline-none focus:border-neutral-700/60 cursor-pointer disabled:opacity-50 w-fit">
              {page}
            </span>
            <button
              onClick={() => setPage(p => p + 1)}
              disabled={isLoading}
              className="hover:bg-neutral-900/20 cursor-pointer disabled:cursor-not-allowed bg-black/40 backdrop-blur-sm border border-neutral-800/50 px-4 py-2 text-white text-sm font-medium hover:border-neutral-700/60 transition-all duration-300 focus:outline-none focus:border-neutral-700/60 disabled:opacity-50 w-fit"
            >
              <ChevronsRight />
            </button>
          </div>
        </>
      ) : (
        <div className="text-center text-neutral-300 mt-20">No repositories found...</div>
      )}
    </div>
  );
}