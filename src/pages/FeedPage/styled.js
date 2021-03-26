import styled from "styled-components"

export const ImageContainer = styled.div`
   display:flex;
   justify-content:center;
   flex-wrap:wrap;
   width:100vw;
   /* background-color:#e6e4da; */
   align-items: center;
`
export const FeedContainer = styled.div`
   display:flex;
  flex-direction:column;
  height: 100vh
`
export const ImageCreate = styled.img`
   
    width:80px;
    margin-left: 40px;
    :hover{
        cursor: pointer;
    }

   
`
export const CreateButton  = styled.div`
   display:flex;
   justify-content: center;

   h2{
    color: #880b0b;
    font-family: 'Lobster', cursive;
   }

  /* img{
      width:80px;
      margin-left: 40px;
      ::hover{
        cursor: pointer;
      } */
  /* } */
   
`
export const Loading = styled.div`

  display: flex;
  width: 3.5em;
  height: 3.5em;
  border: 3px solid transparent;
  border-top-color: #880b0b;
  border-bottom-color: #880b0b;
  border-radius: 50%;
  animation: spin 1.5s linear infinite;
  margin-top: 200px;


:before {
  content: '';
  display: block;
  margin: auto;
  width: 0.75em;
  height: 0.75em;
  border: 3px solid #880b0b;
  border-radius: 50%;
  animation: pulse 1s alternate ease-in-out infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

@keyframes pulse {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1);
  }
}
`
