import { ParallaxLayer } from "@react-spring/parallax";

const CTA = (): JSX.Element => {
	let width: number = window.innerWidth;
	let height: number = window.innerHeight;
	let offset: number = 5;

	if (width < 768) {
		offset = 5;
	} else if (width < 978) {
		offset = 4;
	}
	return (
		<>
			<ParallaxLayer
				offset={offset}
				style={{
					textAlign: "center",
					backgroundColor: "#a2c4e0",
				}}></ParallaxLayer>
			<ParallaxLayer
				offset={offset}
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
