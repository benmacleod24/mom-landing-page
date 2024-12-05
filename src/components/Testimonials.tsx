import { Testimonials } from "@/lib/config/testimonials";
import SectionWrapper from "./SectionWrapper";

export default function TestimonialsSection() {
	return (
		<SectionWrapper className="bg-muted" id="testimonials">
			<div>
				<div className="mb-3">
					<h2 className="text-3xl uppercase text-brand butler-bold">
						See what people say!
					</h2>
					<p className="text-muted-foreground">
						See what my clients have to say about the personalized,
						dedicated service I provide!
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-5 mt-8">
					{Testimonials.map((t, idx) => (
						<div
							key={idx}
							className="bg-white rounded-lg shadow p-4 flex flex-col justify-between"
						>
							<p className="text-sm text-zinc-800">
								{t.content}
							</p>
							<p className="capitalize mt-4 font-semibold text-brand">
								-{t.author}
							</p>
						</div>
					))}
				</div>
			</div>
		</SectionWrapper>
	);
}
