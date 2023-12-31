import { configureStore } from "@reduxjs/toolkit";
import authReducer, {
	handleSignInSuccess,
	handleLogout,
} from "../reducers/authReducer";
import userReducer from "../slices/userSlice";

const store = configureStore({
	reducer: {
		auth: authReducer,
		user: userReducer,
	},
});

export const dispatchSignInSuccess = (user) => (dispatch) => {
	dispatch(handleSignInSuccess(user));
};

export const dispatchLogout = () => (dispatch) => {
	dispatch(handleLogout());
};

export default store;
