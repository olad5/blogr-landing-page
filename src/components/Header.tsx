import {StyledHeader, Nav, Logo} from './styles/Header.styled'
import {Container} from './styles/Container.styled'
import {Flex} from './styles/Flex.styled'
import {Button} from './styles/Button.styled'




const Header: React.FC = () => (
  <StyledHeader >
    <Container>

      <Nav>
        <Logo src='./images/logo.svg' alt='' />
      </Nav>

      <div>
        <h1>A modern publishing platform</h1>

        <p>Grow your audience and build your online brand</p>


        <div className='cta-btns'>
          <Button >
            Start For Free
          </Button>

          <Button border='1px solid #fff' bg='transparent' color='#fff'>
            Learn More
          </Button>
        </div>

      </div>

    </Container>

  </StyledHeader >


);

export default Header;
