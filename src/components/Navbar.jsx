import React, { useState } from "react";
import logoImg from "../assets/images/Group.png";
import profileImg from "../assets/images/profile.svg";

const Navbar = ({ onNewTask, onGoToTasks, onGoHome }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleNavClick = (action) => {
    setIsMenuOpen(false); // Close mobile menu when a link is clicked
    if (action) action();
  };

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-8">
        {/* Brand Logo */}
        <div
          onClick={() => handleNavClick(onGoHome)}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <img
            src={logoImg}
            alt="TaskDuty Logo"
            className="h-6 w-6 sm:h-7 sm:w-7 object-contain"
          />
          <span className="text-lg sm:text-xl font-bold text-purple-600 tracking-tight">
            TaskDuty
          </span>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => handleNavClick(onNewTask)}
            className="text-sm sm:text-base font-semibold text-[#292929] transition hover:text-purple-600 cursor-pointer"
          >
            New Task
          </button>
          <button
            onClick={() => handleNavClick(onGoToTasks)}
            className="text-sm sm:text-base font-semibold text-[#292929] transition hover:text-purple-600 cursor-pointer"
          >
            All Tasks
          </button>
        </nav>

        {/* Profile Avatar & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-4">
          {/* User Profile Avatar */}
          <div className="h-8 w-8 sm:h-9 sm:w-9 overflow-hidden rounded-full border border-gray-300 flex-shrink-0">
            <img
              src={profileImg}
              alt="Profile"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Hamburger Menu Button (Mobile / Tablet only) */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-gray-600 hover:text-purple-600 focus:outline-none cursor-pointer"
            aria-label="Toggle Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                // Close Icon (X)
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger Icon
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-4 space-y-3 shadow-lg">
          <button
            onClick={() => handleNavClick(onNewTask)}
            className="block w-full text-left py-2 text-base font-semibold text-[#292929] hover:text-purple-600 transition"
          >
            New Task
          </button>
          <button
            onClick={() => handleNavClick(onGoToTasks)}
            className="block w-full text-left py-2 text-base font-semibold text-[#292929] hover:text-purple-600 transition"
          >
            All Tasks
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
