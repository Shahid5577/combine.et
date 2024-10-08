import { Link } from 'react-router-dom';
import Angular from '../images/angular.png';
import React from '../images/react.png';
import Vue from '../images/vue.png';




type App = {
  logo: string;
  name: string;
  link: string;
};
export const appList: App[] = [
  
  {
    logo: Angular,
    name: 'Angular JS',
    link: '/angular',
  },
  {
    logo: React,
    name: 'React',
    link: '/react',
  },
  {
    logo: Vue,
    name: 'Vue.js',
    link: '/vue',
  },
 

];

function frontend() {
  return (
    <div className="flex sm:flex-row flex-col gap-8 justify-center items-center mx-4 px-2">
        <div className="flex gap-4 sm:gap-8 items-center justify-center flex-wrap sm:max-w-[1000px]">
          {appList.map((app) => (
            <div
              key={app.name}
              className="flex flex-col items-center justify-center gap-0 sm:gap-6"
            >
              <Link to={app.link}>
                <img
                  src={app.logo}
                  alt={app.name}
                  className="h-[24px] w-[28px] sm:w-[50px] sm:h-[48px] "
                />
              </Link>
              <Link to={app.link}>
                <p className="text-[6px] sm:text-[14px] dark:text-zinc-400">{app.name}</p>
              </Link>
            </div>
          ))}
        </div>
        
    </div>
  )
}

export default frontend