import Sidenav from "@/components/ui/Sidenav";

export default function layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen bg-neutral-950 text-white flex-col md:flex-row overflow-hidden">
            <aside className="w-full m-2 md:w-64 flex-shrink-0 rounded-xl bg-neutral-900">
                <Sidenav />
            </aside>
            <main className="flex-grow overflow-y-auto p-4 md:p-6">
                {children}
            </main>
        </div>
    );
}
