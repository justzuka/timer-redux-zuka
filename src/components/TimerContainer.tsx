import Timer from "./Timer";
import Buttons from "./Buttons";
function TimerContainer() {
	return (
		<div className="flex flex-col gap-5 justify-center items-center">
			<Buttons></Buttons>
			<Timer updateInterval={100} />
		</div>
	);
}

export default TimerContainer;
