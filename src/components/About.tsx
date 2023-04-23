import { ParallaxLayer } from "@react-spring/parallax";
// import {
// 	FaJsSquare,
// 	FaHtml5,
// 	FaCss3Alt,
// 	FaGithub,
// 	FaReact,
// 	FaPython,
// 	FaNode,
// 	FaDocker,
// 	FaFileDownload,
// } from "react-icons/fa";
// import {
// 	SiTailwindcss,
// 	SiTypescript,
// 	SiPostgresql,
// 	SiRedux,
// } from "react-icons/si";

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
					padding: "2rem",
					flexDirection: "column",
					gap: "30px",
				}}>
				<header className="text-4xl font-bold text-themeYellow textShadow">
					About Me
				</header>
				<div className="flex flex-col justify-evenly gap-10">
					<p className="text-themeLtText text-xl">
						I am a confident communicator and motivated developer with an eye
						for detail. I thrive in fast-paced environments and have the ability
						to remain flexible and calm under pressure.
					</p>
					<div className="flex text-center gap-3 ">
						<a
							href="../../resume/JayelonLasseigneResume.pdf"
							download
							className="">
							<p className="text-themeLtText bg-themeDkText text-2xl border-2 px-3 py-3 rounded-full hover:text-themeDkText hover:bg-themeYellow duration-200 ease-in m-0">
								Download my resume
							</p>
						</a>
					</div>
				</div>
			</ParallaxLayer>
		</>
	);
};

export default About;
