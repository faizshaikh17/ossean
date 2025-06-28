import Link from "next/link";
import Image from "next/image";
interface Repo {
  repo_id?: number;
  repo_name?: string;
  name?: string;
  language?: string;
  stargazers_count?: number;
  forks_count?: number;
  popularity?: "High" | "Mid" | "Low";
  topics?: string[];
  imgUrl?: string
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

const getBaseRepoData = async (url: string): Promise<Repo[]> => {
  try {
    const res = await fetch(url, {
      headers: { Accept: "application/json" },
      cache: "force-cache",
    });
    const json = await res.json();
    return Array.isArray(json?.data?.rows) ? json.data.rows : [];
  } catch {
    return [];
  }
};

const fetchGitHubRepos = async (
  repoNames: string[],
  githubUrl: string,
  token: string
): Promise<Repo[]> => {
  const results = await Promise.allSettled(
    repoNames.map((name) =>
      fetch(`${githubUrl}${name}`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        cache: "no-store",
      }).then(async (res) => {
        if (res.status === 403 || res.status === 404) {
          const err = await res.json();
          console.warn(`GitHub error for ${name}:`, err.message);
          return null;
        }
        return res.json();
      })
    )
  );

  return results.map((res) => {
    if (res.status !== "fulfilled" || !res.value) return {};

    const raw = res.value;

    const stars = raw.stargazers_count || 0;
    const popularity: Repo["popularity"] =
      stars >= 10000 ? "High" : stars >= 1000 ? "Mid" : "Low";

    return {
      name: raw.name,
      language: raw.language,
      topics: raw.topics,
      stargazers_count: raw.stargazers_count,
      forks_count: raw.forks_count,
      imgUrl: raw.owner.avatar_url,
      popularity,
    };
  });
};

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
        href={`https://github.com/${repoLink}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-400 hover:underline"
      >
        {record.imgUrl && (
          <Image
            src={record.imgUrl}
            alt={`${record.name} avatar`}
            width={21}
            height={21}
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
  const apiUrl = process.env.API_URL!;
  const githubApiUrl = process.env.GITHUB_API_URL!;
  const githubToken = process.env.GITHUB_TOKEN!;

  const baseRepos = await getBaseRepoData(apiUrl);
  const repoNames = baseRepos.map((r) => r.repo_name).filter(Boolean) as string[];
  const enrichedRepos = await fetchGitHubRepos(repoNames, githubApiUrl, githubToken);

  return (
    <main className="min-h-screen px-8 py-9 text-sm text-white bg-black">
      <h1 className="text-xl font-bold mb-6">Latest Trending Projects</h1>

      {baseRepos.length > 0 ? (
        <>
          {/* Desktop Table View */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              <thead>
                <tr>
                  {columns.map(({ key, label }) => (
                    <th
                      key={key}
                      className={`${key === "topics" ? "text-center" : ""
                        } text-left py-2 px-4 border-b border-gray-700`}
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
                        {renderCell(record, key, idx, baseRepos[idx]?.repo_name)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Card View */}
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
                      {renderCell(record, key, idx, baseRepos[idx]?.repo_name)}
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
