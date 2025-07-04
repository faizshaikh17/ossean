import Link from 'next/link';
import { Button as ButtonType } from '../../types/buttonType';
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
            className={`px-4 py-2 font-semibold text-[0.95rem] flex items-center justify-between gap-1.5 bg-gradient-to-r rounded-md from-white/60 to-white text-black focus:outline-none transition-colors duration-300 ${className}`}
        >
            <SquareArrowOutUpRight size={17} /> {label}
        </Link>
    );
}
