// src/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer, {
	handleSignInSuccess,
	handleLogout,
} from "../slices/authSlice";
import userReducer from "../slices/userSlice";
import businessReducer from "../slices/businessSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
		business: businessReducer,
	},
});

export const dispatchSignInSuccess = (user) => (dispatch) => {
	dispatch(handleSignInSuccess(user));
};

export const dispatchLogout = () => (dispatch) => {
	dispatch(handleLogout());
};

export default store;
