import useAction from './hooks/useAction';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import {Routes,Route,Navigate} from 'react-router-dom';
function App() {
	
	const {state,addContact,removeContact} = useAction()

	return (
		<>
			<Routes>
				<Route path="/" element={<ContactList list={state.list} removeContact={removeContact}/>}/>
				<Route path="/form" element={<ContactForm addContact={addContact}/>}/>
				<Route path="*" element={<Navigate to="/"/>}/>
			</Routes>
		</>
	)
}

export default App
