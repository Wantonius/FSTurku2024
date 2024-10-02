import ShoppingItem from '../models/ShoppingItem';
import {Reducer} from 'redux';
import Action from './Action';

//Old App State - To be removed later
export interface AppState {
	list:ShoppingItem[];
	isLogged:boolean;
	token:string;
	loading:boolean;
	error:string;
	user:string;
}

export interface ShoppingState {
	list:ShoppingItem[];
	error:string;
}

export interface LoginState {
	isLogged:boolean;
	loading:boolean;
	token:string;
	error:string;
	user:string;
}

export interface ApplicationState {
	login:LoginState;
	shopping:ShoppingState;
}

export interface RootReducer {
	login:Reducer<LoginState,Action>;
	shopping:Reducer<ShoppingState,Action>;
}