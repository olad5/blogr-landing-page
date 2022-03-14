import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
  }

  body {
    background: ${({theme}) => theme.palette.neutral.white};
    color: hsl(192,100%,9%);
    font-family: 'Overpass','Ubuntu', sans-serif;
    font-size: 16px;
    margin: 0;
    min-height:100vh;
  }

  p {
    opacity:0.6;
    line-height:1.5;
  }

`

export default GlobalStyles
