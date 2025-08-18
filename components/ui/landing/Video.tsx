import GithubButton from "@/components/GithubButton"
export default function Video() {
    return (
        <>
            <main className="relative w-full bg-black/40 text-white flex flex-col items-center justify-center">
                <section className="relative w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 py-20 flex flex-col sm:gap-10 gap-6 items-center justify-center">
                    <div className="absolute inset-0 z-0 bg-[url('/statue.png')] bg-cover bg-center opacity-60 pointer-events-none" />

                    <div className="flex flex-col items-center justify-center gap-4">
                        <header className="text-2xl flex flex-col items-center justify-center gap-3 sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[100%] animate-fade-in w-fit text-center">
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
                </section>
            </main>
        </>
    )
}
