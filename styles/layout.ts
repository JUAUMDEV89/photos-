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
  padding-left: 3rem;
  padding-right: 3rem;
  position: fixed;
  border-bottom: 1px solid black;

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