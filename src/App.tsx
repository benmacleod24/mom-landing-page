import { useEffect, useState } from "react";
import HomebotWidget from "./components/HomeBot";
import Header from "@/components/header";
import AboutMe from "./components/about-me";
import NewConstruction from "./components/new-construction";
import Footer from "./components/footer";

function App() {
	return (
		<div>
			{/* <Header /> */}
			<div className="w-full md:max-w-6xl mx-auto">
				<AboutMe />
				<NewConstruction />
				<HomebotWidget />
			</div>
			<Footer />
		</div>
	);
}

export default App;
