import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col justify-center items-center w-full overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grain.png')] bg-cover bg-center pointer-events-none z-0" />
      <div
        className="inline-flex z-10 items-center px-3.5 py-1.5 mb-5 rounded-full text-primary-500 text-sm font-medium tracking-tight max-sm:px-3 max-sm:py-1 max-sm:text-xs"
        style={{
          backgroundColor: 'transparent',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderImage: 'conic-gradient(#d4d4d4 0deg, #171717 90deg, #d4d4d4 180deg, #171717 270deg, #d4d4d4 360deg) 1',
          borderRadius:'5rem'
        }}
      >
        ✨ Start your open source with OpenSea
      </div>

      <Button label="Get started" href={'/home'} className="z-10" />
    </main>
  );
}
