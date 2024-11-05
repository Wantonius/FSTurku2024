import {loading,stopLoading,logoutFailed} from './loginActions';
import ShoppingItem from '../models/ShoppingItem';
import {AnyAction} from 'redux';
import {ThunkDispatch} from 'redux-thunk';
import * as actionConstants from '../types/actionConstants';

//ASYNC THUNKS

export const getList = (token:string,search?:string) => {
	return (dispatch:ThunkDispatch<any,any,AnyAction>) => {
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
	return (dispatch:ThunkDispatch<any,any,AnyAction>) => {
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
	return (dispatch:ThunkDispatch<any,any,AnyAction>) => {
		let request = new Request("/api/shopping/"+id,{ 
			method:"DELETE",
			headers:{
				"token":token
			}
		})
	handleFetch(request,"removeitem",dispatch,token);
}

export const edit = (token:string,item:ShoppingItem) => {
	return (dispatch:ThunkDispatch<any,any,AnyAction>) => {
		let request = new Request("/api/shopping/"+item._id,{
			method:"PUT",
			headers:{
				"Content-Type":"application/json",
				"token":token
			}
			body:JSON.stringify(item)
		})
	handleFetch(request,"edititem",dispatch,token);
}


const handleFetch = async (request:Request,act:string,dispatch:ThunkDispatch<any,any,AnyAction>,token:string) => {
	
}

//ACTION CREATORS

const fetchListSuccess = (list:ShoppingItem[]) => {
	return {
		type:actionConstants.FETCH_LIST_SUCCESS,
		list:list
	}
}

const fetchListFailed = (error:string) => {
	return {
		tyoe:actionConstants.FETCH_LIST_FAILED,
		error:error
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
		error:error
	}
}