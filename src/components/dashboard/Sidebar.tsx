
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BarChart3, 
  Settings, 
  Upload, 
  Database, 
  ChevronLeft, 
  Menu,
  HelpCircle,
  Users,
  Layers
} from 'lucide-react';
import Logo from '../Logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
  const location = useLocation();

  const menuItems = [
    { icon: Home, name: 'Home', path: '/dashboard' },
    { icon: Upload, name: 'Upload Data', path: '/dashboard/upload' },
    { icon: Layers, name: 'Segmentation', path: '/dashboard/segmentation' },
    { icon: BarChart3, name: 'Visualizations', path: '/dashboard/visualizations' },
    { icon: Database, name: 'Data Management', path: '/dashboard/data' },
  ];
  
  const bottomMenuItems = [
    { icon: Users, name: 'Team', path: '/dashboard/team' },
    { icon: HelpCircle, name: 'Help & Support', path: '/dashboard/support' },
    { icon: Settings, name: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <aside 
      className={cn(
        "h-screen bg-white border-r border-border/40 flex flex-col z-10 fixed left-0 top-0 transition-all duration-300 ease-in-out", 
        collapsed ? "w-[70px]" : "w-[240px]"
      )}
    >
      <div className="flex items-center justify-between h-16 px-4 border-b border-border/40">
        <div className={cn("transition-opacity", collapsed ? "opacity-0 invisible" : "opacity-100 visible")}>
          <Logo size="sm" />
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={onToggle} 
          className="text-muted-foreground hover:text-foreground"
        >
          {collapsed ? <Menu size={20} /> : <ChevronLeft size={20} />}
        </Button>
      </div>
      
      <div className="flex-1 overflow-y-auto py-4">
        <nav className="px-2 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === item.path 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
                collapsed ? "justify-center" : "justify-start"
              )}
            >
              <item.icon size={20} className={collapsed ? "" : "mr-3"} />
              <span className={cn("transition-opacity", collapsed ? "hidden" : "block")}>
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
      
      <div className="px-2 py-4 border-t border-border/40">
        <nav className="space-y-1">
          {bottomMenuItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={cn(
                "flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors",
                location.pathname === item.path 
                  ? "bg-primary/10 text-primary" 
                  : "text-muted-foreground hover:bg-muted hover:text-foreground",
                collapsed ? "justify-center" : "justify-start"
              )}
            >
              <item.icon size={20} className={collapsed ? "" : "mr-3"} />
              <span className={cn("transition-opacity", collapsed ? "hidden" : "block")}>
                {item.name}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
