import { createContext, useEffect, useState } from "react";




export const Context = createContext(null)
const UserProvider = ({children}) => {

    const useModal = (initialValue = false) => {
        const [isOpen, setIsOpen] = useState (initialValue);
    
        const openModal= () => setIsOpen(true);
        const closeModal= () => setIsOpen(false);
        
    
        return [isOpen, openModal, closeModal]
    }
    

    return (
        <Context.Provider value={{useModal}}>
            {children}
        </Context.Provider>
    )
}

export default UserProvider