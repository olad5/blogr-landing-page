import styled from 'styled-components'

export const OutroSection = styled.div`
  background-image: 
    url('./images/illustration-laptop-desktop.svg');
  background-position: -43% 39%;
  background-repeat:no-repeat;
  background-size: 60%;
  height: 140vh;
  text-align:center;
  padding-top:10rem;
  margin-right:8.5rem;

  div {
    margin-left:44rem;
    margin-top:9rem;
    max-width:930px;

    h4 {
      font-size: 1.5rem;
      margin-bottom:1.4rem;
    }

    p {
      max-width: 34rem;
    }
  }

  @media (max-width: ${({theme}) => theme.desktop}) {

    div {
      margin-left:37rem;
    }

  }

  @media (max-width: ${({theme}) => theme.tabLand}) {
    padding-top:0rem;
    background-position: -62% 9%;
    background-size: 74%;
    margin-right:2.5rem;

    div {
      margin-left:34rem;
    }

  }

  @media (max-width: ${({theme}) => theme.tabPort}) {
    background-position: -43% 9%;

    div {
      margin-left:25rem;
    }

  }

  @media (max-width: 768px) {
    background-position: -62% 9%;

    div  {

      h4 {
        margin-left:-3rem;
      }

       p {
        width: 15rem;
        margin-left:-3rem;
       }
    }

  }

  @media (max-width: 640px) {
    background-position: -82% 9%;

    div {
      margin-left:20rem;

      h4 {
        margin-left:-5rem;
      }

       p {
        margin-left:-5rem;
       }
    }

  }

  @media (max-width: ${({theme}) => theme.mobile}) {
    background-image: 
      url('./images/illustration-laptop-mobile.svg');
    background-position: 50% 4%;
    background-size: 80%;
    margin-right:0rem;
    display:flex;
    padding-top:6rem;

    div {
      margin-left:0rem;
      margin-top:2rem;
      max-width:930px;

      h4 {
        font-size: 1.5rem;
        margin-bottom:1.4rem;
        margin-top:7rem;
        margin-left:0rem;
      }

      p {
        max-width: 34rem;
        width:${({theme}) => theme.mobile} ;
        margin-left:0px;
      }

      p:nth-of-type(2) {
        margin-bottom:9rem;
      }
    }
  }
`
