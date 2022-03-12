import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-image: 
    url('./images/bg-pattern-intro-desktop.svg'),
    linear-gradient(95deg, ${({theme}) => theme.palette.gradient.veryLightRed}, 
                    ${({theme}) => theme.palette.gradient.lightRed});
  padding: 40px 0;
  background-position: 20% 52%, 100%;
  background-size: 210%, 100%;
  height: 60vh;
  text-align:center;

  h1 {
    font-size: 4rem;
    color: ${({theme}) => theme.palette.secondary.contrastText};
  }

  p {
    font-size: 1.7rem;
    color: ${({theme}) => theme.palette.secondary.contrastText};
  }

  .cta-btns {
    width:23rem;
    height:2.8rem;
    display:inline-flex;
    justify-content: space-around;
    flex-direction:row;
    margin-top:2rem;
  }

`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

`

export const Logo = styled.img`

`

