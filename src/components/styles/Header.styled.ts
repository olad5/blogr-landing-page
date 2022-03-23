import styled from 'styled-components'

export const StyledHeader = styled.header`
  background-image: 
    url('./images/bg-pattern-intro-desktop.svg'),
    linear-gradient(95deg, ${({theme}) => theme.palette.gradient.veryLightRed}, 
                    ${({theme}) => theme.palette.gradient.lightRed});
  padding: 40px 0;
  background-position: 20% 52%, 100%;
  background-size: 210%, 100%;
  height: 72vh;
  text-align:center;
  border-bottom-left-radius:100px;
  display:flex;

  h1 {
    font-size: 4rem;
    color: ${({theme}) => theme.palette.secondary.contrastText};
    font-weight:600;
  }

  p {
    font-size: 1.4rem;
    color: ${({theme}) => theme.palette.secondary.contrastText};
  }

  .menu-icon {
    display:none;
  }


  .cta-btns {
    width:16rem;
    height:2.8rem;
    display:inline-flex;
    justify-content: space-around;
    flex-direction:row;
    margin-top:2rem;
  }


  @media (max-width: ${({theme}) => theme.desktop}) {
    h1 {
      font-size: 3.1rem;
    }

    p  { 
      font-size: 1.22rem;
    }

  }


  @media (max-width: ${({theme}) => theme.mobile}) {
      background-position: 30% 33%,100%;
      background-size: 290%, 100%;
      height: 62vh;
      flex-direction: column;
      text-align: center;
      max-width: ${({theme}) => theme.mobile};

      .login-sign-up {
        display:none;
      }


    .cta-parent {
        display:flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
      }

    h1 {
      font-size: 1.6rem;
      color: ${({theme}) => theme.palette.secondary.contrastText};
      font-weight:400;
      width:21rem;
      align-self: center;
      margin:0;
    }

    h1 span {
      display:block;
    }

    p  { 
      font-size: .85rem;
      color: ${({theme}) => theme.palette.secondary.contrastText};
      text-align:center;
    }

    .menu-icon {
      display:block;
    }
   
    & .icon-button {
      width:6.9rem;
      height:1.6rem;
      font-size: 14.3px;
      padding: 1rem .3rem;
      border-radius: ${({theme}) => theme.borderRadius};
    }

    .cta-btns {
      width:15rem;
      height:2.8rem;
      display:inline-flex;
      justify-content: space-between;
      flex-direction:row;
      margin-top:0.6rem;
    }
  }

`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  position :relative;

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

  @media (max-width: ${({theme}) => theme.tabPort}) {

    .nav-links {
        width: 13rem;
        gap:1;
    }

  }
  @media (max-width: ${({theme}) => theme.mobile}) {

    .nav-links {
      display:none;
    }

    .ham-menu {
      position:absolute;
      width: 99%;
      height: 56vh;
      top:2rem;
      border-radius: 10px;
      box-shadow: 0px 23px 5px 11px rgba(0,0,0,0.11);

      z-index: 10;
    }
  }

`

export const Logo = styled.img`
  @media (max-width: ${({theme}) => theme.mobile}) {
    max-width: 70%;
  }

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
