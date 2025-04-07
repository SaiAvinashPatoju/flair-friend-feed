
import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import BottomNavbar from './BottomNavbar';

const MainLayout = () => {
  useEffect(() => {
    // Prevent body scrolling on mobile when virtual keyboard is visible
    const handleResize = () => {
      document.body.style.height = `${window.innerHeight}px`;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-1 px-4 pt-20 pb-20 max-w-lg mx-auto w-full animate-fade-in">
        <Outlet />
      </main>
      <BottomNavbar />
    </div>
  );
};

export default MainLayout;
