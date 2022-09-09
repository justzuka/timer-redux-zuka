import { createSlice } from "@reduxjs/toolkit";

export interface TimerState {
	isPaused: boolean;
	lastTimeUpdated: number;
	timePassed: number;
}

const initialState: TimerState = {
	isPaused: true,
	lastTimeUpdated: 0,
	timePassed: 0,
};

export const timerSlice = createSlice({
	name: "counter",
	initialState,
	reducers: {
		start: (state) => {
			state.isPaused = false;
			state.lastTimeUpdated = new Date().getTime();
			state.timePassed = 0;
		},
		pause: (state) => {
			if (!state.isPaused) {
				const now = new Date().getTime();
				state.timePassed += now - state.lastTimeUpdated;
				state.lastTimeUpdated = now;
				state.isPaused = true;
			}
		},
		resume: (state) => {
			if (state.isPaused) {
				state.isPaused = false;
				state.lastTimeUpdated = new Date().getTime();
			}
		},
		update: (state) => {
			if (!state.isPaused) {
				const now = new Date().getTime();
				state.timePassed += now - state.lastTimeUpdated;
				state.lastTimeUpdated = now;
			}
		},
	},
});

// Action creators are generated for each case reducer function
export const { start, pause, resume, update } = timerSlice.actions;

export default timerSlice.reducer;
