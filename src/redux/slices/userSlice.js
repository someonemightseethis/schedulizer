import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		email: "",
		firstName: "",
		id: "",
		userData: [],
	},
	reducers: {
		setUser: (state, action) => {
			state.email = action.payload.email;
			state.firstName = action.payload.firstName;
			state.id = action.payload.id;
		},
		setUserData(state, action) {
			state.userData = action.payload;
		},
		clearUser: (state) => {
			return {
				...state,
				email: "",
				firstName: "",
				id: "",
			};
		},
	},
});

export const { setUser, clearUser } = userSlice.actions;
export const selectUserEmail = (state) => state.user.email;
export const selectUserFirstName = (state) => state.user.firstName;
export const selectUserId = (state) => state.user.id;
export const selectUserData = (state) => state.user.userData;

export default userSlice.reducer;
