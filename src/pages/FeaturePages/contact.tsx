function ContactBanner() {
  return (
    <div className="flex justify-center items-center sm:pb-10 sm:pt-10 py-10 p-4 sm:p-0">
      <div className="relative bg-white dark:bg-gray-900 text-black dark:text-gray-400 p-6 sm:p-8 rounded-xl shadow-lg w-full sm:w-4/5 md:w-3/4 lg:w-2/3 xl:w-1/2 transform hover:scale-105 transition-transform duration-300 ease-in-out">
        {/* Removed gradient background and blur effect */}
        <p className="text-base sm:text-lg dark:text-gray-300 lg:text-xl font-bold mb-2 sm:mb-4 leading-tight text-center">
          Need the expertise of a leading web development agency?
        </p>
        <p className="text-sm sm:text-base lg:text-lg mb-2 sm:mb-4 text-center">
          Get in touch now to discuss your project with our team.
        </p>
        <p className="text-sm sm:text-base lg:text-lg mb-4 text-center">
          We’re available 24/7, so reach out whenever it’s convenient for you.
        </p>
        <div className="flex justify-center">
          <button className="bg-teal-500 dark:bg-teal-600 text-white py-2 px-6 rounded-full shadow-md hover:bg-teal-600 dark:hover:bg-teal-700 transition-all duration-300 text-sm sm:text-base lg:text-lg transform hover:scale-105">
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
