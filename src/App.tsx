import {ThemeProvider} from 'styled-components'
import Header from './components/Header'
import Section from './components/Section'
import {Container} from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'
import {theme} from './components/styles/theme'
import {Flex} from './components/styles/Flex.styled'
import {InfrastructureSection, Image} from './components/styles/Infrastructure.styled'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Section />

        {/* art of infrastructure section */}
        <InfrastructureSection>
          <div className='infrastructure'>
            <Container>
              <Flex>
                <Image src='./images/illustration-phones.svg' />
                <div className='section-info'>
                  <h4>State of the Art Infrastructure</h4>
                  <p>
                    With reliability and speed in mind, worldwide data centers
                    provide the backbone for ultra-fast connectivity.
                    This ensures your site will load instantly, no matter where
                    your readers are, keeping your site competitive.
                  </p>
                </div>
              </Flex>
            </Container>
          </div>
        </InfrastructureSection>
        {/* art of infrastructure section */}
      </>
    </ThemeProvider>
  )
}

export default App
