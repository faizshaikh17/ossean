import Sidenav from "@/components/ui/dashboard/Sidenav";
import Navbar from "@/components/ui/dashboard/Navbar";
import Image from "next/image";
import Head from "next/head";
import { requireAuth } from "@/lib/session";

export default async function Layout({ children }: { children: React.ReactNode }) {
  await requireAuth();
  return (
    <div className="relative h-screen bg-black text-white flex flex-col overflow-hidden">

      <Head>
        <link
          rel="preload"
          href="/grill.png"
          as="image"
          type="image/png"
          fetchPriority="high"
        />
        <link
          rel="preload"
          href="/bluePurpleYellowGradient.png"
          as="image"
          type="image/png"
          fetchPriority="high"
        />
      </Head>

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

      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 animate-fadeIn">
        <Image
          src="/grill.png"
          alt=""
          fill
          priority
          quality={85}
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-35 animate-fadeIn">
        <Image
          src="/bluePurpleYellowGradient.png"
          alt=""
          fill
          priority
          quality={85}
          className="object-cover object-[top_left]"
        />
      </div>

      <div className="absolute top-6 sm:top-12 md:top-16 lg:top-20 xl:top-24 left-4 sm:left-8 md:left-16 lg:left-20 xl:left-24 w-[0.05rem] h-full sm:h-4/5 md:h-full bg-neutral-900 z-0" />
      <div className="absolute bottom-4 sm:bottom-8 md:bottom-12 lg:bottom-16 xl:bottom-18 left-0 w-full h-[0.05rem] bg-neutral-900 z-0" />
      <div className="absolute right-4 sm:right-8 md:right-16 lg:right-20 xl:right-24 top-0 h-full w-[0.05rem] bg-neutral-900 z-0" />

      <Navbar />
      <div className="flex flex-1 flex-col md:flex-row overflow-hidden relative z-10">
        <Sidenav />
        <main className="flex-grow sm:m-0 mt-10 sm:pt-16  overflow-y-auto bg-transparent backdrop-blur-sm">
          {children}
        </main>
      </div>
    </div>
  );
}
