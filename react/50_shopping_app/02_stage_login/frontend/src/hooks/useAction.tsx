import {useState,useEffect} from 'react';
import ShoppingItem from '../models/ShoppingItem';
import {AppState} from '../types/states';
import User from '../models/User';

interface UrlRequest {
	request:Request;
	action:string;
}

interface Token {
	token:string;
}

const useAction = () => {
	
	const [state,setState] = useState<AppState>({
		list:[],
		isLogged:false,
		token:"",
		loading:false,
		error:"",
		user:""
	})
	
	const [urlRequest,setUrlRequest] = useState<UrlRequest>({
		request:new Request("",{}),
		action:""
	})
	
	//STATE HELPERS
	const saveToStorage = (state:AppState) => {
		sessionStorage.setItem("state",JSON.stringify(state));
	}
	
	useEffect(() => {
		let temp = sessionStorage.getItem("state");
		if(temp) {
			let state:AppState = JSON.parse(temp);
			setState(state);
			if(state.isLogged) {
				getList(state.token);
			}
		}
	},[])
	
	const setLoading = (loading:boolean) => {
		setState((state) => {
			return {
				...state,
				error:"",
				loading:loading
			}
		})
	}
	
	const setError = (error:string) => {
		setState((state) => {
			let tempState = {
				...state,
				error:error
			}
			saveToStorage(tempState);
			return tempState;
		})
	}
	
	//Fetch stuff from backend
	
	useEffect(() => {
		
		if(urlRequest.action == "") {
			return;
		}
		
		const fetchData = async () => {
			const response = await fetch(urlRequest.request);
			if(!response) {
				console.log("Server did not respond!");
				return;
			}
			if(response.ok) {
				switch(urlRequest.action) {
					case "getlist":
						let temp = await response.json();
						let list:ShoppingItem[] = temp as ShoppingItem[]
						setState({
							list:list
						})
						return;
					case "additem":
					case "removeitem":
					case "edititem":
						getList();
						return;
					default:
						return;
				}
			} else {
				console.log("Server responded with a status "+response.status+" "+response.statusText)
			}
		}
		
		fetchData();
		
	},[urlRequest]);
	
	//API functions
	
	const getList = () => {
		setUrlRequest({
			request:new Request("/api/shopping",{
				method:"GET"
			}),
			action:"getlist"
		})
	}
	
	const add = (item:ShoppingItem) => {
		setUrlRequest({
			request:new Request("/api/shopping",{
				method:"POST",
				headers:{
					"Content-Type":"application/json"
				},
				body:JSON.stringify(item)
			}),
			action:"additem"
		})		
	}
	
	const remove = (id:string) => {
		setUrlRequest({
			request:new Request("/api/shopping/"+id,{
				method:"DELETE"
			}),
			action:"removeitem"
		})
	}
	
	const edit = (item:ShoppingItem) => {
		setUrlRequest({
			request:new Request("/api/shopping/"+item.id,{
				method:"PUT",
				headers:{
					"Content-Type":"application/json"
				},
				body:JSON.stringify(item)
			}),
			action:"edititem"
			
		})
	}
	
	return {state,add,remove,edit}
}

export default useAction;