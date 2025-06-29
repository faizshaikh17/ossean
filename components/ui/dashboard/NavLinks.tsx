'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const navLinks = [
    { name: 'Home', link: '/home' },
    { name: 'Trending', link: '/home/trending' },
    { name: 'Language', link: '/home/language' },
    { name: 'Popularity', link: '/home/popularity' },
];

export default function NavLinks() {
    const pathname = usePathname();


    return (
        <div className="flex flex-col bg-[#09090B] justify-center mt-8 gap-1">
            {navLinks.map((item) => {
                const isActive = pathname === item.link;

                return (
                    <div key={item.name} className="relative group">
                        <Link
                            href={item.link}
                            className={clsx(
                                "w-full rounded-md font-medium md:px-3 md:py-1.5 flex items-center justify-between gap-2 transition-transform duration-500 ease-in-out",
                                isActive
                                    ? "border bg-gradient-to-r from-neutral-900 to-neutral-700/30 border-neutral-800/40 text-white text-base font-bold"
                                    : "text-neutral-400 hover:bg-neutral-900/70 hover:shadow-sm"
                            )}
                        >
                            <p
                                className={clsx(
                                    'hidden w-full text-sm font-medium text-left md:block transition-colors duration-300 ease-in-out',
                                    isActive && 'text-white font-bold'
                                )}
                            >
                                {item.name}
                            </p>
                        </Link>
                    </div>
                );
            })}
        </div>
    );
}