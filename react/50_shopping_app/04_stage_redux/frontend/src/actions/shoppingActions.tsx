import {loading,stopLoading,logoutFailed} from './loginActions';
import ShoppingItem from '../models/ShoppingItem';
import Action from '../types/Action';
import {ApplicationState} from '../types/states';
import {ThunkDispatch} from 'redux-thunk';
import * as actionConstants from '../types/actionConstants';

//ASYNC THUNKS

export const getList = (token:string,search?:string) => {
	return (dispatch:ThunkDispatch<ApplicationState,null,Action>) => {
		let url = "/api/shopping";
		if(search) {
			url = url+"?type="+search
		}
		let request = new Request(url,{
			method:"GET",
			headers:{
				"token":token
			}
		})
		handleFetch(request,"getlist",dispatch,token);
	}
}

export const add = (token:string,item:ShoppingItem) => {
	return (dispatch:ThunkDispatch<ApplicationState,null,Action>) => {
		let request = new Request("/api/shopping",{
			method:"POST",
			headers:{
				"Content-Type":"application/json",
				"token":token
			},
			body:JSON.stringify(item)
		})
		handleFetch(request,"additem",dispatch,token);
	}
}

export const remove = (token:string,id:string) => {
	return (dispatch:ThunkDispatch<ApplicationState,null,Action>) => {
		let request = new Request("/api/shopping/"+id,{ 
			method:"DELETE",
			headers:{
				"token":token
			}
		})
		handleFetch(request,"removeitem",dispatch,token);
	}
}
export const edit = (token:string,item:ShoppingItem) => {
	return (dispatch:ThunkDispatch<ApplicationState,null,Action>) => {
		let request = new Request("/api/shopping/"+item.id,{
			method:"PUT",
			headers:{
				"Content-Type":"application/json",
				"token":token
			},
			body:JSON.stringify(item)
		})
		handleFetch(request,"edititem",dispatch,token);
	}
}

const handleFetch = async (request:Request,act:string,dispatch:ThunkDispatch<ApplicationState,null,Action>,token:string) => {
	dispatch(loading());
	const response = await fetch(request);
	dispatch(stopLoading());
	if(!response) {
		dispatch(logoutFailed("Server never responded. Logging you out."));
		return;
	}
	if(response.ok) {
		switch(act) {
			case "getlist":
				let temp = await response.json();
				if(!temp) {
					dispatch(fetchListFailed("Failed to parse shopping information. Try again later."));
					return;
				}
				let list = temp as ShoppingItem[];
				dispatch(fetchListSuccess(list));
				return;
			case "additem":
				dispatch(handleShoppingSuccess(actionConstants.ADD_ITEM_SUCCESS));
				dispatch(getList(token));
				return;
			case "removeitem":
				dispatch(handleShoppingSuccess(actionConstants.REMOVE_ITEM_SUCCESS));
				dispatch(getList(token));
				return;
			case "edititem":
				dispatch(handleShoppingSuccess(actionConstants.EDIT_ITEM_SUCCESS));
				dispatch(getList(token));
				return;
			default:
				return;
		}
	} else {
		if(response.status === 403) {
			dispatch(logoutFailed("Your session has expired. Logging you out."));
			return;
		}
		let errorMessage = " Server responded with a status "+response.status+" "+response.statusText
		switch(act) {
			case "getlist":
				dispatch(fetchListFailed("Failed to fetch shopping information."+errorMessage));
				return;
			case "additem":
				dispatch(handleShoppingFailed(actionConstants.ADD_ITEM_FAILED,"Failed to add new item."+errorMessage));
				return;
			case "removeitem":
				dispatch(handleShoppingFailed(actionConstants.REMOVE_ITEM_FAILED,"Failed to remove item."+errorMessage));
				return;
			case "edititem":
				dispatch(handleShoppingFailed(actionConstants.EDIT_ITEM_FAILED,"Failed to edit item."+errorMessage));
				return;
			default:
				return;
		}
	}
	
}

//ACTION CREATORS

const fetchListSuccess = (list:ShoppingItem[]) => {
	return {
		type:actionConstants.FETCH_LIST_SUCCESS,
		payload:list
	}
}

const fetchListFailed = (error:string) => {
	return {
		type:actionConstants.FETCH_LIST_FAILED,
		payload:error
	}
}

const handleShoppingSuccess = (type:string) => {
	return {
		type:type
	}
}

const handleShoppingFailed = (type:string,error:string) => {
	return {
		type:type,
		payload:error
	}
}