/* Components */
import {Container} from './styles/Container.styled'
import {Button} from './styles/Button.styled'
import MenuListComposition from './MenuList'

/* Styles */
import {StyledHeader, Nav, Logo} from './styles/Header.styled'


const Header: React.FC = () => {

  return (
    <StyledHeader >
      <Container>
        <Nav>
          <div>
            <Logo src='./images/logo.svg' alt='' />
            <div className='nav-links'>
              <MenuListComposition parentLink='Product' childLinks={['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations']} />
              <MenuListComposition parentLink='Company' childLinks={['About', 'Team', 'Blog', 'Careers']} />
              <MenuListComposition parentLink='Connect' childLinks={['Contact', 'Newsletter', 'LinkedIn']} />
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
};

export default Header;
