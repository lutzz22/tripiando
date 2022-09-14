import {React, useContext}  from 'react'
import '../Landing/style.css'
import Navbar3 from '../../componentes/Navbar3/Navbar3.js';
import LandingCards from '../../componentes/LandingCards/LandingCards.js'

const Landing = () => {
  return (
    <div className='styleLanding'>
      <Navbar3/>
      <LandingCards/>
    </div>
  )
}

export default Landing