import React, { useContext } from 'react'
import logo from "../../img/logo.png"
import { goToFeed, goToLogin } from "../../router/cordinator"
import { useHistory } from 'react-router-dom';
import LoggedContext from '../../context/LoggedContext'
import {NavBarContainer,ButtonEffect} from './styled'

function NavBar() {

  const history = useHistory()
    const loggedContext = useContext(LoggedContext)

    const handleLoginOrLogoutClick = () => {

      const token = localStorage.getItem("token")

      if (token) {
        localStorage.removeItem("token")
        loggedContext.setLogged(false)
      }

      goToLogin(history)
    }
  
    


  return (
      <NavBarContainer>
          <img src={logo} alt={'logotipo'} onClick={()=>goToFeed(history)}/>
          
              <ButtonEffect  onClick={handleLoginOrLogoutClick}>{loggedContext.logged ? "Logout" : "Login"}</ButtonEffect>
            
      </NavBarContainer>
  
       
  );
}

export default NavBar;

