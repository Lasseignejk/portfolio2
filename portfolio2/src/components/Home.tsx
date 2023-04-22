import { ParallaxLayer } from "@react-spring/parallax";
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
				speed={0.1}
				style={{
					textAlign: "center",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					gap: "30px",
				}}>
				<div className="flex flex-col gap-3">
					<h1 className="text-5xl text-themeDkText md:text-6xl textShadow  tracking-wide">
						Hi there!
					</h1>
					<h2 className="text-3xl text-themeDkText md:text-5xl textShadow  tracking-wide">
						I'm Jaye, a software developer.
					</h2>
				</div>
				<div className="gap-14 flex">
					<div className="text-[4.5rem] text-themeDkText hover:text-themeDkBlueGray ease-in duration-200">
						<a href="https://github.com/Lasseignejk">
							<FaGithub />
						</a>
					</div>
					<div className="text-[4.5rem] text-themeDkText hover:text-themeDkBlueGray ease-in duration-200">
						<a href="https://www.linkedin.com/in/jayelon-lasseigne-66970a229/">
							<FaLinkedin />
						</a>
					</div>
				</div>
			</ParallaxLayer>
		</>
	);
};

export default Home;
