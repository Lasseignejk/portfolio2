import { useState, useEffect } from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import ProjectSlides from "./ProjectSlides";

interface DimensionsProps {
	width: number;
	height: number;
}

const Projects = (): JSX.Element => {
	let factorNum: number = 1;
	let width: number = window.innerWidth;
	let height: number = window.innerHeight;
	// const [dimensions, setDimensions] = useState<DimensionsProps>({
	// 	width: window.innerWidth,
	// 	height: window.innerHeight,
	// });

	// useEffect(() => {
	// 	const handleResize = () => {
	// 		setDimensions({ width: window.innerWidth, height: window.innerHeight });
	// 		console.log(dimensions);
	// 	};

	// 	window.addEventListener("resize", handleResize);

	// 	return () => {
	// 		window.removeEventListener("resize", handleResize);
	// 	};
	// }, []);

	if (width < 768) {
		factorNum = 3;
		console.log(factorNum);
	} else if (width < 978) {
		factorNum = 1;
	}

	return (
		<ParallaxLayer
			offset={2}
			factor={factorNum}
			style={{
				textAlign: "center",
				backgroundColor: "#a2c4e0",
				position: "relative",
			}}>
			<ProjectSlides />
		</ParallaxLayer>
	);
};

export default Projects;
