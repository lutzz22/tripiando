import React, { useContext } from 'react'
import { Context } from '../../store/AppContext';
import './style.css'

const PosteoFav = ({id, username, tittle, post}) => {
    const {deleteFavs, postFavs} = useContext(Context)
    // const {id, username, tittle, post} = props;
    console.log(postFavs)

  return (
    <div>
        <div className="card post">
          <div className="card-header tittle">
            {tittle}
          </div>
          <div className="card-body">
            <p>{post}</p>
            <div className="blockquote-footer category mb-0">
            <cite className='user'title="Source Title">@{username}</cite>
            <a><i onClick={()=> deleteFavs(id)} className="cora bi bi-suit-heart-fill"></i></a>
            </div>
          </div>
        </div>
    </div>
  )
}

export default PosteoFav