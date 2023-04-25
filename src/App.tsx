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
	return (
		<div>
			<Nav scroll={scroll} />
			<Parallax pages={5} ref={ref}>
				<Home />
				<About />
				<Projects />
				<CTA />
			</Parallax>
		</div>
	);
};

export default App;
