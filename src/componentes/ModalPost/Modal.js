import React from 'react'
// import {useEffect, useState } from "react";
import '../ModalPost/Modal.css'


const Modal = ({ children, isOpen, isClose }) => { 

return (
        
        <div className= {`modal ${isOpen && "modal-is-open"}`}>
            
                <div className= 'modal-container'>

                        <button className= 'modal-close' onClick={isClose} > X </button>

                    <div className='my-5'>
                        <div className='modal-text'> 
                            <input className='px-5 ' type="text" placeholder='Elija una categoria'></input> 
                        </div>

                        <div className='modal-text'>
                            <input className='px-5 py-2 ' type="text"  placeholder='Escriba un titulo'></input>
                        </div>

                        <div className='modal-text'>
                            <input className='p-5 ' type="text" placeholder='Agregue una descripcion al post'></input>
                        </div>
                        
                            <button className='modal-postear'> Postear </button>
                            {children}

                    </div>
                    
                </div>
        </div>
    )

}

export default Modal

