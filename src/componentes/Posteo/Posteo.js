// import React from 'react'
import { Link } from 'react-router-dom'; 
import React, { useContext } from 'react'
import { Context } from '../../store/AppContext';
import './style.css'

const Posteo = ( { username, tittle, post, posteo}) => {
    const {addFavs, contador} = useContext(Context)

  return (
    <div>
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{tittle}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
                <p className="card-text">{post}</p>
                <Link to="/" className="card-link">{username}</Link>
                <Link to="/" className="card-link">{id}</Link>
                <div className="card post">
                <div className="card-header tittle">
                {tittle}
                </div>
                </div>
            </div>
          <div className="card-body">
            <p>{post}</p>
            
            <div className=" category mb-0">
              <cite className='user'title="Source Title">@{username}</cite>
              <Link to="/" ><i onClick={()=> addFavs(posteo)} className="cora bi bi-suit-heart ">{contador}</i></Link> 
            </div>
          </div>
        </div>
    </div>
  )
}

export default Posteo