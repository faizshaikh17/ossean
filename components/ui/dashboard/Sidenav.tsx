'use client';

import NavLinks from './NavLinks';
import Link from 'next/link';
import { LogOutIcon } from 'lucide-react';

export default function Sidenav() {
  return (
    <aside className="w-full md:w-64 flex flex-col flex-shrink-0 border-r border-neutral-800/50 bg-black/40 backdrop-blur-sm relative z-10">
      <div className="absolute top-0 right-0 w-[0.05rem] h-full bg-neutral-900/50" />

      <div className="flex h-full flex-row justify-between md:flex-col md:space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-800/70 scrollbar-track-transparent">
        <div className="flex md:hidden items-center py-4 px-4 sm:px-6 md:px-8">
          <Link href="/">
            <span className="text-xl font-medium font-mono">OSSean</span>
          </Link>
        </div>

        <nav
          className="hidden md:block w-full grow"
          role="navigation"
          aria-label="Sidebar"
        >
          <div className="px-4 sm:px-6 md:px-8">
            <NavLinks />


            {/* <button
              className="group flex items-center mt-2 w-full rounded-none hover:bg-neutral-900/50 text-xs sm:text-sm font-medium px-3 py-2 justify-center gap-2 md:justify-start transition duration-300 border border-neutral-700/30 bg-transparent overflow-hidden relative"
            >
              <LogOutIcon size={18} />
              <div className="hidden md:block relative z-10 group-hover:text-white transition-colors duration-300">
                Sign Out
              </div>

              <div className="absolute inset-0 z-0 pointer-events-none group-hover:bg-neutral-800/20 transition-all duration-300" />
            </button> */}
            <span className='text-sm text-neutral-500/50 px-9 py-6 font-mono'>ossean v0.0.1</span>
          </div>
        </nav>
      </div>
    </aside>
  );
}
