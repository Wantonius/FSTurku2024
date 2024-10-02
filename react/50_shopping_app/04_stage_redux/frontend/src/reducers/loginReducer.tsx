import * as actionConstants from '../types/actionConstants';
import {LoginState} from '../types/states';
import Action from '../types/Action';
import {Reducer} from 'redux';

const getInitialState = ():LoginState => {
	let state = sessionStorage.getItem("loginstate");
	if(state) {
		return JSON.parse(state);
	} else {
		return {
			isLogged:false,
			loading:false,
			token:"",
			error:"",
			user:""
		}
	}
}

const initialState = getInitialState();

const saveToStorage = (state:LoginState) => {
	sessionStorage.setItem("loginstate",JSON.stringify(state));
}

const loginReducer:Reducer<LoginState,Action> = (state = initialState,action) => {
	console.log("loginReducer, action",action);
	let tempState = {
		...state
	}
	let payload = "";
	switch(action.type) {
		case actionConstants.LOADING:
			return {
				...state,
				error:"",
				loading:true
			}
		case actionConstants.STOP_LOADING:
			return {
				...state,
				loading:false
			}
		case actionConstants.REGISTER_SUCCESS:
			tempState = {
				...state,
				error:"Register success"
			}
			saveToStorage(tempState);
			return tempState;
		case actionConstants.LOGIN_SUCCESS:
			if(action.payload) {
				payload = action.payload as string;
			}
			tempState = {
				...state,
				isLogged:true,
				token:payload
			}
			saveToStorage(tempState);
			return tempState;
		case actionConstants.REGISTER_FAILED:
		case actionConstants.LOGIN_FAILED:
			if(action.payload) {
				payload = action.payload as string;
			}
			tempState = {
				...state,
				error:payload
			}
			saveToStorage(tempState);
			return tempState;
		case actionConstants.LOGOUT_SUCCESS:
			tempState = {
				isLogged:false,
				loading:false,
				token:"",
				error:"",
				user:""
			}
			saveToStorage(tempState);
			return tempState;
		case actionConstants.LOGOUT_FAILED:
			if(action.payload) {
				payload = action.payload as string;
			}
			tempState = {
				isLogged:false,
				loading:false,
				token:"",
				error:payload,
				user:""
			}
			saveToStorage(tempState);
			return tempState;
		case actionConstants.SET_USER:
			if(action.payload) {
				payload = action.payload as string;
			}
			tempState = {
				...state,
				user:payload
			}
			saveToStorage(tempState);
			return tempState;
		default:	
			return state;
	}
}

export default loginReducer;