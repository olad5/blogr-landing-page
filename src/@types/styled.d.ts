// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string;
    mobile: string,
    desktop: string,

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
      secondary: {
        main: string;
        contrastText: string;
      }
    }
  }
}
