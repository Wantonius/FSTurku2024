import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import contactReducer,{AppState,MyAction} from './reducers/contactReducer';
import {Provider} from 'react-redux';
import {createStore,Store} from 'redux';

const store:Store<AppState,MyAction> = createStore(contactReducer);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Provider store={store}>
    <App /> 
  </Provider>
  </StrictMode>,
)
