import { FaHome, FaHatWizard, FaCode, FaEnvelope } from "react-icons/fa";

interface NavProps {
	scroll: (to: number) => void;
}

const Nav = ({ scroll }: NavProps): JSX.Element => {
	let width: number = window.innerWidth;
	let height: number = window.innerHeight;
	let contactScroll: number = 5;

	if (width < 768) {
		contactScroll = 5;
	} else if (width < 978) {
		contactScroll = 4;
	}

	return (
		<nav className="bg-themeLtBlueGray fixed bottom-0 top-auto left-0 z-10 flex justify-evenly w-full md:justify-end md:w-[calc(100%-18px)] md:top-0 md:bottom-auto md:bg-navTransparent">
			<ul className="flex gap-8 justify-evenly w-full  md:justify-end py-3 px-3">
				<li
					onClick={() => scroll(0)}
					className="text-3xl flex items-center gap-2 hover:cursor-pointer duration-200 ease-in textShadow relative navItem">
					<FaHome />
					<p className="hidden md:block">Home</p>
				</li>
				<li
					onClick={() => scroll(1)}
					className="text-3xl flex items-center gap-2 hover:cursor-pointer duration-200 ease-in textShadow relative navItem">
					<FaHatWizard />
					<p className="hidden md:block">About</p>
				</li>
				<li
					onClick={() => scroll(2)}
					className="text-3xl flex items-center gap-2 hover:cursor-pointer duration-200 ease-in textShadow relative navItem">
					<FaCode />
					<p className="hidden md:block">Projects</p>
				</li>
				<li
					onClick={() => scroll(contactScroll)}
					className="text-3xl flex items-center gap-2 hover:cursor-pointer duration-200 ease-in textShadow relative navItem">
					<FaEnvelope />
					<p className="hidden md:block">Contact</p>
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
