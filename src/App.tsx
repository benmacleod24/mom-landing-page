import HomebotWidget from "@/components/HomeBot";
import Header from "@/components/header";
import AboutMe from "./components/AboutMe";
import NewConstruction from "@/components/NewConstruction";
import Footer from "@/components/footer";

function App() {
	return (
		<div>
			<AboutMe />
			<NewConstruction />
			<HomebotWidget />
			<Footer />
		</div>
	);
}

export default App;
