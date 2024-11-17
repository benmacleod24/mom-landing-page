import { cn } from "@/lib/utils";
import React from "react";

export default function SectionWrapper(
	props: React.PropsWithChildren<{ className?: string; id?: string }>
) {
	return (
		<div
			id={props.id}
			className={cn(
				"md:px-0 p-6 py-10 first:border-t-0 lg:py-20",
				props.className
			)}
		>
			<div className="w-full md:max-w-6xl mx-auto">{props.children}</div>
		</div>
	);
}

// "bg-blue-500 rounded-xl p-6"
