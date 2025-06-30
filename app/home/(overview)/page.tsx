import Link from "next/link";
import Image from "next/image";
import YC from "@/lib/yc.json";
import { getGithubTokens } from "@/lib/githubTokens";

interface Repo {
  repo_id?: number;
  repo_name?: string;
  name?: string;
  language?: string;
  stargazers_count?: number;
  forks_count?: number;
  popularity?: "legendary" | "famous" | "popular" | "rising";
  topics?: string[];
  imgUrl?: string;
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
  repoLink?: string
) => {
  const value = record[key];

  if (key === "name") {
    return repoLink ? (
      <Link
        href={`https://github.com/${repoLink}`}
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
    return <span className="text-gray-300 capitalize">{value || "-"}</span>;
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
  const githubApiUrl = process.env.GITHUB_API_URL!;
  const repoNames = YC.map((r) => r.repo).filter(Boolean) as string[];

  const results = await Promise.all(
    repoNames.map(async (name) => {
      const res = await fetch(`${githubApiUrl}${name}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${getGithubTokens()}`,
        },
        next: { revalidate: 60 * 60 * 24 * 0.5 },
      });

      if (!res.ok) return null;

      const raw = await res.json();
      const stars = raw.stargazers_count || 0;

      return {
        name: raw.name,
        language: raw.language,
        topics: raw.topics,
        stargazers_count: raw.stargazers_count,
        forks_count: raw.forks_count,
        imgUrl: raw.owner.avatar_url,
        popularity:
          stars >= 50000 ? "legendary" :
            stars >= 10000 ? "famous" :
              stars >= 1000 ? "popular" :
                "rising",
      };
    })
  );

  const enrichedRepos = results.map((r) => r || {});

  return (
    <main className="min-h-screen px-8 py-9 text-sm text-white bg-black">
      <h1 className="text-xl font-bold mb-6">Top YC OSS Projects</h1>

      {YC.length > 0 ? (
        <>
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
                {enrichedRepos.map((record, idx) => (
                  <tr key={idx} className="border-b border-gray-800">
                    {columns.map(({ key }) => (
                      <td key={key} className="py-2 px-4">
                        {renderCell(record, key, idx, YC[idx]?.repo)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="md:hidden space-y-4">
            {enrichedRepos.map((record, idx) => (
              <div
                key={idx}
                className="border border-gray-800 p-4 rounded-lg bg-gray-900 space-y-2"
              >
                {columns.map(({ key, label }) => (
                  <div key={key} className="flex justify-between text-sm">
                    <span className="text-gray-400">{label}</span>
                    <div className="text-right max-w-[60%]">
                      {renderCell(record, key, idx, YC[idx]?.repo)}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-gray-400">No repositories found.</div>
      )}
    </main>
  );
}
