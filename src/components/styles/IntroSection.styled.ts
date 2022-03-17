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

  @media (max-width: ${({theme}) => theme.mobile}) {
      display:flex;
      background-position: 50% 13%;
      background-size: 60%;
      flex-direction:column;

      h3 {
        font-size: 1.2rem;
        color: ${({theme}) => theme.palette.neutral.veryDarkBlackBlue};
        font-weight:600;
        margin-top:-6.2rem;
      }


      div {
        padding-left:0rem;
      }

    }
  }

`
