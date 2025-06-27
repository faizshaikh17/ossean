import Link from 'next/link';
import { Button as ButtonType } from '../../types/buttonType';

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
            className={`px-4 py-2 text-sm border border-gray-300 rounded-md bg-white text-black hover:bg-gray-100 focus:outline-none transition-colors duration-200 ${className}`}
        >
            {label}
        </Link>
    );
}
