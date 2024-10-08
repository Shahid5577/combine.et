import { Link } from 'react-router-dom';
import Aws from '../images/aws.png';
import Google from '../images/google.png';
import Docker from '../images/docker.png';
import Jenkins from '../images/jenkin.png';
import kubern from '../images/kuberne.png';
import Azure from '../images/azure.png';




type App = {
  logo: string;
  name: string;
  link: string;
};
export const appList: App[] = [
  
  {
    logo: Aws,
    name: 'Amazon Web Services',
    link: '/amazonweb',
  },
  {
    logo: Google,
    name: 'Google Cloud',
    link: '/googlecloud',
  },
  {
    logo: Docker,
    name: 'Docker',
    link: '/docker',
  },
  {
    logo: Jenkins,
    name: 'Jenkins',
    link: '/jenkins',
  },
  {
    logo: kubern,
    name: 'Kubernetes',
    link: '/kubernetes',
  },
  {
    logo: Azure,
    name: 'Microsoft Azure',
    link: '/Microsoftazure',
  }, 

];

function CloudDev() {
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

export default CloudDev;