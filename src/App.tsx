import {ThemeProvider} from 'styled-components'

/* Components */
import Header from './components/Header'
import Footer from './components/Footer'

/* Styles */
import {Container} from './components/styles/Container.styled'
import GlobalStyles from './components/styles/Global'
import {theme} from './components/styles/theme'
import {InfrastructureSection, Image} from './components/styles/Infrastructure.styled'
import {StyledInfo} from './components/styles/SectionInfo.styled'
import {IntroSection} from './components/styles/IntroSection.styled'
import {OutroSection} from './components/styles/OutroSection.styled'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <IntroSection>
          <h3>Designed for the future</h3>
          <StyledInfo>
            <h4><span>Introducing an</span> <span>extensible editor</span></h4>
            <p className='intro-p1'>
              Blogr features an exceedingly intuitive interface which lets you focus
              on one thing: creating content.  The editor supports management of
              multiple blogs and allows easy manipulation of embeds such as images,
              videos, and Markdown. Extensibility with plugins and themes provide easy
              ways to add functionality or change the looks of a blog.
            </p>
            <h4><span>Robust content </span> <span>management</span></h4>
            <p className='intro-p2'>
              Flexible content management enables users to easily move through posts.
              Increase the usability of your blog by adding customized categories,
              sections, format, or flow. With this functionality, you’re in full control.
            </p>
          </StyledInfo>
        </IntroSection>

        <InfrastructureSection>
          <div className='infrastructure'>
            <Container>
              <div className='flex-con'>
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
              </div>
            </Container>
          </div>
        </InfrastructureSection>

        <OutroSection>
          <StyledInfo>
            <h4> Free, open, simple </h4>
            <p>
              Blogr is a free and open source application backed by a large community of helpful developers. It supports
              features such as code syntax highlighting, RSS feeds, social media integration, third-party commenting tools,
              and works seamlessly with Google Analytics. The architecture is clean and is relatively easy to learn.
            </p>
            <h4> Powerful tooling </h4>
            <p>
              Batteries included. We built a simple and straightforward CLI tool that makes customization and deployment a breeze, but
              capable of producing even the most complicated sites.
            </p>
          </StyledInfo>
        </OutroSection>

        <Footer />
      </>
    </ThemeProvider >
  )
}

export default App
