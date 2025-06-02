import { useState } from 'react'
import './App.css'
import { Header } from './comps/Header'
import { TabBox } from './comps/TabBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          Vite Logo Here
        </a>
        <a href="https://react.dev" target="_blank">
          React Logo Here
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <Header />
      <TabBox />
    </>
  )
}

export default App