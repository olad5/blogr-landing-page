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

  }

`
