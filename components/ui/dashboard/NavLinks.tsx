'use client'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import clsx from "clsx";
export default function NavLinks() {
    const pathname = usePathname();
    const navLinks = [
        {
            name: 'Home',
            link: '/home'
        },
        {
            name: 'Languages',
            link: '/languages'
        },
        {
            name: 'Work',
            link: '/work'
        },
    ]

    return (
        <>
            <div className="flex flex-col justify-center mt-10 gap-1">
                {
                    navLinks.map((item: { name: string; link: string }) => (
                        <Link key={item.name} href={item.link}>
                            <button className={clsx(`flex items-center w-full rounded-md hover:bg-neutral-800 text-sm font-medium md:px-3 md:py-1`, { 'bg-neutral-800/60': item.link === pathname })}>
                                <div className="hidden md:block">{item.name}</div>
                            </button>
                        </Link>
                    ))
                }
            </div>
        </>
    )
}
