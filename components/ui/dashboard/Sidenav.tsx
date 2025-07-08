'use client';

import { useState } from 'react';
import NavLinks from './NavLinks';
import { ChevronLeft, ChevronRight, Menu, X, LogOut } from 'lucide-react';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import { useRouter } from 'next/navigation';
import clsx from 'clsx';


export default function Sidenav() {
  const [collapsed, setCollapsed] = useState(false);
  const [isOpen, setIsOpen] = useState(false)
  const [signingOut, setSigningOut] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      setSigningOut(true);
      await authClient.signOut(); 
      router.push('/');
    } catch (error) {
      console.error('Sign-out failed:', error);
    } finally {
      setSigningOut(false);
    }
  };


  return (

    <>
      <aside
        className={`flex flex-col justify-center  flex-shrink-0 transition-all duration-300 ease-in-out border-r border-neutral-800/50 bg-black/40 backdrop-blur-sm absolute sm:relative z-10
      ${collapsed ? 'w-16' : 'w-full sm:w-64'}`}
      >
        <div className="absolute top-0 right-0 w-[0.05rem] h-full bg-neutral-900/50" />

        <button onClick={() => setIsOpen(prev => !prev)} className='absolute cursor-pointer top-4.5 right-4.5 sm:hidden inline-block '>
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

        {isOpen && <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="absolute sm:top-4 sm:right-4 top-14 right-3.5 z-20 p-1.5 cursor-pointer border border-neutral-700/30 bg-black/50 hover:bg-neutral-800/50 transition"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4 text-neutral-400" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-neutral-400" />
          )}
        </button>}

        <button
          onClick={() => setCollapsed((prev) => !prev)}
          className="absolute sm:block hidden sm:top-4 cursor-pointer sm:right-4 top-12 right-4 z-20 p-1.5 border border-neutral-700/30 bg-black/50 hover:bg-neutral-800/50 transition"
        >
          {collapsed ? (
            <ChevronRight className="w-4 h-4 text-neutral-400" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-neutral-400" />
          )}
        </button>

        <div className="flex h-full flex-col justify-between overflow-y-auto scrollbar-thin scrollbar-thumb-neutral-800/70 scrollbar-track-transparent">
          <nav
            className={`w-full grow ${collapsed ? 'mt-6' : ''}`}
            role="navigation"
            aria-label="Sidebar"
          >
            <div className={`${collapsed ? 'px-4' : 'px-4 sm:px-6 md:px-8'}`}>
              <NavLinks isOpen={isOpen} collapsed={collapsed} />
            </div>
          </nav>

          {!collapsed && (
            <div className="w-full px-4 sm:px-6 md:px-8 pt-4 pb-4 mt-auto flex flex-col justify-center gap-1">

              {isOpen ? (
                <>
                  <button
                    onClick={handleSignOut}
                    disabled={signingOut}
                    className={clsx(
                      'sm:flex hidden items-center cursor-pointer gap-2 px-3 py-2 text-xs sm:text-sm font-medium rounded transition duration-300 overflow-hidden',
                      'hover:bg-neutral-900/30 hover:text-white',
                      'text-neutral-400 disabled:opacity-50'
                    )}
                  >
                    {signingOut ? (
                      <div className="animate-spin h-4 w-4 border-2 border-yellow-300 border-t-transparent rounded-full" />
                    ) : (
                      <LogOut size={16} className="opacity-60 shrink-0" />
                    )}
                    <span>{signingOut ? 'Signing out...' : 'Sign Out'}</span>
                  </button>

                  <span className="text-sm text-neutral-500/50 font-mono">ossean v0.0.1</span>
                </>
              ) : (
                <Link
                  href="/"
                  className="inline-flex sm:hidden items-center font-mono text-white text-[1.9rem] sm:text-[2.3rem] font-medium leading-none tracking-tight"
                >
                  <span className="text-white">oss</span>
                  <span className="text-neutral-500">ean</span>
                </Link>
              )}
              <button
                onClick={handleSignOut}
                disabled={signingOut}
                className={clsx(
                  'sm:flex hidden items-center cursor-pointer gap-2 px-3 py-2 text-xs sm:text-sm font-medium rounded transition duration-300 overflow-hidden',
                  'hover:bg-neutral-900/30 hover:text-white',
                  'text-neutral-400 disabled:opacity-50'
                )}
              >
                {signingOut ? (
                  <div className="animate-spin h-4 w-4 border-2 border-yellow-300 border-t-transparent rounded-full" />
                ) : (
                  <LogOut size={16} className="opacity-60 shrink-0" />
                )}
                <span>{signingOut ? 'Signing out...' : 'Sign Out'}</span>
              </button>

              <span className="text-sm sm:inline hidden text-neutral-500/50 font-mono">
                ossean v0.0.1
              </span>
            </div>
          )}
        </div>
      </aside>
    </>
  );
}
