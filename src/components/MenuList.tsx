import {useState, useRef, useEffect} from 'react';
/* Components */
import Button from '@mui/material/Button';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';

/* Styles */
import {ChildrenLinksStyle, Image, ParentLinkStyle} from './styles/MenuList.styled';


interface IProps {
  parentLink: string;
  childLinks: Array<string>;
}

const MenuListComposition: React.FC<IProps> = ({parentLink, childLinks}) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === 'Escape') {
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <Stack direction="row" spacing={2}>
      <div>
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? 'composition-menu' : undefined}
          aria-expanded={open ? 'true' : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <ParentLinkStyle>
            {parentLink}
            {
              open ?
                <Image src='./images/icon-arrow-light.svg' toggle={true} />
                :
                <Image src='./images/icon-arrow-light.svg' />
            }
          </ParentLinkStyle>
        </Button>

        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
        >
          {({TransitionProps, placement}) => (
            <Grow
              {...TransitionProps}
              style={{
                width: '9rem',
                padding: '1rem 0.8rem',
                transformOrigin:
                  placement === 'bottom-start' ? 'left top' : 'left bottom',
              }}
            >

              <Paper elevation={6}>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    id="composition-menu"
                    aria-labelledby="composition-button"
                    onKeyDown={handleListKeyDown}
                  >
                    <ChildrenLinksStyle>
                      {childLinks.map(link => (
                        <MenuItem onClick={handleClose}>
                          <a href='#' className='childlinks' key={childLinks.indexOf(link)}>
                            {link}
                          </a>
                        </MenuItem>
                      ))}
                    </ChildrenLinksStyle>

                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </Stack>
  );
}

export default MenuListComposition;
