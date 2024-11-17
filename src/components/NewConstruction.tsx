import HomeConsturction from "@/assets/home_consturction.jpg";
import SectionWrapper from "./SectionWrapper";

export default function NewConstruction() {
	return (
		<SectionWrapper className="bg-[#af1f22]">
			<div className="flex flex-col lg:flex-row gap-8">
				<div className="lg:mb-0">
					<h1 className="text-2xl font-bold text-white">
						New Construction
					</h1>
					<div className="text-zinc-200 mt-1.5 space-y-3">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Tempora, incidunt ab delectus assumenda
							possimus eius sapiente similique, dolores sequi
							perspiciatis ullam cupiditate nihil ipsum.
							Perspiciatis quo sunt corrupti dolorem dolores.
						</p>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing
							elit. Itaque quaerat cumque obcaecati.
							Necessitatibus facere quas provident. Nulla quae at
							libero esse fuga reprehenderit vel quibusdam
							assumenda quisquam recusandae, corrupti
							praesentium?
						</p>
					</div>
				</div>

				<div className="drop-shadow w-full lg:min-w-80 h-80 rounded-xl overflow-hidden outline outline-white">
					<img
						src={HomeConsturction}
						className="w-full h-full object-cover object-center"
					/>
				</div>
			</div>
		</SectionWrapper>
	);
}
