export default function Loading() {
    return (
        <main className="min-h-screen flex flex-col gap-4 items-center justify-center bg-black text-white">
            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
            <h1 className="text-lg">Just a second babe</h1>
        </main>
    );
}
