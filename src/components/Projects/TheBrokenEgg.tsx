import { FaGithub, FaReact, FaFigma, FaGlobe } from "react-icons/fa";
import { SiRedux, SiTailwindcss, SiMedium, SiTypescript } from "react-icons/si";

const TheBrokenEgg = () => {
	return (
		<>
			<div>
				<h1 className="font-eggTitle text-eggText text-3xl">The Broken Egg</h1>
			</div>
			<div>
				<img src="/TheBrokenEggHome.png" className="rounded-lg" />
			</div>
			<div className="flex justify-center gap-10 text-4xl text-eggText">
				<a href="http://google.com" className="z-10">
					<FaGithub />
				</a>
				<SiMedium />
				<FaGlobe />
			</div>
			<div>
				<h3 className="text-2xl font-bold textShadow font-eggTitle">
					Description
				</h3>
				<p className="font-eggText">
					What's for dinner? On 'The Broken Egg,' you can browse recipes using a
					variety of different parameters and view ingredients and instructions.
					From classics to food from around the world, there's lots to discover
					on 'The Broken Egg!'
				</p>
			</div>
			<div>
				<h3 className="text-2xl textShadow font-eggTitle font-bold">Role</h3>
				<p className="font-eggText">
					As the sole creator, I implemented React as my frontend framework,
					then paired it with Redux to manage state across all of my components.
					I also used TypeScript to help me write more meaningful code.
					TypeScript also allowed me to gain a deeper understanding of React,
					Redux, and JavaScript, by forcing me to 'type' all of my components,
					variables, and functions.
				</p>
			</div>
			<div>
				<h3 className="text-2xl font-bold textShadow font-eggTitle">
					Challenges
				</h3>
				<p className="font-eggText">
					The largest challenge for this project was using TypeScript. Aside
					from a few hours in class being introduced to it, I'd never used it
					before. Most of my time was spent researching and asking questions to
					my instructor, so there were many features and things I didn't have
					time to add to the website. Overall though, I don't regret challenging
					myself to use TypeScript.
				</p>
			</div>
			<div>
				<h3 className="text-2xl font-bold textShadow mb-3 font-eggTitle">
					Tech Stack
				</h3>
				<div className="flex justify-evenly flex-wrap gap-5 font-eggText">
					<div className="flex flex-col text-center items-center text-xl">
						<FaReact />
						<p>React</p>
					</div>
					<div className="flex flex-col text-center items-center text-xl">
						<SiRedux />
						<p>Redux</p>
					</div>
					<div className="flex flex-col text-center items-center text-xl">
						<SiTypescript />
						<p>TypeScript</p>
					</div>
					<div className="flex flex-col text-center items-center text-xl">
						<SiTailwindcss />
						<p>Tailwind CSS</p>
					</div>
					<div className="flex flex-col text-center items-center text-xl">
						<FaGithub />
						<p>GitHub</p>
					</div>
					<div className="flex flex-col text-center items-center text-xl">
						<FaFigma />
						<p>Figma</p>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center">
				<img src="/TheBrokenEggMobileSearch.png" className="rounded-lg" />
			</div>
		</>
	);
};

export default TheBrokenEgg;
