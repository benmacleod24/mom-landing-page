import SectionWrapper from "./SectionWrapper";
import HeadShot from "@/assets/headshot.webp";

export default function SellYourHome() {
	return (
		<SectionWrapper id="sell">
			<div className="grid w-full lg:grid-cols-3 gap-10">
				<div className="w-full space-y-1">
					<img
						src={HeadShot}
						className="w-full h-80 object-cover object-center rounded-lg overflow-hidden shadow"
					/>
				</div>
				<div className="col-span-2 flex flex-col h-full">
					<h1 className="butler-bold text-3xl text-[#af1f22]">
						What Sets Me Apart
					</h1>

					<ul className="list-disc ml-5 mt-5 flex-1">
						<li className="text-muted-foreground">
							<span className="text-zinc-900 font-bold">
								Proven Expertise:
							</span>{" "}
							Over 8 years of experience as a licensed realtor
							and associate broker in Ohio and Michigan.
						</li>
						<li className="text-muted-foreground">
							<span className="text-zinc-900 font-bold">
								Tailored Strategies:
							</span>{" "}
							Customized marketing plans and pricing strategies
							designed to maximize your home’s value.
						</li>
						<li className="text-muted-foreground">
							<span className="text-zinc-900 font-bold">
								Skilled Negotiator:
							</span>{" "}
							Expert in handling offers, counteroffers, and
							contract terms to secure the best deal.
						</li>
						<li className="text-muted-foreground">
							<span className="text-zinc-900 font-bold">
								Dual-Market Advantage:
							</span>{" "}
							Ability to market and navigate homes across two
							dynamic real estate markets, broadening your
							exposure.
						</li>
					</ul>
					<button className="border py-2 lg:w-52 w-full mt-5 lg:mt-0 px-3 lg:ml-5 hover:bg-[#af1f22] hover:text-white border-[#af1f22] font-semibold text-zinc-900 transition-all rounded-lg">
						Contact Me
					</button>
				</div>
			</div>
		</SectionWrapper>
	);
}
