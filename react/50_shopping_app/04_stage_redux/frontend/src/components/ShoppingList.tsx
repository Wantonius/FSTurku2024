import React,{useState} from 'react';
import ShoppingItem from '../models/ShoppingItem';
import Row from './Row';
import RemoveRow from './RemoveRow';
import EditRow from './EditRow';
import useAction from '../hooks/useAction';
import useAppState from '../hooks/useAppState';

interface State {
	removeIndex:number;
	editIndex:number;
}

interface SearchState {
	search:string;
}
const ShoppingList = () => {
	
	const [state,setState] = useState<State>({
		removeIndex:-1,
		editIndex:-1
	})
	
	const [searchState,setSearchState] = useState<SearchState>({
		search:""
	})
	
	const {list,token} = useAppState();
	const {remove,edit,getList} = useAction();
	
	const changeMode = (mode:string,index:number) => {
		switch(mode) {
			case "remove": 
				setState({
					removeIndex:index,
					editIndex:-1
				})
				return;
			case "edit":
				setState({
					removeIndex:-1,
					editIndex:index
				})
				return;
			case "cancel":
				setState({
					removeIndex:-1,
					editIndex:-1
				})
				return;
			default:
				return;
		}
	}
	
	const searchByType = () => {
		getList(token,searchState.search);
		setSearchState({
			search:""
		})
	}
	
	const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setSearchState({
			search:event.target.value
		})
	}
	
	const removeItem = (id:string) => {
		remove(id);
		changeMode("cancel",0);
	}
	
	const editItem = (item:ShoppingItem) => {
		edit(item);
		changeMode("cancel",0);
	}
	
	const shoppingItems = list.map((item,index) => {
		if(state.removeIndex === index) {
			return (
				<RemoveRow key={item.id} item={item} changeMode={changeMode} removeItem={removeItem}/>
			)
		}
		if(state.editIndex === index) {
			return (
				<EditRow key={item.id} item={item} changeMode={changeMode} editItem={editItem}/>
			)
		}
		return(
			<Row key={item.id} item={item} index={index} changeMode={changeMode}/>
		)
	})
	return(
	<div style={{"margin":"auto","textAlign":"center"}}>
		<div style={{"width":"30%","textAlign":"center","margin":"auto"}}>
			<label htmlFor="search" className="form-label">Search by type</label>
			<input type="text"
					name="search"
					id="search"
					className="form-control"
					onChange={onChange}
					value={searchState.search}/>
			<button onClick={searchByType} className="btn btn-secondary">Search</button>
		</div>
		<table className="table table-striped">
			<thead>
				<tr>
					<th>Type</th>
					<th>Count</th>
					<th>Price</th>
					<th>Remove</th>
					<th>Edit</th>
				</tr>
			</thead>
			<tbody>
			{shoppingItems}
			</tbody>
		</table>
	</div>
	)
}

export default ShoppingList;