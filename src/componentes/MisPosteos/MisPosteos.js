import React, { useContext } from 'react'
import { Context } from '../../store/AppContext'
import MiPosteoCard from '../MiPosteoCard'
import '../MisPosteos/style.css'
import Navbar from '../Navbar/Navbar'

const MisPosteos = () => {
  
  const {userPost} = useContext(Context)


  return (
    <>
     <div className='d-flex inicio'>
      <Navbar/>
      <div className='d-flex flex-column posteos'>
          {
            userPost.map(posteo => (
              <MiPosteoCard key={posteo.id} {...posteo} posteo={posteo}/>
            ))
          }
      </div>  

    </div>
    </>
  )
}

export default MisPosteos