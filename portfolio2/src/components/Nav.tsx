interface NavProps {
	scroll: (to: number) => void;
}

const Nav = ({ scroll }: NavProps): JSX.Element => {
	return (
		<nav className="fixed top-0 left-0 z-10 flex justify-end border-2 border-black w-[calc(100%-18px)]">
			<ul className="flex gap-3 justify-end">
				<li onClick={() => scroll(0)} className="hover:cursor-pointer">
					Home
				</li>
				<li onClick={() => scroll(1)}>About</li>
				<li onClick={() => scroll(2)}>Projects</li>
			</ul>
		</nav>
	);
};

export default Nav;
