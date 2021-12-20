import {
	AUTH_TOKEN,
	AUTHENTICATED,
	USERNAME,
	SHOW_AUTH_MESSAGE,
	HIDE_AUTH_MESSAGE,
	SIGNOUT_SUCCESS,
	SIGNUP_SUCCESS,
	SHOW_LOADING,
	SIGNIN_WITH_GOOGLE_AUTHENTICATED,
  SIGNIN_WITH_FACEBOOK_AUTHENTICATED
} from '../constants/Auth';

import AuthService from "services/auth.service";

const initState = {
  loading: false,
  message: '',
  showMessage: false,
  redirect: '',
  token: localStorage.getItem(AUTH_TOKEN),
  username: '',
}

const auth = (state = initState, action) => {
	switch (action.type) {
		case AUTHENTICATED:
			return {
				...state,
				loading: false,
				redirect: '/',
				token: action.token,
				username: action.username
			}
		case SHOW_AUTH_MESSAGE: 
			return {
				...state,
				message: action.message,
				showMessage: true,
				loading: false
			}
		case HIDE_AUTH_MESSAGE: 
			return {
				...state,
				message: '',
				showMessage: false,
			}
		case SIGNOUT_SUCCESS: {
			return {
				...state,
				token: null,
				redirect: '/',
				loading: false
			}
		}
		case SIGNUP_SUCCESS: {
			return {
			  ...state,
			  loading: false,
			  token: action.token
			}
		}
		case SHOW_LOADING: {
			return {
				...state,
				loading: true
			}
		}
		case SIGNIN_WITH_GOOGLE_AUTHENTICATED: {
			return {
				...state,
				loading: false,
				token: action.token
			}
		}
		case SIGNIN_WITH_FACEBOOK_AUTHENTICATED: {
			return {
				...state,
				loading: false,
				token: action.token
			}
		}
		default:
			return state;
	}
}

export default auth