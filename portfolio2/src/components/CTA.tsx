import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

const CTA = () => {
	return (
		<ParallaxLayer
			offset={3}
			style={{
				textAlign: "center",
				backgroundColor: "#a2c4e0",
			}}></ParallaxLayer>
	);
};

export default CTA;
