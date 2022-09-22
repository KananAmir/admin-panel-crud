import { useState } from 'react'
import HomePage from './pages/home-page'
import './App.css'
import Header from './layouts/header'

function App() {

  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  )
}

export default App
