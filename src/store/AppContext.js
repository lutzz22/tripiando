import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/BASE_URL";
import Cookies from 'js-cookie'




export const Context = createContext(null)
const UserProvider = ({children}) => {

    const [user, setUser] = useState({})
    const [email, setEmail] = useState('')
    const [pasword, setPasword] = useState('')
    const navigate = useNavigate()

    const userLogin = async(email, pasword) => {

        const objeto = {email, pasword}
        // console.log(user)

        try {
            const response = await axios.post(`${BASE_URL}/user/login`, objeto) 

            const data = await response.data

            // console.log(response)
            // console.log(data)

            if(response.status === 200){
                
                // Cookies.set('usuario', 'true')
                localStorage.setItem('usuario', 'si')
                navigate('/inicio')
                
            } else{
                setEmail('')
                setPasword('')
                alert('usuario no encontrado')
            }

        } catch (error) {
            console.log(error)
        }
    }

    const [posts, setPosts] = useState([])

    const getPosts = async() => {
        const response = await axios.get(`${BASE_URL}/posts`)

        const posteos = await response.data.posts 

        setPosts(posteos)
        console.log(posteos)
    }

    const [userPost, setUserPost] = useState([])

    const useModal = (initialValue = false) => {
        const [isOpen, setIsOpen] = useState (initialValue);
    
        const openModal= () => setIsOpen(true);
        const closeModal= () => setIsOpen(false);
        
    
        return [isOpen, openModal, closeModal]
    }

    useEffect(() => {
        getPosts()
      }, [])

      useEffect(() => {
        getUserPost()
      }, [])
        
    
    return (
        <Context.Provider value={{useModal, userLogin, email, setEmail, pasword, setPasword, user, posts, setPosts, getPosts, getUserPost, userPost, setUserPost}}>
            {children}
        </Context.Provider>
    )
}

export default UserProvider