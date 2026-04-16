import React from 'react';
import DashboardLayout from '../components/DashboardLayout';

const HireTalentDashboard = () => {
  return (
    <DashboardLayout>
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
    </DashboardLayout>
  );
};

export default HireTalentDashboard;
