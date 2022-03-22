/* Components */
import {Container} from './styles/Container.styled'
import MenuListComposition from './MenuList'
import {useContext, useEffect, useRef, useState} from 'react'
import {ThemeContext} from 'styled-components'
import Button from './Button';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import HamMenu from './HamMenu';

/* styles */
import {StyledHeader, Nav, Logo} from './styles/Header.styled'


const Header: React.FC = () => {

  const themeContext = useContext(ThemeContext)

  const [open, setOpen] = useState(false)
  const [menuActive, setMenuActive] = useState<"open" | "close">("close")

  const handleMenuClick = () => {
    if (menuActive === 'open') {
      setMenuActive('close')
      return
    }
    setMenuActive('open')
    setOpen(!open)
  }


  /* typing function parameter that accepts a function */
  /* https://stackoverflow.com/questions/68091713/typescript-function-with-function-as-parameter */
  let useClickOutside = (handler: () => void) => {
    let domNode = useRef<HTMLElement | null>(null);


    useEffect(() => {
      let maybeHandler = (event: Event | React.SyntheticEvent) => {
        if (!domNode.current) return

        if (!(domNode.current.contains(event.target as HTMLElement))) {
          handler();
        }
      };

      document.addEventListener("mousedown", maybeHandler);

      /* cleaning up the event listener */
      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });

    return domNode;
  };

  /* https://www.youtube.com/watch?v=eWO1b6EoCnQ */
  let domNode = useClickOutside(() => {
    setOpen(false);
  });


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
          {
            menuActive === 'close' ? (
              <MenuIcon
                className='menu-icon'
                onClick={handleMenuClick}
                style={{color: 'white'}}
              />

            ) :
              null
          }
          {
            menuActive === 'open' ? (
              <CloseIcon
                className='menu-icon'
                onClick={handleMenuClick}
                style={{color: 'white'}}
              />

            ) : null
          }
          {
            open ? (
              <div className='ham-menu'>
                <HamMenu
                  ref={domNode}
                />
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
