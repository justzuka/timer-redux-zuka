import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface settingsState {
	theme: String;
	font: String;
}

const initialState: settingsState = {
	theme: "blue-theme",
	font: "font-sans",
};

export const settingsSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		changeTheme(state, action: PayloadAction<String>) {
			state.theme = action.payload;
		},
		changeFont(state, action: PayloadAction<String>) {
			state.font = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { changeTheme, changeFont } = settingsSlice.actions;

export default settingsSlice.reducer;
