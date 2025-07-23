import About from "@/components/About";
import Hero from "@/components/Hero";
import Interests from "@/components/Interests";
import Work from "@/components/Work";
import Cta from "@/components/Cta";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Interests />
      <Work />
      <Cta />
    </main>
  )
}
