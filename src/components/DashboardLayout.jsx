import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: 'Jobs', path: '/dashboard/jobs', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
    { label: 'Share Talent', path: '/dashboard', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z' },
    { label: 'Reports', path: '/dashboard/reports', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' }
  ];

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans relative">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`
        fixed inset-y-0 left-0 z-[100] w-[280px] bg-black text-white flex flex-col transition-transform duration-300 lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="py-10 flex justify-center relative">
          <Link to="/" className="cursor-pointer">
            <img 
              src="/Assests/Cloudfire-white.png" 
              alt="Cloudfire" 
              className="w-[130px] h-[100px] object-contain" 
            />
          </Link>
          {/* Close button for mobile */}
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-4 right-4 lg:hidden text-white cursor-pointer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="mt-2 flex-grow overflow-y-auto">
          <ul className="space-y-0">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.label} className="w-full">
                  <Link 
                    to={item.path}
                    className={`flex items-center px-8 transition-all group font-['Segoe_UI'] font-semibold text-[17px] leading-[55px] h-[55px] cursor-pointer w-full ${isActive ? 'bg-[#ff7301] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                  >
                    <svg className="w-5 h-5 mr-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                    </svg>
                    <span className="truncate">{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 lg:ml-[280px] min-h-screen bg-white transition-all duration-300">
        {/* Top Header */}
        <header className="flex justify-between items-center px-4 sm:px-6 lg:px-10 py-4 border-b border-gray-100 sticky top-0 bg-white z-30 shadow-sm">
          <div className="flex items-center">
            {/* Hamburger for mobile */}
            <button 
              onClick={() => setIsSidebarOpen(true)}
              className="mr-4 p-2 rounded-lg hover:bg-gray-100 lg:hidden text-black transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
            <h2 className="text-secondary whitespace-nowrap font-serif font-bold text-[18px]">
              My Account
            </h2>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-6">
            <div className="relative cursor-pointer">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute -top-1 -right-1 bg-[#ff7301] text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center">2</span>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gray-200 overflow-hidden shrink-0">
                <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" />
              </div>
              <div className="text-sm font-medium hidden xs:block">
                <div className="font-bold">New User</div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10 py-8">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
