import styled from 'styled-components'

export const StyledDropdown = styled.div`
  background: ${({theme}) => theme.palette.neutral.white};
  width: 8.2rem;
  text-align:left;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.45);
  display:flex;
  flex-direction: column;
  border-radius:4px;
  padding:1rem 1rem;
  position:absolute;
  top:2rem;


  a {
    font-size: .9rem;
    font-weight: 300;
    color: black;
    text-decoration: none;
    margin-top: 8px;

    &:hover {

    font-weight: 700;
    }
  }
`
