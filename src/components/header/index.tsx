import MomsLogo from "@/assets/mom_logo.png";

export default function Header() {
	return (
		<div className="w-full h-16 border-b">
			<div className="w-full h-full">
				<div className="w-16 h-16">
					<img src={MomsLogo} />
				</div>
			</div>
		</div>
	);
}
