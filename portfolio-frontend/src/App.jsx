import { useState } from 'react'

import './index.css';
import Home from './pages/Home'
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/footer';

function App() {


  return (
    <>

      <div className='main-container'>
        <Navbar />
        <Home />
        <Footer />
      </div>

    </>
  )
}

export default App
