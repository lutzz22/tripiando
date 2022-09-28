import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/BASE_URL";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from 'js-cookie'




export const Context = createContext(null)
const UserProvider = ({children}) => {


    const [user, setUser] = useState(Cookies.get('user') ? JSON.parse(Cookies.get('user')) : '')
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isLoggedIn') ? JSON.parse(Cookies.get('isLoggedIn')) : false)
    const [email, setEmail] = useState('')
    const [pasword, setPasword] = useState('')
    const navigate = useNavigate()

    console.log(user)

////////////////////////////////////////// USUARIOS ////////////////////////////////////////////

    const userLogin = async(email, pasword) => {

        const userData = {email, pasword}

        try {
            const response = await axios.post(`${BASE_URL}/user/login`, userData) 

            const data = await response.data
            const existe = await data.existe

            if(response.status === 200){
                setUser(data.usuario)
                setIsLoggedIn(existe)
                setEmail('')
                setPasword('')
                navigate('/inicio')
                
            } else{
                setEmail('')
                setPasword('')
                (Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Usuario o constaseña incorrecto',
                }))
            }

        } catch (error) {
            console.log(error)
        }
    }

    const [username, setUsername] = useState('')
    const [email2, setEmail2] = useState('')
    const [pasword2, setPasword2] = useState('')

    const createUser = async (username, email2, pasword2) => {
        const userData = {username, email2, pasword2}

        try{
            const response = await axios.post(`${BASE_URL}/user/create`, userData)

            const data = await response.data
            
            if(data){
                setEmail2('')
                setPasword2('')
                setUsername('')
                (Swal.fire({
                    icon: 'success',
                    title: data,
                }))
            }

        }catch (error){
            console.log(error)
        }
    }

    useEffect(() => {
        Cookies.set('user', JSON.stringify(user))
        Cookies.set('isLoggedIn', isLoggedIn)

    }, [user, isLoggedIn])


/////////////////////////////////////// POSTEOS ///////////////////////////////////////////////////////
    const [posts, setPosts] = useState([])
    const [userPost, setUserPost] = useState([])
    
    const getPosts = async() => {
        const response = await axios.get(`${BASE_URL}/posts`)

        const posteos = await response.data

        setPosts(posteos)
        console.log(posteos)
    }

    const [category, setCategory] = useState('')
    const [tittle, setTittle] = useState('')
    const [post, setPost] = useState('')

    const createPost = async (category, username, tittle, post) =>{
        username = user.username;

        const posteo = {category, username, tittle, post}

        const response = await axios.post(`${BASE_URL}/posts/create`, posteo)
        const data = response.data
        if(data) {
            setCategory('')
            setTittle('')
            setPost('')
            (Swal.fire({
                icon: 'success',
                title: data,
            }))
            useEffect(()=>{
                getPosts()
            }, [])
        }
    }

    useEffect(() => {
        getPosts()
    }, [])
    

 ///////////////////////////////////////// FUNCIONES //////////////////////////////////////////   

    const [contador, setContador] = useState(0)
    const [postFavs, setPostFavs] = useState([])

    const addFavs = (posteo) => {
        const postFavorito = postFavs.find(f => f.id === posteo.id)

        if(postFavorito){
            alert2()
            setPostFavs([...postFavs])
        }else{
            setPostFavs([...postFavs, posteo])
            setContador(contador+1)
        }
    }

    const deleteFavs = (id) =>{
        setContador(contador-1)
        
        setPostFavs(postFavs.filter((f) => f.id !== id))
        console.log(postFavs)

    }

    const useModal = (initialValue = false) => {
        const [isOpen, setIsOpen] = useState (initialValue);
    
        const openModal= () => setIsOpen(true);
        const closeModal= () => setIsOpen(false);
        
    
        return [isOpen, openModal, closeModal]
    }   

    const alert = () => {
        (Swal.fire({
            icon: 'warning',
            title: 'Porfavor inicia sesion para ver todo el contenido',
            
        }))
    }

    const alert2 = () => {
        (Swal.fire({
            icon: 'warning',
            title: 'El posteo ya se encuentra en su lista de favoritos',
            
        }))
    }
    
    return (
        <Context.Provider value={{
            useModal, 
            userLogin, 
            email, setEmail, 
            pasword, setPasword, 
            user, 
            posts, setPosts, 
            getPosts,
            isLoggedIn, setIsLoggedIn,
            postFavs, setPostFavs,
            contador, setContador,
            addFavs,
            deleteFavs,
            alert,
            createUser,
            username, setUsername,
            email2, setEmail2, 
            pasword2, setPasword2,
            createPost,
            tittle, setTittle,
            category, setCategory,
            post, setPost}}>
            {children}
        </Context.Provider>
    )
}

export default UserProvider