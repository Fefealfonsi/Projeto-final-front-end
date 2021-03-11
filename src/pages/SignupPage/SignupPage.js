import React from 'react';
import {useForm} from "../../hooks/useForm"
import { useHistory } from 'react-router-dom'
import {signup} from "../../services/user"
import {useUnProtectedPage} from '../../hooks/useUnProtectedPage'
import {SignupPageContainer,FormContainer,TextFieldStyled,ButtonEffect, Title,LogoContainer} from './styled'

function SignupPage() {

  useUnProtectedPage()
  const history = useHistory()
  const {form, onChange} = useForm({ name: "",email: "", nickname: "",password: ""})

  const handleInputChange = (event) => {
      const {value, name} = event.target

      onChange(value, name)
  }

  const handleSubmission = (event) => {
      event.preventDefault()
      
      signup(form, history)
  }

  return (
      <SignupPageContainer>
          {/* <img src={logo} /> */}
          <Title>Cadastre-se</Title>
          <FormContainer onSubmit={handleSubmission} >
              <TextFieldStyled
                  label="Nome"
                  variant="outlined"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
              />
              
              <TextFieldStyled
                  label="E-mail"
                  variant="outlined"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
              />
              <TextFieldStyled
                  label="Apelido"
                  variant="outlined"
                  name="nickname"
                  value={form.nickname}
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
              < ButtonEffect> Cadastrar </ ButtonEffect>
          </FormContainer>
          {/* <LogoContainer>
          </LogoContainer> */}
         
      </SignupPageContainer>
  )
  }
  
  export default SignupPage;

  