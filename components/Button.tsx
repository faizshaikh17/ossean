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
            className={`group relative px-4.5 py-[0.5rem] font-semibold text-sm flex items-center justify-center gap-2 bg-white text-black rounded border border-white/80 focus:outline-none transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:bg-gray-50 active:scale-[0.98] overflow-hidden ${className}`}
        >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-gray-200/60 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-out" />
            
            <SquareArrowOutUpRight 
                size={16} 
                className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
            />
            
            <span className="relative z-10 tracking-tight">
                {label}
            </span>
            
            <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-gray-100/0 via-gray-100/30 to-gray-100/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Link>
    );
}