import { animate, stagger } from "motion";
import { useEffect, useRef } from "react";

function Tests() {
	const hi1Ref = useRef(null);
	const hi2Ref = useRef(null);
	const hi3Ref = useRef(null);

	useEffect(() => {
		const elements = [hi1Ref.current, hi2Ref.current, hi3Ref.current];
		animate(
			elements,
			{ scale: [0.2, 1.5, 1] },
			{ duration: 2.5, delay: stagger(1.5) }
		);
	}, []);

	return (
		<div className="ok flex min-h-screen flex-col items-center justify-center">
			<h1
				ref={hi1Ref}
				className="hi1 text-center font-bebas text-9xl font-extrabold">
				hello mr
			</h1>
			<h1
				ref={hi2Ref}
				className="hi2 text-center font-bebas text-9xl font-extrabold">
				hello hi
			</h1>
			<h1
				ref={hi3Ref}
				className="hi3 text-center font-bebas text-9xl font-extrabold">
				hello no
			</h1>
		</div>
	);
}

export default Tests;
