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
            <footer className="w-full text-xs font-mono text-neutral-400 py-10 px-4 border-t border-white/[0.08] backdrop-blur-md bg-gradient-to-b from-black/30 to-black/60 z-10">
                <div className="flex flex-wrap justify-center text-neutral-500 items-center gap-4 sm:gap-6 max-w-3xl mx-auto text-center">

                    <span className="text-[10px] uppercase tracking-[0.2em] text-neutral-500 opacity-70">
                        © 2025 all rights reserved
                    </span>

                    <span className="hidden sm:inline-block text-neutral-600 opacity-30">/</span>

                    <Link
                        href="https://twitter.com/iamfaizz17"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 group hover:text-blue-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(29,161,242,0.25)]"
                    >
                        <Twitter className="w-4 h-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                        <span className="hidden sm:inline tracking-wide text-xs">twitter</span>
                    </Link>

                    <span className="hidden sm:inline-block text-neutral-600 opacity-30">/</span>

                    <Link
                        href="https://github.com/faizshaikh17"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 group hover:text-green-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.25)]"

                    >
                        <Github className="w-4 h-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                        <span className="hidden sm:inline tracking-wide text-xs">github</span>
                    </Link>

                    <span className="hidden sm:inline-block text-neutral-600 opacity-30">/</span>

                    <a
                        href="mailto:info.ossean@gmail.com"
                        className="flex items-center gap-1.5 group hover:text-purple-400 transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(138,43,226,0.25)]"
                    >
                        <Mail className="w-4 h-4 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                        <span className="hidden sm:inline tracking-wide text-xs">email</span>
                    </a>
                </div>
            </footer>

        </>
    )
}
