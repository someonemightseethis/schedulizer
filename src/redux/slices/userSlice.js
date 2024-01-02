import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
	name: "user",
	initialState: {
		email: null,
		firstName: null,
		id: null,
	},
	reducers: {
		setUserEmail: (state, action) => {
			state.email = action.payload;
		},
		setUserFirstName: (state, action) => {
			state.firstName = action.payload;
		},
		setUserId: (state, action) => {
			state.id = action.payload;
		},
		clearUser: (state) => {
			state.email = null;
			state.firstName = null;
			state.id = null;
		},
	},
});

export const { setUserEmail, setUserFirstName, setUserId, clearUser } =
	userSlice.actions;

export const selectUserEmail = (state) => state.user.email;
export const selectUserFirstName = (state) => state.user.firstName;
export const selectUserId = (state) => state.user.id;

export default userSlice.reducer;
