import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import countReducer,{State} from './reducers/countReducer';
import {Provider} from 'react-redux';
import {createStore,Store,Action} from 'redux';

const store:Store<State,Action> = createStore(countReducer);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <Provider store={store}>
    <App />
  </Provider>
  </StrictMode>,
)
