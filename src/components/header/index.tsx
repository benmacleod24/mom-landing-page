import MomsLogo from "@/assets/mom_logo_resized.svg";
import Text from "../ui/text";
import { formatPhoneNumber } from "@/lib/utils";

export default function Header() {
	return (
		<div className="w-full h-16 border-b">
			<div className="w-full h-full lg:max-w-6xl lg:mx-auto flex items-center px-6 lg:px-0 justify-center lg:justify-between">
				<div className="w-40 select-none cursor-pointer mt-1">
					<img className="w-full h-full" src={MomsLogo} />
				</div>
				<div className="hidden lg:flex">
					<Text
						href={"tel:4193447132"}
						className="hover:text-[#af1f22] transition-all cursor-pointer butler"
					>
						{formatPhoneNumber("4193447132")}
					</Text>
				</div>
			</div>
		</div>
	);
}
