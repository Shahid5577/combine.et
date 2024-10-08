import { Link } from 'react-router-dom';
import MsSql from '../images/mssql.png';
import MySql from '../images/sql.png';
import Oracle from '../images/oracle.png';
import Post from '../images/post.png';
import Mongo from '../images/mongo.png';
import Elastic from '../images/elastics.png';
import Cassand from '../images/cassan.png';
import Couch from '../images/couch.png';





type App = {
  logo: string;
  name: string;
  link: string;
};
export const appList: App[] = [
  
  {
    logo: MsSql,
    name: 'Microsoft SQl',
    link: '/Microsoft',
  },
  {
    logo: MySql,
    name: 'MySQL',
    link: '/mysql',
  },
  {
    logo: Oracle,
    name: 'Oracle',
    link: '/oracle',
  },
  {
    logo: Post,
    name: 'Postgre SQL',
    link: '/postgre',
  },
  {
    logo: Mongo,
    name: 'Mongo DB',
    link: '/mongodb',
  },
  {
    logo: Elastic,
    name: 'Elasticsearch',
    link: '/elasticsearch',
  },
  {
    logo: Cassand,
    name: 'Cassandra',
    link: '/cassandra',
  },
  {
    logo: Couch,
    name: 'Couchbase',
    link: '/couchbase',
  },
  
 

];

function database() {
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

export default database;