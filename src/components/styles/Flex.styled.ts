import styled from 'styled-components'

interface IProps {
  fd?: string;
  width?: string;
  height?: string;
  jc?: string;
  ai?: string;
  pds?: string;
}

export const Flex = styled.div<IProps>`
  display: flex;
  justify-content: ${(props) => props.jc || 'space-between'};
  align-items: ${(props) => props.ai || ' stretch'};
  flex-direction: ${(props) => props.fd || 'row'};
  height: ${(props) => props.height || 0};
  width: ${(props) => props.width || ''};
  padding-left: ${(props) => props.pds || '0'};
  padding-right: ${(props) => props.pds || '0'};

`
