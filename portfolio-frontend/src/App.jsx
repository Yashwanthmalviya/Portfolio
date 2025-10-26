import { useState } from 'react'

import './index.css';
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar';

function App() {


  return (
    <>

      <div className='main-container'>
        <Navbar />
        <Home />
      </div>

    </>
  )
}

export default App
