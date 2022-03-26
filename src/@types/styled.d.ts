// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    mobileS: string,
    mobileM: string,
    mobileL: string,
    tabPort: string;
    tabLand: string;
    desktop: string;

    palette: {
      primary: {
        lightRed: string;
        veryLightRed: string;
        veryDarkBlue: string;
      },
      neutral: {
        white: string;
        grayishBlue: string;
        veryDarkGrayishBlue: string;
        veryDarkBlackBlue: string;
      },
      gradient: {
        veryLightRed: string;
        lightRed: string;
        veryDarkGrayBlue: string;
        veryDarkDesaturatedBlue: string;
      },
      secondary: {
        main: string;
        contrastText: string;
      }
    }
  }
}
