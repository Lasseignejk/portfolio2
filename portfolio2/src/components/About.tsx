import { ParallaxLayer } from "@react-spring/parallax";

const About = (): JSX.Element => {
	return (
		<ParallaxLayer
			offset={1}
			style={{
				textAlign: "center",
				backgroundColor: "#52688f",
			}}>
			<h1>About Me</h1>
		</ParallaxLayer>
	);
};

export default About;
