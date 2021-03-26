import axios from "axios"


// const BASE_URL = "https://pinterpets.herokuapp.com"

const BASE_URL = "http://localhost:3003"

export const createImage = (body, resetForm, goToFeed) => {
    const token = localStorage.getItem("token")
    console.log("FORM", body)
    
    axios.post(`${BASE_URL}/image/create`, body, {
        headers: {
            Authorization: token
        }
    }).then((response) => {
        console.log("CREATE IMAGE",body)
        // getData()
        resetForm()
        goToFeed()
    }).catch(error => {
        console.log(error.message)
        alert("ops, sua imagem não foi criada")
    })
}

export const deleteImage = (id, getData, goToFeed) => {
    const token = localStorage.getItem("token")
    // console.log("FORM", body)
    
    axios.delete(`${BASE_URL}/image/delete/${id}`, {
        headers: {
            Authorization: token
        }
    }).then((response) => {
        // console.log("CREATE IMAGE",body)
        getData()
        // resetForm()
        goToFeed()

    }).catch(error => {
        console.log(error.message)
        alert("ops, sua imagem não foi apagada")
    })
}