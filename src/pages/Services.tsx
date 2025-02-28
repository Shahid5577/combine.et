import React from 'react';
import { Link } from 'react-router-dom';
import Port from '../assets/Portfolio.png';
import Seo from '../assets/Seo.png';
import Support from '../assets/Support.png';
import Ecom from '../assets/Ecom.png';
import Web from '../assets/Web.png';
import Uiux from '../assets/UIux.png';
import ETHeader from '../components/ETHeader';
import Footer from '../components/Footer';
import { Divider } from '@mui/material';

const Services: React.FC = () => {
  return (
    <section className="min-h-screen bg-neutral-950  text-gray-700">
      <ETHeader />
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Our Services</h1>
        <p className="text-center text-gray-400 mb-8">
          We offer a range of services designed to help you establish a strong online presence.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> 
          <div className="bg-neutral-900  shadow-lg rounded-lg p-6 border-t-4 border-blue-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer hover:border hover:border-blue-500 focus:border-blue-500 border-1 hover:border-t-4">
            <img
              src={Port}
              alt="Portfolio Website Development"
              className="w-full h-32 object-cover rounded-lg mb-4 border-4 border-zinc-100"
            />
            <h2 className="text-xl font-semibold text-blue-500 mb-2">Portfolio Website Development</h2>
            <p className="text-gray-300">
              We design and develop custom portfolio websites that are fully responsive and optimized for all devices.
            </p>
          </div>
          <div className="bg-neutral-900 shadow-lg rounded-lg p-6 border-t-4 border-green-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer hover:border hover:border-green-500 focus:border-green-500 border-1 hover:border-t-4">
            <img
              src={Seo}
              alt="SEO Optimization"
              className="w-full h-32 object-cover rounded-lg mb-4 border-4 border-zinc-100"
            />
            <h2 className="text-xl font-semibold text-green-500 mb-2">SEO Optimization</h2>
            <p className="text-gray-300">
              Our websites come with built-in SEO features to help you rank better on search engines and get noticed.
            </p>
          </div>
          <div className="bg-neutral-900 shadow-lg rounded-lg p-6 border-t-4 border-red-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer hover:border hover:border-red-500 focus:border-red-500 border-1 hover:border-t-4">
            <img
              src={Support}
              alt="Maintenance & Support"
              className="w-full h-32 object-cover rounded-lg mb-4 border-4 border-zinc-100"
            />
            <h2 className="text-xl font-semibold text-red-500 mb-2">Maintenance & Support</h2>
            <p className="text-gray-300">
              We offer a full year of hosting, maintenance, and support to ensure your site stays up-to-date and secure.
            </p>
          </div>
          <div className="bg-neutral-900 shadow-lg rounded-lg p-6 border-t-4 border-purple-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer hover:border hover:border-purple-500 focus:border-purple-500 border-1 hover:border-t-4">
            <img
              src={Ecom}
              alt="E-commerce Development"
              className="w-full h-32 object-cover rounded-lg mb-4 border-4 border-zinc-100"
            />
            <h2 className="text-xl font-semibold text-purple-500 mb-2">E-commerce Development</h2>
            <p className="text-gray-300">
              We build high-performance e-commerce platforms that drive sales and provide a seamless shopping experience.
            </p>
          </div>
          <div className="bg-neutral-900 shadow-lg rounded-lg p-6 border-t-4 border-orange-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer hover:border hover:border-orange-500 focus:border-orange-500 border-1 hover:border-t-4">
            <img
              src={Web}
              alt="Web Application Development"
              className="w-full h-32 object-cover rounded-lg mb-4 border-4 border-zinc-100"
            />
            <h2 className="text-xl font-semibold text-orange-500 mb-2">Web Application Development</h2>
            <p className="text-gray-300">
              We create scalable web applications tailored to your business needs, ensuring performance and usability.
            </p>
          </div>
          <div className="bg-neutral-900 shadow-lg rounded-lg p-6 border-t-4 border-teal-500 transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer hover:border hover:border-teal-500 focus:border-teal-500 border-1 hover:border-t-4">
            <img
              src={Uiux}
              alt="UI/UX Design"
              className="w-full h-32 object-cover rounded-lg mb-4 border-4 border-zinc-100"
            />
            <h2 className="text-xl font-semibold text-teal-500 mb-2">UI/UX Design</h2>
            <p className="text-gray-300">
              Our UI/UX experts focus on creating intuitive, user-friendly interfaces that enhance user engagement.
            </p>
          </div>
        </div>
        <div className="mt-10 text-center pb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Interested in Our Services?</h2>
          <p className="text-gray-300 mb-4">
            Contact us to discuss how we can help with your next project.
          </p>
          <Link to="/contact">
            <button className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-zinc-100 hover:text-blue-600 transition-transform duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
      <Divider />
      <Footer />
    </section>
  );
};

export default Services;
