import styled from 'styled-components'
import {TextField} from '@material-ui/core'

export const SignupPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 85vw;
    max-width: 465px;
    margin: 0 auto;
    height:100vh;
    
`

export const Title = styled.h1`
    color: #880b0b;
    font-family: 'Lobster', cursive;
    margin-top: 70px;
    
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 50vh;
    justify-content: space-around;
    /* margin-top: 5px; */
`
export const TextFieldStyled  = styled(TextField)`
    background-color:white;
`
// export const LogoContainer  = styled.img`
//     background-color:gray;
//     width: 130px;
//     height:130px;

// `

export const ButtonEffect=styled.button`
  margin-left:10px;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #880b0b;
  height:40px;

::before {
  content: '';
  z-index: -1;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #e7413e;
  transform-origin: center left;
  transform: scaleX(0);
  transition: transform 0.25s ease-in-out;
}

:hover {
  cursor: pointer;
}

:hover::before {
  transform-origin: center right;
  transform: scaleX(1);
}
`
