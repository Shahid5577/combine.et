import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

import Brand from './brand';
import ThemeSwitch from './themeSwitch';


const sidebarRoutes = {
  '/': 'Home',
  '/services': 'Services',
  '/technologies': 'Technologies',
  '/about': 'About Us',
  '/events': 'Events',
};

export interface SidebarDrawerProps {
  open: boolean;
  toggle: () => void;
}

const SidebarDrawer: React.FC<SidebarDrawerProps> = ({ open, toggle }) => {
  const handleHomeClick = () => {
    const homeSection = document.getElementById('home-section');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'auto', block: 'start' });
      
    }
    toggle();
  };

  const handleFeatureClick = () => {
    const featureSection = document.getElementById('clikkle-campaigns');
    if (featureSection) {
      featureSection.scrollIntoView({ behavior: 'auto' });
    }
    toggle();
  };

  const handleOverviewClick = () => {
    const overviewSection = document.getElementById('overview');
    if (overviewSection) {
      overviewSection.scrollIntoView({ behavior: 'auto' });
    }
    toggle();
  };

  const handlePricingClick = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: 'auto' });
    }
    toggle();
  };

  const handleGetStartedClick = () => {
    const getStartedSection = document.getElementById('getStarted');
    if (getStartedSection) {
      getStartedSection.scrollIntoView({ behavior: 'auto' });
    }
    toggle();
  };

  return (
    <Drawer PaperProps={{ style: { width: 300 } }} open={open} onClose={toggle}>
      <div className=''>
        <div className='bg-white dark:bg-zinc-900  sm:h-[calc(100vh-250px)] md:h-[calc(100vh-185px)] overflow-auto gap-1'>
          <div className='p-2 flex items-center justify-between'>
            <div className='flex-grow'>
              <Brand />
            </div>
            <ThemeSwitch />
            <IconButton onClick={toggle}>
              <CloseIcon />
            </IconButton>
          </div>

          <Divider/>
          <div className='p-4 flex flex-col gap-6'>
            {Object.entries(sidebarRoutes).map(([route, label]) => (
              <div key={route} onClick={
                route === '/' ? handleHomeClick :
                route === '/services' ? handleOverviewClick :
                route === '/technologies' ? handleFeatureClick :
                route === '/about' ? handlePricingClick :
                route === '/events' ? handleGetStartedClick : undefined
              } style={{ cursor: 'pointer' }}>
                <Typography className='text-slate-500'>{label}</Typography>
              </div>
            ))}
          </div>
        </div>
        <Divider />

        <div className='p-4 sm:h-[80px] md:h-[120px]'>
          <div className='flex flex-col gap-4 flex-grow'>
            <Button size='large'
              variant='outlined'
            >
              <Link to={"http://accounts.clikkle.com/login"} onClick={toggle}>
                Sign In
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default SidebarDrawer;
