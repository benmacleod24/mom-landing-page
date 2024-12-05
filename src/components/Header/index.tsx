import { Logo } from "@/lib/config";
import Navigation from "./Navigation";

export default function Header() {
	return (
		<div className="w-full h-16 absolute top-0 left-0">
			<header className="lg:max-w-[80%] w-full flex items-center mx-auto justify-between h-full px-4 lg:px-0 relative">
				<img src={Logo} className="max-h-[70%] z-20" />
				<Navigation />
			</header>
		</div>
	);
}
