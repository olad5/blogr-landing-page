import {useState, forwardRef} from 'react';
import {ThemeContext} from 'styled-components'
import {useContext} from 'react'

/* Components */
import DropDownItem from './DropDownItem';
import Button from './Button';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';

/* styles */
import {StyledMenu} from './styles/HamMenu.styled';

/* https://www.carlrippon.com/react-forwardref-typescript/ */
/* https://stackoverflow.com/questions/54654303/using-a-forwardref-component-with-children-in-typescript */
const HamMenu = forwardRef<HTMLElement>((props, ref) => {
  const themeContext = useContext(ThemeContext)

  const [currentMenu, setCurrentMenu] = useState<number | null>(null);

  const menus = [
    {
      id: 0,
      title: 'Product',
      options: [
        {id: 0, name: 'Overview'},
        {id: 1, name: 'Pricing'},
        {id: 2, name: 'Marketplace'},
        {id: 3, name: 'Integrations'},
      ]
    },
    {
      id: 1,
      title: 'Company',
      options: [
        {id: 0, name: 'About'},
        {id: 1, name: 'Team'},
        {id: 2, name: 'Blog'},
        {id: 3, name: 'Careers'},
      ]
    },
    {
      id: 2,
      title: 'Connect',
      options: [
        {id: 0, name: 'Contact'},
        {id: 1, name: 'Newsletter'},
        {id: 2, name: 'LinkedIn'},
      ]
    }
  ]


  /* toggles the current menu to show child links */
  function handleClick(id: number) {
    if (currentMenu === id) {
      setCurrentMenu(null)
      return
    }
    setCurrentMenu(id)
  }


  return (
    <StyledMenu >
      <List
        ref={ref}
        className='list'
        sx={{
          width: '100%',
          height: '100%',
          maxWidth: '100%',
          bgcolor: 'background.paper',
          textAlign: 'center',
          padding: ' 2rem 2rem'
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        {
          menus.map((menu) => (
            <DropDownItem
              key={menu.id}
              menu={menu}
              active={currentMenu === menu.id}
              onClick={() => handleClick(menu.id)}
            />
          ))
        }
        <div>
          <Divider />
          <Button
            text='Login'
            fg={themeContext.palette.neutral.veryDarkGrayishBlue}
          />
          <Button
            fg='#fff'
            bg={
              `linear-gradient(87deg, ${themeContext.palette.gradient.veryLightRed} -10%, ${themeContext.palette.gradient.lightRed} 100%)`
            }
            text='Sign Up' />

        </div>
      </List>

    </StyledMenu>
  );
})

export default HamMenu;
