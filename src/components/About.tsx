import { ContactInfo, Headshot } from "@/lib/config";
import SectionWrapper from "./SectionWrapper";

export default function AboutSection() {
	return (
		<SectionWrapper id="about">
			<div className="flex gap-8 lg:gap-14 w-full flex-col lg:flex-row items-center">
				<div className="min-w-[25%] w-full rounded-lg shadow overflow-hidden">
					<img
						src={Headshot}
						className="bg-muted-foreground w-full"
					/>
				</div>
				<div>
					<div className="mb-3">
						<h2 className="text-2xl font-bold text-brand">
							{ContactInfo.name}
						</h2>
						<p className="text-sm text-muted-foreground">
							MI and OH Realtor®
						</p>
					</div>
					<div className="text-sm space-y-3">
						<p>
							Jenny holds a Bachelor&apos;s degree in Civil
							Engineering and Construction Management from the
							University of Toledo College of Engineering. With
							years of experience in engineering, project
							management, and contract negotiation, she built a
							strong foundation for a thriving career in real
							estate. A top agent in Monroe County year after
							year, Jenny&apos;s expertise and dedication have
							earned her a reputation for excellence in the
							industry.
						</p>
						<p>
							A proud Monroe resident, Jenny lives with her
							husband and three children, who are active in local
							sports and school programs. She enjoys outdoor
							activities, traveling, and volunteering with
							organizations like Habitat for Humanity and Little
							Blessings Veterans organization. In her free time,
							she loves exploring local favorites like Sterling
							State Park, Michigan Bar and Grill, and the Toledo
							Zoo. Cooking and barbecuing are among her passions,
							making a spacious chef&apos;s kitchen or outdoor
							kitchen the centerpiece of her dream home.
							Jenny&apos;s commitment to helping others achieve
							their dreams is the driving force behind her
							success, and her knowledge, professionalism, and
							enthusiasm make her an invaluable member of our
							team.
						</p>
					</div>
				</div>
			</div>
		</SectionWrapper>
	);
}
