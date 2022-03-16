import {StyledDropdown} from './styles/DropDown.styled'


interface IProps {
  links: Array<string>;
}


const DropDown: React.FC<IProps> = ({links}) => (
  <StyledDropdown >
    {links.map(link => (
      <a href='#' key={links.indexOf(link)}> {link}</a>
    ))}
  </StyledDropdown >

);

export default DropDown;
