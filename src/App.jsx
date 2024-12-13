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
    <div className="h-screen flex flex-col">
      <header className="fixed top-0 left-0 w-full bg-black bg-opacity-15  backdrop-blur-md border-b-2 border-black">
        <div className="flex items-center justify-between px-4 lg:px-8 h-16">
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img
              src={netlogo}
              className="h-10 w-10 lg:h-14 lg:w-14"
              alt="Vite logo"
            />
          </a>
          <h1 className="text-lg lg:text-2xl font-serif font-semibold text-center">
            NetLogo Documentation
          </h1>
        </div>
      </header>

      <main className="flex-grow pt-16 px-4 lg:px-16 overflow-y-auto">
        {dropdownData.map((title, index) => (
          <div key={index} className="my-4 space-y-2">
            <div className="p-4  flex justify-between items-center bg-zinc-50 border border-black rounded-md shadow-md">
              <h2 className="font-semibold text-sm lg:text-base">{title}</h2>
              <ChevronDownIcon
                onClick={() => toggleDropdown(index)}
                className="h-6 w-6 lg:h-8 lg:w-8 text-black cursor-pointer hover:bg-zinc-100 hover:rounded-full p-1"
              />
            </div>
            <div
              className={`transition-all duration-200 ease-in-out ${
                collapsed[index]
                  ? 'h-0 p-0 border-0 opacity-0'
                  : 'max-h-[10rem] p-4 opacity-100'
              } overflow-hidden bg-green-50 px-4  border border-green-600 rounded-md text-sm lg:text-base text-green-950`}
            >
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, soluta!
              </p>
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default App;
