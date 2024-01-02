import {
	SIGN_IN_REQUEST,
	SIGN_IN_SUCCESS,
	SIGN_IN_FAILURE,
	LOGOUT,
	signInSuccess,
} from "../actions/authActions";
import { clearUser, setUserEmail } from "../slices/userSlice";

const initialState = {
	loading: false,
	error: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SIGN_IN_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};

		case SIGN_IN_SUCCESS:
			return {
				...state,
				loading: false,
				email: action.payload.email,
			};

		case SIGN_IN_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};

		case LOGOUT:
			return {
				...initialState,
			};

		default:
			return state;
	}
};

export const handleSignInSuccess = (user) => (dispatch) => {
	dispatch(setUserEmail(user.email));
	dispatch(signInSuccess(user));
};

export const handleLogout = () => (dispatch) => {
	dispatch(clearUser());
	dispatch({ type: LOGOUT });
};

export default authReducer;
