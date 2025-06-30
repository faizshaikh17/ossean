'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Grouped nav structure
const navLinks = [
  {
    title: 'General',
    items: [
      { name: 'Home', link: '/home' },
      { name: 'Trending', link: '/home/trending' },
    ],
  },
  {
    title: 'Categories',
    items: [
      { name: 'Language', link: '/home/language' },
      { name: 'Popularity', link: '/home/popularity' },
    ],
  },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col mt-8 gap-6 relative bg-[#09090B] px-1 py-1">
      {navLinks.map((group) => (
        <div key={group.title} className="space-y-1">
          <h3 className="px-3 mb-2 text-xs uppercase font-medium tracking-wider text-neutral-500/70">
            {group.title}
          </h3>
          <div className="relative space-y-1">
            {group.items.map((item) => {
              const isActive = pathname === item.link;

              return (
                <div key={item.name} className="relative z-10">
                  {isActive && (
                    <motion.div
                      layoutId="activeNavItem"
                      transition={{
                        type: 'spring',
                        stiffness: 300,
                        damping: 30,
                      }}
                      className="absolute inset-0 z-0 rounded-md border border-neutral-800/40 bg-gradient-to-r from-white/5 to-white/10"
                    />
                  )}

                  <Link
                    href={item.link}
                    className={clsx(
                      'relative z-10 flex items-center justify-between gap-2 w-full px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300 hover:bg-neutral-900 hover:text-white',
                      isActive ? 'text-white font-bold' : 'text-neutral-300'
                    )}
                  >
                    <span>{item.name}</span>
                    {isActive && (
                      <ChevronRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
                    )}
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
