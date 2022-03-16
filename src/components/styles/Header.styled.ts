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
  border-bottom-left-radius:100px;

  h1 {
    font-size: 4rem;
    color: ${({theme}) => theme.palette.secondary.contrastText};
    font-weight:600;
  }

  p {
    font-size: 1.4rem;
    color: ${({theme}) => theme.palette.secondary.contrastText};
  }

  .cta-btns {
    width:16rem;
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

  & > div {
  display: flex;

  }

  .nav-links {
    display: flex;
    margin-left: 2rem;
    width: 20rem;
    justify-content:space-between;
    align-items:center;

    & > a {
      font-size: 1rem;
      color: #fff;
      text-decoration: none;
      position:relative;
    }
  }

`

export const Logo = styled.img`

`

interface IImageProps {
  toggle?: boolean;
}

export const Image = styled.img<IImageProps>`
  margin-left: 7px;
  transform: ${(props) => props.toggle ? 'rotate(180deg)' : ''};
  margin-top: 7px;
  height: 9px;
`
