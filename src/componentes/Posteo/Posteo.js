import React from 'react'

const Posteo = (props) => {

    const {id, category, username, tittle, post} = props;

  return (
    <div>
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{tittle}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
                <p className="card-text">{post}</p>
                <a href="#" className="card-link">{username}</a>
                <a href="#" className="card-link">{id}</a>
            </div>
        </div>
    </div>
  )
}

export default Posteo