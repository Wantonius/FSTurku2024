import React,{useState} from 'react';
import ShoppingItem from '../models/ShoppingItem';
import {useDispatch,useSelector} from 'react-redux';
import Action from '../types/Action';
import {ThunkDispatch} from 'redux-thunk';
import {add} from '../actions/shoppingActions';
import {ApplicationState} from '../types/states';

interface State {
	type:string;
	count:number;
	price:number;
}

const ShoppingForm = () => {
	
	const [state,setState] = useState<State>({
		type:"",
		count:0,
		price:0
	})
	
	const dispatch:ThunkDispatch<ApplicationState,null,Action> = useDispatch();
	
	const tokenSelector = (state:ApplicationState) => state.login.token;
	
	const token = useSelector(tokenSelector);
	
	const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}
	
	const onSubmit = (event:React.SyntheticEvent) => {
		event.preventDefault();
		let item = new ShoppingItem(state.type,state.count,state.price,"");
		dispatch(add(token,item));
		setState({
			type:"",
			count:0,
			price:0
		})
	}
	return(
		<div style={{"width":"40%","backgroundColor":"lightblue","margin":"auto","textAlign":"center"}}>
			<form onSubmit={onSubmit} className="m-3">
				<label htmlFor="type" className="form-label">Type</label>
				<input type="text"
						name="type"
						id="type"
						className="form-control"
						onChange={onChange}
						value={state.type}/>
				<label htmlFor="count" className="form-label">Count</label>
				<input type="number"
						name="count"
						id="count"
						className="form-control"
						onChange={onChange}
						value={state.count}/>
				<label htmlFor="price" className="form-label">Price</label>
				<input type="number"
						name="price"
						id="price"
						step="0.01"
						className="form-control"
						onChange={onChange}
						value={state.price}/>
				<input type="submit" value="Add" className="btn btn-secondary"/>
			</form>
		</div>
	
	)
}

export default ShoppingForm;