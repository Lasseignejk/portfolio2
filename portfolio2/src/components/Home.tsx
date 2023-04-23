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
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}}>
				<img src="/circle.png" alt="" className="md:w-[90%] lg:w-[65%]" />
			</ParallaxLayer>
			<ParallaxLayer offset={0.1} speed={0.5} style={{ opacity: "85%" }}>
				<img src="/circle.png" alt="" className="w-1/5 block ml-[70%]" />
				<img src="/circle.png" alt="" className="w-1/6 block mt-[5%]" />
				<img src="/circle.png" alt="" className="w-1/4 block ml-[95%]" />
				<img src="/circle.png" alt="" className="w-1/6 ml-[80%] mt-[55%]" />
				<img src="/circle.png" alt="" className="w-1/5 ml-[30%] mt-[10%]" />
				<img src="/circle.png" alt="" className="w-1/4 ml-[45%] mt-[10%]" />
				<img src="/circle.png" alt="" className="w-1/3 ml-[5%] mt-[10%]" />
			</ParallaxLayer>
			<ParallaxLayer offset={0.1} speed={0.1} style={{ opacity: "50%" }}>
				<img src="/circle.png" alt="" className="w-1/3 block mt-[10%]" />
				<img src="/circle.png" alt="" className="w-1/2 block ml-[95%]" />
				<img src="/circle.png" alt="" className="w-1/4 ml-[10%] mt-[25%]" />
				<img src="/circle.png" alt="" className="w-1/3 ml-[80%] mt-[5%]" />
			</ParallaxLayer>
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
