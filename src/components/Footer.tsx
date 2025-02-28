import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-between gap-4 p-4 px-2 sm:px-6 py-4 sm:py-4 sm:flex-row sm:gap-8">
        <div className="flex items-center gap-2 sm:gap-4">
          
          <Link to="/about">
            <Typography className="text-gray-300 dark:text-gray-300">
              About
            </Typography>
          </Link>
          <Link to="/services">
            <Typography className="text-gray-300 dark:text-gray-300">
              Services
            </Typography>
          </Link>
          <Link to="/careers">
            <Typography className="text-gray-300 dark:text-gray-300">
              Careers
            </Typography>
          </Link>
          <Link to="/privacy">
            <Typography className="text-gray-300 dark:text-gray-300">
              Privacy
            </Typography>
          </Link>
            
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <Typography className="text-gray-300 dark:text-gray-300">
            <Link to="">Help</Link>
          </Typography>
          <div className="border-gray-300 dark:border-gray-600 border-[1px] rounded-md px-6 py-[6px]">
            <Typography className="text-gray-300 dark:text-gray-300">
              Support
            </Typography>
          </div>
        </div>
      </div>
  );
};

export default Footer;
