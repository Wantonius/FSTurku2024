import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {BrowserRouter} from 'react-router-dom';
import StateManager from './context/StateManager';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <BrowserRouter>
  <StateManager>
    <App />
  </StateManager>
  </BrowserRouter>
  </StrictMode>,
)
