// •	El archivo main.jsx es esencial porque conecta tu aplicación React con el DOM del navegador.
// •	Gestiona la inicialización del árbol de componentes.
// •	Usa StrictMode para ayudarte a detectar problemas en el desarrollo.
// •	Renderiza dinámicamente tu aplicación en el contenedor #root del archivo HTML.

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
