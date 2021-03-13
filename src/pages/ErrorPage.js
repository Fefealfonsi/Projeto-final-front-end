import React from "react"
import styled from 'styled-components'
// import background from "../img/background-pinterpets.jpg"

const ErrorContainer=styled.div`
    background-color:pink;
`

function ErrorPage(){


    return(

        <ErrorContainer>
            <h1>Errrrooou, este caminho não existe. </h1>
        </ErrorContainer>
    );
}
export default ErrorPage;