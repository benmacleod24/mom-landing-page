import { useIsMobile } from "@/lib/hooks";
import MobileNavigation from "./MobileNavigation";
import { NavigationOptions } from "@/lib/config";
import { cn } from "@/lib/utils";

export default function Navigation(props: { mode?: "light" | "dark" }) {
	const isMoblieDevice = useIsMobile();

	// Return mobile navitaion
	if (isMoblieDevice) {
		return <MobileNavigation mode={props.mode} />;
	}

	// Return desktop navigation
	return (
		<nav className="z-20 flex items-center gap-4">
			{NavigationOptions.map((option, idx) => (
				<a
					key={idx}
					href={option.href}
					target={option._target ? option._target : undefined}
					className={cn(
						"text-white hover:text-zinc-300 transition-all cursor-pointer",
						props.mode === "dark" &&
							"text-black hover:text-muted-foreground"
					)}
				>
					{option.title}
				</a>
			))}
		</nav>
	);
}
