import styled from "styled-components"

export const ImageContainer = styled.div`
   display:flex;
   justify-content:center;
   flex-wrap:wrap;
   width:100vw;
   background-color:#e6e4da;
   align-items: center;
`
export const FeedContainer = styled.div`
   display:flex;
  flex-direction:column;
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

  img{
      width:80px;
      margin-left: 40px;
      ::hover{
        cursor: pointer;
      }
  }
   
`
export const Loading = styled.div`
.balls {
  width: 3.5em;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
}

.balls div {
  width: 0.8em;
  height: 0.8em;
  border-radius: 50%;
  background-color: #fc2f70;
  transform: translateY(-100%);
  animation: wave 0.8s ease-in-out alternate infinite;
}

.balls div:nth-of-type(1) {
  animation-delay: -0.4s;
}

.balls div:nth-of-type(2) {
  animation-delay: -0.2s;
}

@keyframes wave {
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(100%);
  }
}
`
