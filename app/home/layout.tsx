import Sidenav from "@/components/ui/dashboard/Sidenav";
import Navbar from "@/components/ui/dashboard/Navbar";
import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-screen bg-black text-white flex flex-col overflow-hidden">
      {/* Preload images using Next.js Image component with hidden visibility */}
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
          src="/bluePurpleYellowGradient.png"
          alt=""
          width={1920}
          height={1080}
          priority
          quality={85}
        />
      </div>

      {/* Background images with fade-in animation */}
      <div className="absolute inset-0 z-0 bg-[url('/grill.png')] bg-cover bg-center opacity-40 pointer-events-none animate-fadeIn" />
      <div className="absolute inset-0 z-0 bg-[url('/bluePurpleYellowGradient.png')] bg-top-left opacity-35 bg-cover pointer-events-none animate-fadeIn" />

      <div className="absolute top-6 sm:top-12 md:top-16 lg:top-20 xl:top-24 left-4 sm:left-8 md:left-16 lg:left-20 xl:left-24 w-[0.05rem] h-full sm:h-4/5 md:h-full bg-neutral-900 z-0" />
      <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-18 left-0 w-full h-[0.05rem] bg-neutral-900 z-0" />
      <div className="absolute right-4 sm:right-8 md:right-16 lg:right-20 xl:right-24 top-0 h-full w-[0.05rem] bg-neutral-900 z-0" />

      <Navbar />
      <div className="flex flex-1 flex-col md:flex-row overflow-hidden relative z-10">
        <Sidenav />
        <main className="flex-grow overflow-y-auto bg-transparent backdrop-blur-sm">
          {children}
        </main>
      </div>
    </div>
  );
}