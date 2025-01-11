import SectionWrapper from "./SectionWrapper";
import Background from "@/assets/home_interiorier.jpg";
import Header from "./Header";
import { ArrowRight, ExternalLink } from "lucide-react";

const subheader =
	"Serving Ohio and Michigan with expert guidance in selling, buying, and building homes.";

export default function Hero() {
	return (
		<div className="w-screen h-screen overflow-hidden relative">
			<Header />
			<img
				src={Background}
				className="object-cover h-full w-full object-center"
			/>
			<div className="w-full h-full absolute top-0 left-0 bg-gradient-to-tr from-black to-black/50 backdrop-blur-[1px]" />
			<div className="w-full h-full absolute top-0 left-0">
				<SectionWrapper className="flex flex-col items-center justify-center h-full">
					<h1 className="butler-bold text-white text-5xl lg:text-6xl leading-none p-0 -mb-2 lg:mb-0">
						Your{" "}
						<span className="text-[#af1f22] butler-bold">
							Trusted Realtor
						</span>{" "}
						for Every Chapter of Homeownership
					</h1>
					<h1 className="text-white text-xl my-5">{subheader}</h1>
					<div className="flex flex-col lg:flex-row gap-5 mt-10">
						<a
							href="#homevalue"
							className="group border lg:max-w-[15rem] justify-center w-full rounded-md p-3 flex items-center gap-3 text-white hover:bg-muted/20 transition-all text-center"
						>
							Find Your Home Value{" "}
							<ArrowRight
								size={20}
								className="mt-0.5 group-hover:translate-x-1 transition-all"
							/>
						</a>
						<a
							href="https://cal.com/jennifer-macleod/consultation"
							target="_blank"
							className="group border lg:max-w-[15rem] justify-center w-full rounded-md p-3 flex items-center gap-3 text-white hover:bg-muted/20 transition-all text-center"
						>
							Schedule Consultaion{" "}
							<ExternalLink
								size={20}
								className="mt-0.5 group-hover:scale-110 transition-all"
							/>
						</a>
					</div>
				</SectionWrapper>
			</div>
		</div>
	);
}
