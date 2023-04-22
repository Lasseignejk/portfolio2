import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";

const CTA = () => {
	return (
		<ParallaxLayer
			offset={3}
			style={{
				textAlign: "center",
				backgroundColor: "#f7cb2d",
			}}></ParallaxLayer>
	);
};

export default CTA;
