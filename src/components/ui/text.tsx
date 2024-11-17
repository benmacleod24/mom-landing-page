import { cn } from "@/lib/utils";
import React from "react";

export default function Text(
	props: React.PropsWithChildren<{ className?: string; href?: string }>
) {
	if (props.href) {
		return (
			<a
				href={props.href}
				target="_blank"
				className={cn(
					"text-muted-foreground whitespace-break-spaces",
					props.className
				)}
			>
				{props.children}
			</a>
		);
	}

	return (
		<p
			className={cn(
				"text-muted-foreground whitespace-break-spaces",
				props.className
			)}
		>
			{props.children}
		</p>
	);
}
