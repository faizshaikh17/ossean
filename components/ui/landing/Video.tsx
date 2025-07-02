import Link from "next/link"

export default function Video() {
    return (
        <>
            <main className="relative w-full min-h-screen bg-black/40 text-white flex flex-col items-center justify-center">
                <section className="relative w-full min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 py-24 flex flex-col items-center justify-center">
                    <div className="absolute inset-0 z-0 bg-[url('/statue.png')] bg-cover bg-center opacity-50 pointer-events-none" />

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
                        src="/display.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full mt-8 max-w-[50rem] h-auto z-10 aspect-video rounded-md shadow-lg"
                    />

                    <Link
                        href="https://github.com/faizshaikh17/opensea"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Star the project on GitHub"
                        className="group relative z-50 flex items-center w-fit mt-4 justify-between gap-2 sm:gap-4 sm:w-auto max-w-full sm:max-w-[15rem] whitespace-pre border border-neutral-700 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-black dark:text-white hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-out overflow-hidden hover:ring-black"
                    >
                        <div className="flex items-center gap-2 sm:gap-3">
                            <span className="text-black dark:text-white">Star on GitHub</span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                            <svg
                                className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                                />
                            </svg>
                            <span className="hidden sm:inline-block font-mono pr-1 sm:pr-2 font-medium tabular-nums tracking-wider text-black dark:text-white">
                                0.001k+
                            </span>
                        </div>
                    </Link>
                </section>
            </main>
        </>
    )
}
