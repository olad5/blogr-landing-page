import {StyledFooter, Nav} from './styles/Footer.styled'
import {Container} from './styles/Container.styled'
import {Flex} from './styles/Flex.styled';


const Footer: React.FC = () => (
  <StyledFooter >
    <Container>
      <Nav>
        <img src='./images/logo.svg' alt='' />
        <div>
          <Flex width='19rem' ai='center' fd='column' pds='3rem'>
            <a href='#' className='nav-links'>Product </a>
            <div className='other-links'>
              <Flex fd='column' height='40vh' jc='flex-start' ai='center' width='10rem' pds='3rem'>
                <a href='#'>Overview </a>
                <a href='#'>Pricing </a>
                <a href='#'>Marketplace</a>
                <a href='#'>Features</a>
                <a href='#'>Integrations</a>
              </Flex>
            </div>
          </Flex>
        </div>

        <div>
          <Flex width='19rem' ai='center' fd='column' pds='3rem'>
            <a href='#' className='nav-links'>Company </a>
            <div className='other-links'>
              <Flex fd='column' height='40vh' jc='flex-start' ai='center' width='10rem' pds='3rem'>
                <a href='#'>About </a>
                <a href='#'>Team </a>
                <a href='#'>Blog</a>
                <a href='#'>Careers</a>
              </Flex>
            </div>
          </Flex>
        </div>

        <div>
          <Flex width='19rem' ai='center' fd='column' pds='3rem'>
            <a href='#' className='nav-links'>Connect</a>
            <div className='other-links'>
              <Flex fd='column' height='40vh' jc='flex-start' ai='center' width='10rem' pds='3rem'>
                <a href='#'>Contact </a>
                <a href='#'>Newsletter </a>
                <a href='#'>LinkedIn</a>
              </Flex>
            </div>
          </Flex>
        </div>

      </Nav>
    </Container>
  </StyledFooter >

);

export default Footer;
