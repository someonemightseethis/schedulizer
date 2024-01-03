import { createSlice } from "@reduxjs/toolkit";

const businessRegistrationSlice = createSlice({
	name: "businessRegistration",
	initialState: {
		loading: false,
		error: null,
		businessData: null,
	},
	reducers: {
		registerBusinessRequest: (state) => {
			state.loading = true;
			state.error = null;
		},
		registerBusinessSuccess: (state, action) => {
			state.loading = false;
			state.businessData = action.payload;
		},
		registerBusinessFailure: (state, action) => {
			state.loading = false;
			state.error = action.payload;
		},
	},
});

export const {
	registerBusinessRequest,
	registerBusinessSuccess,
	registerBusinessFailure,
} = businessRegistrationSlice.actions;

export default businessRegistrationSlice.reducer;
