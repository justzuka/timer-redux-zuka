import React, { useState } from "react";
import { useSelector } from "react-redux";
import type { RootState } from "./Store";

import TimerContainer from "./components/TimerContainer";

import { BsFillGearFill } from "react-icons/bs";
import Settings from "./components/Settings";

function App() {
	const [isSettingsOn, setIsSettingsOn] = useState(false);
	const theme = useSelector((state: RootState) => state.settings.theme);
	const font = useSelector((state: RootState) => state.settings.font);
	return (
		<div
			className={`w-screen h-screen flex flex-col justify-center items-center
		bg-bg gap-8 font-MsMadi ${theme} ${font}`}
		>
			<Settings isOn={isSettingsOn} />
			<TimerContainer />
			<button
				onClick={() => setIsSettingsOn(!isSettingsOn)}
				className="hover:scale-[1.3] hover:rotate-45 transition-all duration-700"
			>
				<BsFillGearFill className="text-white/[.5] w-[50px] h-[50px] active:brightness-50" />
			</button>
		</div>
	);
}

export default App;
