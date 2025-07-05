'use client';

import Link from 'next/link';
import GithubButton from '@/components/GithubButton';

export default function Navbar() {
    return (
        <nav className="w-full h-16 sm:px-10 px-5 bg-black/40 backdrop-blur-sm border-b border-neutral-800/50 flex justify-between items-center z-50">

            <Link href="/" className="inline-flex items-center font-mono text-white text-[1.9rem] sm:text-[2.3rem] font-medium leading-none tracking-tight">
                <span className="text-white">oss</span>
                <span className="text-neutral-500">ean</span>
            </Link>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-start sm:items-center z-10 w-full sm:w-auto">
                <div className='z-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-4 w-full sm:w-auto'>
                    <GithubButton />    
                </div>
            </div>

        </nav>
    );
}
