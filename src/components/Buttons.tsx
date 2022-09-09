import { start, pause, resume } from "../timerSlice";
import { useDispatch } from "react-redux";
function Buttons() {
	const dispatch = useDispatch();
	return (
		<div
			className="flex justify-center items-center
        text-gray-400 text-[15px] bg-darkBg rounded-full
        gap-1 font-[500] p-1"
		>
			<button
				onClick={() => dispatch(start())}
				className="tracking-[.5px] transition-all hover:text-darkBg hover:bg-line rounded-3xl p-2 px-6
                hover:font-[700] active:scale-[1.5]"
			>
				start
			</button>
			<button
				onClick={() => dispatch(pause())}
				className="tracking-[.5px] transition-all hover:text-darkBg hover:bg-line rounded-3xl p-2 px-6 
                hover:font-[700] active:scale-[1.5]"
			>
				pause
			</button>
			<button
				onClick={() => dispatch(resume())}
				className="tracking-[.5px] transition-all hover:text-darkBg hover:bg-line rounded-3xl p-2 px-6 
                hover:font-[700] active:scale-[1.5]"
			>
				resume
			</button>
		</div>
	);
}

export default Buttons;
