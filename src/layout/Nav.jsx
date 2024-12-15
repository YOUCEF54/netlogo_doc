// import { Children } from 'react';
import netlogo from '/desktopicon.png';
import PropTypes from 'prop-types';


function Nav({children}) {


  return (
    <div className="h-screen flex flex-col">
      <header className="fixed top-0 left-0 w-full bg-white bg-opacity-10  backdrop-blur-md border-b-2  border-neutral-500">
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
      {children}
      </main>
    </div>
  );
}
Nav.propTypes = {
    children: PropTypes.node
  };

export default Nav;
