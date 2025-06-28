import Sidenav from "@/components/ui/dashboard/Sidenav";
import Navbar from "@/components/ui/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen bg-[#09090B] text-white flex flex-col">
      <Navbar />
      <div className="flex flex-1 overflow-hidden flex-col md:flex-row">
        <Sidenav />
        <main className="flex-grow bg-[#09090B] overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
