import SectionWrapper from "./SectionWrapper";
import HomeConstruction from "@/assets/home_consturction.jpg";

export default function BuildYourHome() {
	return (
		<SectionWrapper id="build">
			<h1 className="butler-bold text-3xl text-[#af1f22]">
				Building Your Dream Home
			</h1>

			<div className="grid lg:grid-cols-3 grid-cols-1 mt-5 gap-10 w-full">
				<div className="col-span-2">
					<h2 className="font-semibold text-lg">
						Why Use a Realtor When Building a Home?
					</h2>
					<ul className="list-disc ml-5 mt-3 flex-1">
						<li className="text-muted-foreground">
							<span className="text-zinc-900 font-bold">
								Advocate for Your Interests:
							</span>{" "}
							A realtor works for you, ensuring your goals are
							prioritized throughout the process.
						</li>
						<li className="text-muted-foreground">
							<span className="text-zinc-900 font-bold">
								Market Expertise:
							</span>{" "}
							We help you choose the right location, considering
							neighborhood trends and long-term value.
						</li>
						<li className="text-muted-foreground">
							<span className="text-zinc-900 font-bold">
								Skilled Negotiation:
							</span>{" "}
							We handle negotiations with builders to secure the
							best terms and upgrades for your budget.
						</li>
						<li className="text-muted-foreground">
							<span className="text-zinc-900 font-bold">
								Expert Guidance:
							</span>{" "}
							From contract review to builder warranties, we
							guide you through the details.
						</li>
						<li className="text-muted-foreground">
							<span className="text-zinc-900 font-bold">
								Stress-Free Process:
							</span>{" "}
							We manage the logistics, keeping everything
							organized while you focus on designing your dream
							home.
						</li>
					</ul>
				</div>
				<div className="w-full h-full col-span-3 lg:col-span-1">
					<img
						src={HomeConstruction}
						className="w-full h-full object-cover object-center rounded-lg overflow-hidden shadow"
					/>
				</div>
			</div>
		</SectionWrapper>
	);
}
