import styled from 'styled-components'

export const StyledInfo = styled.div`
    max-width:980px;
    margin-top:2.6rem;

    h4 {
      font-size: 1.5rem;
      font-weight: 500;
      text-align:left;
      margin-bottom: 1rem;
    }

    p  { 
      text-align:left;
      font-size: 1rem;
      line-height: 1.7rem;
      color: ${({theme}) => theme.palette.neutral.veryDarkGrayishBlue};
    }

  @media (max-width: ${({theme}) => theme.desktop}) {
      h4 {
        font-size: 1.1rem;
      }

    }
  @media (max-width: ${({theme}) => theme.mobileL}) {
    display:flex;
    flex-direction:column;
    justify-content:center;
    max-width:100%;
    margin:0;

      h4 {
        font-size: 1.2rem;
        font-weight: 500;
        text-align:center;
        
      }

      .intro-p1 {
        margin-bottom: 3rem;
      }


      h4 span {
        display:block;
      }

      p  { 
        max-width: 25rem;

        text-align:center;
        padding: 0 1rem;
        margin-top:0rem;
        margin-bottom:-4rem;

        // changes 
      }

    }

`
