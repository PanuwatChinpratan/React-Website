import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-64 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        <div className="p-4">
          <h2 className="text-2xl font-bold">My Sidebar</h2>
          <ul className="mt-8 space-y-4">
            <li>
              <a href="#" className="hover:text-gray-300">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Profile
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Settings
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-300">
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Sidebar Toggle Button */}
      <div className="ml-4 mt-4">
        <button
          onClick={toggleSidebar}
          className="bg-blue-500 text-white p-2 rounded-md focus:outline-none focus:ring"
        >
          {isOpen ? "Close Sidebar" : "Open Sidebar"}
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold">Main Content Area</h1>
        <p className="mt-4">This is where your main content will go.</p>
      </div>
    </div>
  );
};

export default Sidebar;
