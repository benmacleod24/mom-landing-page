import { useEffect, useState } from "react";
import SectionWrapper from "./SectionWrapper";

export default function HomebotWidget() {
	const [widgetLoaded, setWidgetLoaded] = useState<boolean>(false);

	useEffect(() => {
		if (widgetLoaded) return;

		// Create the script element
		const script = document.createElement("script");
		script.async = true;
		script.src = "https://embed.homebotapp.com/lgw/v1/widget.js";

		// Define the namespace and function
		//@ts-ignore
		window.__hb_namespace = "Homebot";
		//@ts-ignore
		window.Homebot =
			//@ts-ignore
			window.Homebot ||
			function () {
				//@ts-ignore
				(window.Homebot.q = window.Homebot.q || []).push(arguments);
			};

		// Append the script to the document
		document.body.appendChild(script);

		// Initialize the widget after the script loads
		script.onload = () => {
			//@ts-ignore
			window.Homebot(
				"#homebot_homeowner",
				"6291960e9561364bc5c12751bcfbef11a4d89233a0a957df"
			);
			setWidgetLoaded(true);
		};

		// Cleanup script on component unmount
		return () => {
			document.body.removeChild(script);
		};
	}, [widgetLoaded, setWidgetLoaded]);

	return (
		<div className="text-black py-20" id="homevalue">
			<SectionWrapper className="py-0 lg:py-0 mb-12">
				<h1 className="text-4xl font-semibold butler-bold text-brand">
					Curious About Your Home Value?
				</h1>
				<p className="text-muted-foreground max-w-4xl">
					Discover your home's true market value with a personalized
					analysis based on recent sales, local trends, and unique
					features. Enter your address for a complimentary,
					no-obligation report to help you make informed decisions.
				</p>
			</SectionWrapper>
			<div id="homebot_homeowner" className="overflow-hidden" />
		</div>
	);
}
