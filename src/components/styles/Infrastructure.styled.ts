import styled from 'styled-components'

export const InfrastructureSection = styled.div`
  background: 
    url('./images/bg-pattern-circles.svg'),
    ${(props) => props.theme.palette.gradient.veryDarkGrayBlue};
  background-position: -40.5% 84%;
  background-repeat:no-repeat;
  background-size:65% ;
  border-bottom-left-radius:100px;
  border-top-right-radius:100px;
  height: 47vh;
  padding-top:6rem;


  h4 {
    font-size: 2.52rem;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 1rem;
    color: ${({theme}) => theme.palette.neutral.white};
  }

  p {
    font-size: .9rem;
    line-height: 1.7rem;
    color: ${({theme}) => theme.palette.neutral.white};
  }

  .section-info {
    max-width:680px;
    margin-right:5rem;
  }

`

export const Image = styled.img`
  margin-top: -10rem;
  margin-left: -3rem;
  width:43%;
`