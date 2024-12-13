import { useState } from 'react';
import netlogo from '/desktopicon.png';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function App() {
  const dropdownData = [
    'What is NetLogo?',
    'How does it work?',
    'Use cases for NetLogo',
    'Advantages of using NetLogo',
    'Getting started with NetLogo',
    'NetLogo Web vs Desktop',
    'NetLogo Examples',
  ];

  const [collapsed, setCollapsed] = useState(
    Array(dropdownData.length).fill(true)
  );

  const toggleDropdown = (index) => {
    setCollapsed((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <div className="navbar">
      {/* Navbar */}
      <div className="fixed z-50 filter-none backdrop-blur-md bg-black bg-opacity-15 w-full top-0 h-[10%] border-b-2 border-black flex justify-between items-center px-4 lg:px-8 py-2">
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img
            src={netlogo}
            className="h-10 w-10 lg:h-14 lg:w-14"
            alt="Vite logo"
          />
        </a>
        <div className="text-lg lg:text-2xl font-serif font-semibold text-center">
          NetLogo Documentation
        </div>
      </div>

      {/* Main Content */}
      <div className="main pt-[12%] lg:pt-[8%] px-4 lg:px-16 space-y-6">
        {dropdownData.map((title, index) => (
          <div key={index} className="my-4">
            {/* Dropdown Header */}
            <div className="p-4 flex justify-between items-center bg-zinc-50 border border-black rounded-md shadow-md">
              <h2 className="font-semibold text-sm lg:text-base">{title}</h2>
              <ChevronDownIcon
                onClick={() => toggleDropdown(index)}
                className="h-6 w-6 lg:h-8 lg:w-8 text-black cursor-pointer hover:bg-zinc-100 hover:rounded-full p-1"
              />
            </div>
            {/* Dropdown Content */}
            <div
              className={`transition-all duration-300 ease-in-out ${
                collapsed[index]
                  ? 'max-h-0 opacity-0'
                  : 'max-h-[10rem] opacity-100'
              } overflow-hidden bg-green-50 p-4 border border-green-600 rounded-md text-sm lg:text-base text-green-950`}
            >
              <p>
                This is the content for &quot;{title}&quot;. You can customize it based
                on your requirements.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
