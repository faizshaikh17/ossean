import React from 'react'
import Link from 'next/link'
export default function Navbar() {
    return (
        <div className="border-b sticky top-0 z-10 flex justify-center border-t w-full bg-black border-neutral-700/60 border-dashed">
            <div className="w-full max-w-full">
                <div className="flex px-10 py-3 flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <Link href="/">
                        <div className="flex items-center gap-1 min-w-[14rem] justify-center md:justify-start">
                            <svg
                                id="logo-35"
                                width="35"
                                height="39"
                                viewBox="0 0 50 39"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="shrink-0"
                            >
                                <path
                                    d="M16.4992 2H37.5808L22.0816 24.9729H1L16.4992 2Z"
                                    className="ccompli1"
                                    fill="#A3A3A3"
                                />
                                <path
                                    d="M17.4224 27.102L11.4192 36H33.5008L49 13.0271H32.7024L23.2064 27.102H17.4224Z"
                                    className="ccustom"
                                    fill="#404040"
                                />
                            </svg>
                            <h1 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-neutral-500">
                                OpenSea
                            </h1>
                        </div>
                    </Link>
                    {/* <Search placeholder="Search credit cards..." /> */}
                </div>
            </div>
        </div>
    )
}
