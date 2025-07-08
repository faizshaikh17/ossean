import Link from "next/link";
import { Star } from "lucide-react";

export default function GithubButton() {
  return (
    <Link
      href="https://github.com/faizshaikh17/ossean"
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex items-center justify-between gap-2 w-fit max-w-full sm:max-w-[16rem] whitespace-nowrap border border-white/10 px-3 py-2 text-xs sm:text-sm text-white/90 font-mono transition-all duration-700 ease-out hover:shadow-[0_0_20px_rgba(255,255,255,0.08)] overflow-hidden"
    >
      {/* shimmer inside button */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none z-0" />

      <div className="flex items-center gap-1.5 z-10">
        <Star
          className="w-[14px] h-[14px] text-white/40 group-hover:text-yellow-300 transition duration-300"
          strokeWidth={2}
        />
        <span className="tracking-tight transition group-hover:text-white">
          star on github
        </span>
      </div>

      <div className="text-[10px] sm:text-xs font-mono text-white/40 group-hover:text-white transition-opacity opacity-60 group-hover:opacity-100 tracking-tight z-10">
        0.001k+
      </div>
    </Link>
  );
}
