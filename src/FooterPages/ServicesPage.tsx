import { useInView } from 'react-intersection-observer';
import ux from '../images/ux.png';
import web from '../images/web.png';
import dev from '../images/dev.png';
import it from '../images/it.png';
import mar from '../images/mar.png';
import hire from '../images/hire.png';
import qa from '../images/qa.png';
import ai from '../images/aiml.png';
import iot from '../images/iot.png';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';
import { Typography, Divider } from '@mui/material';
import ContactBanner from '../pages/FeaturePages/contact';

type ServiceCardProps = {
  imgSrc: string;
  altText: string;
  title: string;
  description: string;
  reverse: boolean; // Prop to control reverse order of image and text
};

function ServiceCard({ imgSrc, altText, title, description, reverse }: ServiceCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col gap-0 sm:gap-4 w-full sm:w-1/3 rounded-lg bg-slate-50 shadow-2xl dark:bg-neutral-900 hover:shadow-xl hover:-translate-y-3 transform transition duration-300 cursor-pointer fadeInUp ${inView ? 'visible' : ''}`}
    >
      <div className={`w-full h-auto p-1 sm:p-6 flex ${reverse ? 'flex-row-reverse' : 'flex-row'} justify-center items-center`}>
        <img src={imgSrc} alt={altText} className="h-[80px] sm:h-[180px] w-[60%] object-contain" />
      </div>
      <div className="w-full h-auto flex flex-col justify-between p-1 sm:p-4">
        <h2 className="text-center text-sm sm:text-2xl font-bold text-neutral-700 dark:text-zinc-100">{title}</h2>
        <p className="text-[10px] sm:text-lg p-2 text-center dark:text-zinc-400">{description}</p>
      </div>
    </div>
  );
}

function ServicesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* Section Title */}
      <div className="text-center mb-16">
        <h1 className="text-lg sm:text-4xl font-semibold text-neutral-800 dark:text-zinc-100">OUR SERVICES</h1>
        <p className="mt-4 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400">Where ideas become reality</p>
      </div>

      {/* First row of services */}
      <div className="w-full px-4 sm:px-8 flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center">
        <ServiceCard
          imgSrc={ux}
          altText="uxImage"
          title="UX/UI Design"
          description="Amplify your user engagement through specialist UX/UI services that cover everything from design to prototyping and product validation to produce the most intuitive interfaces."
          reverse={false}
        />
        <ServiceCard
          imgSrc={web}
          altText="webImage"
          title="Website Development"
          description="We leverage the latest digital technologies to deliver future-proof web development solutions that provide exceptional user experiences and grow with your business."
          reverse={true}
        />
        <ServiceCard
          imgSrc={dev}
          altText="devImage"
          title="DevOps"
          description="Our leading DevOps services help to streamline your operations by securely deploying new features and products at higher velocity while increasing quality and reliability."
          reverse={false}
        />
      </div>

      {/* Second row of services */}
      <div className="w-full px-4 sm:px-8 flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center mt-1 sm:mt-12">
        <ServiceCard
          imgSrc={it}
          altText="itImage"
          title="IT Consultancy"
          description="Align your technology strategy with your business or process strategies through expert consulting services that help you optimize your IT environment."
          reverse={true}
        />
        <ServiceCard
          imgSrc={mar}
          altText="marImage"
          title="Marketing"
          description="We offer a range of online marketing solutions that increase your visibility, enhance your brand image, and connect your business with high-quality leads."
          reverse={false}
        />
        <ServiceCard
          imgSrc={hire}
          altText="hireImage"
          title="Hire Developers"
          description="Need specialist developers for a unique project? Easily build your own dedicated team for short, long, or permanent projects from your vetted pool of experienced software engineers."
          reverse={true}
        />
      </div>

      {/* Third row of services */}
      <div className="w-full px-4 sm:px-8 flex flex-col sm:flex-row gap-2 sm:gap-6 justify-center mt-2 sm:mt-12">
        <ServiceCard
          imgSrc={qa}
          altText="qaImage"
          title="QA Services"
          description="Our proactive QA services go above and beyond testing. We save you time and money, prevent defects, and give you ultimate confidence in the success of your solutions."
          reverse={false}
        />
        <ServiceCard
          imgSrc={ai}
          altText="aiImage"
          title="AI/ML"
          description="Realize your full business potential through next-gen artificial intelligence and machine learning solutions that take productivity and performance to new heights."
          reverse={true}
        />
        <ServiceCard
          imgSrc={iot}
          altText="iotImage"
          title="IoT"
          description="Take advantage of expert IoT development services that deliver comprehensive business insights, which help to boost efficiencies, control, and visibility."
          reverse={false}
        />
      </div>

      {/* Footer Links */}
      <ContactBanner/>
      <Divider className="pt-7" />
      <div className="flex flex-col items-center justify-between gap-4 p-4 py-4 sm:py-4 sm:flex-row sm:gap-8">
        <div className="flex items-center gap-2 sm:gap-4">
          <Link to="/about">
            <Typography className="text-gray-600 dark:text-gray-300">About</Typography>
          </Link>
          <Link to="services">
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

export default ServicesPage;
