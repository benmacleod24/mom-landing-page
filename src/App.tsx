import { useEffect, useState } from "react";
import HomebotWidget from "./components/HomeBot";
import Header from "@/components/header";
import AboutMe from "./components/about-me";

function App() {
	return (
		<div>
			<Header />
			<div className="w-full md:max-w-6xl mx-auto">
				<AboutMe />
			</div>
			{/* <HomebotWidget /> */}
		</div>
	);
}

export default App;
