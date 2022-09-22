
import { Routing } from './routing/index.jsx'
import './App.css'
import Header from './layouts/header'
import { createContext } from 'react'

function App() {
  return (
    <div className="App">
      <Header />
      <Routing />
    </div>
  )
}

export default App
