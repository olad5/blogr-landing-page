import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import {Image} from './styles/MenuList.styled';
import {useContext} from 'react'
import {ThemeContext} from 'styled-components'

interface IProps {
  menu: {
    id: number;
    title: string;
    options: {id: number; name: string}[];
  };
  onClick: VoidFunction;
  active: boolean;
}

const DropDownItem: React.FC<IProps> = ({active, menu, onClick}) => {
  const themeContext = useContext(ThemeContext)

  return (
    <>
      <ListItemButton
        sx={{
          width: '60%',
          justifyContent: 'center',
          marginLeft: '2.5rem',
          marginTop: '0.5rem',
          marginBottom: '0.5rem',
        }}
        onClick={onClick}>
        <ListItemText
          sx={{
            width: '10%',
            textAlign: 'center',
            margin: 0,
            marginRight: '-1.1rem',
          }}

          primary={menu.title} />
        {
          active ?
            <Image src='./images/icon-arrow-dark.svg' toggle={true} />
            :
            <Image src='./images/icon-arrow-dark.svg' />
        }
      </ListItemButton>
      <Collapse sx={{bgcolor: '#f4f4f4', borderRadius: '6px'}} in={active} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {
            menu.options.map((option) => (
              <ListItemText sx={{color: themeContext.palette.neutral.veryDarkGrayishBlue}} key={option.id} primary={option.name} />
            ))
          }
        </List>
      </Collapse>
    </>
  );
}


export default DropDownItem
