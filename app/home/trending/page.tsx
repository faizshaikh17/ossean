import Link from "next/link";
import Image from "next/image";
import { getGithubTokens } from "@/lib/githubTokens";

interface Repo {
    name: string;
    language: string;
    topics?: string[];
    stargazers_count: number;
    forks_count: number;
    imgUrl?: string;
    popularity?: "legendary" | "famous" | "popular" | "rising";
    githubUrl?: string;
    owner?: {
        avatar_url: string;
    };
    html_url: string;
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

const LANGUAGE_COLORS = {
    'TypeScript': 'bg-blue-500/10 text-blue-400 border-blue-400/20',
    'JavaScript': 'bg-yellow-500/10 text-yellow-400 border-yellow-400/20',
    'Python': 'bg-emerald-500/10 text-emerald-400 border-emerald-400/20',
    'Go': 'bg-cyan-500/10 text-cyan-400 border-cyan-400/20',
    'Rust': 'bg-orange-500/10 text-orange-400 border-orange-400/20',
    'Java': 'bg-red-500/10 text-red-400 border-red-400/20',
    'C++': 'bg-purple-500/10 text-purple-400 border-purple-400/20',
    'C#': 'bg-indigo-500/10 text-indigo-400 border-indigo-400/20',
    'PHP': 'bg-violet-500/10 text-violet-400 border-violet-400/20',
    'Ruby': 'bg-pink-500/10 text-pink-400 border-pink-400/20',
    'Swift': 'bg-rose-500/10 text-rose-400 border-rose-400/20',
    'Kotlin': 'bg-purple-600/10 text-purple-300 border-purple-300/20',
    'Dart': 'bg-teal-500/10 text-teal-400 border-teal-400/20',
    'Shell': 'bg-gray-500/10 text-gray-400 border-gray-400/20',
    'Scala': 'bg-red-600/10 text-red-300 border-red-300/20',
    'HTML': 'bg-orange-600/10 text-orange-300 border-orange-300/20',
    'CSS': 'bg-blue-600/10 text-blue-300 border-blue-300/20',
    'C': 'bg-gray-600/10 text-gray-300 border-gray-300/20',
    'Objective-C': 'bg-sky-600/10 text-sky-300 border-sky-300/20',
    'R': 'bg-blue-700/10 text-blue-300 border-blue-300/20',
    'default': 'bg-neutral-500/10 text-neutral-400 border-neutral-400/20'
};

const formatNumber = (n: number) =>
    n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `${(n / 1e3).toFixed(1)}k` : n.toString();

const renderCell = (
    record: Repo,
    key: ColumnKey,
    idx: number,
    repoLink?: string
) => {
    const value = record[key];

    switch (key) {
        case "name":
            return repoLink ? (
                <Link
                    href={repoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 hover:text-yellow-300 transition"
                >
                    {record.imgUrl && (
                        <Image
                            src={record.imgUrl}
                            alt={`${record.name} avatar`}
                            width={24}
                            height={24}
                            className="rounded-full group-hover:opacity-80 transition"
                        />
                    )}
                    <span className="font-medium">{value || repoLink.split("/")[1]}</span>
                </Link>
            ) : (
                <span className="text-neutral-400">-</span>
            );

        case 'language':
            if (!value) return <span className="text-neutral-400">-</span>;

            const colorClass =
                LANGUAGE_COLORS[value as keyof typeof LANGUAGE_COLORS] || LANGUAGE_COLORS.default;

            return (
                <span
                    className={`
        capitalize font-semibold text-xs px-2.5 py-1 rounded-md border
        transition-all duration-200 hover:scale-105 hover:shadow-sm
        ${colorClass}
      `}
                >
                    {value}
                </span>
            );

        case "popularity":
            return (
                <span
                    className={`capitalize font-semibold text-xs px-2 py-1 rounded-md ${value === "legendary"
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
                                className="bg-neutral-800/50 text-xs text-neutral-300 px-2 py-1 rounded-sm border border-neutral-700/30 font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                );
            } else {
                return (
                    <span className="bg-neutral-800/50 text-xs text-neutral-300 px-2 py-1 rounded-sm border border-neutral-700/30 font-medium">
                        {record.language || "-"}
                    </span>
                );
            }

        case "stargazers_count":
        case "forks_count":
            return (
                <span className="font-mono font-medium tabular-nums tracking-wider">
                    {typeof value === "number" ? formatNumber(value) : "0"}
                </span>
            );

        default:
            return <span className="text-neutral-400">{value ?? "-"}</span>;
    }
};

export default async function Page() {
    const sinceDate = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000)
        .toISOString()
        .split("T")[0];

    const res = await fetch(
        `https://api.github.com/search/repositories?q=created:>${sinceDate}&sort=stars&order=desc&per_page=50`,
        {
            headers: {
                Accept: "application/vnd.github+json",
                Authorization: `Bearer ${getGithubTokens()}`,
            },
            next: { revalidate: 60 * 60 * 12 },
        }
    );

    const json = await res.json();

    const trendingRepos: Repo[] = (json.items || []).map((repo: Repo) => {
        const stars = repo.stargazers_count || 0;
        let popularity: Repo["popularity"];
        if (stars >= 50000) popularity = "legendary";
        else if (stars >= 10000) popularity = "famous";
        else if (stars >= 1000) popularity = "popular";
        else popularity = "rising";

        return {
            name: repo.name,
            language: repo.language,
            topics: repo.topics,
            stargazers_count: stars,
            forks_count: repo.forks_count,
            imgUrl: repo.owner?.avatar_url,
            popularity,
            githubUrl: repo?.html_url,
        };
    });

    return (
        <main className="relative w-full min-h-screen p-8 z-10 text-white">
            <div className="flex flex-col gap-5 w-full z-10 mb-8">
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium leading-[100%]">
                    <span className="bg-gradient-to-r space-x-2 text-white/90">
                        <span>Trending</span>
                        <span>50</span>
                    </span>
                    <div
                        className="mt-3 px-2 py-1 w-fit text-sm text-neutral-500 tracking-tight border-[2px] transition"
                        style={{
                            borderImage:
                                "conic-gradient(#d4d4d4 0deg, #171717 90deg, #d4d4d4 180deg, #171717 270deg, #d4d4d4 360deg) 1",
                        }}
                    >
                        Trending GitHub projects this month
                    </div>
                </div>
            </div>

            {/* Desktop Table */}
            <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full table-auto border-collapse bg-black/40 backdrop-blur-sm border border-neutral-800/50 overflow-hidden">
                    <thead>
                        <tr className="border-b border-neutral-800/50">
                            {columns.map(({ key, label }) => (
                                <th
                                    key={key}
                                    className={`${key === "topics" ? "text-center" : "text-left"
                                        } py-4 px-6 text-sm font-medium text-neutral-400 bg-neutral-900/30`}
                                >
                                    {label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {trendingRepos.map((record, idx) => (
                            <tr
                                key={idx}
                                className="border-b border-neutral-800/30 group hover:bg-neutral-900/20 transition"
                            >
                                {columns.map(({ key }) => (
                                    <td key={key} className="py-4 px-6 text-sm">
                                        {renderCell(record, key, idx, record.githubUrl)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Mobile Cards */}
            <div className="md:hidden space-y-4">
                {trendingRepos.map((record, idx) => (
                    <div
                        key={idx}
                        className="border border-neutral-800/50 p-4 rounded-lg bg-black/40 backdrop-blur-sm space-y-3 hover:border-neutral-700 transition"
                    >
                        {columns.map(({ key, label }) => (
                            <div
                                key={key}
                                className="flex justify-between items-start text-sm gap-4"
                            >
                                <span className="text-neutral-400 font-medium">{label}</span>
                                <div className="text-right max-w-[60%]">
                                    {renderCell(record, key, idx, record.githubUrl)}
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </main>
    );
}
