import Hero from "@/components/sections/Hero";
import Benchmarks from "@/components/sections/Benchmarks";
import Partners from "@/components/sections/Partners";
import Research from "@/components/sections/Research";
import Technology from "@/components/sections/Technology";
import UseCases from "@/components/sections/UseCases";
import Process from "@/components/sections/Process";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <main className="h-full">
      <Hero />
      <Benchmarks />
      <Partners />
      <Research />
      <Technology />
      <UseCases />
      <Process />
      <CallToAction />
    </main>
  );
}
