import { FaGithub, FaReact, FaYoutube, FaFigma } from "react-icons/fa";
import { SiRedux, SiSupabase, SiTailwindcss, SiPlotly } from "react-icons/si";

const Avocado = () => {
	return (
		<>
			<div className="">
				<img src="/avocado_gray.png" />
			</div>
			<div>
				<img
					src="/AvocadoManageRestaurants.png"
					className="border-2 border-themeDkText"
				/>
			</div>
			<div className="flex justify-center gap-10 text-4xl">
				<a href="http://google.com" className="z-10">
					<FaGithub />
				</a>
				<FaYoutube />
			</div>
			<div>
				<h3 className="text-2xl font-bold textShadow">Description</h3>
				<p>
					Inspired by the POS software 'Toast', 'Avocado' is a site where
					restaurant owners can view current orders and reports for their
					restaurants. They can also edit their menus and upload photos. On the
					opposite side, customers can view restaurants and place orders.{" "}
				</p>
			</div>
			<div>
				<h3 className="text-2xl font-bold textShadow">Role</h3>
				<p>
					As the project manager of a group of four, I participated in daily
					standups with my instructors and led daily standups with my team. Not
					only was I in charge of the styling of Avocado, based on mockups
					created by my team, I also assisted and debugged code on both the
					front and back ends and kept everyone organized using Figma and GitHub
					Projects.
				</p>
			</div>
			<div>
				<h3 className="text-2xl font-bold textShadow">Challenges</h3>
				<p>
					The largest challenges I faced were keeping the group organized and
					figuring out Supabase.
				</p>
			</div>
			<div>
				<h3 className="text-2xl font-bold textShadow mb-3">Tech Stack</h3>
				<div className="flex justify-evenly flex-wrap gap-5">
					<div className="flex flex-col text-center items-center text-xl">
						<FaReact />
						<p>React</p>
					</div>
					<div className="flex flex-col text-center items-center text-xl">
						<SiRedux />
						<p>Redux</p>
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
					<div className="flex flex-col text-center items-center text-xl">
						<SiSupabase />
						<p>Supabase</p>
					</div>
					<div className="flex flex-col text-center items-center text-xl">
						<SiPlotly />
						<p>Plotly</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default Avocado;
