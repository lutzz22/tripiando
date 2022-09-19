import React from 'react'
// import {useEffect, useState } from "react";
import Modal from '../ModalPost/Modal'
import '../ModalPost/style.css'
import { useModal } from './useModal'



const ModalPost = () => {
    const[isOpenModal, modalOpen, modalClose] = useModal(false);

    return [
        <div>
            
            <button onClick={modalOpen}> Nuevo Post </button>
            <Modal isOpen={isOpenModal} isClose={modalClose}></Modal>
        </div>
        
    ]
}

export default ModalPost


