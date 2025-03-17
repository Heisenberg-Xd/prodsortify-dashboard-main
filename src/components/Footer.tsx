
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { ExternalLink, Github, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur-sm">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <Logo />
            <p className="text-sm text-muted-foreground">
              Advanced product segmentation platform for data-driven businesses.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/60 hover:text-primary smooth-transition">
                <Twitter size={18} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary smooth-transition">
                <Github size={18} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary smooth-transition">
                <Linkedin size={18} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/dashboard" className="text-muted-foreground hover:text-primary smooth-transition">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="#features" className="text-muted-foreground hover:text-primary smooth-transition">
                  Features
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary smooth-transition">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary smooth-transition">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary smooth-transition">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary smooth-transition">
                  API Reference
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary smooth-transition">
                  Support
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary smooth-transition flex items-center gap-1">
                  Community <ExternalLink size={12} />
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-medium mb-4">Company</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary smooth-transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary smooth-transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary smooth-transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="#" className="text-muted-foreground hover:text-primary smooth-transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} PRODSORT. All rights reserved.
          </p>
          <div className="flex space-x-6 text-xs">
            <Link to="#" className="text-muted-foreground hover:text-primary smooth-transition">
              Privacy Policy
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary smooth-transition">
              Terms of Service
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-primary smooth-transition">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
