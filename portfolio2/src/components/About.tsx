import { ParallaxLayer } from "@react-spring/parallax";

const About = (): JSX.Element => {
	return (
		<>
			<ParallaxLayer
				offset={1}
				style={{
					textAlign: "center",
					backgroundColor: "#52688f",
				}}></ParallaxLayer>
			<ParallaxLayer
				offset={1}
				speed={0.5}
				style={{
					display: "flex",
					padding: "3rem",
					flexDirection: "column",
					gap: "30px",
				}}>
				<h1 className="text-4xl font-bold text-themeYellow textShadow">
					About Me
				</h1>
				<div className="flex justify-evenly">
					<p className="text-themeLtText text-2xl">
						I'm a confident coder with an eye for detail.
					</p>
					<p className="text-themeLtText text-2xl">Download my resume here!</p>
				</div>
			</ParallaxLayer>
		</>
	);
};

export default About;
