import Link from "next/link"
import { Mail, Twitter, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full text-xs font-mono text-neutral-400 py-8 px-4 border-t border-white/[0.08] backdrop-blur-xl bg-gradient-to-b from-black/50 to-black/80 z-10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="grid grid-cols-8 gap-2 h-full">
                    {Array.from({ length: 24 }).map((_, i) => (
                        <div
                            key={i}
                            className="border border-white/10 animate-pulse"
                            style={{
                                animationDelay: `${i * 0.2}s`,
                                animationDuration: `${3 + (i % 2)}s`
                            }}
                        />
                    ))}
                </div>
            </div>

            <div className="max-w-4xl mx-auto relative z-10">
                <div className="flex sm:flex-row flex-col sm:justify-between  sm:items-end items-center gap-4">

                    <div className="text-center">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-neutral-500 opacity-70">
                            © 2025 all rights reserved
                        </span>
                    </div>
                    <div className="flex items-center justify-center gap-10 sm:gap-12">
                        <Link
                            href="https://twitter.com/heisen17berg"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center relative"
                        >
                            <div className="relative flex items-center justify-center w-12 h-12">
                                <div className="absolute inset-0 rotate-45 border border-white/[0.07] group-hover:border-white/[0.15] transition-all duration-500 group-hover:rotate-180" />
                                <div className="absolute inset-1 rotate-[-45deg] border border-white/[0.05] group-hover:border-white/[0.1] transition-all duration-300 group-hover:rotate-[-90deg]" />
                                <div className="relative z-10 p-2 group-hover:scale-110 transition-transform duration-300">
                                    <Twitter className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="absolute inset-0 rounded-full bg-white/[0.015] group-hover:bg-white/[0.03] blur-md transition-all duration-500" />
                            </div>
                            <span className="mt-2 text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-neutral-300 transition-all duration-300">
                                twitter
                            </span>
                        </Link>

                        <Link
                            href="https://github.com/faizshaikh17"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex flex-col items-center relative"
                        >
                            <div className="relative flex items-center justify-center w-12 h-12">
                                <div className="absolute inset-0 rotate-45 border border-white/[0.07] group-hover:border-white/[0.15] transition-all duration-500 group-hover:rotate-180" />
                                <div className="absolute inset-1 rotate-[-45deg] border border-white/[0.05] group-hover:border-white/[0.1] transition-all duration-300 group-hover:rotate-[-90deg]" />
                                <div className="relative z-10 p-2 group-hover:scale-110 transition-transform duration-300">
                                    <Github className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="absolute inset-0 rounded-full bg-white/[0.015] group-hover:bg-white/[0.03] blur-md transition-all duration-500" />
                            </div>
                            <span className="mt-2 text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-neutral-300 transition-all duration-300">
                                github
                            </span>
                        </Link>

                        <Link
                            href="mailto:info.ossean@gmail.com"
                            className="group flex flex-col items-center relative"
                        >
                            <div className="relative flex items-center justify-center w-12 h-12">
                                <div className="absolute inset-0 rotate-45 border border-white/[0.07] group-hover:border-white/[0.15] transition-all duration-500 group-hover:rotate-180" />
                                <div className="absolute inset-1 rotate-[-45deg] border border-white/[0.05] group-hover:border-white/[0.1] transition-all duration-300 group-hover:rotate-[-90deg]" />
                                <div className="relative z-10 p-2 group-hover:scale-110 transition-transform duration-300">
                                    <Mail className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div className="absolute inset-0 rounded-full bg-white/[0.015] group-hover:bg-white/[0.03] blur-md transition-all duration-500" />
                            </div>
                            <span className="mt-2 text-[10px] uppercase tracking-widest text-neutral-500 group-hover:text-neutral-300 transition-all duration-300">
                                email
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
