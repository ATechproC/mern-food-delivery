import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ShowModalProvider from './providers/ShowModalProvider.jsx'
import AppProvider from './providers/AppProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppProvider>
      <ShowModalProvider>
        <App />
      </ShowModalProvider>
    </AppProvider>
  </StrictMode>,
)
