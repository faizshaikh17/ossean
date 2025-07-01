'use client';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <main className="relative px-[12rem] w-full min-h-screen bg-black flex flex-col justify-center items-start overflow-hidden text-white">
      <div className="absolute h-full inset-0 bg-[url('/grill.png')] bg-cover bg-center pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[url('/bg-light.png')] bg-cover bg-top-right pointer-events-none z-0" />
      <div className='flex z-10 w-full px-[12rem] absolute top-10 left-0 justify-between items-center'>
        <span className=' text-2xl font-mono'>OpenSea</span>
        <Button
          label="Get started"
          href="/home"
          className="z-10 w-[8.5rem] transition duration-300 shadow-lg hover:shadow-xl"
        />
      </div>
      <div className=' flex flex-col justify-center items-start z-10'>
        <div className="z-10 text-left font-medium text-3xl sm:text-[3.8rem] leading-[100%] mb-4 animate-fade-in">
          <span className="bg-gradient-to-r space-x-2 text-white/80">
            <span>One</span>
            <span>Click To</span>
            <br />
            <span>Open</span>
            <span>Source</span>
          </span>
        </div>
        <div
          className="z-10 border-[2px] px-4 py-1  mb-6 text-sm font-medium text-neutral-500 tracking-tight  transition duration-300 max-sm:px-3 max-sm:py-1 max-sm:text-xs"
          style={{
            borderImage:
              'conic-gradient(#d4d4d4 0deg, #171717 90deg, #d4d4d4 180deg, #171717 270deg, #d4d4d4 360deg) 1',
          }}
        >
          Discover OSS projects perfectly tailored to your interests.
        </div>

        <Button
          label="Get started"
          href="/home"
          className="z-10 w-[8.5rem] transition duration-300 shadow-lg hover:shadow-xl"
        />
      </div>
    </main>
  );
}
