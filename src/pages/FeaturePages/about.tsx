import { useEffect } from 'react';
import {
    Verified as VerifiedIcon,
  Repeat as RepeatIcon,
  Visibility as VisibilityIcon,
  Assessment as AssessmentIcon,
  Lock as LockIcon,
  Accessibility as AccessibilityIcon
} from '@mui/icons-material';
import ContactBanner from './contact';
import { Link } from 'react-router-dom';
import { Typography, Divider } from '@mui/material';
import Cutting from '../images/cutting.png';
import Agile from '../images/Agile.png';

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="px-6 py-1 sm:px-10 sm:py-1 mt-4 sm:mt-14">
      {/* About Us Section */}
      <section className="text-center mb-20">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-12 tracking-wide">ABOUT US</h2>
        <div className="flex flex-col lg:flex-row items-center justify-around gap-12">
          <div className="lg:w-1/2 text-left space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">We Operate at the Cutting Edge of Software Development</h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
              We’ve been doing what we do for years; crafting bespoke enterprise applications to improve efficiency and automate processes across a range of sectors. By cleverly combining our keen sense of business and management with our grasp of the latest technology, we’ve been able to design and build cutting edge software for a global client base.
            </p>
          </div>
          <img src={Cutting} alt="Cutting Edge Development" className="rounded-lg w-full lg:w-1/3 transition-transform duration-300 hover:scale-105" />
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-around gap-12 mt-16">
          <img src={Agile} alt="Agile and Adaptable" className="rounded-lg  w-full lg:w-1/3 transition-transform duration-300 hover:scale-105" />
          <div className="lg:w-1/2 text-left space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Agile, Reliable, Adaptable</h3>
            <p className="text-gray-700 dark:text-gray-400 leading-relaxed">
              We respond to change quickly and effectively, staying ahead of the technological curve to deliver the best possible service. Our beliefs help to shape the character and culture of our company. Our underlying ethos is to build a team which has a genuine passion for the innovation of the moment.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="text-center">
        <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200 mb-12 tracking-wide">OUR VALUES</h2>
        <p className="text-gray-700 dark:text-gray-400 mb-16 max-w-2xl mx-auto">
          At Enershas Technologies, we lean on the six core values below in our endeavors to be the best digital IT solutions agency we can be.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Value Cards */}
          {[
            { title: "Integrity", icon: VerifiedIcon, description: "Operating with integrity is at the core of everything we do. We take pride in our commitment to honesty, respect, and fairness." },
            { title: "Flexibility", icon: RepeatIcon, description: "We adapt to constantly changing environments, giving our clients an edge in today’s competitive landscape." },
            { title: "Transparency", icon: VisibilityIcon, description: "Open lines of communication keep everyone fully informed about project progress and results." },
            { title: "Results", icon: AssessmentIcon, description: "Our culture rewards exceptional performance, helping us consistently meet and exceed client expectations." },
            { title: "Confidentiality", icon: LockIcon, description: "We protect client information with comprehensive policies to ensure confidentiality and build trust." },
            { title: "Responsibility", icon: AccessibilityIcon, description: "We pursue our financial targets in a socially conscious and ethical manner, prioritizing corporate responsibility." }
          ].map((value, index) => (
            <div key={index} className="flex flex-col items-center text-center bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300">
              <value.icon className="text-rose-800 dark:text-rose-400 text-5xl mb-4" />
              <h4 className="font-semibold text-gray-900 dark:text-gray-100 text-xl mb-2">{value.title}</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
      
      {/* Contact Banner */}
      <ContactBanner />

      {/* Footer Links */}
      <Divider />
      <div className="flex flex-col items-center justify-between gap-4 p-4 py-4 sm:py-4 sm:flex-row sm:gap-8">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/about">
            <Typography className="text-gray-600 dark:text-gray-300">About</Typography>
          </Link>
          <Link to="/services">
            <Typography className="text-gray-600 dark:text-gray-300">Services</Typography>
          </Link>
          <Link to="/careers">
            <Typography className="text-gray-600 dark:text-gray-300">Careers</Typography>
          </Link>
          <Link to="/privacy">
            <Typography className="text-gray-600 dark:text-gray-300">Privacy</Typography>
          </Link>
          
        </div>
        <div className="flex items-center gap-2 sm:gap-4">
          <Typography className="text-gray-600 dark:text-gray-300">
            <Link to="">Help</Link>
          </Typography>
          <div className="border-gray-300 dark:border-gray-600 border-[1px] rounded-md px-6 py-[6px]">
            <Typography className="text-gray-600 dark:text-gray-300">Support</Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
