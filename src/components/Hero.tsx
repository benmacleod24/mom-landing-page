import SectionWrapper from "./SectionWrapper";
import Background from "@/assets/home_interiorier.jpg";
import Logo from "@/assets/mom_logo_resized.svg";

const subheader =
	"Serving Ohio and Michigan with expert guidance in selling, buying, and building homes.";

export default function Hero() {
	return (
		<div className="w-screen h-screen overflow-hidden relative">
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
							href="#sell"
							className="border rounded-md p-3 text-white hover:bg-muted/20 transition-all text-center"
						>
							Learn More About Selling
						</a>
						<a
							href="#build"
							className="border rounded-md p-3 text-white hover:bg-muted/20 transition-all text-center "
						>
							Explore Building Services
						</a>
					</div>
				</SectionWrapper>
			</div>

			<div className="w-full lg:max-w-[80%] p-4 lg:px-0 absolute top-0 left-1/2 -translate-x-1/2 flex justify-between items-center">
				<img src={Logo} className="w-40" />
				<div className="hidden lg:flex items-center gap-4">
					<a
						href="#about"
						className="text-white hover:text-white/75 transition-all cursor-pointer text-sm"
					>
						About Me
					</a>
					<a
						href="#sell"
						className="text-white hover:text-white/75 transition-all cursor-pointer text-sm"
					>
						Sell Your Home
					</a>
					<a
						href="#build"
						className="text-white hover:text-white/75 transition-all cursor-pointer text-sm"
					>
						Build Your Home
					</a>
					{/* <a className="text-white hover:text-white/75 transition-all cursor-pointer text-sm">
						Your Home Value
					</a> */}
				</div>
			</div>
		</div>
	);
}
