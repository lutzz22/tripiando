// import axios from "axios";
import { createContext } from "react";
// import ModalPost from '../ModalPost/ModalPost'
// import Modal from '../componentes/ModalPost/Modal'
// import '../componentes/ModalPost/Modal.css'



export const Context = createContext(null)
const UserProvider = ({children}) => {

    // const [openModal, setOpenModal] = useState(false)
    // const [closeModal, setCloseModal] = useState(true)


    // const ModalOpen = () => {
    //     setOpenModal(true)
    // }

    // const ModalClose = () => {
    //     setCloseModal(true)
    // }
    


    return (
        <Context.Provider value={{}}>
            {children}
        </Context.Provider>
    )
}

export default UserProvider