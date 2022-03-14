import styled from 'styled-components'

export const StyledSection = styled.div`
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

  h4 {
    font-size: 1.5rem;
    font-weight: 500;
    text-align:left;
    margin-bottom: 1rem;
  }

  p {
    text-align:left;
    font-size: .9rem;
    line-height: 1.7rem;
    color: ${({theme}) => theme.palette.neutral.veryDarkGrayishBlue};
  }

  .section-info {
    max-width:700px;
    margin-top:4rem;
  }


`
export const Image = styled.img`
  margin-left: 4rem;
  width:1000px;
`
