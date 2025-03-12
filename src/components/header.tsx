import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '../atoms/theme';
import Brand from './brand';
import ThemeSwitch from './themeSwitch';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import { Link } from 'react-router-dom';

const Header = () => {
  const { theme } = useTheme();
 

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{
          boxShadow: 'none',
          ...(theme === 'light' ? { backgroundColor: '#fff' } : {}),
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            style={{ ...(theme === 'light' ? { color: '#000' } : {}) }}
          >
            {/* Add icon or content here */}
          </IconButton>

          <Brand />
          <Box sx={{ marginLeft: 'auto', marginRight: '16px' }}>
            <ThemeSwitch />
            
              <Link to="/brochure">
              <button
                className="bg-teal-500 dark:bg-teal-600 text-white py-1 px-2 rounded-full shadow-md hover:bg-teal-600 dark:hover:bg-teal-700 transition-all duration-300 text-sm text-[6px] sm:py-2 sm:px-6 sm:text-sm lg:text-sm transform hover:scale-105 animate-jump"
                style={{
                  animation: "jump 0.6s ease-in-out infinite",
                }}
              >
                Portal <ImportExportIcon />
              </button>
              </Link>
           
          </Box>
        </Toolbar>
      </AppBar>
      <Divider />
    </Box>
  );
};

export default Header;
