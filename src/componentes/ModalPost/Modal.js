import React, { useContext } from 'react'
import { Context } from '../../store/AppContext'
// import {useEffect, useState } from "react";
import '../ModalPost/Modal.css'


const Modal = ({ children, isOpen, isClose }) => { 

    const{createPost, category, username, tittle, post, setCategory, setTittle, setPost} = useContext(Context)

    const onSubmit = (e) =>{
        e.preventDefault()
        createPost(category, username, tittle, post)
    }
return (
        
        <div className= {`modal ${isOpen && "modal-is-open"}`}>
            
                <div id='modal' className= 'modal-container' >
                        <h3> NUEVO POSTEO </h3>
                        <button className= 'modal-close' onClick={isClose} > X </button>

                    <div className='my-5'>
                        <div className='modal-text'> 
                            <input className=' modal-input' type="text" placeholder='Elija una categoria' value={category} onChange={(e) => setCategory(e.target.value)}></input> 
                        </div>

                        <div className='modal-text'>
                            <input className='py-2 modal-input' type="text"  placeholder='Escriba un título' value={tittle} onChange={(e) => setTittle(e.target.value)}></input>
                        </div>

                        <div className='modal-text'>
                            <input className=' modal-input-descripcion' type="text" placeholder='Agregue una descripción al post' value={post} onChange={(e) => setPost(e.target.value)}></input>
                        </div>
                        
                            <button onClick={onSubmit} className='modal-postear'> Postear </button>
                            {children}


                    </div>
                    
                </div>
        </div>
    )

}

export default Modal

