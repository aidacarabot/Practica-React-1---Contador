// Aquí gestionamos el estado y los eventos, y enviamos las props al componente ShowCount.
import { useState } from 'react'
import './App.css'
import ShowCount from './components/ShowCount/ShowCount'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ShowCount count={count} />
      <div className="buttons-count">
        <button onClick={() => setCount((count) => count + 1)}>
          Sumar
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Restar
        </button>
      </div>
    </>
  )
}

export default App
