import React from 'react'

const MiPosteoCard = ( { username, tittle, post }) => {


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
            </div>
          </div>
        </div>
    </div>
  )
}

export default MiPosteoCard