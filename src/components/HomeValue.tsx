import HomebotWidget from "./HomeBot";
import SectionWrapper from "./SectionWrapper";
import Map from "@/assets/map.jpg";

export default function HomeValue() {
	return (
		<div className="w-full relative h-[40vh]">
			<SectionWrapper className="z-20">
				<h1 className="butler-bold text-3xl text-white">
					Curious About Your Home's Value?
				</h1>
				<p className="mb-5 text-muted">
					Receive a personalized market analysis—no obligations, just
					valuable insights.
				</p>
				<HomebotWidget />
			</SectionWrapper>
			<div className="w-full h-full bg-gradient-to-tr backdrop-blur-sm from-black to-black/50 absolute top-0 left-0 -z-10" />
			<img
				src={Map}
				className="w-full h-full object-cover object-center absolute top-0 left-0 -z-20"
			/>
		</div>
	);
}
