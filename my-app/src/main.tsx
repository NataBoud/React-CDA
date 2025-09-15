// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  // <StrictMode> outil de debug pour détecter des problèmes. car le double appel des hooks
    <App />
 // </StrictMode>,
)
