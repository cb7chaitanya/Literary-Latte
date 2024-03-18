import React from 'react'
import Navbar from './components/navbar'
import LandingPage from './components/LandingPage'
import Infinite from './components/infinite'
import About from './components/about'
import Footer from './components/footer'
import History from './components/History'
import Menu from './components/Menu'

function App() {
  return (
    <div className='overflow-hidden w-full min-h-screen text-brown bg-white'>
      <Navbar></Navbar>
      <LandingPage></LandingPage>
      <Infinite></Infinite>
      <About></About>
      <History></History>
      <Menu></Menu>
      <Footer></Footer>
    </div>
  )
}

export default App