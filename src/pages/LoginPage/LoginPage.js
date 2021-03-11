import React from "react";
import { useHistory } from 'react-router-dom';

import {useUnProtectedPage } from '../../hooks/useUnProtectedPage';
import {Button} from '@material-ui/core'
import { login } from '../../services/user';
import {useForm} from "../../hooks/useForm"
import { goToSignup } from "../../router/cordinator"
import {ContainerFormLogin,FormContainer,TextFieldStyled,ButtonEffect, Title} from './styled'

  
function LoginPage() {
  useUnProtectedPage()
  const history = useHistory();
  const {form, onChange} = useForm({email: "", password: ""})


    const handleInputChange = (event) => {
     const {value, name} = event.target

    onChange(value, name)
    }

    const handleSubmission = (event) => {
        event.preventDefault()
        login(form, history)
    }

    return(
      <ContainerFormLogin>
          
          <FormContainer onSubmit={handleSubmission} >

              <Title> Login </Title>
             
              <TextFieldStyled 
                  label="E-mail"
                  variant="outlined"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
              />
             
             
              <TextFieldStyled  
                  label="Senha"
                  variant="outlined"                
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleInputChange}
              />
             
              <ButtonEffect> Login </ButtonEffect>
          </FormContainer>
          <Button 
          onClick={()=>goToSignup(history)}
          >
              Não tem cadastro? Clique aqui.
          </Button>
      </ContainerFormLogin>
  )
}

  

export default LoginPage;
