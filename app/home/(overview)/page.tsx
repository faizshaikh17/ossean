import Link from "next/link";

interface Repo {
    repo_id?: number;
    repo_name?: string;
    primary_language?: string;
    stars?: number;
    forks?: number;
    pull_requests?: number;
    pushes?: number;
}

const columns = [
    { key: "repo_name", label: "Repository" },
    { key: "primary_language", label: "Language" },
    { key: "stars", label: "Stars" },
    { key: "forks", label: "Forks" },
    { key: "pull_requests", label: "Pull Requests" },
    { key: "pushes", label: "Pushes" },
];

const formatNumber = (n: number) =>
    n >= 1e6 ? `${(n / 1e6).toFixed(1)}M` :
        n >= 1e3 ? `${(n / 1e3).toFixed(1)}k` :
            n.toString();

export default async function Page() {
    let rows: Repo[] = [];

    try {
        const res = await fetch("https://api.ossinsight.io/v1/trends/repos/", {
            headers: { Accept: "application/json" },
            cache: "no-store",
        });

        if (res.ok) {
            const json = await res.json();
            rows = Array.isArray(json?.data?.rows) ? json.data.rows : [];
        }
    } catch (err) {
        console.error("Fetch error:", err);
    }

    return (
        <main className="min-h-screen px-4 py-10 text-sm text-white bg-black">
            <h1 className="text-xl font-bold mb-6">Trending Repositories</h1>

            {rows.length > 0 ? (
                <div className="overflow-x-auto">
                    <table className="min-w-full table-auto border-collapse">
                        <thead>
                            <tr>
                                {columns.map(({ key, label }) => (
                                    <th key={key} className="text-left py-2 px-4 border-b border-gray-700">
                                        {label}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((repo, idx) => (
                                <tr key={repo.repo_id ?? idx} className="border-b border-gray-800">
                                    {columns.map(({ key }) => {
                                        const value = repo[key as keyof Repo];

                                        if (key === "repo_name") {
                                            return (
                                                <td key={key} className="py-2 px-4">
                                                    {value ? (
                                                        <Link
                                                            href={`https://github.com/${value}`}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-blue-400 hover:underline"
                                                        >
                                                            {value.toString().split("/")[1]}
                                                        </Link>
                                                    ) : (
                                                        "-"
                                                    )}
                                                </td>
                                            );
                                        }

                                        if (typeof value === "number") {
                                            return (
                                                <td key={key} className="py-2 px-4">
                                                    {formatNumber(value)}
                                                </td>
                                            );
                                        }

                                        if (key === "primary_language") {
                                            return (
                                                <td key={key} className="py-2 px-4">
                                                    {value || "-"}
                                                </td>
                                            );
                                        }




                                        return (
                                            <td key={key} className="py-2 px-4">
                                                {value || "0"}
                                            </td>
                                        );
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="text-gray-400">No repositories found.</div>
            )}
        </main>
    );
}
