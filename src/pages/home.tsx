import {
  Button,
  Divider,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import {
  QuestionMarkRounded
} from "@mui/icons-material";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import banner from '../images/ban.png';
import Services from "./FeaturePages/services";
import Tools from "./tools";
import Talent from './FeaturePages/talent';
import Work from './FeaturePages/work';
import ContactBanner from "./FeaturePages/contact";


interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  const location = useLocation();
  

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "auto" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location]);



  return (
    <div  className="px-2 py-8 sm:px-6 sm:py-6">
      <div id='home-section' className="p-4 flex flex-col sm:flex-row mt-0 sm:items-center justify-center sm:justify-start h-[calc(75vh-65px)] ml-2 gap-10">
        <div className="max-w-[600px] px-4 sm:px-8 pb-12 sm:mr-10 gap-6 text-center text-sm">
          <Typography
            variant="h3"
            className="hidden mt-4 font-light text-center text-gray-800 sm:flex sm:text-left dark:text-gray-300"
          >
            Transform your business with our innovative digital solutions.
          </Typography>

          <Typography
            variant="h5"
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-gray-300 sm:mt-0"
          >
           Transform your business with our innovative digital solutions.
          </Typography>

          <br />

          <Typography
            className="hidden font-light text-center text-gray-800 sm:flex sm:text-left dark:text-neutral-500"
            style={{ fontSize: "1.1rem" }}
          >
            Elevate your business with our cutting-edge digital web solutions, crafted to drive transformative success. Experience innovation, unlock potential, and propel your growth.
          </Typography>
          <Typography
            className="font-normal text-center text-gray-800 sm:hidden sm:text-left dark:text-neutral-500 sm:mt-0"
            style={{ fontSize: "0.8rem" }}
          >
            Elevate your business with our cutting-edge digital web solutions, crafted to drive transformative success. Experience innovation, unlock potential, and propel your growth.
          </Typography>

          <br />

          <div className="flex flex-col items-center gap-2 mt-2 sm:flex-row sm:gap-4">
            <TextField
              size="small"
              placeholder="Enter email"
              className="w-full sm:w-auto sm:mb-0 sm:pl-2"
              style={{ marginTop: 12 }}
            />
            <Button
              size="large"
              variant="contained"
              className="w-full -mt-12 sm:w-auto sm:mb-0 sm:pl-2"
            >
              <Link
                to={
                  ""
                }
              >
                Get Started
              </Link>
            </Button>
          </div>

          <div className="flex flex-col items-center mt-6 sm:flex-row sm:justify-start sm:gap-0">
            <p className="text-sm dark:text-white sm:mr-2">
              Don't have an account?
            </p>
            <Link
              to={""}
              className="flex-grow text-sm text-blue-500 sm:flex-grow-0"
            >
              Sign up at no cost
            </Link>
          </div>
        </div>
        <div className="items-center justify-center hidden  sm:flex ">
          <img
            src={banner}
            className="w-full h-[calc(60vh-100px)] object-cover object-center"
            alt="Banner"
            style={{ display: "none" }}
          />
        </div>

        <div className="items-center justify-center hidden ml-2  sm:flex ">
          <img
            src={banner}
            className="w-full h-[calc(87vh-110px)] object-cover object-center"
            alt="Banner"
          />
        </div>
      </div>
      
      <Services/>
      <Tools/>
      <Talent/>
      <Work/>
      <ContactBanner/>
      <br />
      <Divider />
      <div className="flex flex-col items-center justify-between gap-4 p-4 py-4 sm:py-4 sm:flex-row sm:gap-8">
        <div className="flex items-center gap-2 sm:gap-4">
          
          <Link to={"/about"}>
            <Typography className="text-gray-600 dark:text-gray-300">
              About
            </Typography>
          </Link>
          <Link to={""}>
            <Typography className="text-gray-600 dark:text-gray-300">
              Services
            </Typography>
          </Link>
          <Link to={""}>
            <Typography className="text-gray-600 dark:text-gray-300">
              Careers
            </Typography>
          </Link>
          <Link to="/privacy">
            <Typography className="text-gray-600 dark:text-gray-300">
              Privacy
            </Typography>
          </Link>
          <Link to={""}>
            <Typography className="text-gray-600 dark:text-gray-300">
              Terms
            </Typography>
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          <IconButton>
            <Link to="">
              <QuestionMarkRounded className="text-gray-600 dark:text-gray-300" />
            </Link>
          </IconButton>

          <Typography className="text-gray-600 dark:text-gray-300">
            <Link to="">Help</Link>
          </Typography>
          <div className="border-gray-300 dark:border-gray-600 border-[1px] rounded-md px-6 py-[6px]">
            <Typography className="text-gray-600 dark:text-gray-300">
              English
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;