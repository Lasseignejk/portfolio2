import React, { useState, CSSProperties, useEffect } from "react";
import {
	useTransition,
	animated,
	AnimatedProps,
	useSpringRef,
} from "@react-spring/web";
import { FaGithub, FaYoutube } from "react-icons/fa";

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
			<div className="">
				<img src="/avocado_gray.png" />
			</div>
			<div>
				<img
					src="/AvocadoManageRestaurants.png"
					className="border-2 border-themeDkText"
				/>
			</div>
			<div>
				<FaGithub />
				<FaYoutube />
			</div>
			<div>
				<h3>Description</h3>
				<p>
					Inspired by the POS software 'Toast', 'Avocado' is a site where
					restaurant owners can view current orders and reports for their
					restaurants. They can also edit their menus and upload photos. On the
					opposite side, customers can view restaurants and place orders.{" "}
				</p>
			</div>
			<div>
				<h3>Role</h3>
				<p>
					As the project manager of a group of four, I participated in daily
					standups with my instructors and led daily standups with my team. Not
					only was I in charge of the styling of Avocado, based on mockups
					created by my team, I also assisted and debugged code on both the
					front and back ends and kept everyone organized using Figma and GitHub
					Projects.
				</p>
			</div>
		</animated.div>
	),
	({ style }) => (
		<animated.div style={{ ...style, background: "#ff9d00", padding: "2rem" }}>
			<div>
				<h1 className="font-eggTitle text-eggText text-3xl">The Broken Egg</h1>
			</div>
		</animated.div>
	),
	({ style }) => (
		<animated.div style={{ ...style, background: "#f7dfff", padding: "2rem" }}>
			<h1 className="font-readsTitle text-readsText text-3xl">BetterReads</h1>
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
		<div className="container" onClick={onClick}>
			{transitions((style, i) => {
				const Page = pages[i];
				return <Page style={style} />;
			})}
		</div>
	);
}
