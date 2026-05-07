import React from "react";

const MobileMenu = ({ isOpen } : any) => {
  return (
    <div
      className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-90 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <nav className="flex flex-col items-center justify-center h-full">
        {/* You can map through your menu items here */}
        <a href="index.html" className="text-white text-2xl my-4">
          HOME
        </a>
        <a href="#" className="text-white text-2xl my-4">
          PAGES
        </a>
        <a href="#" className="text-white text-2xl my-4">
          SERVICES
        </a>
        <a href="#" className="text-white text-2xl my-4">
          BLOG
        </a>
        <a href="#" className="text-white text-2xl my-4">
          PROJECT
        </a>
        <a href="contact.html" className="text-white text-2xl my-4">
          CONTACT
        </a>
      </nav>
    </div>
  );
};

export default MobileMenu;
