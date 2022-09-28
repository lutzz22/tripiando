import React, { useContext } from 'react'
import { Context } from '../../store/AppContext';
import './style.css'

const Posteo = ( { username, tittle, post, posteo}) => {
    const {addFavs, contador} = useContext(Context)

  return (
    <div>
        <div className="card post">
          <div className="card-header tittle">
            {tittle}
          </div>
          <div className="card-body">
            <p>{post}</p>
            
            <div className=" category mb-0">
            <cite className='user'title="Source Title">@{username}</cite>
            <a><i onClick={()=> addFavs(posteo)} className="cora bi bi-suit-heart ">{contador}</i></a> 
            </div>
          </div>
        </div>
    </div>
  )
}

export default Posteo