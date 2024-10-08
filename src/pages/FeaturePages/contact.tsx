function ContactBanner() {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-6 rounded-lg shadow-lg w-11/12 sm:w-4/5 md:w-3/5 lg:w-2/5">
          <p className="text-[12px] sm:text-[16px] lg:text-[20px] mb-2 sm:mb-4">
            Need the expertise of a leading web development agency?
          </p>
          <p className="text-[10px] sm:text-[14px] lg:text-[18px] mb-2 sm:mb-4">
            Get in touch now to discuss your project.
          </p>
          <p className="text-[10px] sm:text-[14px] lg:text-[18px] pb-4">
            We’re available 24/7 so you can reach out at your convenience.
          </p>
          <button className="bg-gradient-to-r from-green-400 to-teal-500 text-white py-2 px-4 rounded-lg shadow-md hover:from-teal-500 hover:to-green-400 transition duration-300 text-[10px] sm:text-[14px] lg:text-[16px]">
          Get In Touch
        </button>
        </div>
      </div>
    );
  }
  
  export default ContactBanner;
  