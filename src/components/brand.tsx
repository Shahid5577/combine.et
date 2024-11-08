import React from 'react';
import icon from '../images/icon.png';
import { Link } from 'react-router-dom';

export type BrandProps = {
  //
};

const Brand: React.FC<BrandProps> = () => {
  return (
    <div className='flex items-center flex-grow gap-2 pl-4'>
      <Link to="/">
      <img
        className='w-[35px] h-[35px] sm:w-[35px] sm:h-[35px]'
        src={icon}
        alt='icon'
        />
        </Link>
        <Link to="/">
      <h1 className='text-black dark:text-white text-base sm:text-lg md:text-2xl sm:text-xs font-bold'>
        Enershas
      </h1>
      </Link>
      
    </div>
  );
};

export default Brand;
