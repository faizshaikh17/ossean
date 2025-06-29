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
    popularity?: "High" | "Mid" | "Low";
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

const formatNumber = (n: number) =>
    n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` : n >= 1e3 ? `${(n / 1e3).toFixed(1)}k` : n.toString();

const renderCell = (
    record: Repo,
    key: ColumnKey,
    idx: number,
    repoLink: string | undefined
) => {
    const value = record[key];

    if (key === "name") {
        return repoLink ? (
            <Link
                href={repoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-blue-400 hover:underline"
            >
                {record.imgUrl && (
                    <Image
                        src={record.imgUrl}
                        alt={`${record.name} avatar`}
                        width={24}
                        height={24}
                        className="rounded-full"
                    />
                )}
                {value || repoLink.split("/")[1]}
            </Link>
        ) : (
            "-"
        );
    }

    if (key === "language" || key === "popularity") {
        return <span className="text-gray-300">{value || "-"}</span>;
    }

    if (key === "topics" && Array.isArray(value)) {
        return value.length > 0 ? (
            <div className="flex flex-wrap gap-1">
                {value.slice(0, 3).map((tag, i) => (
                    <span
                        key={`${tag}-${i}`}
                        className="inline-block bg-gray-700/40 text-xs text-gray-200 px-2 py-0.5 rounded"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        ) : (
            <span className="inline-block bg-gray-700/40 text-xs text-gray-200 px-2 py-0.5 rounded">
                {record.language || "-"}
            </span>
        );
    }

    if (key === "stargazers_count" || key === "forks_count") {
        return <span>{typeof value === "number" ? formatNumber(value) : "0"}</span>;
    }

    return <span>{value || "-"}</span>;
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
            next: { revalidate: 60 * 60 * 24 * 0.5 },
        }
    );

    const json = await res.json();

    const trendingRepos: Repo[] = (json.items || []).map((repo: Repo) => {
        const stars = repo.stargazers_count || 0;
        const popularity: Repo["popularity"] =
            stars >= 10000 ? "High" : stars >= 1000 ? "Mid" : "Low";

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
        <main className="min-h-screen px-8 py-9 text-sm text-white bg-black">
            <h1 className="text-xl font-bold mb-6">Top 50 Trending Projects</h1>

            <div className="hidden md:block overflow-x-auto">
                <table className="min-w-full table-auto border-collapse">
                    <thead>
                        <tr>
                            {columns.map(({ key, label }) => (
                                <th
                                    key={key}
                                    className={`${key === "topics" ? "text-center" : ""} text-left py-2 px-4 border-b border-gray-700`}
                                >
                                    {label}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {trendingRepos.map((record, idx) => (
                            <tr key={idx} className="border-b border-gray-800">
                                {columns.map(({ key }) => (
                                    <td key={key} className="py-2 px-4">
                                        {renderCell(record, key, idx, record.githubUrl)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="md:hidden space-y-4">
                {trendingRepos.map((record, idx) => (
                    <div
                        key={idx}
                        className="border border-gray-800 p-4 rounded-lg bg-gray-900 space-y-2"
                    >
                        {columns.map(({ key, label }) => (
                            <div key={key} className="flex justify-between text-sm">
                                <span className="text-gray-400">{label}</span>
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
