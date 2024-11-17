import SectionWrapper from "./SectionWrapper";

export default function AboutMe() {
	return (
		<SectionWrapper className="bg-transparent" id="about-me">
			<div className="flex flex-col lg:flex-row">
				<div className="drop-shadow w-full lg:min-w-80 h-80 rounded-xl overflow-hidden">
					<img
						src="https://assets.agentfire3.com/uploads/sites/754/2023/01/137698-e1674493459447.jpeg"
						className="w-full h-full object-cover object-center"
					/>
				</div>
				<div className="mt-5 lg:ml-10">
					<h1 className="text-2xl font-bold butler-bold text-zinc-700 leading-none">
						About Me
					</h1>
					<p className="text-sm italic text-[#af1f22]">
						Michigan & Ohio Realtor®
					</p>
					<div className="mt-1.5 space-y-3">
						<p className="text-md text-zinc-700">
							Jenny graduated from the University of Toledo
							College of Engineering with a bachelor degree in
							Civil Engineering and Construction Management, and
							has years of engineering, project management, and
							contract negotiation experience, all of which
							helped lay the foundation for a successful career
							in real estate. She's been one of the top agents in
							Monroe County year after year!
						</p>
						<p className="text-md text-zinc-700">
							She is a resident of Monroe where she lives with
							her husband and three children, who are all active
							in sports and school programs within the community.
							She enjoys outdoor activities and volunteering at
							her children’s schools and for local nonprofit
							organizations such as Habitat for Humanity and
							LIttle Blessings Veterans organization. She also
							enjoys planning vacations for her clients and
							traveling regularly.
						</p>
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
}
