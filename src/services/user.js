import axios from "axios"
import { goToFeed } from "../router/cordinator"

const BASE_URL = "https://pinterpets.herokuapp.com"


export const login = (body, history) => {
    
    axios.post(`${BASE_URL}/user/login`, body).then(response => {
        localStorage.setItem("token", response.data.token)
        goToFeed (history)
    }).catch(error => {
        alert("Email ou senha inválidos!")
        console.log(error.message)
    })
}

export const signup = (body, history) => {
    
    axios.post(`${BASE_URL}/user/signup`, body).then(response => {
        localStorage.setItem("token", response.data.token)
        goToFeed(history)
        
    }).catch(error => {
        console.log(error.message)
        alert("usuário já cadastrado")
    })
}
