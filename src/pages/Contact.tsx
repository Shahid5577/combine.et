import React, { useState } from 'react';
import Modal from 'react-modal';
import emailjs from 'emailjs-com'; 
import ETHeader from '../components/ETHeader';
import Footer from '../components/Footer';
import { Divider } from '@mui/material';



Modal.setAppElement('#root');

const Contact: React.FC = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    from_name: '',     
    from_email: '',   
    message: '',       
  });

  const handleOpenModal = () => {
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setModalIsOpen(false);
    
    setFormData({
      from_name: '',
      from_email: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    
    emailjs
      .send('service_pxf7cjl', 'template_wjigprs', formData, 'ZKPLE2Tva_VxMg2WO')
      .then((response) => {
        console.log('Email sent successfully:', response);
       
        handleOpenModal();
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      });
  };

  return (
    <section className="min-h-screen bg-neutral-950 text-gray-700">
      <ETHeader />
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-200 text-center mb-8">
          We'd love to hear from you! Whether you have a question about services, pricing, or anything else, our team is ready to answer all your questions.
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-6">
            <label className="block text-gray-500 font-bold mb-2" htmlFor="from_name">Your Name</label>
            <input
              type="text"
              id="from_name"
              name="from_name"  
              value={formData.from_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 text-zinc-100 rounded-lg focus:outline-none focus:border-blue-500 placeholder:text-zinc-400 bg-pink-950 contrast-200"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-500 font-bold mb-2" htmlFor="from_email">Your Email</label>
            <input
              type="email"
              id="from_email"
              name="from_email"  
              value={formData.from_email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-zinc-100 focus:outline-none focus:border-blue-500 placeholder:text-zinc-400 bg-pink-950 contrast-200"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-500 font-bold mb-2" htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"  
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-zinc-100 focus:outline-none focus:border-blue-500 placeholder:text-zinc-400 bg-pink-950 contrast-200"
              rows={5}
              placeholder="Enter your message"
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-2 px-6 rounded-lg hover:bg-white hover:text-blue-600 hover:contrast-150 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={handleCloseModal}
          contentLabel="Appreciation Message"
          className="bg-white rounded-lg shadow-md max-w-lg mx-auto p-6"
          overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        >
          <h2 className="text-xl font-semibold text-center mb-4">Thank You!</h2>
          <p className="text-center text-gray-700">Your message has been sent successfully. We appreciate your interest!</p>
          <div className="mt-4 text-center">
            <button onClick={handleCloseModal} className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300">
              Close
            </button>
          </div>
        </Modal>
      </div>
      <Divider />
      <Footer />
    </section>
  );
};

export default Contact;
