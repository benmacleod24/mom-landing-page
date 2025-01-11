import AboutSection from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import TestimonialsSection from "./components/Testimonials";
import { Route, Switch } from "wouter";
import JoinNewsletter from "./pages/JoinNewsletter";
import HomebotWidget from "./components/HomeBot";
import MyServices from "./components/MyServices";

// * Header can be found in Hero componenets.
function App() {
	return (
		<div className="overflow-x-hidden">
			<Switch>
				<Route path={"/newsletter"} component={JoinNewsletter} />
				<Route>
					<Hero />
					<AboutSection />
					<MyServices />
					<HomebotWidget />
					<TestimonialsSection />
					<Footer />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
