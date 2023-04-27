import { FaGithub, FaFigma, FaJsSquare, FaCode } from "react-icons/fa";
import {
	SiTailwindcss,
	SiMedium,
	SiExpress,
	SiNodedotjs,
	SiSequelize,
	SiPostgresql,
} from "react-icons/si";

const BetterReads = () => {
	return (
		<>
			<h1 className="font-readsTitle text-readsText text-3xl">BetterReads</h1>
			<div>
				<img
					src="/betterReadsHome.png"
					className="border-2 border-readsText rounded-lg p-1"
				/>
			</div>
			<div className="flex justify-center gap-10 text-4xl text-readsText">
				<a href="https://github.com/jessbecoding/BetterReads" className="z-10">
					<FaGithub />
				</a>
				<a href="https://medium.com/@jayelonlasseigne/betterreads-my-backend-project-ef822afa7af6">
					<SiMedium />
				</a>
			</div>
			<div className="flex flex-col gap-2">
				<h3 className="text-2xl font-readsTitle">Description</h3>
				<p className="font-readsText hidden">
					Are you an author looking to grow your readership? Or are you a
					reader, searching for your next favorite book? Welcome to BetterReads,
					a site where you can do just that!
				</p>
				<p className="font-readsText">
					Better Reads was created to help connect authors and readers together.
					Authors can upload information on their books to the site and can post
					events like book signings or Q&As. Readers can then browse those
					events and attend ones they are interested in. They can also browse
					books in search of their next literary quest!
				</p>
			</div>
			<div className="flex flex-col gap-2">
				<h3 className="text-2xl font-readsTitle">Role</h3>
				<p className="font-readsText">
					I was in charge of the frontend aspects of the project. I used
					Tailwind for the CSS, Figma for the objects like the bookshelf,
					banners, and the bookmark on the account pages, and Google Icons for
					the icons on the landing and contact pages. I also assisted my partner
					on the backend, creating CRUD routes and helping with debugging.
				</p>
			</div>
			<div>
				<h3 className="text-2xl font-readsTitle">Challenges</h3>
				<p className="font-readsText">
					My partner and I ran into our largest challenge early on -- scaling.
					In the planning stage, we had a grand plan for what BetterReads would
					be. But after running into problems with finding a suitable book API
					and issues with Sequelize, we had to pivot and narrow our focus to
					something more achievable.
				</p>
			</div>
			<div>
				<h3 className="text-2xl font-readsTitle mb-3">Tech Stack</h3>
				<div className="flex justify-evenly flex-wrap gap-5 font-readsText">
					<div className="flex flex-col text-center items-center text-xl">
						<FaCode />
						<p>EJS</p>
					</div>
					<div className="flex flex-col text-center items-center text-xl">
						<FaJsSquare />
						<p>JavaScript</p>
					</div>
					<div className="flex flex-col text-center items-center text-xl">
						<SiTailwindcss />
						<p>TailwindCSS</p>
					</div>

					<div className="flex flex-col text-center items-center text-xl">
						<SiNodedotjs />
						<p>Node.js</p>
					</div>

					<div className="flex flex-col text-center items-center text-xl">
						<SiExpress />
						<p>Express</p>
					</div>
					<div className="flex flex-col text-center items-center text-xl">
						<SiSequelize />
						<p>Sequelize</p>
					</div>
					<div className="flex flex-col text-center items-center text-xl">
						<SiPostgresql />
						<p>PostgreSQL</p>
					</div>

					<div className="flex flex-col text-center items-center text-xl">
						<FaCode />
						<p>Bcrypt</p>
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
				<img
					src="/BetterReadsMobileHome.png"
					className="border-2 border-readsText rounded-lg w-2/3 p-1"
				/>
			</div>
		</>
	);
};

export default BetterReads;
