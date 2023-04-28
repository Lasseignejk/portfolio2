import { FaGithub, FaReact, FaYoutube, FaFigma } from "react-icons/fa";
import { SiRedux, SiSupabase, SiTailwindcss, SiPlotly } from "react-icons/si";

const Avocado = () => {
	return (
		<>
			<div className="flex justify-center md:mt-12">
				<img src="/avocado_gray.svg" className="w-[150px]" />
			</div>
			<div className="flex justify-center">
				<img
					src="/AvocadoManageRestaurants.png"
					className="border-2 border-themeDkText rounded-xl"
				/>
			</div>
			<div className="flex justify-center gap-14 text-4xl">
				<a href="http://google.com" className="z-10">
					<FaGithub />
				</a>
				<FaYoutube />
			</div>
			<div>
				<h3 className="text-xl font-bold textShadow">Description</h3>
				<p>
					Inspired by the POS software 'Toast', 'Avocado' lets restaurant owners
					view current orders and reports for their restaurants. Conversely,
					customers can view restaurants and place orders.{" "}
				</p>
			</div>
			<div>
				<h3 className="text-xl font-bold textShadow">Role</h3>
				<p className="">
					As the project manager of a group of four, I participated in daily
					standups with my instructors and led daily standups with my team. Not
					only was I in charge of the styling of Avocado, based on mockups
					created by my team, I also assisted and debugged code on both the
					front and back ends and kept everyone organized using Figma and GitHub
					Projects.
				</p>
			</div>
			<div>
				<h3 className="text-xl font-bold textShadow">Challenges</h3>
				<p>
					One of the largest challenges I faced on Avocado was keeping the group
					organized. Even though we had spent a day or two planning out the flow
					of the site, the styling, the database schema, and what features we
					wanted, when we started actually coding, we didn't know where to
					start. After receiving advice from my instructor, I made a flow chart
					on figma and made a daily plan for what I thought we should tackle
					that day. My teammates were free to work on what they wanted to within
					that plan, and ask for help as needed. I also became more proactive in
					asking my teammates for updates on their progress and assisting if
					they were struggling.
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
			<div className="flex justify-center">
				<img src="/AvocadoLogin.png" className="rounded-xl md:hidden" />
			</div>
		</>
	);
};

export default Avocado;
