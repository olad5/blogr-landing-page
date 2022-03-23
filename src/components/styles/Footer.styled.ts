import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background: ${({theme}) => theme.palette.neutral.veryDarkBlackBlue};
  padding: 40px 0;
  background-position: 20% 52%, 100%;
  background-size: 210%, 100%;
  height: 54vh;
  border-top-right-radius:100px;


  @media (max-width: ${({theme}) => theme.mobile}) {
    height:  133vh;
    max-width: ${({theme}) => theme.mobile};
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  &   a {
    text-decoration: none;
  }



  .nav-links {
      font-size: 1rem;
      color: ${(props) => props.color || props.theme.palette.secondary.contrastText};
      font-weight: 600;
      margin-top:0;
  }

  .other-links {
        margin-top:1.0rem;

    & a {
        font-size: 0.9rem;
        margin-top:1.0rem;
        text-align:left;
        width:100%;
        color: ${(props) => props.color || props.theme.palette.neutral.grayishBlue};
        font-weight: 400;
    }
  }

  @media (max-width: ${({theme}) => theme.mobile}) {
    flex-direction:column;
    height: 120vh;



    img {
      margin-top: 2rem;
    }

    & >  div {
      display: flex;
      flex-grow: 2;
    }

    .nav-links {
        margin-top:6rem;

        &:nth-of-type(3) {
          margin-top:3rem;
        }
    }

    .other-links  a {
        text-align:center;
    }

    .company   {
        margin-top:7rem;
    }


  }

`
