import "./App.css";
import { useRef } from "react";
import { Parallax, IParallax } from "@react-spring/parallax";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects/Projects";
import CTA from "./components/CTA";

const App = (): JSX.Element => {
	const ref = useRef<IParallax>(null);

	const scroll = (to: number): void => {
		if (ref.current) {
			ref.current.scrollTo(to);
		}
	};
	let width: number = window.innerWidth;
	let height: number = window.innerHeight;
	let pages: number = 6;

	if (width < 768) {
		pages = 6;
	} else if (width < 978) {
		pages = 5;
	}
	return (
		<div>
			<Nav scroll={scroll} />
			<Parallax pages={pages} ref={ref}>
				<Home />
				<About />
				<Projects />
				<CTA />
			</Parallax>
		</div>
	);
};

export default App;
