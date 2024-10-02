import React from 'react'
import Navbar from './components/Navbar'
import Profile from './components/Profile'

const App = () => {
  return (
    <div className='overflow-x-hidden antialiased'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className='container mx-auto px-8'>
          <Navbar />
          <Profile />
        </div>
      </div>  
    </div>
  )
}

export default App