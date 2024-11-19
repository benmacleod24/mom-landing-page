import Footer from "@/components/footer";
import Hero from "./components/Hero";
import SellYourHome from "./components/SellYourHome";
import Services from "./components/Services";
import BuildYourHome from "./components/BuildYourHome";

function App() {
	return (
		<div className="overflow-x-hidden">
			<Hero />
			<SellYourHome />
			<Services />
			<BuildYourHome />
			<Footer />
		</div>
	);
}

export default App;
