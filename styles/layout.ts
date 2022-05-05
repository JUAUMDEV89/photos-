import styled from 'styled-components';

export const Layout = styled.div`
   width: 100%;
   height: calc(100vh - 5rem);
   background-color: var(--background);
`;

export const Header = styled.header`
  margin: auto;
  width: 100%;
  
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 3rem;
  padding-right: 3rem;
  position: fixed;
  box-shadow: 0.1em 0.1em 0.1em gray;

  h1{
      font-family: 'Roboto', sans-serif;

      span{
          color: blueviolet;
      }
  }

  button{
      width: 6rem;
      height: 2rem;
      border:none;
      background-color: linear-gradient(to right, red , yellow);
  }
`;

export const Button = styled.div`
   display: flex;
   height: 2rem;

   button{
       width: 3rem;
       background-color: greenyellow;
       color: white;
       border-top-right-radius: 0.5rem;
       border-bottom-right-radius: 0.5rem;
   }
`;

export const Grid = styled.div`

   display: grid;
   grid-template-columns: 1fr 1fr 1fr 1fr;

   img{
       width: 5rem;
       height: 5rem;

       margin-top: 10rem;
       cursor: pointer;
   }
`;