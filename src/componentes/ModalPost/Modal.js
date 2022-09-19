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


// const Modal = ({children}) => {

//   return (

//     <div class="modal" tabindex="-1" id="modal">
//       <div class="modal-dialog">
//     <div class="modal-content">
//     <div class="modal-header">

//       <div class="text-success">
//         <i class="far fa-check-circle modal-title display-1 text-center"></i>
//       </div>
//     </div>

//     <div class="modal-body">
//       <p class="text-center h3">Los datos ingresados son:</p>
//       <div class="w-50 mx-auto">
//         {/* <!-- La información capturada debe ser seteada en los span con los id: data-nombre, data-email,data-mensaje --> */}
//         <p><span class="h6">Categoria: </span><span id="data-nombre"></span></p>
//         <p><span class="h6">Titulo: </span><span id="data-email"></span></p>
//         <p><span class="h6">Descripcion: </span><span id="data-mensaje"></span></p>
//       </div>
//     </div>
//     <div class="modal-footer">
//       <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="cerrar" onClick="cerrarModal()">Cerrar</button>
//       {children}
//     </div>
//     </div>
//   </div>
//   </div>

//   )
// }

// export default Modal


// const modalPost = (event) => {
//     event.preventDefault()

//     let categoria = document.querySelector(".modal")
//     console.log(categoria.value)

//     let titulo = document.querySelector(".modal")
//     console.log(titulo.value)

//     let descripcion = document.querySelector(".modal")
//     console.log(descripcion.value)

//     console.log('Iniciando sesion')

// // MODAL

//     let modal = document.querySelector(".modal")
//     modal.classList.toggle("modal-header")

//     let categoriaData = document.querySelector('#data-categoria')
//     categoriaData.textContent = categoria.value

//     let tituloData = document.querySelector('#data-titulo')
//     tituloData.textContent = titulo.value

//     let descripcionData = document.querySelector('#data-descripcion')
//     descripcionData.textContent = descripcion.value

//     // LIMPIAR LOS CAMPOS

//     categoria.value = ""
//     titulo.value = ""
//     descripcion.value = ""

// }


// const cerrarModal = () => {
//     modal.cassList.toggle('modal-header')
//     modalPost()
// }

// export default {
//     modalPost,
//     cerrarModal
// }