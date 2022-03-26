import styled from "styled-components";

export const Container = styled.div`
  width: ${({theme}) => theme.desktop};    
  max-width: 100%;
  padding: 0 20px;
  margin: 0 auto;

  @media (max-width: ${({theme}) => theme.desktop}) {
    padding: 0 6rem;
  }

  @media (max-width: ${({theme}) => theme.tabPort}) {
    padding: 0 4rem;
  }

  @media (max-width: 640px) {
    padding: 0 1rem;
  }

  @media (max-width: ${({theme}) => theme.mobileS}) {
    padding: 0 20px;
  }

`
