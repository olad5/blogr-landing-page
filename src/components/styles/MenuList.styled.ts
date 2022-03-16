import styled from 'styled-components'

export const ParentLinkStyle = styled.div`
  text-transform:capitalize;
  color: ${({theme}) => theme.palette.secondary.contrastText};

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
