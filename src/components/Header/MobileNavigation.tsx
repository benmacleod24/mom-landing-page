import { cn, formatPhoneNumber } from "@/lib/utils";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { ArrowRight, Dot, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import * as Portal from "@radix-ui/react-portal";
import { ContactInfo, NavigationOptions } from "@/lib/config";

export default function MobileNavigation() {
	const [animateButton] = useAutoAnimate({ duration: 100 });
	const [isOpen, setOpen] = useState<boolean>(false);

	function toggleOpen() {
		setOpen((v) => !v);
	}

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden"; // Disable scrolling
		} else {
			document.body.style.overflow = ""; // Re-enable scrolling
		}

		// Clean up on component unmount
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<div className="z-40">
			<button
				ref={animateButton}
				className="p-2 z-40"
				onClick={toggleOpen}
			>
				{isOpen ? (
					<X className="text-white" size={30} />
				) : (
					<Menu className="text-white" size={30} />
				)}
			</button>
			<Portal.Root
				aria-label="mobile-menu"
				className={cn(
					"h-dvh fixed z-30 top-0 left-0 w-screen flex flex-col bg-black/75 backdrop-blur transition-all pt-20 px-6 pb-6 text-white",
					isOpen && "pointer-events-auto opacity-100",
					!isOpen && "pointer-events-none opacity-0"
				)}
			>
				{/* Menu Options */}
				<nav className="flex flex-col gap-5 flex-1">
					{NavigationOptions.map((option, idx) => (
						<a
							key={idx}
							href={option.href}
							onClick={
								option._target !== "_blank"
									? () => toggleOpen()
									: () => {}
							}
							className="text-white flex items-nce justify-between"
							target={
								option._target ? option._target : undefined
							}
						>
							<p className="text-xl">{option.title}</p>
							<ArrowRight className="text-muted-foreground" />
						</a>
					))}
				</nav>

				<div>
					<h1 className="text-lg font-bold">{ContactInfo.name}</h1>
					<div className="flex items-center text-muted-foreground mt-0.5">
						<a
							href={`tel:${ContactInfo.phoneNumber}`}
							className="hover:underline focus-visible:underline"
						>
							{formatPhoneNumber(ContactInfo.phoneNumber)}
						</a>
						<Dot />
						<a
							href={`mailto:${ContactInfo.email}`}
							className="hover:underline focus-visible:underline"
						>
							{ContactInfo.email}
						</a>
					</div>
				</div>
			</Portal.Root>
		</div>
	);
}
