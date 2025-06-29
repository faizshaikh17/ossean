'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navLinks = [
    { name: 'Home', link: '/home' },
    { name: 'Trending', link: '/home/trending' },
    { name: 'Work', link: '/home/work' },
];

export default function NavLinks() {
    const pathname = usePathname();

    // Early return until pathname is available (prevents render mismatch)
    if (!pathname) return null;

    return (
        <div className="flex flex-col bg-[#09090B] justify-center mt-8 gap-1">
            {navLinks.map((item) => {
                const isActive = pathname === item.link;

                return (
                    <Link
                        key={item.name}
                        href={item.link}
                        className={clsx(
                            "w-full rounded-md font-medium md:px-3 md:py-1.5 flex items-center justify-between gap-2 transition-colors duration-300 ease-in-out focus:outline-none focus-visible:ring-0",
                            {
                                'border bg-gradient-to-r from-neutral-900/80 to-neutral-700/30 border-neutral-800/60 text-white text-base font-bold shadow-md':
                                    isActive,
                                'text-neutral-400 hover:bg-neutral-900/50 hover:shadow-sm':
                                    !isActive,
                            }
                        )}
                    >
                        <p
                            className={clsx(
                                'hidden w-full text-sm text-left md:block transition-colors duration-300 ease-in-out',
                                {
                                    'text-white text-base font-bold': isActive,
                                }
                            )}
                        >
                            {item.name}
                        </p>
                    </Link>
                );
            })}
        </div>

    );
}
