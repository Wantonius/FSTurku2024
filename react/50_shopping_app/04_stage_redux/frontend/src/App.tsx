import {useSelector} from 'react-redux';
import {ApplicationState} from './types/states';
import ShoppingForm from './components/ShoppingForm';
import ShoppingList from './components/ShoppingList';
import Navbar from './components/Navbar';
import LoginPage from './components/LoginPage';
import {Routes,Route,Navigate} from 'react-router-dom';

function App() {
	
	const stateSelector = (state:ApplicationState) => {
		let error = state.shopping.error;
		if(state.login.error) {
			error = state.login.error
		}
		return {
			loading:state.login.loading,
			error:error,
			isLogged:state.login.isLogged
		}
	}
	
	const state = useSelector(stateSelector);
	
	
	let messageArea = <h4 style={{height:50,textAlign:"center"}}></h4>
	if(state.loading) {
		messageArea = <h4 style={{height:50,textAlign:"center"}}>Loading ...</h4>
	}
	if(state.error) {
		messageArea = <h4 style={{height:50,textAlign:"center"}}>{state.error}</h4>
	}
	if(state.isLogged) {
		return (
			<>
				<Navbar />
				{messageArea}
				<Routes>
					<Route path="/" element={<ShoppingList />}/>
					<Route path="/form" element={<ShoppingForm />}/>
					<Route path="*" element={<Navigate to="/"/>}/>	
				</Routes>
			</>
		)
	} else {
		return (
			<>
				<Navbar />
				{messageArea}
				<Routes>
					<Route path="/" element={<LoginPage />}/>
					<Route path="*" element={<Navigate to="/"/>}/>	
				</Routes>
			</>
		)
	}
}

export default App
