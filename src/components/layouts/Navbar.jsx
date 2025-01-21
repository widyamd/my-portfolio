import React from 'react';

function Navbar() {
  function handleNavigation(section) {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="md:container mx-auto flex items-center justify-between">
        <div className="text-2xl font-bold">
          My Portfolio
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <a href="#" onClick={() => handleNavigation('home')} className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleNavigation('about')} className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleNavigation('projects')} className="hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#" onClick={() => handleNavigation('contact')} className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
