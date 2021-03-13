import styled from "styled-components"

export const ImageContainer = styled.div`
    margin:30px;
    
   `
export const Image = styled.img`
     border-radius: 20px;
     height:200px;
     width:300px;
     :hover{
        cursor: pointer;
    }
`
export const DetailContainer = styled.div`
    display:flex;
    flex-direction: column;
   border: 1px solid;
   width:500px;
   background-color: black;
   margin:30px;
   p{
       font-size: 20px;
       margin-left:30px;
       color:white;
   }
`
