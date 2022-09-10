import React, { useEffect } from "react";
import type { RootState } from "../Store";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../timerSlice";
import { GiPlainCircle } from "react-icons/gi";

const LINE_MAX = 1465;
const changeLineValue = (ns: number) => {
	let value = LINE_MAX * (ns / 60);
	if (ns === 0) {
		value = LINE_MAX;
	}
	document.documentElement.style.setProperty("--line-value", "" + value);
};

interface props {
	updateInterval: number;
}

function Timer(props: props) {
	const time = useSelector((state: RootState) => state.timer.timePassed);
	const dispatch = useDispatch();
	const ns = Math.floor(time / 1000) % 60;
	changeLineValue(ns);
	let seconds = ns.toString();
	if (seconds.length === 1) {
		seconds = "0" + seconds;
	}
	let minutes = (Math.floor(time / 60000) % 60).toString();
	if (minutes.length === 1) {
		minutes = "0" + minutes;
	}

	useEffect(() => {
		console.log("use effect");
		const interval = setInterval(() => {
			dispatch(update());
		}, props.updateInterval);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className="flex flex-col justify-center items-center gap-2">
			<div
				className="p-2 rounded-full w-[280px] h-[280px] 
				bg-bg 
                shadow-big
                shadow-shad
            flex items-center justify-center relative"
			>
				<GiPlainCircle
					id="stroke3"
					className="
					w-[270px] h-[270px] transition-all 
					duration-500 absolute text-white/[0]"
				/>
				<div
					className="text-text text-[70px]
				font-[600] relative flex items-center
				justify-center flex-col"
				>
					<div>
						{minutes}:{seconds}
					</div>
				</div>
			</div>
		</div>
	);
}

export default Timer;
