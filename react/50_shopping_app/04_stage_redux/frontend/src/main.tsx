import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom';
import StateManager from './context/StateManager';
import {Store,applyMiddleware,combineReducers,createStore} from 'redux';
import loginReducer from './reducers/loginReducer';
import shoppingReducer from './reducers/shoppingReducer';
import {ApplicationState,RootReducer} from './types/states';
import Action from './types/Action';
import {Provider} from 'react-redux';
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers<RootReducer>({
	login:loginReducer,
	shopping:shoppingReducer
})

const store:Store<ApplicationState,Action> = createStore(rootReducer,applyMiddleware(thunk));

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
  <Provider store={store}>
  <StateManager>
    <App />
  </StateManager>
  </Provider>
  </BrowserRouter>
  </StrictMode>,
)
