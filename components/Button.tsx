import Link from 'next/link';
import { Button as ButtonType } from '../types/buttonType';
import { SquareArrowOutUpRight } from 'lucide-react';

export default function Button({
    label,
    href,
    target,
    rel,
    className,
}: ButtonType) {
    return (
        <Link
            href={href || '/home'}
            prefetch={true}
            target={target}
            rel={rel}
            className={`group relative px-4.5 rounded-xs py-[0.45rem] font-semibold text-sm flex items-center justify-center gap-2 bg-white text-black  border border-white/80 focus:outline-none transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_8px_35px_rgba(255,255,255,0.4)] hover:bg-gray-50 active:scale-[0.98] hover:-translate-y-1 active:translate-y-0 overflow-hidden ${className}`}
        >

            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/80 to-transparent group-hover:translate-x-full transition-transform duration-800 ease-out" />
            
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-50/20 via-purple-50/30 to-blue-50/20 transition-opacity duration-500 ease-out" />
            
            <div className="absolute inset-[1px] rounded-[calc(0.125rem-1px)] bg-gradient-to-b from-white/80 to-white/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />



            <span className="relative z-10 tracking-tight">
                {label}
            </span>
            
            <SquareArrowOutUpRight
                size={16}
                className="relative z-10 transition-all duration-300 ease-out"
            />

            <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out" />
            
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-white/30 rounded-full opacity-0 group-hover:opacity-100 blur-sm transition-all duration-300 ease-out" />
        </Link>
    );
}