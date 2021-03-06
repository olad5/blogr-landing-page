/* styles */
import {StyledFooter, Nav} from './styles/Footer.styled'
import {Container} from './styles/Container.styled'
import {Flex} from './styles/Flex.styled';


const Footer: React.FC = () => (
  <StyledFooter >
    <Container>
      <Nav>
        <img src='./images/logo.svg' alt='' />
        <Flex className='flex' width='19rem' ai='center' fd='column' pds='3rem'>
          <a href='#' className='nav-links'>Product </a>
          <div className='other-links'>
            <Flex fd='column' jc='flex-start' ai='center' width='10rem' pds='3rem'>
              <a href='#'>Overview </a>
              <a href='#'>Pricing </a>
              <a href='#'>Marketplace</a>
              <a href='#'>Features</a>
              <a href='#'>Integrations</a>
            </Flex>
          </div>
        </Flex>

        <Flex className='flex' width='19rem' ai='center' fd='column' pds='3rem'>
          <a href='#' className='nav-links company'>Company </a>
          <div className='other-links'>
            <Flex fd='column' jc='flex-start' ai='center' width='10rem' pds='3rem'>
              <a href='#'>About </a>
              <a href='#'>Team </a>
              <a href='#'>Blog</a>
              <a href='#'>Careers</a>
            </Flex>
          </div>
        </Flex>

        <Flex className='flex' width='19rem' ai='center' fd='column' pds='3rem'>
          <a href='#' className='nav-links'>Connect</a>
          <div className='other-links'>
            <Flex fd='column' jc='flex-start' ai='center' width='10rem' pds='3rem'>
              <a href='#'>Contact </a>
              <a href='#'>Newsletter </a>
              <a href='#'>LinkedIn</a>
            </Flex>
          </div>
        </Flex>

      </Nav>
    </Container>

    <div className='social-links'>
      <a href="https://twitter.com/_olad5"><i className="fa fa-twitter "></i></a>
      <a href="https://github.com/olad5/blogr-landing-page"><i className="fa fa-github "></i></a>

    </div>
  </StyledFooter >


);

export default Footer;
