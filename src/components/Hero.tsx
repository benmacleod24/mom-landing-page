import { ChevronDown } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

export default function Hero() {
	return (
		<div className="w-full h-[90vh] overflow-hidden relative">
			<img
				src="https://upload.wikimedia.org/wikipedia/commons/8/81/Monroe_from_the_River_Raisin.jpg"
				className="object-cover h-full w-full object-center grayscale"
			/>
			<div className="w-full h-full absolute top-0 left-0 bg-gradient-to-tr from-red-600/70 to-black/40 backdrop-blur-[1px]" />
			<div className="w-full h-full absolute top-0 left-0">
				<SectionWrapper className="flex flex-col h-full justify-center">
					<h1 className="butler-bold text-5xl lg:text-7xl text-white">
						Jennifer Macleod
					</h1>
				</SectionWrapper>

				<div className="absolute bottom-10 left-1/2 -translate-x-1/2">
					<a href="#about-me">
						<ChevronDown
							size={30}
							className="text-muted cursor-pointer hover:scale-110 transition-all"
						/>
					</a>
				</div>
			</div>
		</div>
	);
}
