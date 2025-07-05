import Link from "next/link";
import { Star } from "lucide-react";

export default function GithubButton() {
    return (
        <Link
            href="https://github.com/faizshaikh17/ossean"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative z-50 flex items-center justify-between gap-2 w-full sm:w-auto max-w-full sm:max-w-[15rem] whitespace-pre border border-neutral-700/60 p-2 text-xs sm:text-sm font-mono text-white hover:text-yellow-300 transition-all duration-300 ease-out hover:shadow-md rounded-xs"
        >
            <div className="flex items-center gap-1.5">
                <Star className="w-3.5 h-3.5 text-gray-400 group-hover:text-yellow-300 transition" strokeWidth={2} />
                <span className="tracking-tight">star on github</span>
            </div>
            <div className="flex items-center gap-1 text-yellow-100 font-mono text-[0.65rem] sm:text-xs tabular-nums">
                <span className="opacity-70 group-hover:opacity-100 transition">0.001k+</span>
            </div>
        </Link>
    );
}
