import Hero from "@/components/sections/Hero";
import Benchmarks from "@/components/sections/Benchmarks";
import Research from "@/components/sections/Research";
import Technology from "@/components/sections/Technology";
import UseCases from "@/components/sections/UseCases";
import Process from "@/components/sections/Process";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
	return (
		<div className="relative w-full">
			<div className="fixed inset-0 -z-999 h-screen-dynamic overflow-hidden">
				<div className="absolute bg-radial-[circle_farthest-corner_at_10%_20%] from-brand-600/35 via-brand-600/10 to-transparent blur-[180px] -top-70 -left-60 h-250 w-250 md:h-350 md:w-500 md:-top-90 md:-left-100 pointer-events-none rounded-full"></div>
			</div>
			<Hero />
			<Benchmarks />
			<Research />
			<Technology />
			<UseCases />
			<Process />
			<CallToAction />
		</div>
	);
}
