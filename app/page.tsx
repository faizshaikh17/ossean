import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="relative min-h-screen flex justify-center items-center w-full overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grain.png')] bg-cover bg-center pointer-events-none z-0" />
      <Button label="Get started" href={'/home'} className="z-10" />
    </main>
  );
}
