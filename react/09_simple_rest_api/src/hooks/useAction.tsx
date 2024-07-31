import {useState,useEffect} from 'react';
import Contact from '../models/Contact';

interface State {
	list:Contact[];
}

interface UrlRequest {
	request:Request;
	action:string;
}

const useAction = () => {
	
	const [state,setState] = useState<State>({
		list:[]
	})
	
	const [urlRequest,setUrlRequest] = useState<UrlRequest>({
		request:new Request("",{}),
		action:""
	})
	
	//fetch uses useEffect. Note that useEffect CANNOT have async functions directly. We need to introduce an async function within useEffect and then use it.

	useEffect(() => {
		
		const fetchData = async () => {
			const response = await fetch(urlRequest.request);
			if(!response) {
				console.log("Server sent no response");
				return;
			}
			if(response.ok) {
				switch(urlRequest.action) {
					case "getlist":
						let temp = await response.json();
						let list:Contact[] = temp as Contact[];
						setState({
							list:list
						})
						return;
					case "add":
					case "remove":
						getList();
						return;
					default:
						return;
				}
			} else {
				console.log("Server responded with a status "+response.status+" "+response.statusText);
			}
		}
		
		fetchData();
	},[urlRequest]);
	
	//API CALLS
	
	const getList = () => {
		setUrlRequest({
			request:new Request("/api/contact",{
				method:"GET"
			}),
			action:"getlist"
		})
	}
	
	const addContact = (contact:Contact) => {
		setUrlRequest({
			request: new Request("/api/contact",{
				method:"POST",
				headers:{
					"Content-Type":"application/json"
				},
				body:JSON.stringify(contact)
			}),
			action:"add"
		})
	}
	
	const removeContact = (id:number) => {
		setUrlRequest({
			request:new Request("/api/contact/"+id,{
				method:"DELETE"
			}),
			action:"remove"
		})
	}
	
	return {state,addContact,removeContact}
}

export default useAction;