import styled from "styled-components"

export const NavBarContainer = styled.div`
   display:flex;
   justify-content:space-between;
   width:100vw;
   background-color:white;
   align-items: center;
    img{
        height:100px;
        :hover{
        cursor: pointer;
    }
    }
`
export const ButtonEffect=styled.button`
  border-radius:10%;
  margin-right:40px;
  z-index: 1;
  position: relative;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: #880b0b;

::before {
  content: '';
  border-radius:10%;
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
