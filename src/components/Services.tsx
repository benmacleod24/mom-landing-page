import { Camera, ChartNetwork, Handshake, ListTodo } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

export default function Services() {
	return (
		<SectionWrapper id="services">
			<h1 className="butler-bold text-3xl text-zinc-900 mb-3">
				Signature Services
			</h1>
			<div className="grid lg:grid-cols-4 gap-5">
				<div className="bg-muted p-6 rounded-lg drop-shadow-sm">
					<ChartNetwork size={40} className="text-[#af1f22]" />
					<h2 className="font-bold mt-5 mb-1">
						Set the Right Price
					</h2>
					<p className="text-sm text-muted-foreground">
						I use advanced market analysis tools and local
						expertise to determine the ideal price for your
						home—attracting buyers and maximizing your return.
					</p>
				</div>
				<div className="bg-muted p-6 rounded-lg drop-shadow-sm">
					<Camera size={40} className="text-[#af1f22]" />
					<h2 className="font-bold mt-5 mb-1">
						Maximize Your Exposure
					</h2>
					<p className="text-sm text-muted-foreground">
						From professional photography to targeted online and
						offline campaigns, I create a tailored marketing plan
						that highlights your home’s unique appeal.
					</p>
				</div>
				<div className="bg-muted p-6 rounded-lg drop-shadow-sm">
					<Handshake size={40} className="text-[#af1f22]" />
					<h2 className="font-bold mt-5 mb-1">Get the Best Deal</h2>
					<p className="text-sm text-muted-foreground">
						With years of experience navigating complex contracts,
						I negotiate fiercely to protect your interests and
						secure the best deal for you.
					</p>
				</div>
				<div className="bg-muted p-6 rounded-lg drop-shadow-sm">
					<ListTodo size={40} className="text-[#af1f22]" />
					<h2 className="font-bold mt-5 mb-1">
						Simplify the Process
					</h2>
					<p className="text-sm text-muted-foreground">
						From staging to closing, I’ll handle the details and
						logistics, ensuring a seamless and stress-free selling
						process.
					</p>
				</div>
			</div>
		</SectionWrapper>
	);
}
