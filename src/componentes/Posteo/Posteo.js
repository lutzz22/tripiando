import React from 'react'
import { Link } from 'react-router-dom'; 

const Posteo = (props) => {

    const {id, category, username, tittle, post} = props;

  return (
    <div>
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{tittle}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{category}</h6>
                <p className="card-text">{post}</p>
                <Link to="#" className="card-link">{username}</Link>
                <Link to="#" className="card-link">{id}</Link>
            </div>
        </div>
    </div>
  )
}

export default Posteo