import {createGlobalStyle} from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Overpass:wght@300;600&family=Ubuntu:wght@400;500;700&display=swap')

  * {
    box- sizing: border-box;
  }

  body {
    background: ${({theme}) => theme.palette.neutral.white};
    color: hsl(192,100%,9%);
    font-family: 'Overpass','Ubuntu', sans-serif;
    // font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    margin: 0;
  }

  p {
    opacity: 0.6;
    line-height:1.5;
}

  img {
    max-width:100%;
  }
`

export default GlobalStyles
