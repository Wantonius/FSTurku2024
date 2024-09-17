import React,{useState} from 'react';
import ShoppingItem from '../models/ShoppingItem';

interface Props {
	item:ShoppingItem;
	editItem(item:ShoppingItem):void;
	changeMode(mode:string,index:number):void;
}

interface State {
	type:string;
	count:number;
	price:number;
}

const EditRow = (props:Props) => {
	
	const [state,setState] = useState<State>({
		type:props.item.type,
		count:props.item.count,
		price:props.item.price
	})
	
	const onChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setState((state) => {
			return {
				...state,
				[event.target.name]:event.target.value
			}
		})
	}
	
	const editItem = () => {
		const item = new ShoppingItem(state.type,state.count,state.price,props.item.id);
		props.editItem(item);
	}
	return(
		<tr>
			<td>
				<input type="text"
						name="type"
						id="type"
						onChange={onChange}
						className="form-control"
						value={state.type}/>
			</td>
			<td>
				<input type="number"
						name="count"
						id="count"
						onChange={onChange}
						className="form-control"
						value={state.count}/>
			</td>
			<td>
				<input type="number"
						name="price"
						id="price"
						onChange={onChange}
						className="form-control"
						step="0.01"
						value={state.price}/>
			</td>
			<td>
				<button onClick={editItem} className="btn btn-success">Save</button>
			</td>
			<td>
				<button onClick={() => props.changeMode("cancel",0)} className="btn btn-danger">Cancel</button>
			</td>
		</tr>
	)
}

export default EditRow;