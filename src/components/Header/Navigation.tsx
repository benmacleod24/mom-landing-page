import { useIsMobile } from "@/lib/hooks";
import MobileNavigation from "./MobileNavigation";
import { NavigationOptions } from "@/lib/config";

export default function Navigation() {
	const isMoblieDevice = useIsMobile();

	// Return mobile navitaion
	if (isMoblieDevice) {
		return <MobileNavigation />;
	}

	// Return desktop navigation
	return (
		<nav className="z-20 flex items-center gap-4">
			{NavigationOptions.map((option, idx) => (
				<a
					key={idx}
					href={option.href}
					target={option._target ? option._target : undefined}
					className="text-white hover:text-zinc-300 transition-all cursor-pointer"
				>
					{option.title}
				</a>
			))}
		</nav>
	);
}
