'use client';

import { useState } from 'react';
import NavLinks from './NavLinks';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Sidenav() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`flex flex-col flex-shrink-0 transition-all duration-300 ease-in-out border-r border-neutral-800/50 bg-black/40 backdrop-blur-sm relative z-10
      ${collapsed ? 'w-16' : 'w-full md:w-64'}`}
    >
      <div className="absolute top-0 right-0 w-[0.05rem] h-full bg-neutral-900/50" />

      <button
        onClick={() => setCollapsed((prev) => !prev)}
        className="absolute top-4 cursor-pointer right-4 z-20 p-1.5 border border-neutral-700/30 bg-black/50 hover:bg-neutral-800/50 transition"
      >
        {collapsed ? (
          <ChevronRight className="w-4 h-4 text-neutral-400" />
        ) : (
          <ChevronLeft className="w-4 h-4 text-neutral-400" />
        )}
      </button>

      <div className="flex h-full flex-row justify-between md:flex-col md:space-y-2 overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-800/70 scrollbar-track-transparent">
        <nav className={`hidden md:block ${collapsed ? 'mt-6' : ''} w-full grow`} role="navigation" aria-label="Sidebar">
          <div className={`${collapsed ? 'px-4' : 'px-4 sm:px-6 md:px-8'}`}>
            <NavLinks collapsed={collapsed} />
          </div>
        </nav>

        {!collapsed && (
          <span className="text-sm text-neutral-500/50 py-2 mx-12 font-mono">ossean v0.0.1</span>
        )}
      </div>
    </aside>
  );
}
