import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
	name: "user",
	initialState: {
		email: "",
		firstName: "",
		id: "",
	},
	reducers: {
		setUser: (state, action) => {
			state.email = action.payload.email;
			state.firstName = action.payload.firstName;
			state.id = action.payload.id;
		},
		clearUser: () => {
			return { email: "", firstName: "", id: "" };
		},
	},
});

export const { setUser, clearUser } = userSlice.actions;
export const selectUserEmail = (state) => state.user.email;

export default userSlice.reducer;
