import styled from "styled-components";

export const Container = styled.div`
  width: ${({theme}) => theme.desktop};    
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media (max-width: ${({theme}) => theme.desktop}) {
    padding: 0 6rem;
  }

  @media (max-width: ${({theme}) => theme.mobile}) {
    padding: 0 20px;
  }

`
