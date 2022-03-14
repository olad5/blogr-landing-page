import styled from 'styled-components'

export const IntroSection = styled.div`
  background-image: 
    url('./images/illustration-editor-desktop.svg');
  background-position: 145% 39%;
  background-repeat:no-repeat;
  background-size: 60%;
  height: 140vh;
  text-align:center;
  padding-top:10rem;

  h3 {
    font-size: 2rem;
    color: ${({theme}) => theme.palette.neutral.veryDarkBlackBlue};
    font-weight:600;
    margin:0;
  }

  div {
    padding-left:9rem;
    max-width:930px;
  }

`
