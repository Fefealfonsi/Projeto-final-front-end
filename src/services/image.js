import axios from "axios"


const BASE_URL = "https://pinterpets.herokuapp.com"

export const createImage = (body, resetForm, getData, goToFeed) => {
    const token = localStorage.getItem("token")
    console.log("FORM", body)
    
    axios.post(`${BASE_URL}/image/create`, body, {
        headers: {
            Authorization: token
        }
    }).then((response) => {
        console.log("CREATE IMAGE",body)
        getData()
        resetForm()
        goToFeed()
    }).catch(error => {
        console.log(error.message)
        alert("ops, sua imagem não foi criada")
    })
}
