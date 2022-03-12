import {StyledHeader, Nav, Logo, Image} from './styles/Header.styled'
import {Container} from './styles/Container.styled'
import {Button} from './styles/Button.styled'


const Header: React.FC = () => (
  <StyledHeader >
    <Container>
      <Nav>
        <div>
          <Logo src='./images/logo.svg' alt='' />
          <div className='nav-links'>
            <a href='#'>Product <Image src='./images/icon-arrow-light.svg' /></a>
            <a href='#'>Company <Image src='./images/icon-arrow-light.svg' /></a>
            <a href='#'>Connect <Image src='./images/icon-arrow-light.svg' /></a>
          </div>
        </div>
        <div>
          <Button bg='transparent' color='#fff'>Login</Button>
          <Button>Sign Up</Button>
        </div>
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
