import React, { useState } from 'react';
import Modal from 'react-modal';
import { db, storage } from '../../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes } from 'firebase/storage';
import ETHeader from './ETHeader';
import Footer from '../components/Footer';
import { Divider } from '@mui/material';




Modal.setAppElement('#root');

const Brochure: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [appreciationModalIsOpen, setAppreciationModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    qualification: '',
    experience: '',
    resume: null as File | null,
    socialMedia: '',
  });

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
  };

  const handleCloseAppreciationModal = () => {
    setAppreciationModalIsOpen(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      resume: e.target.files?.[0] || null,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.resume) {
      const resumeRef = ref(storage, `resumes/${formData.resume.name}`);
      try {
        
        await uploadBytes(resumeRef, formData.resume);
        
        
        const formDataToFirestore = {
          name: formData.name,
          qualification: formData.qualification,
          experience: formData.experience,
          socialMedia: formData.socialMedia,
          resumeUrl: `resumes/${formData.resume.name}`,
        };

       
        await addDoc(collection(db, 'submissions'), formDataToFirestore);

       
        setModalIsOpen(false);
        setAppreciationModalIsOpen(true);
        setFormData({
          name: '',
          qualification: '',
          experience: '',
          resume: null,
          socialMedia: '',
        });
      } catch (error) {
        console.error('Error submitting form:', error);
      }
    }
  };

  return (
    
    <div className="bg-gradient-to-br from-black to-pink-950 min-h-screen">
    <ETHeader />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-4">
        
        <section className="text-center mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-zinc-100 mb-2">Professional Portfolio Website Offer</h1>
          <p className="text-lg text-gray-400">Crafted by <span className="font-semibold">Enershas Technologies</span></p>
        </section>

        
        <section className="bg-blue-950 contrast-200 shadow-md rounded-lg p-6 md:p-8 mb-12">
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-500 mb-4 text-center">Why Do You Need a Portfolio Website?</h2>
          <p className="text-base md:text-lg text-gray-400 mb-4 text-center">
            In today’s competitive world, having an <strong>online presence</strong> is essential. Whether you’re a student, freelancer, or job seeker, a portfolio website helps you stand out by showcasing your skills, achievements, and projects.
          </p>
          <p className="text-base md:text-lg text-gray-400 text-center">Let us build a <strong>stunning portfolio website</strong> that will elevate your professional profile and help you achieve your goals.</p>
        </section>

        
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-500 mb-8">
              Our Pricing Plans
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-neutral-900 contrast-125 shadow-lg rounded-lg p-6 border-t-4 border-blue-500 h-full flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer hover:border hover:border-blue-500 focus:border-blue-500 border-1 hover:border-t-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-100 mb-4 border-l-4 border-blue-500 pl-2">Student Plan</h3>
                  <p className="text-lg text-blue-500 font-bold">₹2918</p>
                  <p className="text-gray-300 mb-6">Includes Hosting & Maintenance</p>
                  <ul className="text-gray-300 space-y-2">
                    <li>Custom-designed one-page portfolio</li>
                    <li>Responsive across all devices</li>
                    <li>About Me, Projects, Skills, Contact Form</li>
                    <li>LinkedIn and GitHub Integration</li>
                    <li>1-year hosting and maintenance</li>
                  </ul>
                </div>
                <button onClick={handleOpenModal} className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg shadow-lg hover:bg-blue-800 transition duration-300">
                  Get Started
                </button>
              </div>
              <div className="bg-neutral-900 contrast-150 shadow-lg rounded-lg p-6 border-t-4 border-green-500 h-full flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer hover:border hover:border-green-500 focus:border-green-500 border-1 hover:border-t-4">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-100 mb-4 border-l-4 border-green-500 pl-2">Professional Plan</h3>
                  <p className="text-lg text-green-500 font-bold">₹3918</p>
                  <p className="text-gray-300 mb-6">Best for freelancers & professionals</p>
                  <ul className="text-gray-300 space-y-2">
                    <li>Custom multi-page portfolio</li>
                    <li>Responsive design + SEO optimization</li>
                    <li>Blog integration & content management</li>
                    <li>Detailed projects section with case studies</li>
                    <li>1-year hosting and advanced maintenance</li>
                  </ul>
                </div>
                <button onClick={handleOpenModal} className="mt-4 w-full bg-green-500 text-white py-2 rounded-lg shadow-lg hover:bg-green-800 transition duration-300">
                  Get Started
                </button>
              </div>
              <div className="bg-neutral-950 contrast-200 shadow-lg rounded-lg p-6 border-t-4 border-red-500 h-full flex flex-col justify-between transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer hover:border hover:border-red-500 focus:border-red-500 border-1 hover:border-t-4">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold text-gray-100 mb-4 border-l-4 border-red-500 pl-2">Premium Plan</h3>
                    <p className="text-lg text-red-500 font-bold">₹5918</p>
                    <p className="text-gray-300 mb-6">Perfect for agencies or personal brands</p>
                    <ul className="text-gray-300 space-y-2">
                      <li>Custom design with advanced features</li>
                      <li>Integration with external APIs</li>
                      <li>Full e-commerce capabilities (if needed)</li>
                      <li>Advanced SEO, analytics, and tracking</li>
                      <li>1-year hosting, priority maintenance, and updates</li>
                    </ul>
                  </div>
                  <button onClick={handleOpenModal} className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg shadow-lg hover:bg-red-800 transition duration-300">
                    Get Started
                  </button>
              </div>
          </div>
        </section>


       
        <section className="bg-pink-950 contrast-150  shadow-xl rounded-lg p-6 md:p-8 my-12 cursor-pointer hover:border hover:border-red-500 focus:border-red-500 border-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-white mb-8">Why Choose Us?</h2>
          <ul className="text-zinc-400 space-y-4 text-base md:text-lg">
            <li><strong>Affordable Pricing:</strong> We offer high-quality websites at student-friendly prices.</li>
            <li><strong>Fast Turnaround:</strong> Get your site live in as little as 7 days.</li>
            <li><strong>Experienced Team:</strong> Our team specializes in building professional portfolio websites for students, freelancers, and professionals.</li>
            <li><strong>Ongoing Support:</strong> We provide a full year of hosting and maintenance, ensuring your site stays up-to-date and secure.</li>
          </ul>
        </section>

       
        <section className="bg-green-900 contrast-200 rounded-lg shadow-lg cursor-pointer hover:border hover:border-green-500 focus:border-green-500 border-1">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-zinc-100 mb-4 pt-4">How It Works</h2>
          <div className="rounded-lg shadow-lg p-6 space-y-6 text-gray-700 text-base md:text-lg">
            <div className="flex items-start space-x-4 lg:pl-32">
              <span className="bg-blue-500 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center">1</span>
              <p className='text-zinc-400'><strong>Step 1: Choose a Plan</strong> - Select the package that best fits your needs.</p>
            </div>
            <div className="flex items-start space-x-4 lg:pl-32">
              <span className="bg-blue-500 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center">2</span>
              <p className='text-zinc-400' ><strong>Step 2: Fill the Form</strong> - Provide us with your details and requirements.</p>
            </div>
            <div className="flex items-start space-x-4 lg:pl-32">
              <span className="bg-blue-500 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center">3</span>
              <p className='text-zinc-400'><strong>Step 3: We Build!</strong> - Our team will start working on your portfolio.</p>
            </div>
            <div className="flex items-start space-x-4 lg:pl-32">
              <span className="bg-blue-500 text-white font-bold rounded-full h-8 w-8 flex items-center justify-center">4</span>
              <p className='text-zinc-400 mb-5'><strong>Step 4: Launch</strong> - Review and launch your professional portfolio website!</p>
            </div>
          </div>
        </section>

       
        <section className="my-12 pb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-center text-blue-600 mb-4">Get in Touch</h2>
          <p className="text-center text-gray-300 mb-6">Have any questions or want to discuss your project? Feel free to reach out!</p>
          <div className="flex justify-center">
            <button onClick={handleOpenModal} className="bg-lime-800 text-white py-2 px-4 rounded-lg hover:bg-cyan-600 hover:scale-105 shadow-md hover:shadow-lg transition-transform duration-300">Contact Us</button>
          </div>
        </section>
      </div>

     
      <Modal isOpen={modalIsOpen} onRequestClose={handleCloseModal} className="bg-neutral-900 contrast-125 rounded-lg p-6 max-w-md mx-auto mt-20">
        <h2 className="text-xl font-bold mb-4 text-white text-center">Submit Your Information</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-zinc-100 focus:outline-none focus:border-blue-500 placeholder:text-zinc-400 bg-pink-950 contrast-125"
          />
          <input
            type="text"
            name="qualification"
            placeholder="Your Qualification"
            value={formData.qualification}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-zinc-100 focus:outline-none focus:border-blue-500 placeholder:text-zinc-400 bg-pink-950 contrast-125"
          />
          <input
            type="text"
            name="experience"
            placeholder="Your Experience"
            value={formData.experience}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-lg text-zinc-100 focus:outline-none focus:border-blue-500 placeholder:text-zinc-400 bg-pink-950 contrast-125 px-2 py-2"
          />
          <input
            type="file"
            accept=".pdf"
            onChange={handleFileChange}
            required
            className="w-full rounded-md px-4 py-2 border border-gray-300 rounded-lg text-zinc-100 focus:outline-none focus:border-blue-500 placeholder:text-zinc-400 bg-pink-950 contrast-125"
          />
          <input
            type="text"
            name="socialMedia"
            placeholder="LinkedIn/GitHub Profile Link"
            value={formData.socialMedia}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg text-zinc-100 focus:outline-none focus:border-blue-500 placeholder:text-zinc-400 bg-pink-950 contrast-125"
          />
          <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600">Submit</button>
          <button type="button" onClick={handleCloseModal} className="w-full bg-pink-700 text-yellow-100 py-2 rounded-lg hover:bg-red-800">Cancel</button>
        </form>
      </Modal>

 
      <Modal isOpen={appreciationModalIsOpen} onRequestClose={handleCloseAppreciationModal} className="bg-neutral-900 rounded-lg p-6 max-w-md mx-auto mt-20">
        <h2 className="text-xl font-bold mb-4 text-zinc-300">Thank You!</h2>
        <p className="text-gray-700 mb-4 text-zinc-400">Your submission was successful! We appreciate your interest in our services.</p>
        <button onClick={handleCloseAppreciationModal} className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600">Close</button>
      </Modal>
      <Divider />
      <Footer />
    </div>
    
    
  );
};

export default Brochure;
