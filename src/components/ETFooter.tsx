import React from 'react';

const ETFooter: React.FC = () => {
  return (
    <footer className="bg-gradient-to-br from-neutral-900 to-neutral-950 text-white py-2 md:py-4">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
       
        <div className="flex space-x-4 justify-center">
          <a href="/privacy-policy" className="text-gray-200 hover:text-white text-sm">Privacy Policy</a>
          <span className="text-sm">|</span>
          <a href="/terms" className="text-gray-200 hover:text-white text-sm">Terms</a>
          <span className="text-sm">|</span>
          <a href="/help" className="text-gray-200 hover:text-white text-sm">Help</a>
        </div>
        
        <div className="text-center text-gray-200 flex-grow">
          <p className="text-sm">© {new Date().getFullYear()} Enershas Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default ETFooter;
