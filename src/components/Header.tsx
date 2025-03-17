
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Logo from './Logo';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Dashboard', path: '/dashboard' },
    { name: 'Features', path: '/#features' },
    { name: 'About', path: '/#about' },
  ];
  
  return (
    <header 
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container px-4 mx-auto flex items-center justify-between">
        <Link to="/" className="smooth-transition hover:opacity-80">
          <Logo />
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-primary relative
                ${location.pathname === item.path || (item.path !== '/' && location.pathname.startsWith(item.path)) 
                  ? 'text-primary after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-full after:bg-primary after:rounded-full' 
                  : 'text-foreground/80 hover:text-foreground'
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button asChild variant="outline" className="button-hover">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button asChild className="button-hover bg-primary hover:bg-primary/90">
            <Link to="/login?tab=signup">Sign Up</Link>
          </Button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md text-foreground" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-[57px] bg-background z-40 md:hidden transform transition-transform duration-300 ease-in-out ${
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-6 space-y-6">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-lg font-medium ${
                location.pathname === item.path ? 'text-primary' : 'text-foreground'
              }`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="w-full mt-4">
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              Sign In
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
