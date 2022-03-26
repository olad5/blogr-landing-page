import IconButton from '@mui/material/IconButton';
import {useContext} from 'react'
import {ThemeContext} from 'styled-components'


interface IProps {
  bg?: string;
  fg?: string;
  hoverBg?: string;
  hoverFg?: string;
  border?: string;
}

const Button: React.FC<IProps> = ({bg, fg, hoverFg, hoverBg, border, children}) => {
  const themeContext = useContext(ThemeContext)

  return (

    <IconButton
      className='icon-button'
      sx={{
        borderRadius: themeContext.borderRadius,
        background: bg || themeContext.palette.neutral.white,
        color: fg || themeContext.palette.primary.lightRed,
        fontSize: '0.9rem',
        fontWeight: '700',
        cursor: "pointer",
        border: border || "",
        padding: "15px 20px",
        "&:hover": {
          backgroundColor: hoverBg || themeContext.palette.primary.veryLightRed,
          color: hoverFg || themeContext.palette.neutral.white,
          cursor: "pointer",
          borderRadius: themeContext.borderRadius,
        }
      }}

    >
      {children}

    </IconButton>
  )

}
export default Button;
