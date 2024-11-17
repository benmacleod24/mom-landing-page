import HomeConsturction from "@/assets/home_consturction.jpg";
import SectionWrapper from "./SectionWrapper";
import Text from "./ui/text";

export default function NewConstruction() {
	return (
		<SectionWrapper className="bg-[#af1f22]">
			<div className="flex flex-col lg:flex-row gap-8">
				<div className="lg:mb-0">
					<h1 className="text-2xl font-bold text-white butler-bold">
						New Construction
					</h1>
					<div className="text-zinc-200 mt-1.5 space-y-3">
						<Text className="text-muted">
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Natus ab rerum asperiores culpa repellat,
							inventore aliquid non explicabo a totam, dolorum
							sapiente id consectetur magni provident optio,
							consequatur ea consequuntur.{"\n\n"}Lorem, ipsum
							dolor sit amet consectetur adipisicing elit. Animi
							veritatis a atque labore dolore, vel provident
							explicabo omnis, laboriosam rerum alias officiis
							iste exercitationem sapiente repellendus optio quis
							neque veniam.{"\n\n"}Lorem, ipsum dolor sit amet
							consectetur adipisicing elit. Animi veritatis a
							atque labore dolore, vel provident explicabo omnis,
							laboriosam rerum alias officiis iste exercitationem
							sapiente repellendus optio quis neque veniam.
						</Text>
					</div>
				</div>

				<div className="drop-shadow w-full lg:min-w-lg lg:max-w-lg h-80 rounded-xl overflow-hidden outline outline-white">
					<img
						src={HomeConsturction}
						className="w-full h-full object-cover object-center"
					/>
				</div>
			</div>
		</SectionWrapper>
	);
}
