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
            <footer className="w-full text-center text-xs text-neutral-500 font-mono py-6 px-4 flex flex-wrap justify-center items-center gap-3 border-t border-white/10 mt-10 z-10">
                <Link
                    href="https://twitter.com/iamfaizz17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-white transition"
                >
                    <Twitter className="w-3 h-3" />
                    twitter
                </Link>

                <span className="opacity-30">/</span>

                <Link
                    href="https://github.com/faizshaikh17"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 hover:text-white transition"
                >
                    <Github className="w-3 h-3" />
                    github
                </Link>

                <span className="opacity-30">/</span>

                <a
                    href="mailto:info.ossean@gmail.com"
                    className="flex items-center gap-1 hover:text-white transition"
                >
                    <Mail className="w-3 h-3" />
                    mail
                </a>

                <span className="opacity-30">/</span>

                <span className="text-neutral-600 dark:text-neutral-500">
                    © 2025 all rights reserved
                </span>
            </footer>
        </>
    )
}
