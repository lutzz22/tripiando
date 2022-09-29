import {React, useContext}  from 'react'
import { Context } from '../../store/AppContext';
import '../Landing/style.css'
import Navbar3 from '../../componentes/Navbar3/Navbar3.js';
import LandingCards from '../../componentes/LandingCards/LandingCards.js'

const Landing = () => {

  const {posts} = useContext(Context)


  return (
    <div style={{backgroundColor: "#ABC9FF"}}>
      <div className='styleLanding'>
        <Navbar3/>
        <div className='d-flex flex-wrap justify-content-center landing'>
            {
              posts.map(posteo => (
                <LandingCards key={posteo.id} {...posteo} />
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default Landing