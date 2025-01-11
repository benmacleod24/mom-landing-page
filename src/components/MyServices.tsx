import {
	ArrowRight,
	Blocks,
	ChartNoAxesColumn,
	HandCoins,
	Handshake,
	Home,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";
import { Link } from "wouter";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

export default function MyServices() {
	return (
		<SectionWrapper className="bg-brand">
			<div className="mb-6">
				<h1 className="text-3xl font-bold text-white">My Services</h1>
				<p className="text-muted max-w-2xl mt-1">
					I provide a range of services, including new home
					construction, home listings, and market investment
					guidance. Explore below to learn more.
				</p>
			</div>
			<div className="grid lg:grid-cols-4 gap-5">
				<div className="bg-muted p-4 rounded-lg drop-shadow">
					<div className="w-full max-h-32 overflow-hidden rounded-lg drop-shadow">
						<img
							className="w-full h-full object-cover object-center"
							src="https://images.pexels.com/photos/534228/pexels-photo-534228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						/>
					</div>
					<div className="my-5">
						<h1 className="butler-bold text-xl text-brand">
							New Construction
						</h1>
						<p className="text-muted-foreground text-sm">
							With years of experience, new construction is my
							specialty. I’ll guide you through the process from
							start to finish. From crafting your vision to
							choosing the right builder, I’m here to ensure
							every step of building your dream home is smooth,
							efficient, and stress-free.
						</p>
					</div>
					<Button
						variant={"ghost"}
						className="text-brand hover:bg-brand/20 hover:text-brand w-full"
					>
						Learn More <ArrowRight />
					</Button>
				</div>
				<div className="bg-muted p-4 rounded-lg drop-shadow">
					<div className="w-full max-h-32 overflow-hidden rounded-lg drop-shadow">
						<img
							className="w-full h-full object-cover object-center"
							src="https://images.pexels.com/photos/8292771/pexels-photo-8292771.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						/>
					</div>
					<div className="my-5">
						<h1 className="butler-bold text-xl text-brand">
							Listing
						</h1>
						<p className="text-muted-foreground text-sm">
							With over 8 years of expertise in Ohio & Michigan
							markets, I’ll help you sell fast and for top
							dollar. From personalized strategies to expert
							negotiation, I’m here to make your selling journey
							smooth and successful, ensuring you achieve the
							best results possible.
						</p>
					</div>
					<Button
						variant={"ghost"}
						className="text-brand hover:bg-brand/20 hover:text-brand w-full"
					>
						Learn More <ArrowRight />
					</Button>
				</div>
				<div className="bg-muted p-4 rounded-lg drop-shadow">
					<div className="w-full max-h-32 overflow-hidden rounded-lg drop-shadow">
						<img
							className="w-full h-full object-cover object-center"
							src="https://images.pexels.com/photos/7414948/pexels-photo-7414948.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						/>
					</div>
					<div className="my-5">
						<h1 className="butler-bold text-xl text-brand">
							Buying
						</h1>
						<p className="text-muted-foreground text-sm">
							I’ll guide you through the buying process to secure
							a home that fits your needs and budget. From
							researching neighborhoods to expert negotiation,
							I’ll help ensure every step of finding your dream
							home is seamless, tailored, and aligned with your
							goals.
						</p>
					</div>
					<Button
						variant={"ghost"}
						className="text-brand hover:bg-brand/20 hover:text-brand w-full"
					>
						Learn More <ArrowRight />
					</Button>
				</div>
				<div className="bg-muted p-4 rounded-lg drop-shadow">
					<div className="w-full max-h-32 overflow-hidden rounded-lg drop-shadow">
						<img
							className="w-full h-full object-cover object-center"
							src="https://images.pexels.com/photos/7937319/pexels-photo-7937319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						/>
					</div>
					<div className="my-5">
						<h1 className="butler-bold text-xl text-brand">
							Investors
						</h1>
						<p className="text-muted-foreground text-sm">
							Leverage my expertise in Ohio & Michigan markets to
							find profitable opportunities and maximize returns.
							Whether it’s flips, rentals, or developments, I’ll
							guide you through the process, ensuring your
							investments are strategic, informed, and highly
							rewarding.
						</p>
					</div>
					<Button
						variant={"ghost"}
						className="text-brand hover:bg-brand/20 hover:text-brand w-full"
					>
						Learn More <ArrowRight />
					</Button>
				</div>
			</div>
		</SectionWrapper>
	);
}
