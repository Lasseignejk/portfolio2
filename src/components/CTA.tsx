import { ParallaxLayer } from "@react-spring/parallax";

const CTA = () => {
	return (
		<>
			<ParallaxLayer
				offset={4}
				style={{
					textAlign: "center",
					backgroundColor: "#a2c4e0",
				}}></ParallaxLayer>
			<ParallaxLayer
				offset={4}
				speed={0.5}
				style={{
					display: "flex",
					padding: "3rem",
					flexDirection: "column",
					gap: "30px",
				}}>
				<h1 className="text-4xl font-bold text-themeDkText textShadow">
					Contact Me
				</h1>
				<div className="flex justify-evenly"></div>
			</ParallaxLayer>
		</>
	);
};

export default CTA;
