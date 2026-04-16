import React, { useState } from 'react';

const HireTalentDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

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
        fixed inset-y-0 left-0 z-50 w-[280px] bg-black text-white flex flex-col transition-transform duration-300 lg:translate-x-0
        ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="py-10 flex justify-center relative">
          <img 
            src="/Assests/Cloudfire-white.png" 
            alt="Cloudfire" 
            className="w-[130px] h-[100px] object-contain" 
          />
          {/* Close button for mobile */}
          <button 
            onClick={() => setIsSidebarOpen(false)}
            className="absolute top-4 right-4 lg:hidden text-white"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <nav className="mt-2 flex-grow overflow-y-auto">
          <ul className="space-y-0">
            {[
              { label: 'Jobs', icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
              { label: 'Share Talent', icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', active: true },
              { label: 'Reports', icon: 'M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z' }
            ].map((item) => (
              <li key={item.label}>
                <a 
                  href="#" 
                  className={`flex items-center px-8 transition-all group font-['Segoe_UI'] font-semibold text-[17px] leading-[55px] h-[55px] ${item.active ? 'bg-[#ff7301] text-white' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                  <svg className="w-5 h-5 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                  </svg>
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
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
        <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-10 py-2 sm:py-3">
          {/* Badge */}
          <div className="mb-2">
            <div className="w-[167.14px] h-[50px] bg-[#fbb03b] text-black flex items-center justify-center rounded-full text-sm font-bold shadow-md uppercase tracking-wider">
              HIRE TALENT
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-serif font-bold text-[28px] sm:text-[36px] lg:text-[48px] text-secondary mb-1 leading-tight max-w-[800px]">
            Hire Pre-Vetted Talent Without Notice Period
          </h1>
          <p className="font-['Segoe_UI'] font-normal text-gray-500 mb-4 max-w-2xl text-[16px] sm:text-[18px] leading-[1.4] sm:leading-[26px]">
            Get Immediate Access To Skilled Developers Ready To Join Your Team
          </p>

          <button className="w-[172.21px] h-[40px] bg-[#ff7301] text-black rounded-lg font-bold shadow-lg hover:bg-orange-600 transition-all mb-8 flex items-center justify-center shrink-0">
            Get Talent Now
          </button>

          {/* Filters */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
            {[ 
              { label: 'Hiring Type:', options: ['Dedicated', 'Project', 'Contract'] },
              { label: 'Work Mode:', options: ['Remote', 'Onsite', 'Hybrid'] }
            ].map((filter) => (
              <div key={filter.label} className="bg-white p-2 rounded-xl border border-gray-200 flex flex-col sm:flex-row items-start sm:items-center min-h-[45px] gap-2 sm:gap-0">
                <span className="font-['Segoe_UI'] font-semibold text-[18px] text-secondary sm:mr-6 whitespace-nowrap">
                  {filter.label}
                </span>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
                  {filter.options.map((opt) => (
                    <label key={opt} className="flex items-center cursor-pointer group">
                      <input type="radio" name={filter.label} className="w-5 h-5 accent-[#ff7301] mr-2" />
                      <span className="text-[14px] sm:text-[15px] text-gray-600 group-hover:text-primary transition-colors">{opt}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Form Sections */}
          <form className="space-y-4 sm:space-y-6">
            {/* Profile Section */}
            <div className="py-2">
              <h3 className="font-serif font-bold text-[27px] mb-4 flex items-center after:content-[''] after:flex-grow after:h-[1px] after:bg-gray-100 after:ml-6">
                Profile
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="w-full h-[55px] lg:max-w-[512.62px] px-6 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors shadow-sm placeholder-black" 
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                   className="w-full h-[55px] lg:max-w-[512.62px] px-6 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors shadow-sm placeholder-black" 
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                   className="w-full h-[55px] lg:max-w-[512.62px] px-6 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors shadow-sm placeholder-black" 
                />
                <input 
                  type="tel" 
                  placeholder="Phone" 
                   className="w-full h-[55px] lg:max-w-[512.62px] px-6 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors shadow-sm placeholder-black" 
                />
                <div className="md:col-span-2">
                  <input 
                    type="text" 
                    placeholder="Designation" 
                    className="w-full h-[55px] px-6 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors shadow-sm placeholder-black" 
                  />
                </div>
              </div>
            </div>

            {/* Company Profile Section */}
            <div className="py-2">
              <h3 className="font-serif font-bold text-[27px] mb-4 flex items-center after:content-[''] after:flex-grow after:h-[1px] after:bg-gray-100 after:ml-6">
                Company Profile
              </h3>
              <div className="flex flex-col gap-4">
                {[
                  "Company Name", "Job Title", "Technology", "Experience", "Duration", 
                  "Company Description", "Company Website", "Industry", "Address", "Total Employees",
                  "LinkedIn Company Page", "GST No.", "PAN No.", "Facebook Company Page", 
                  "Label For Video", "Youtube Link"
                ].map((ph) => (
                  <input 
                    key={ph}
                    type="text" 
                    placeholder={ph} 
                    className="w-full h-[55px] px-6 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-orange-500 transition-colors shadow-sm placeholder-black" 
                  />
                ))}
              </div>
            </div>

            {/* Preferences */}
            <div className="space-y-1.5 sm:space-y-2 py-2">
              <div className="space-y-1">
                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-1">
                  <p className="font-['Segoe_UI'] font-semibold text-[18px] text-gray-800 leading-tight flex-grow xl:max-w-[70%]">
                    Want To Receive Early Emails For Projects Available On Cloudfire?
                  </p>
                  <div className="flex space-x-3 shrink-0">
                    <button type="button" className="px-6 py-2 rounded-lg bg-orange-500 text-white text-sm font-bold shadow-md hover:bg-orange-600 transition-all">Yes</button>
                    <button type="button" className="px-6 py-2 rounded-lg bg-gray-200 text-gray-700 text-sm font-bold hover:bg-gray-300 transition-all">No</button>
                  </div>
                </div>

                <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-1">
                  <p className="font-['Segoe_UI'] font-semibold text-[18px] text-gray-800 leading-tight flex-grow xl:max-w-[70%]">
                    Want To Receive Early Emails Regarding New Jobs For Great Match?
                  </p>
                  <button type="button" className="px-8 py-2 rounded-lg bg-orange-100 text-[#ff7301] text-sm font-bold border border-[#ff7301]/20 w-fit shrink-0">Subscribed</button>
                </div>

                <p className="font-['Segoe_UI'] font-semibold text-[18px] text-black mt-1 leading-tight">
                  By Clicking On Update, You Agree To The Non-Disclosure Agreement Of Cloudfire
                </p>
              </div>

              <button 
                type="submit" 
                className="w-full sm:w-[200px] h-[55px] bg-[#ff7301] text-white rounded-lg font-bold shadow-xl shadow-orange-500/20 hover:bg-orange-600 transition-all text-lg mt-8"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  );
};

export default HireTalentDashboard;
