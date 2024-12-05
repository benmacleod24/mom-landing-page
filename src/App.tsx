import AboutSection from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import TestimonialsSection from "./components/Testimonials";

// * Header can be found in Hero componenets.
function App() {
	return (
		<div className="overflow-x-hidden">
			<Hero />
			<AboutSection />
			<TestimonialsSection />
			<Footer />
		</div>
	);
}

export default App;
