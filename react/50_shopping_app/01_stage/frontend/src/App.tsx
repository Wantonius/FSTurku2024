import useAction from './hooks/useAction';
import ShoppingForm from './components/ShoppingForm';

function App() {
	
	const {state,add,remove,edit} = useAction();

	return (
		<>
			<ShoppingForm add={add}/>
		</>
	)
}

export default App
