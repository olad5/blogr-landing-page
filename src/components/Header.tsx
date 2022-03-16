/* Components */
import {Container} from './styles/Container.styled'
import {Button} from './styles/Button.styled'
import IconButton from '@mui/material/IconButton';
import MenuListComposition from './MenuList'
import {useContext} from 'react'
import {ThemeContext} from 'styled-components'

/* Styles */
import {StyledHeader, Nav, Logo} from './styles/Header.styled'


const Header: React.FC = () => {

  /* using the styled components global theme */
  const themeContext = useContext(ThemeContext)


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
            <IconButton
              sx={{
                borderRadius: themeContext.borderRadius,
                backgroundColor: themeContext.palette.neutral.white,
                color: themeContext.palette.primary.lightRed,
                fontSize: '0.9rem',
                fontWeight: '700',
                cursor: "pointer",
                padding: "15px 20px",
                "&:hover": {
                  backgroundColor: themeContext.palette.primary.veryLightRed,
                  color: themeContext.palette.neutral.white,
                  cursor: "pointer",
                  borderRadius: themeContext.borderRadius,
                }
              }}

            >
              Sign Up
            </IconButton>
          </div>
        </Nav>

        <div>
          <h1>A modern publishing platform</h1>

          <p>Grow your audience and build your online brand</p>

          <div className='cta-btns'>
            <IconButton
              sx={{
                borderRadius: themeContext.borderRadius,
                backgroundColor: themeContext.palette.neutral.white,
                color: themeContext.palette.primary.lightRed,
                fontSize: '0.9rem',
                fontWeight: '700',
                cursor: "pointer",
                padding: "15px 20px",
                "&:hover": {
                  backgroundColor: themeContext.palette.primary.veryLightRed,
                  color: themeContext.palette.neutral.white,
                  cursor: "pointer",
                  borderRadius: themeContext.borderRadius,
                }
              }}

            >
              Start For Free
            </IconButton>

            <IconButton
              sx={{
                borderRadius: themeContext.borderRadius,
                color: themeContext.palette.neutral.white,
                backgroundColor: 'transparent',
                fontSize: '0.9rem',
                fontWeight: '700',
                cursor: "pointer",
                border: "1px solid #fff",
                padding: "15px 20px",
                "&:hover": {
                  color: themeContext.palette.primary.lightRed,
                  backgroundColor: themeContext.palette.neutral.white,
                  cursor: "pointer",
                  borderRadius: themeContext.borderRadius,
                }
              }}

            >
              Learn More
            </IconButton>
          </div>

        </div>
      </Container>
    </StyledHeader >

  );
};

export default Header;
