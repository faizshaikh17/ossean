'use client';
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from "clsx";

export default function NavLinks() {
    const pathname = usePathname();

    const navLinks = [
        {
            name: 'Home',
            link: '/home',
            // element: HomeIcon
        },
        {
            name: 'Trending',
            link: '/home/trending',
            // element: TrendingUpIcon
        },
        {
            name: 'Work',
            link: '/home/work',
            // element: WorkIcon
        },
    ];

    return (
        <>
            <div className="flex flex-col justify-center mt-8 gap-1">
                {
                    navLinks.map((item) => {
                        const isActive = item.link === pathname;
                        // const LinkIcon = item.element;

                        return (
                            <Link key={item.name} href={item.link}>
                                <button
                                    className={clsx(
                                        // base button styles
                                        `flex items-center justify-between gap-2 w-full rounded-md font-medium md:px-3 md:py-1.5
                                         transition-all duration-300 ease-in-out`,

                                        // active styles with subtle lift
                                        {
                                            'bg-neutral-800 border border-neutral-700 text-white text-base font-bold shadow-md':
                                                isActive,

                                            // inactive styles with hover transition
                                            'text-neutral-400 hover:bg-neutral-900/50 hover:shadow-sm':
                                                !isActive,
                                        }
                                    )}
                                >
                                    {/* <LinkIcon style={{ fontSize: '20px' }} /> */}
                                    <p
                                        className={clsx(
                                            "hidden w-full text-sm text-left md:block transition-colors duration-300 ease-in-out",
                                            {
                                                'text-white text-base font-bold': isActive,
                                            }
                                        )}
                                    >
                                        {item.name}
                                    </p>
                                </button>
                            </Link>
                        );
                    })
                }
            </div>
        </>
    );
}
