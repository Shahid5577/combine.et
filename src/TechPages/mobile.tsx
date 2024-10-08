import { Link } from 'react-router-dom';
import Ios from '../images/ios.png';
import Android from '../images/android.png';
import React from '../images/react.png';
import Flutter from '../images/flutter.png';
import Ionic from '../images/ionic.png';
import Swift from '../images/swift.png';
import Kotlin from '../images/kotlin.png';
import Phonegap from '../images/phonegap.png';
import titanium from '../images/Titanium.png';
import xamarin from '../images/xamarin.png';



type App = {
  logo: string;
  name: string;
  link: string;
};
export const appList: App[] = [
  
  {
    logo: Ios,
    name: 'iOS',
    link: '/ios',
  },
  {
    logo: Android,
    name: 'Android',
    link: '/android',
  },
  {
    logo: React,
    name: 'React Native',
    link: '/native',
  },
  {
    logo: Flutter,
    name: 'Flutter',
    link: '/flutter',
  },
  {
    logo: Ionic,
    name: 'Ionic',
    link: '/ionic',
  },
  {
    logo: Swift,
    name: 'Swift',
    link: '/swift',
  },
  {
    logo: Kotlin,
    name: 'Kotlin',
    link: '/kotlin',
  },
  {
    logo: Phonegap,
    name: 'PhoneGap',
    link: '/phonegap',
  },
  {
    logo: titanium,
    name: 'Titanium',
    link: '/titanium',
  },
  {
    logo: xamarin,
    name: 'Xamarin',
    link: '/xamarin',
  },

  
 

];

function mobile() {
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

export default mobile;