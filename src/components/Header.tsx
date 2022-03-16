import {StyledHeader, Nav, Logo, Image} from './styles/Header.styled'
import {Container} from './styles/Container.styled'
import {Button} from './styles/Button.styled'
import DropDown from './DropDown';
import {useState, useRef} from 'react';



const Header: React.FC = () => {

  const [navClicked, setNavClicked] = useState<[boolean, React.RefObject<HTMLAnchorElement> | null]>([false, null]);

  const productRef = useRef<HTMLAnchorElement>(null)
  const companyRef = useRef<HTMLAnchorElement>(null)
  const connectRef = useRef<HTMLAnchorElement>(null)



  const handleNavCLick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    for (let obj of [productRef, companyRef, connectRef]) {
      if (obj.current === e.target) {
        if ((navClicked[1]?.current as any) === e.target) {
          setNavClicked([false, null])
          return
        }
        setNavClicked([true, obj])
      }
    }
  }


  return (

    <StyledHeader >
      <Container>
        <Nav>
          <div>
            <Logo src='./images/logo.svg' alt='' />
            <div className='nav-links'>

              <a href='#' ref={productRef} onClick={handleNavCLick}>
                Product
                {
                  (navClicked[1]?.current)?.innerText.split('\n')[0] === 'Product' ?
                    <Image src='./images/icon-arrow-light.svg' toggle={true} />
                    :
                    <Image src='./images/icon-arrow-light.svg' />
                }
                <div>
                  {(navClicked[1]?.current)?.innerText.split('\n')[0] === 'Product' ?
                    <DropDown
                      links={['Overview', 'Pricing', 'Marketplace', 'Features', 'Integrations']}>
                    </DropDown>
                    : null}
                </div>
              </a>
              <a href='#' ref={companyRef} onClick={handleNavCLick}>
                Company
                {
                  (navClicked[1]?.current)?.innerText.split('\n')[0] === 'Company' ?
                    <Image src='./images/icon-arrow-light.svg' toggle={true} />
                    :
                    <Image src='./images/icon-arrow-light.svg' />
                }
                <div>
                  {(navClicked[1]?.current)?.innerText.split('\n')[0] === 'Company' ?
                    <DropDown
                      links={['About', 'Team', 'Blog', 'Careers']}
                    >
                    </DropDown>
                    : null}
                </div>
              </a>
              < a href='#' ref={connectRef} onClick={handleNavCLick} >
                Connect
                {
                  (navClicked[1]?.current)?.innerText.split('\n')[0] === 'Connect' ?
                    <Image src='./images/icon-arrow-light.svg' toggle={true} />
                    :
                    <Image src='./images/icon-arrow-light.svg' />
                }
                <div>
                  {(navClicked[1]?.current)?.innerText.split('\n')[0] === 'Connect' ?
                    <DropDown
                      links={['Contact', 'Newsletter', 'LinkedIn']}
                    >
                    </DropDown>
                    : null}
                </div>
              </a>
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
