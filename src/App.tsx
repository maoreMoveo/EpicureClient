import React from 'react'
import HeroMain from './componets/hero_main/HeroMain'
import NavBar from './componets/navbar/NavBar'

const App = () => {
  return (
    <>
        <NavBar/>
      <main>
        <HeroMain/>
      </main>
    </>
  )
}

export default App