import {React, useContext}  from 'react'
import { Context } from '../../store/AppContext';
import '../Landing/style.css'
import Navbar3 from '../../componentes/Navbar3/Navbar3.js';
import LandingCards from '../../componentes/LandingCards/LandingCards.js'

const Landing = () => {

  const {posts} = useContext(Context)
  console.log(posts)

  return (
    <body style={{backgroundColor: "#ABC9FF"}}>
    <div className='styleLanding'>
      <Navbar3/>
      <div className='d-flex justify-content-between'>
          {
            posts.map(posteo => (
              <LandingCards key={posteo.id} {...posteo} />
            ))
          }
      </div>
    </div>
    </body>
  )
}

export default Landing