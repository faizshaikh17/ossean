import Button from '@/components/ui/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen px-44 bg-black text-white flex flex-col justify-center items-center overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 h-full bg-[url('/grill.png')] bg-cover bg-center opacity-30 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('/bg-light.png')] bg-cover bg-top-right pointer-events-none z-0" />

      {/* Grid overlays */}
      <div className="absolute top-24 left-24 w-[0.05rem] h-full bg-neutral-900/50" />
      {/* <div className="absolute top-24 left-24 w-full h-[32rem] opacity-40 bg-gradient-to-r from-neutral-900 to-transparent border-y border-neutral-700/50" /> */}
      <div className="absolute top-[37.9rem] left-0 w-full h-[0.05rem] bg-neutral-900/50" />
      <div className="absolute right-24 h-full w-[0.05rem] bg-neutral-900/50" />

      {/* Top bar */}
      <div className="absolute top-8 left-0 w-full px-44 flex justify-between items-end z-10">
        <Link href="/">
          <span className="text-3xl font-medium font-mono">OpenSea</span>
        </Link>
        <Button
          label="Get started"
          href="/home"
          className="z-10 transition duration-300 shadow-lg hover:shadow-xl"
        />
      </div>

      {/* Main content */}
      <div className="flex w-full justify-between items-center z-10">
        {/* Left section */}
        <div className="flex flex-col gap-5 w-full items-start justify-center z-10">
          <div className="text-left text-3xl sm:text-5xl font-medium leading-[100%] animate-fade-in w-fit z-10">
            <span className="bg-gradient-to-r space-x-2 text-white/90">
              <span>One</span>
              <span>Click</span>
              <span>To</span>
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
              className="mt-3 px-2 py-1 w-fit text-sm font-medium text-neutral-500 tracking-tight border-[2px] transition duration-300 max-sm:px-3 max-sm:py-1 max-sm:text-sm z-10"
              style={{
                borderImage:
                  'conic-gradient(#d4d4d4 0deg, #171717 90deg, #d4d4d4 180deg, #171717 270deg, #d4d4d4 360deg) 1',
              }}
            >
              Discover OSS projects perfectly tailored to your interests.
            </div>
          </div>

          <div className="text-neutral-400 font-medium leading-[100%] transition duration-300 max-sm:px-3 max-sm:py-1 max-sm:text-sm z-10">
            <p>
              Revolutionized how people <br />
              find open source projects, <br />
              making it more personal and relevant.
            </p>
          </div>

          <Button
            label="Get started"
            href="/home"
            className="z-10 transition duration-300 shadow-lg hover:shadow-xl"
          />
        </div>

        {/* Right section */}
        <div className="w-full h-[22.5rem] bg-[url('/worldMap.svg')] bg-cover bg-[position:top] opacity-70 pointer-events-none overflow-x-visible z-10" />
      </div>
    </main>
  );
}
