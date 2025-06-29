import Sidenav from "@/components/ui/dashboard/Sidenav";
import Navbar from "@/components/ui/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative h-screen bg-[#09090B] text-white flex flex-col overflow-hidden">
      <Navbar />
      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        <Sidenav />
        <main className="flex-grow overflow-y-auto bg-[#09090B]">
          {children}
        </main>
      </div>
    </div>
  );
}
