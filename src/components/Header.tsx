/* Components */
import {Container} from './styles/Container.styled'
import MenuListComposition from './MenuList'
import {useContext, useState} from 'react'
import {ThemeContext} from 'styled-components'
import Button from './Button';
import MenuIcon from '@material-ui/icons/Menu';
import HamMenu from './HamMenu';



import {StyledHeader, Nav, Logo} from './styles/Header.styled'


const Header: React.FC = () => {

  const themeContext = useContext(ThemeContext)

  const [open, setOpen] = useState(false)

  const handleMenuClick = () => {
    setOpen(!open)
  }



  return (
    <StyledHeader >
      <Container>
        <Nav>
          <div>
            <Logo src='./images/logo.svg' alt='' />
            <div className='nav-links'>
              <MenuListComposition
                parentLink='Product'
                childLinks={['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations']}
              />
              <MenuListComposition
                parentLink='Company'
                childLinks={['About', 'Team', 'Blog', 'Careers']}
              />
              <MenuListComposition
                parentLink='Connect'
                childLinks={['Contact', 'Newsletter', 'LinkedIn']}
              />
            </div>
          </div>
          <div className='login-sign-up'>
            <Button text='Login' bg='transparent' fg='#fff' hoverBg='transparent' />
            <Button text='Sign Up' />
          </div>
          <MenuIcon
            className='menu-icon'
            onClick={handleMenuClick}
            style={{color: 'white'}}
          />
          {
            open ? (
              <div className='ham-menu'>
                <HamMenu />
              </div>
            ) : null
          }

        </Nav>
        <div className='cta-parent'>
          <h1><span>A modern</span> <span>publishing platform</span></h1>

          <p>Grow your audience and build your online brand</p>

          <div className='cta-btns'>
            <Button text='Start For Free' />

            <Button
              text='Learn More'
              fg={themeContext.palette.neutral.white}
              bg='transparent'
              border="1px solid #fff"
              hoverFg={themeContext.palette.primary.lightRed}
              hoverBg={themeContext.palette.neutral.white}

            />
          </div>
        </div>
      </Container>
    </StyledHeader >

  );
};

export default Header;
