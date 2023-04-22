import React, { useState, CSSProperties, useEffect } from "react";
import {
	useTransition,
	animated,
	AnimatedProps,
	useSpringRef,
} from "@react-spring/web";

const pages: ((
	props: AnimatedProps<{ style: CSSProperties }>
) => React.ReactElement)[] = [
	({ style }) => (
		<animated.div style={{ ...style, background: "#387f5f" }}>
			<div>
				<img src="/avocado_gray.png" />
			</div>
		</animated.div>
	),
	({ style }) => (
		<animated.div style={{ ...style, background: "#ff9d00" }}>
			<h1 className="font-eggTitle text-eggText text-5xl">The Broken Egg</h1>
		</animated.div>
	),
	({ style }) => (
		<animated.div style={{ ...style, background: "#f7dfff" }}>
			<h1 className="font-readsTitle text-readsText text-5xl">BetterReads</h1>
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
