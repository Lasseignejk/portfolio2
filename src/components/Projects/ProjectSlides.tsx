import React, { useState, CSSProperties, useEffect } from "react";
import {
	useTransition,
	animated,
	AnimatedProps,
	useSpringRef,
} from "@react-spring/web";
import Avocado from "./Avocado";
import { FaArrowCircleRight } from "react-icons/fa";
import TheBrokenEgg from "./TheBrokenEgg";
import BetterReads from "./BetterReads";

const pages: ((
	props: AnimatedProps<{ style: CSSProperties }>
) => React.ReactElement)[] = [
	({ style }) => (
		<animated.div
			style={{
				...style,
				background: "#387f5f",
				padding: "2rem",
				display: "flex",
				flexDirection: "column",
				gap: "20px",
			}}>
			<Avocado />
		</animated.div>
	),
	({ style }) => (
		<animated.div
			style={{
				...style,
				background: "#ff9d00",
				padding: "2rem",
				display: "flex",
				flexDirection: "column",
				gap: "20px",
				color: "#523200",
				alignContent: "space-between",
			}}>
			<TheBrokenEgg />
		</animated.div>
	),
	({ style }) => (
		<animated.div
			style={{
				...style,
				background: "#f7dfff",
				padding: "2rem",
				display: "flex",
				flexDirection: "column",
				gap: "30px",
				color: "#140024",
			}}>
			<BetterReads />
		</animated.div>
	),
];

export default function App() {
	const [index, set] = useState(0);
	const onClick = () => set((state) => (state + 1) % 3);
	const transRef = useSpringRef();
	const transitions = useTransition(index, {
		ref: transRef,
		keys: null,
		from: { opacity: 0, transform: "translate3d(100%,0,0)" },
		enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
		leave: { opacity: 0, transform: "translate3d(-50%,0,0)" },
	});
	useEffect(() => {
		transRef.start();
	}, [index]);
	return (
		<>
			<span
				className="flex w-screen justify-center p-2  text-themeDkText hover:cursor-pointer md:hidden"
				onClick={onClick}>
				<button className="text-black text-2xl flex" type="button">
					<FaArrowCircleRight />
				</button>
			</span>
			<div className="container">
				{transitions((style, i) => {
					const Page = pages[i];
					return (
						<>
							<span
								className="hidden  w-screen justify-end p-2 text-themeDkText hover:cursor-pointer mt-[60px] z-10 md:absolute md:flex"
								onClick={onClick}>
								<button className="text-black text-6xl flex" type="button">
									<FaArrowCircleRight />
								</button>
							</span>
							<Page style={style} />
						</>
					);
				})}
			</div>
		</>
	);
}
