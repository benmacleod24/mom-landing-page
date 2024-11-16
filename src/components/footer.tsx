export default function Footer() {
	return (
		<div className="w-full h-16 flex items-center justify-center flex-col lg:flex-row gap-2">
			<p className="text-muted-foreground text-xs">
				Developed By{" "}
				<a
					href={`mailto:benmacleod24@icloud.com?subject=${encodeURIComponent(
						"Website Design"
					)}&body=${encodeURIComponent(
						"Found Via - Jennifer Macleod"
					)}`}
					className="hover:underline"
				>
					Ben Macleod
				</a>
			</p>
		</div>
	);
}
