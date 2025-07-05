'use client';

import Button from "../../Button";
import Link from "next/link";
import GithubButton from "@/components/GithubButton";
import Image from "next/image";

export default function Hero() {
  const pings = [
    { top: '20%', left: '35%' },
    { top: '40%', left: '60%' },
    { top: '30%', left: '80%' },
    { top: '50%', left: '20%' },
    { top: '35%', left: '50%' },
    { top: '70%', left: '50%' },
    { top: '55%', left: '75%' },
    { top: '60%', left: '68%' },
  ];

  return (
    <>
      <main className="relative w-full min-h-screen bg-black text-white flex flex-col items-center justify-center">
        <section className="relative w-full min-h-screen px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 flex flex-col items-center justify-center">

          <div className="hidden">
            <Image
              src="/grill.png"
              alt=""
              width={1920}
              height={1080}
              priority
              quality={85}
            />
            <Image
              src="/bluePurpleYellowGradient2.png"
              alt=""
              width={1920}
              height={1080}
              priority
              quality={85}
            />
            <Image
              src="/worldMap.png"
              alt=""
              width={1200}
              height={600}
              priority
              quality={85}
            />
          </div>

          <div className="absolute inset-0 z-0 bg-[url('/grill.png')] bg-cover bg-center opacity-30 pointer-events-none animate-fadeIn" />
          <div className="absolute inset-0 z-0 bg-[url('/bluePurpleYellowGradient2.png')] opacity-40 bg-cover pointer-events-none animate-fadeIn" />
          <div className="absolute top-6 sm:top-12 md:top-16 lg:top-20 xl:top-0 left-4 sm:left-8 md:left-16 lg:left-20 xl:left-24 w-[0.05rem] h-full sm:h-4/5 md:h-full bg-gradient-to-b from-transparent via-neutral-900 to-neutral-900" />
          <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-18 left-0 w-full h-[0.05rem] bg-neutral-800/50" />
          <div className="absolute right-4 sm:right-8 md:right-16 lg:right-20 xl:right-24 top-0 h-full w-[0.05rem] bg-neutral-800/50" />

          {/* Header */}
          <div className="absolute top-4 sm:top-6 md:top-8 left-0 w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-44 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 z-10">
            <Link href="/" className="inline-flex items-center font-mono text-white text-[1.9rem] sm:text-[2.3rem] font-medium leading-none tracking-tight">
              <span className="text-white">oss</span>
              <span className="text-neutral-500">ean</span>
            </Link>

            <div className="hidden sm:flex flex-row gap-2 sm:gap-4 w-full sm:w-auto items-start sm:items-center">
              <GithubButton />
              <Button
                label="Get started"
                href="/home"
                className="z-10 transition duration-300 shadow-lg flex hover:shadow-xl sm:w-auto"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-14 lg:gap-4 z-10 mt-24 sm:mt-32 md:mt-20 lg:mt-0 px-4 sm:px-0">
            <div className="flex flex-col gap-6 w-full items-center lg:items-start text-center lg:text-left">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-[100%] animate-fade-in w-fit">
                <span className="bg-gradient-to-r space-x-1 sm:space-x-2 text-white/90">
                  <span>Ocean</span>
                  <span>Of</span>
                  <span>Open</span>
                  <span>Source</span>
                  <br />
                  <span>Built</span>
                  <span>To</span>
                  <span>Save</span>
                  <span>Your</span>
                  <span>Time</span>
                </span>
                <div
                  className="mt-2 sm:mt-3 mx-auto lg:mx-0 px-2 py-1 w-fit text-xs sm:text-sm font-medium text-neutral-500 tracking-tight border-[2px] transition duration-300"
                  style={{
                    borderImage:
                      'conic-gradient(#d4d4d4 0deg, #171717 90deg, #d4d4d4 180deg, #171717 270deg, #d4d4d4 360deg) 1',
                  }}
                >
                  Discover OSS Projects in Seconds.
                </div>
              </div>

              <div className="text-neutral-400 font-medium leading-5 transition duration-300 text-sm sm:text-base">
                <p>
                  Revolutionized how people <br />
                  find open source projects, <br />
                  making it more personal and relevant.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row justify-center sm:justify-start items-center gap-4 w-full sm:w-auto">
                <Button
                  label="Get started"
                  href="/home"
                  className="z-10 transition duration-300 shadow-lg hover:shadow-xl w-fit sm:w-auto"
                />
                <button className="px-4 py-2 text-sm font-semibold flex items-center border border-neutral-700/30 justify-center sm:justify-between gap-1.5 text-white bg-neutral-800 focus:outline-none transition-colors duration-300 z-10 shadow-lg hover:shadow-xl w-fit sm:w-auto">
                  Not backed by <span className="text-white bg-orange-500 px-1.5">Y</span>
                </button>
              </div>
            </div>

            <div className="relative w-full h-48 sm:h-64 md:h-80 lg:h-[22.5rem] bg-[url('/worldMap.png')] bg-contain lg:bg-cover bg-center bg-no-repeat pointer-events-none scale-[1.05] animate-fadeIn">
              {pings.map((pos, i) => (
                <span
                  key={i}
                  className="absolute -translate-x-1/2 -translate-y-1/2"
                  style={{
                    top: pos.top,
                    left: pos.left,
                    animationDelay: `${(i % 5) * 0.4}s`,
                  }}
                >
                  <span className="relative flex h-[0.3rem] w-[0.3rem] items-center justify-center">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-yellow-300 opacity-70 blur-sm animate-pulse" />
                    <span className="relative inline-flex h-[0.15rem] w-[0.15rem] rounded-full bg-yellow-400" />
                  </span>
                </span>
              ))}

            </div>
          </div>
        </section>
      </main>
    </>
  );
}