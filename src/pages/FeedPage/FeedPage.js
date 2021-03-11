import React from 'react';
import { useRequestData} from '../../hooks/useRequestData';
import { useProtectedPage} from '../../hooks/useProtectedPage'
import ImageCard from "../../componests/ImageCard/ImageCard";
import { ImageContainer, FeedContainer, CreateButton,ImageCreate, Loading} from './styled'
import fotografia from "../../img/fotografia.png"
import {goToCreate} from "../../router/cordinator"
import { useHistory } from 'react-router-dom';

function FeedPage() {

    useProtectedPage()

   const history = useHistory()
    const BASE_URL = "https://pinterpets.herokuapp.com"

    const [data,getImage] = useRequestData(`${BASE_URL}/image/getImage`, undefined)

    console.log("Data",data)
    const user= data && data.result.map((user)=>{
        return (
            user.name
         )})

     console.log('USER:', user)
        const userName = (user && user[0])

    return (
        <FeedContainer>
            <CreateButton >
                 <h2>Bem vindo {userName}!</h2>
                <ImageCreate src={fotografia} alt={'criar imagem'} onClick={()=>goToCreate(history)}/>
            </CreateButton >
            
        <ImageContainer>

            {data ? data.result.map((image)=>{
            return (
            
                <ImageCard 
                key={image.id}
                id={image.id}
                subtitle={image.subtitle}
                file={image.file}
                
              />
              ) 

            }) :<Loading>
            <div></div>
            <div></div>
            <div></div>
        </Loading> } 
           
        </ImageContainer>

        </FeedContainer>
    );
}

export default FeedPage;
