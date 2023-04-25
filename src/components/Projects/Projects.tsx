import { ParallaxLayer } from "@react-spring/parallax";
import ProjectSlides from "./ProjectSlides";

const Projects = (): JSX.Element => {
	return (
		<ParallaxLayer
			offset={2}
			factor={2}
			style={{
				textAlign: "center",
				backgroundColor: "#a2c4e0",
			}}>
			<div className="w-3/4 h-3/4">
				<ProjectSlides />
			</div>
		</ParallaxLayer>
	);
};

export default Projects;
