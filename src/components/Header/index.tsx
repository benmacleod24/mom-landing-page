import { DarkLogo, Logo } from "@/lib/config";
import Navigation from "./Navigation";
import { cn } from "@/lib/utils";
import { Link } from "wouter";

export default function Header(props: { mode?: "light" | "dark" }) {
	return (
		<div
			className={cn(
				"w-full h-16 absolute top-0 left-0 z-10",
				props.mode === "dark" && "border-b bg-white"
			)}
		>
			<header className="lg:max-w-[80%] w-full flex items-center mx-auto justify-between h-full px-4 lg:px-0 relative">
				<Link href="/" asChild>
					<img
						src={props.mode === "dark" ? DarkLogo : Logo}
						className="max-h-[70%] z-20 cursor-pointer"
					/>
				</Link>
				<Navigation mode={props.mode} />
			</header>
		</div>
	);
}
