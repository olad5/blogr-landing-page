import styled from 'styled-components'

export const StyledFooter = styled.footer`
  background: ${({theme}) => theme.palette.neutral.veryDarkBlackBlue};
  padding: 40px 0;
  background-position: 20% 52%, 100%;
  background-size: 210%, 100%;
  height: 54vh;
  border-top-right-radius:100px;
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

    &   a {
      text-decoration: none;
    }

  & > div {
    display: flex;
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
`
