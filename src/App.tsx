import {ThemeProvider} from 'styled-components'
import Header from './components/Header'
import Section from './components/Section'
import GlobalStyles from './components/styles/Global'
import {theme} from './components/styles/theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Section />
      </>
    </ThemeProvider>

  )
}

export default App
