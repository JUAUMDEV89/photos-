import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

    :root{
        --red: #e52e4d;
        --blue: #5429cc;
        --green: #33cc95;
        --blue-light: #6933ff;
        --text-title: #363f5f;
        --text-body: #969cb3;
        --background: 'red';
        --shape: #ffffffff;
    }

    html{
        @media(max-width: 1080px){
            font-size: 93.75%; //15px 
        }
        @media(max-width: 720px){
            font-size: 87.5%; //14px
        }
    }

    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }

    body{
        background: var(--background);
        -webkit-font-smoothing: antialiased;
    }

    border-style, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h4, h6, strong, span, p{
        font-family: 'Roboto', sans-serif;
    }

    button{
        border: none;
        cursor: pointer;
    }
     
`;