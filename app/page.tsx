import Hero from "@/components/ui/landing/Hero";
import Video from "@/components/ui/landing/Video";
import Footer from "@/components/ui/landing/Footer";
import { getSession } from "@/lib/session";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getSession();

  if (session) {
    redirect("/home");
  } 

  return (
    <>
      <Hero />
      <Video />
      <Footer />
    </>
  );
}