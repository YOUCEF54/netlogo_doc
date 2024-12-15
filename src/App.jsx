
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import netlogo from '/desktopicon.png';

import { useState,useEffect } from 'react';
import './index.css';

import { Outlet } from 'react-router-dom';  // Import Outlet


import About from './pages/About.jsx';
import Nav from './layout/Nav.jsx';
import Menu from './pages/Menu.jsx';
import IdeaForm from './pages/IdeaForm.jsx';
import TaskManager from './pages/TaskManager.jsx';

function App() {

  const [loading, setLoading] = useState(true);  // Step 1: Track loading state

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);  // Step 2: Stop loading after a delay
    }, 2000);  // Adjust delay as needed (2 seconds here)

    return () => clearTimeout(timer);  // Cleanup timeout on unmount
  }, []);

  if (loading) {
    return <div className='w-screen h-screen flex items-center fixed bg-primary'>
      <img
      src={netlogo}
      height={150}
      width={150}
      className='m-auto animate-pulse'

      />
    </div>;  // Step 3: Show loading screen if still loading
  }


  const MainLayout = () => (
      <Nav>
      <Outlet /> 
      </Nav>
        );
  

  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        
          <Route element={<MainLayout />}>
            <Route path="/" element={<Menu />} />
            <Route path="/new-idea" element={<IdeaForm />} />
            <Route path="/tasks" element={<TaskManager />} />
           
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
