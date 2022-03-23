import styled from 'styled-components'

export const ParentLinkStyle = styled.div`
  text-transform:capitalize;
  color: ${({theme}) => theme.palette.secondary.contrastText};

  @media (max-width: ${({theme}) => theme.tabPort}) {

      font-size: .6rem;
  }

`
export const ChildrenLinksStyle = styled.div`
  & a {
    font-size: .8rem;
    text-decoration:none;
    color: black;

    &:hover {
      font-weight: 600;
    }

  }

`

interface IImageProps {
  toggle?: boolean;
}

export const Image = styled.img<IImageProps>`
  margin-left: 7px;
  transform: ${(props) => props.toggle ? 'rotate(180deg)' : ''};
  margin-top: 10px;
  height: 9px;
  width: 10px;
`
