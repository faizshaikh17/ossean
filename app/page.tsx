'use client';
import Button from '@/components/ui/Button';

export default function Home() {
  return (
    <main className="relative px-44 w-full min-h-screen bg-black flex flex-col justify-center items-center overflow-hidden text-white">
      <div className="absolute h-full inset-0 bg-[url('/grill.png')] opacity-30 bg-cover bg-center pointer-events-none z-0" />
      <div className="absolute top-24 left-24 bg-neutral-900/50 h-full w-[0.05rem]" />
      <div className="absolute top-24 left-24 bg-gradient-to-r border-t border-b border-neutral-700/50 from-neutral-900 to-transparent  h-[32rem] opacity-40 w-full" />
      <div className="absolute right-24 bg-neutral-900/50 h-full w-[0.05rem]" />

      <div className="absolute inset-0 bg-[url('/bg-light.png')] opacity-30 bg-cover bg-top-right pointer-events-none z-0" />
      <div className='flex z-10 w-full px-44 absolute top-8 left-0 justify-between items-end'>
        <span className=' text-3xl font-medium font-mono'>OpenSea</span>
        <Button
          label="Get started"
          href="/home"
          className="z-10  transition duration-300 shadow-lg hover:shadow-xl"
        />
      </div>
      <div className='flex justify-between w-full items-center z-10'>
        <div className=' flex flex-col gap-5 justify-center w-full items-start z-10'>
          <div className="z-10 text-left font-medium text-3xl w-fit sm:text-5xl leading-[100%] animate-fade-in">
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
              className="z-10 border-[2px] mt-3 px-2 py-1 w-fit text-sm font-medium text-neutral-500 tracking-tight  transition duration-300 max-sm:px-3 max-sm:py-1 max-sm:text-sm"
              style={{
                borderImage:
                  'conic-gradient(#d4d4d4 0deg, #171717 90deg, #d4d4d4 180deg, #171717 270deg, #d4d4d4 360deg) 1',
              }}
            >
              Discover OSS projects perfectly tailored to your interests.
            </div>
          </div>


          <div className="z-10 font-medium text-neutral-400 leading-[100%]  transition duration-300 max-sm:px-3 max-sm:py-1 max-sm:text-sm">
            <p>Revolutionized how people <br /> find open source projects,<br /> making it more personal and relevant.</p>
          </div>

          <Button
            label="Get started"
            href="/home"
            className="z-10  transition duration-300 shadow-lg hover:shadow-xl"
          />
        </div>
        <div className="bg-[url('/worldMap.svg')] w-full h-[22.5rem] opacity-30 bg-cover bg-[position:top_right] overflow-x-visible pointer-events-none z-10" />
      </div>
    </main>
  );
}
