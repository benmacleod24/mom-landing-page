import { useEffect, useState } from "react";

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

	return <div id="homebot_homeowner" className="overflow-hidden" />;
}