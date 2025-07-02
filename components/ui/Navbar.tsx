'use client';

import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="w-full h-16 px-10 bg-black/40 backdrop-blur-sm border-b border-neutral-800/50 flex justify-between items-center z-50">

            <Link href="/">
                <span className="text-2xl sm:text-3xl font-medium font-mono">ossean</span>
            </Link>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center z-10 w-full sm:w-auto">
                <div className='z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto'>
                    <Link
                        href="https://github.com/faizshaikh17/opensea"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group relative z-50 flex items-center justify-between gap-2 sm:gap-4 w-full sm:w-auto max-w-full sm:max-w-[15rem] whitespace-pre border border-neutral-700 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-black dark:text-white hover:bg-accent hover:text-accent-foreground transition-all duration-300 ease-out overflow-hidden hover:ring-black"
                    >
                        <div className="flex items-center gap-2 sm:gap-3">

                            <span className="text-black dark:text-white">Star on GitHub</span>
                        </div>

                        <div className="flex items-center gap-1 sm:gap-2 text-xs sm:text-sm">
                            <svg
                                className="h-3 w-3 sm:h-4 sm:w-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 24 24"
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
                </div>
            </div>

        </nav>
    );
}
