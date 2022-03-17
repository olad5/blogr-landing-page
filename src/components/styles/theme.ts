import {DefaultTheme} from 'styled-components';

const theme: DefaultTheme = {
  borderRadius: '50px',
  palette: {
    primary: {
      lightRed: 'hsl(356,100%,66%)',
      veryLightRed: 'hsl(355,100%,74%)',
      veryDarkBlue: 'hsl(208,49%,24%)',
    },
    neutral: {
      white: 'hsl(0,0%,100%)',
      grayishBlue: 'hsl(240,2%,79%)',
      veryDarkGrayishBlue: 'hsl(207,13%,34%)',
      veryDarkBlackBlue: 'hsl(240,10%,16%)',
    },
    gradient: {
      veryLightRed: 'hsl(13,100%,72%)',
      lightRed: 'hsl(353,100%,62%)',
      veryDarkGrayBlue: 'hsl(237,17%,21%)',
      veryDarkDesaturatedBlue: 'hsl(237,23%,32%)',
    },
    secondary: {
      main: '#709fb0',
      contrastText: '#ffffff'
    }
  },
  mobile: '375px',
  tabPort: '900px',
  tabLand: '1200px',
  desktop: '1440px',

};

export {theme};
