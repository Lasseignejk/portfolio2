import { FaHome, FaHatWizard, FaCode, FaEnvelope } from "react-icons/fa";

interface NavProps {
	scroll: (to: number) => void;
}

const Nav = ({ scroll }: NavProps): JSX.Element => {
	return (
		<nav className="fixed top-0 left-0 z-10 flex justify-end w-[calc(100%-18px)]">
			<ul className="flex gap-8 justify-end py-3 px-3">
				<li
					onClick={() => scroll(0)}
					className="text-2xl flex items-center gap-2 hover:cursor-pointer duration-200 ease-in textShadow relative navItem">
					<FaHome />
					Home
				</li>
				<li
					onClick={() => scroll(1)}
					className="text-2xl flex items-center gap-2 hover:cursor-pointer duration-200 ease-in textShadow relative navItem">
					<FaHatWizard />
					About
				</li>
				<li
					onClick={() => scroll(2)}
					className="text-2xl flex items-center gap-2 hover:cursor-pointer duration-200 ease-in textShadow relative navItem">
					<FaCode />
					Projects
				</li>
				<li
					onClick={() => scroll(3)}
					className="text-2xl flex items-center gap-2 hover:cursor-pointer duration-200 ease-in textShadow relative navItem">
					<FaEnvelope />
					Contact
				</li>
			</ul>
		</nav>
	);
};

export default Nav;
