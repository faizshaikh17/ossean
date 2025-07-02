export default function Loading({ message = "Just a second babe" }) {
  return (
    <main className="min-h-screen flex flex-col gap-5 items-center justify-center bg-black/60 backdrop-blur-md text-white relative z-10">
      <div className="w-10 h-10 border-4 border-transparent border-t-yellow-300 rounded-full animate-spin" />
      <h1 className="text-base sm:text-lg font-medium text-neutral-300 tracking-tight">
        {message}
      </h1>
    </main>
  );
}
