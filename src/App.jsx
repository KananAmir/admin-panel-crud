import { useState } from 'react'
import HomePage from './pages/home-page'
import { Routing } from './routing/index.jsx'
import './App.css'
import Header from './layouts/header'

function App() {

  return (
    <div className="App">
      <Header />
      <Routing />
    </div>
  )
}

export default App
