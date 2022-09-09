import { useDispatch } from "react-redux";
import { changeTheme, changeFont } from "../settingsSlice";
interface props {
	isOn: Boolean;
}
function Settings(props: props) {
	const dispatch = useDispatch();
	const clickedThemeButton = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		const newTheme = e.currentTarget.name;
		dispatch(changeTheme(newTheme));
	};

	const clickedFontButton = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		const newFont = e.currentTarget.name;
		dispatch(changeFont(newFont));
	};

	return (
		<div
			className={`flex flex-col gap-5 justify-center items-center
		w-[200px] bg-white absolute z-[2] rounded-lg p-2
		transition-all
		${props.isOn ? "scale-[1]" : "scale-[0]"}`}
		>
			<div className="text-[30px] font-[600] tracking-wide mx-5">Settings</div>
			<div className="w-full h-[1px] bg-gray-400/[.5]"></div>

			<div className="flex items-center justify-between">
				<div className="w-[50px] text-[20px] font-[600] tracking-wide mx-5">
					Color
				</div>
				<div className="flex items-center justify-center mx-5 gap-2">
					<button
						onClick={(e) => clickedThemeButton(e)}
						name={""}
						className="w-[25px] h-[25px] bg-red rounded-full hover:scale-[1.3] transition-all"
					></button>
					<button
						onClick={(e) => clickedThemeButton(e)}
						name={"blue-theme"}
						className="w-[25px] h-[25px] bg-blue rounded-full hover:scale-[1.3] transition-all"
					></button>
					<button
						onClick={(e) => clickedThemeButton(e)}
						name={"pink-theme"}
						className="w-[25px] h-[25px] bg-pink rounded-full hover:scale-[1.3] transition-all"
					></button>
				</div>
			</div>

			<div className="flex items-center justify-between">
				<div className="w-[50px] text-[20px] font-[600] tracking-wide mx-5">
					Font
				</div>
				<div className="flex items-center justify-center mx-5 gap-2 text-[12px]">
					<button
						onClick={(e) => clickedFontButton(e)}
						name={"font-sans"}
						className="font-sans w-[25px] h-[25px] bg-myGray rounded-full hover:scale-[1.3] transition-all"
					>
						Aa
					</button>
					<button
						onClick={(e) => clickedFontButton(e)}
						name={"font-MsMadi"}
						className="font-MsMadi w-[25px] h-[25px] bg-myGray rounded-full hover:scale-[1.3] transition-all"
					>
						Aa
					</button>
					<button
						onClick={(e) => clickedFontButton(e)}
						name={"font-Raley"}
						className="font-Raley w-[25px] h-[25px] bg-myGray rounded-full hover:scale-[1.3] transition-all"
					>
						Aa
					</button>
				</div>
			</div>
		</div>
	);
}

export default Settings;
