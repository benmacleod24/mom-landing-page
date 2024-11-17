import HomebotWidget from "@/components/HomeBot";
import Header from "@/components/header";
import AboutMe from "./components/AboutMe";
import NewConstruction from "@/components/NewConstruction";
import Footer from "@/components/footer";
import Hero from "./components/Hero";

function App() {
	return (
		<div>
			<Header />
			<Hero />
			<AboutMe />
			<NewConstruction />
			<HomebotWidget />
			<Footer />
		</div>
	);
}

export default App;
