import { useState } from 'react';
import { Button } from '@mui/material';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

import Brand from './brand';
import SidebarDrawer from './sidebarDrawer';
import { useTheme } from '../atoms/theme';

const Header = () => {
  const { theme } = useTheme();
  const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);

  const toggleLeftDrawer = () => setLeftDrawerOpen((prev) => !prev);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position='static'
        style={{
          boxShadow: 'none',
          ...(theme === 'light' ? { backgroundColor: '#fff' } : {}),
        }}
      >
        <Toolbar>
          <IconButton
            size='large'
            edge='start'
            color='inherit'
            aria-label='menu'
            onClick={toggleLeftDrawer}
            style={{ ...(theme === 'light' ? { color: '#000' } : {}) }}
          >
            <MenuIcon />
          </IconButton>

          <Brand />
          <Box sx={{ marginLeft: 'auto', marginRight: '16px' }}>
          <Button
                size="large"
                variant="contained"
                style={{ marginLeft: '16px' }}
              > 
                Sign In
              </Button>
            </Box>
        </Toolbar>
      </AppBar>
      <Divider />

      <SidebarDrawer open={leftDrawerOpen} toggle={toggleLeftDrawer} />
    </Box>
  );
};

export default Header;
