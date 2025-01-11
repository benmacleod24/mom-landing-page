import { Brokerage, ContactInfo, Links } from "@/lib/config";
import { cn, formatPhoneNumber } from "@/lib/utils";
import { Button } from "../ui/button";
import { ArrowRight, CircleX, Loader2 } from "lucide-react";
import { Form } from "../ui/form";
import { z } from "zod";
import { isEmail } from "validator";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Link } from "wouter";

type FormSchema = z.infer<typeof formSchema>;
const formSchema = z.object({
	email: z.string().refine((v) => isEmail(v)),
});

export default function Footer() {
	const [animateNewletter] = useAutoAnimate();

	const form = useForm<FormSchema>({
		resolver: zodResolver(formSchema),
	});

	async function handleSubmit(values: FormSchema) {
		const resp = await fetch("https://api.followupboss.com/v1/events", {
			method: "POST",
			headers: {
				accept: "application/json",
				"content-type": "application/json",
				authorization:
					"Basic ZmthXzA5VkpEV0tzU2FhNk0xREsyNUhtb3BqZHZlUTVoQ21MclM6",
			},
			body: JSON.stringify({
				person: {
					emails: [{ value: values.email }],
					source: "Personal Website",
				},
			}),
		});

		if (resp.ok) {
			form.reset();
		}
	}

	return (
		<footer className="w-full border-t">
			<div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-10 px-4 lg:px-0 py-16 w-full h-full lg:max-w-[80%] mx-auto">
				<div>
					<a
						href={
							Brokerage.website +
							`?utm_source=${location.hostname}&utm_medium=referral&utm_campaign=jenny_macleod_personal_website&utm_content=weinsandroth_logo`
						}
						target="_blank"
					>
						<img src={Brokerage.logo} className="w-40 -ml-3" />
					</a>

					<div className="flex flex-col mt-3">
						<a
							href={`tel:${Brokerage.phoneNumber}`}
							target="_blank"
							className="text-zinc-700 hover:text-brand transition-colors"
						>
							Office: {formatPhoneNumber(Brokerage.phoneNumber)}
						</a>

						<p className="text-zinc-700 hover:text-brand transition-colors">
							{Brokerage.address}
						</p>
					</div>
				</div>

				{/* Quick Links */}
				<div>
					<h3 className="text-muted-foreground font-semibold uppercase mb-3">
						Quick Links
					</h3>

					<div className="flex flex-col">
						{Links.sort((a, b) =>
							a.title.localeCompare(b.title)
						).map((link, idx) => (
							<a
								key={idx}
								href={link.href}
								target="_blank"
								className="text-zinc-700 hover:text-brand transition-colors"
							>
								{link.title}
							</a>
						))}
					</div>
				</div>

				{/* Contact */}
				<div>
					<h3 className="text-muted-foreground font-semibold uppercase mb-3">
						Contact Me
					</h3>

					<div className="flex flex-col">
						<a
							href={`tel:${ContactInfo.phoneNumber}`}
							target="_blank"
							className="text-zinc-700 hover:text-brand transition-colors"
						>
							{formatPhoneNumber(ContactInfo.phoneNumber)}
						</a>
						<a
							href={`mailto:${ContactInfo.email}`}
							target="_blank"
							className="text-zinc-700 hover:text-brand transition-colors"
						>
							{ContactInfo.email}
						</a>
					</div>
				</div>

				{/* Contact */}
				<div>
					<h3 className="text-muted-foreground font-semibold uppercase">
						Join Newsletter
					</h3>
					<p className="text-sm text-muted-foreground">
						Stay informed on the latest in real estate—subscribe to
						my newsletter today!
					</p>
					<Link href="/newsletter">
						<Button className="w-full bg-brand hover:bg-brand/80 mt-3">
							Join Newsletter! <ArrowRight />
						</Button>
					</Link>
				</div>
			</div>
		</footer>
	);
}
