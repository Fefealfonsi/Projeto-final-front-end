import React from 'react';
import { useProtectedPage} from '../../hooks/useProtectedPage'
import {useForm} from "../../hooks/useForm"
import {createImage} from "../../services/image"
import { useRequestData} from '../../hooks/useRequestData';
import {CreatePostContainer,FormContainer,TextFieldStyled,ButtonEffect, Title} from './styled'
import { goToFeed } from '../../router/cordinator';
import { useHistory } from 'react-router-dom';

function CreateImagePage() {

    useProtectedPage()

    const history = useHistory()

    const BASE_URL = "https://pinterpets.herokuapp.com"
 
    const {form, onChange,resetForm} = useForm({subtitle: "", date: "", file: "", tags: [], collection: "", })

    

    const handleInputChange = (event) => {
        const {value, name} = event.target

        if(name==="tags"){
            const arrayTags = value.split(",")
            onChange(arrayTags, name)

        }else{

            onChange(value, name)
        }
      console.log("Value:", event.target.value.split(","), "Name:", name)
    }

    const [getImage] = useRequestData(`${BASE_URL}/image/getImage`, undefined)

     const handleSubmission = (event) => {
      event.preventDefault()
      
      createImage(form, resetForm, getImage, ()=>goToFeed(history))
      
    }  

    
    return (
        <div>

        <CreatePostContainer>
        <Title>Crie sua Imagem!</Title>
              <FormContainer 
              onSubmit={handleSubmission} 
              >
                      <TextFieldStyled
                          label="Título"
                          variant="outlined"
                          name="subtitle"
                          value={form.subtitle}
                          onChange={handleInputChange}
                      />
                      <TextFieldStyled 
                          label="data"
                          variant="outlined"                
                          name="date"
                          value={form.date}
                          onChange={handleInputChange}
                      />
                       <TextFieldStyled 
                          label="URL"
                          variant="outlined"                
                          name="file"
                          value={form.file}
                          onChange={handleInputChange}
                      />

                       <TextFieldStyled 
                          label="tags"
                          variant="outlined"                
                          name="tags"
                          value={form.tags}
                          onChange={handleInputChange}
                         
                      />

                       <TextFieldStyled 
                          label="coleção"
                          variant="outlined"                
                          name="collection"
                          value={form.collection}
                          onChange={handleInputChange}
                          />

                      <ButtonEffect>Criar Imagem</ButtonEffect>
              </FormContainer>      
          </CreatePostContainer>

         
       
        </div>

     
    );
  }
  
  export default CreateImagePage;
