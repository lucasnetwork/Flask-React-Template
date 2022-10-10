import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
        border: none;
        outline: none;
    }

    body,#app{
        width:100vw;
        height:100vh;   
    }
`;
