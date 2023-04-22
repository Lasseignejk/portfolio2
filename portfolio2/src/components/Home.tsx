import { ParallaxLayer } from "@react-spring/parallax";

const Home = (): JSX.Element => {
	return (
		<>
			<ParallaxLayer
				offset={0}
				style={{
					backgroundColor: "#82a4e3",
				}}></ParallaxLayer>
			<ParallaxLayer
				offset={0}
				speed={0.5}
				style={{
					textAlign: "center",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<h1 className="text-[#f7cb2d] text-3xl">Welcome!</h1>
			</ParallaxLayer>
		</>
	);
};

export default Home;
