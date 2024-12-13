import { useState } from 'react';
import netlogo from '/desktopicon.png';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function App() {
  // Initialize state dynamically based on the number of dropdowns
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

  // Toggle a specific dropdown
  const toggleDropdown = (index) => {
    setCollapsed((prev) =>
      prev.map((item, i) => (i === index ? !item : item))
    );
  };

  return (
    <div className="navbar px-4">
      {/* Navbar */}
      <div className="fixed z-50 filter-none backdrop-blur-md bg-black bg-opacity-15 w-screen inset-0 h-[10%] border-b-2 border-black flex justify-between items-center space-x-5 p-2 px-8">
        <a className="" href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={netlogo} className="size-16" alt="Vite logo" />
        </a>
        <div className="text-center text-2xl font-serif font-semibold">
          Netlogo Documentation
        </div>
      </div>

      {/* Main Content */}
      <div className="main lg:pt-[7%] max-md:pt-[14%] max-sm:pt-[16%]  px-4 ">
        {dropdownData.map((title, index) => (
          <div key={index} className='my-6'>
            {/* Dropdown Header */}
            <div className="p-2 flex justify-between items-center bg-zinc-50 border-2 border-black my-4 rounded-md">
              <h2 className="font-semibold">{title}</h2>
              <ChevronDownIcon
                onClick={() => toggleDropdown(index)}
                className="size-8 hover:bg-zinc-100 hover:border cursor-pointer rounded-full mx-1 p-1"
              />
            </div>
            {/* Dropdown Content */}
            <div
              className={`relative duration-300 ease-in-out ${
                collapsed[index]
                  ? 'h-0 border-0 opacity-0'
                  : 'bg-green-50 p-2 h-auto'
              } overflow-hidden text-green-950 justify-between items-center border-2 border-green-600 my-4 rounded-md`}
            >
              <p>
                This is the content for &quot;{title}&quot;. You can customize it based on
                your requirements.
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
