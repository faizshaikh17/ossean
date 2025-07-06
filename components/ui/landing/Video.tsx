import Link from "next/link"
import GithubButton from "@/components/GithubButton"
import { Mail, Twitter, Github } from "lucide-react";
export default function Video() {
    return (
        <>
            <main className="relative w-full bg-black/40 text-white flex flex-col items-center justify-center">
                <section className="relative w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 py-20 flex flex-col sm:gap-10 gap-6 items-center justify-center">
                    <div className="absolute inset-0 z-0 bg-[url('/statue.png')] bg-cover bg-center opacity-60 pointer-events-none" />

                    <div className="flex flex-col items-center justify-center gap-4">
                        <header className="text-2xl flex flex-col items-center justify-center gap-2 sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[100%] animate-fade-in w-fit text-center">
                            <h1 className="bg-gradient-to-r space-x-1 sm:space-x-2 text-white/90">
                                <span>See</span>
                                <span>It</span>
                                <span>In</span>
                                <span>Action</span>
                            </h1>
                            <p className="text-neutral-400 font-medium leading-5 transition duration-300 text-sm sm:text-base">
                                Watch how Ossean transforms the way you <br /> discover and explore open source projects
                            </p>
                        </header>
                    </div>

                    <video
                        src="/video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full border border-white/10 mt-6 max-w-[60rem] h-auto z-10  rounded shadow-lg"
                    />
                    <GithubButton />
                    {/* <div>

                        <div className="flex flex-col mt-32 items-center justify-center gap-4">
                            <header className="text-2xl flex flex-col items-center justify-center gap-2 sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[100%] animate-fade-in w-fit text-center">
                                <h1 className="bg-gradient-to-r space-x-1 sm:space-x-2 text-white/90">
                                    <span>Explore</span>
                                    <span>&</span>
                                    <span>Contribute</span>
                                    <br />
                                    <span>Start</span>
                                    <span>Today</span>
                                </h1>
                                <p className="text-neutral-400 font-medium leading-5 transition duration-300 text-sm sm:text-base">
                                    Browse hundreds of OSS projects and  <br /> discover what suits your needs.
                                </p>
                            </header>
                        </div>

                    </div> */}
                </section>
            </main>
            <footer className="w-full text-xs font-mono text-neutral-400 py-8 px-4 border-t border-white/[0.08] backdrop-blur-xl bg-gradient-to-b from-black/50 to-black/80 z-10 relative overflow-hidden">
                {/* Subtle grid pattern */}
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
                        <div className="flex items-center justify-center gap-8">
                            <Link
                                href="https://twitter.com/iamfaizz17"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative"
                            >
                                <div className="relative flex items-center justify-center">
                                    <div className="absolute inset-0 w-10 h-10 transform rotate-45 border border-white/[0.08] group-hover:border-white/[0.25] transition-all duration-500 group-hover:rotate-180" />
                                    <div className="absolute inset-0 w-8 h-8 transform -rotate-45 border border-white/[0.06] group-hover:border-white/[0.2] transition-all duration-300 group-hover:-rotate-90" />

                                    <div className="relative z-10 p-2 group-hover:scale-110 transition-all duration-300">
                                        <Twitter className="w-4 h-4 text-neutral-400 group-hover:text-white transition-all duration-300" />
                                    </div>

                                    <div className="absolute inset-0 w-10 h-10 bg-white/[0.01] group-hover:bg-white/[0.03] rounded-full blur-lg transition-all duration-500" />
                                </div>
                                <span className="block text-center mt-2 text-[9px] uppercase tracking-[0.2em] text-neutral-500 group-hover:text-neutral-300 transition-all duration-300">
                                    twitter
                                </span>
                            </Link>

                            <Link
                                href="https://github.com/faizshaikh17"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group relative"
                            >
                                <div className="relative flex items-center justify-center">
                                    <div className="absolute inset-0 w-10 h-10 transform rotate-45 border border-white/[0.08] group-hover:border-white/[0.25] transition-all duration-500 group-hover:rotate-180" />
                                    <div className="absolute inset-0 w-8 h-8 transform -rotate-45 border border-white/[0.06] group-hover:border-white/[0.2] transition-all duration-300 group-hover:-rotate-90" />

                                    <div className="relative z-10 p-2 group-hover:scale-110 transition-all duration-300">
                                        <Github className="w-4 h-4 text-neutral-400 group-hover:text-white transition-all duration-300" />
                                    </div>

                                    <div className="absolute inset-0 w-10 h-10 bg-white/[0.01] group-hover:bg-white/[0.03] rounded-full blur-lg transition-all duration-500" />
                                </div>
                                <span className="block text-center mt-2 text-[9px] uppercase tracking-[0.2em] text-neutral-500 group-hover:text-neutral-300 transition-all duration-300">
                                    github
                                </span>
                            </Link>

                            <Link
                                href="mailto:info.ossean@gmail.com"
                                className="group relative"
                            >
                                <div className="relative flex items-center justify-center">
                                    <div className="absolute inset-0 w-10 h-10 transform rotate-45 border border-white/[0.08] group-hover:border-white/[0.25] transition-all duration-500 group-hover:rotate-180" />
                                    <div className="absolute inset-0 w-8 h-8 transform -rotate-45 border border-white/[0.06] group-hover:border-white/[0.2] transition-all duration-300 group-hover:-rotate-90" />

                                    <div className="relative z-10 p-2 group-hover:scale-110 transition-all duration-300">
                                        <Mail className="w-4 h-4 text-neutral-400 group-hover:text-white transition-all duration-300" />
                                    </div>

                                    <div className="absolute inset-0 w-10 h-10 bg-white/[0.01] group-hover:bg-white/[0.03] rounded-full blur-lg transition-all duration-500" />
                                </div>
                                <span className="block text-center mt-2 text-[9px] uppercase tracking-[0.2em] text-neutral-500 group-hover:text-neutral-300 transition-all duration-300">
                                    email
                                </span>
                            </Link>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}
