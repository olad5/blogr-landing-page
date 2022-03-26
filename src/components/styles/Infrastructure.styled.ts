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

  .flex-con {
    display:flex;
    justify-content: space-between;
  }

  @media (max-width: ${({theme}) => theme.desktop}) {
    background-position: -40.5% 84%;

    .section-info {
      margin-left:5rem;
    }

    h4 {
      font-size: 1.5rem;
    }


  }

  @media (max-width: ${({theme}) => theme.tabLand}) {

    h4 {
      font-size:1.2rem;
      margin-top: -3rem;
    }

    p {
      font-size: .8rem;
       width: 15rem;
    }

    .section-info {
      margin-left:2rem;
    }

  }

  @media (max-width: 640px) {
    p {
       width: 12rem;
    }

  }



  @media (max-width: ${({theme}) => theme.mobile}) {
        margin-top: 21rem;
        height: 80vh;
        background-position: 50.5% -263px;
        background-size:162% ;

        .section-info {
          max-width:95%;
          text-align:center;
          margin-right:0rem;
          display:flex;
          margin-left:0rem;
          flex-direction: column;
        }

        .flex-con {
          flex-direction: column;
          align-items:center;
        }

        h4 {
          font-size: 1.52rem;
          margin-top: 0rem;
        }

        p {
           width: 318.25px;
           font-size: .9rem;
        }

  }

`

export const Image = styled.img`
  margin-top: -10rem;
  margin-left: -3rem;
  width:43%;

  @media (max-width: ${({theme}) => theme.desktop}) {
      margin-left: 0rem;
      width:49%;
      height:43%;
  }

  @media (max-width: ${({theme}) => theme.tabPort}) {
      margin-left: -1rem;
      width:55%;
  }

  @media (max-width: 768px) {

    margin-top: -8.5rem;

  }

  @media (max-width: ${({theme}) => theme.mobile}) {
      height:43%;
      width:120%;
      margin-left: 0rem;
      margin-top: -17rem;
  }
`
