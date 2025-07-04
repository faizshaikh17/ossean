'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import {
  ChevronRight,
  House,
  TrendingUp,
  Compass,
  Clock,
  ShieldPlus,
  ShieldAlert,
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
      { name: 'Home', link: '/home', icon: House },
      { name: 'Trending', link: '/home/trending', icon: TrendingUp },
      { name: 'Discover', link: '/home/discover', icon: Compass },
    ],
  },
  {
    title: 'Categories',
    items: [{ name: 'Soon', link: '/', icon: Clock }],
  },
  {
    title: 'Request',
    items: [
      { name: 'Feature', link: 'mailto:mohdfaiz8101@gmail.com', icon: ShieldPlus },
      { name: 'Issue', link: 'https://github.com/faizshaikh17/opensea/issues/new', icon: ShieldAlert },
    ],
  },
  {
    title: 'Socials',
    items: [
      { name: 'Twitter ( now X )', link: 'https://x.com/iamfaizz17', icon: Twitter },
      { name: 'Github', link: 'https://github.com/faizshaikh17', icon: Github },
      { name: 'Mail', link: 'mailto:mohdfaiz8101@gmail.com', icon: Mail },
    ],
  }
];

export default function NavLinks() {
  const pathname = usePathname();
  const [chevron, setChevron] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setChevron(true);
    }, 500);
    setChevron(false);
    return () => clearTimeout(timeout);
  }, [pathname]);

  return (
    <div className="flex flex-col mt-6 sm:mt-8 gap-4 sm:gap-6 relative px-1 py-1">
      {navLinks.map((group) => (
        <div key={group.title || Math.random()} className="space-y-2">
          {group.title && (
            <div className="px-2 py-1 w-fit text-xs font-medium text-neutral-500 tracking-tight">
              {group.title.toUpperCase()}
            </div>
          )}

          <div className="relative space-y-1">
            {group.items.map((item) => {
              const isActive = pathname === item.link;
              const Icon = item.icon;

              return (
                <div key={item.name} className="relative z-10 group">
                  {isActive && (
                    <motion.div
                      layoutId="activeNavItem"
                      transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 20,
                        mass: 0.8,
                      }}
                      className="absolute inset-0 z-0 rounded-none border border-neutral-700/50 bg-black/60 backdrop-blur-sm shadow-[0_0_0.5rem_#00000040]"
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
                      'group relative z-10 flex items-center justify-between gap-2 w-full px-3 py-2 rounded-none text-xs sm:text-sm font-medium transition duration-300 hover:bg-neutral-900/30 hover:text-white overflow-hidden',
                      isActive ? 'text-white font-medium' : 'text-neutral-400'
                    )}
                  >
                    <div className="flex items-center gap-2 relative z-10">
                      {Icon && <Icon size={16} className="shrink-0 opacity-60" />}
                      <span>{item.name}</span>
                    </div>
                    {isActive && chevron && (
                      <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 text-yellow-300 transition-all duration-300 group-hover:translate-x-1 relative z-10" />
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
