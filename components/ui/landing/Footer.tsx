import Link from "next/link"
import { Mail, Twitter, Github } from "lucide-react";

export default function Footer() {
    return (
        <footer className="w-full text-xs font-mono text-neutral-400 py-12 px-4 border-t border-white/[0.08] bg-black/90 backdrop-blur-sm relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            
            <div className="max-w-6xl mx-auto relative z-10">
                <div className="flex flex-col gap-8">
                    
                    <div className="flex sm:flex-row flex-col sm:justify-between sm:items-end items-center gap-6">
                        
                        <div className="flex flex-col items-center sm:items-start gap-1">
                            <div className="text-[10px] uppercase tracking-[0.3em] text-neutral-500">
                                © 2025 All Rights Reserved
                            </div>
                        </div>

                        <div className="text-white text-sm font-medium tracking-wide">
                                OSSEAN
                            </div>

                        <div className="flex items-center gap-8">
                            <Link
                                href="https://twitter.com/faizxtwt"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 hover:text-white transition-colors duration-200"
                            >
                                <Twitter className="w-4 h-4" />
                                <span className="text-[10px] uppercase tracking-wider">Twitter</span>
                            </Link>

                            <Link
                                href="https://github.com/faizshaikh17"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center gap-2 hover:text-white transition-colors duration-200"
                            >
                                <Github className="w-4 h-4" />
                                <span className="text-[10px] uppercase tracking-wider">GitHub</span>
                            </Link>

                            <Link
                                href="mailto:info.ossean@gmail.com"
                                className="group flex items-center gap-2 hover:text-white transition-colors duration-200"
                            >
                                <Mail className="w-4 h-4" />
                                <span className="text-[10px] uppercase tracking-wider">Email</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}