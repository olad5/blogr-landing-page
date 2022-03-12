import styled from 'styled-components'

interface ButtonProps {
  bg?: string;
  border?: string;
}

export const Button = styled.button<ButtonProps>`
  border-radius: 50px;
  border: ${(props) => props.border || 'none'};
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${(props) => props.bg || props.theme.palette.neutral.white};
  color: ${(props) => props.color || props.theme.palette.primary.lightRed};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`
