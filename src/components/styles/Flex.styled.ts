import styled from 'styled-components'

export const Flex = styled.div`
  display: flex;
  justify-content: space-between;

  & > div,
  & > ul {
    flex: 1;
  }

`
