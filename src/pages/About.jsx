import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function About() {
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


      <>
        {dropdownData.map((title, index) => (
          <div key={index} onClick={() => toggleDropdown(index)} className="my-4 cursor-pointer space-y-2">
            <div className="p-4  flex justify-between items-center bg-zinc-50 border border-black rounded-md shadow-md">
              <h2 className="font-semibold text-sm lg:text-base">{title}</h2>
              <ChevronDownIcon
                
                className={`h-6 w-6 lg:h-8 lg:w-8 text-black cursor-pointer hover:bg-zinc-100 hover:rounded-full duration-100 p-1 ${!collapsed[index] && " rotate-180" }`}
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
</> 
 );
}

export default About;
