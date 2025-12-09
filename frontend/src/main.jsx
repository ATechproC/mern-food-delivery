import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShowModalProvider from './providers/ShowModalProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShowModalProvider>
      <App />
    </ShowModalProvider>
  </StrictMode>,
)
