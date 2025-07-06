// NavLinks.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
  ChevronRight,
  Home,
  Flame,
  Search,
  Hourglass,
  Sparkles,
  Bug,
  Twitter,
  Github,
  Mail,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const navLinks = [
  {
    title: 'General',
    items: [
      { name: 'Home', link: '/home', icon: Home },
      { name: 'Trending', link: '/home/trending', icon: Flame },
      { name: 'Discover', link: '/home/discover', icon: Search },
    ],
  },
  {
    title: 'Coming Soon',
    items: [{ name: 'Upcoming', link: '/', icon: Hourglass }],
  },
  {
    title: 'Feedback',
    items: [
      { name: 'Suggest Feature', link: 'mailto:mohdfaiz8101@gmail.com', icon: Sparkles },
      { name: 'Report Bug', link: 'https://github.com/faizshaikh17/opensea/issues/new', icon: Bug },
    ],
  },
  {
    title: 'Social',
    items: [
      { name: 'Twitter', link: 'https://x.com/iamfaizz17', icon: Twitter },
      { name: 'GitHub', link: 'https://github.com/faizshaikh17', icon: Github },
      { name: 'Email', link: 'mailto:mohdfaiz8101@gmail.com', icon: Mail },
    ],
  },
];

export default function NavLinks({ collapsed, isOpen }: { collapsed?: boolean; isOpen?: boolean }) {
  const pathname = usePathname();
  const [chevron, setChevron] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setChevron(true), 500);
    setChevron(false);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className={`sm:flex flex-col mt-16 sm:mt-10 gap-5 sm:px-1 py-1 ${isOpen ? '':'hidden'}`}>
      {navLinks.map((group) => (
        <div key={group.title} className="space-y-2">
          {!collapsed && (
            <div className="px-2 py-1 text-[10px] font-semibold text-neutral-500 tracking-wider uppercase">
              {group.title}
            </div>
          )}
          <div className="space-y-[2px] w-full">
            {group.items.map((item) => {
              const isActive = pathname === item.link;
              const Icon = item.icon;

              return (
                <div key={item.name} className="relative sm:w-full w-fit group">
                  {isActive && !collapsed && (
                    <motion.div
                      layoutId="activeNavItem"
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                        mass: 0.8,
                      }}
                      className="absolute inset-0 z-0 rounded w-full border border-neutral-700/40 bg-black/60 backdrop-blur-sm shadow-[0_0_0.5rem_#00000040]"
                      style={{
                        borderImage:
                          'conic-gradient(#404040 0deg, #262626 90deg, #404040 180deg, #262626 270deg, #404040 360deg) 1',
                      }}
                    />
                  )}

                  <Link
                    href={item.link}
                    aria-current={isActive ? 'page' : undefined}
                    className={clsx(
                      'relative z-10 flex items-center gap-2 px-3 py-2 text-xs sm:text-sm font-medium rounded transition duration-300 overflow-hidden',
                      'hover:bg-neutral-900/30 hover:text-white',
                      isActive ? 'text-white' : 'text-neutral-400',
                      collapsed ? 'justify-center' : 'justify-between w-full'
                    )}
                  >
                    <div
                      title={item.name}
                      className={clsx('flex items-center gap-2', collapsed && 'justify-center')}
                    >
                      <Icon size={16} className="opacity-60 shrink-0" />
                      {!collapsed && <span>{item.name}</span>}
                    </div>
                    {!collapsed && isActive && chevron && (
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 transition-transform duration-300 group-hover:translate-x-1" />
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
