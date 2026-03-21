import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#f6f6f6] border-t border-gray-200 flex justify-center text-left">
      {/* Footer Container */}
      <div className="w-full max-w-[1440px] h-auto pt-[60px] px-6 lg:px-[80px] pb-[30px] flex flex-col justify-between">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-4 flex flex-col items-center lg:items-start w-full lg:w-[248px]">
            {/* Logo */}
            <img src="/Assests/Cloudfire.png" className="w-[174px] h-[131px] object-contain mb-4" alt="Cloudfire" />
            
            {/* Orange Box */}
            <div className="w-[248px] h-[116px] bg-linear-to-b from-[#ffaf38] to-[#ff7e06] rounded-[15px] flex flex-col items-center justify-center p-4 shadow-md mb-8">
              <img src="/Assests/address.png" className="w-8 h-8 mb-2" alt="address" />
              {/* Address Text */}
              <span className="font-['Segoe_UI',sans-serif] font-semibold text-[15px] leading-[18px] text-gray-900 text-center">
                Plot No.33, (225), Sohna,<br />
                Gurugram, Haryana 122103
              </span>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-6 justify-center">
              {[
                { name: 'fb', icon: 'fb.png' },
                { name: 'insta', icon: 'insta.png' },
                { name: 'yt', icon: 'youtube.png' },
                { name: 'in', icon: 'linkedin.png' }
              ].map((social) => (
                <a href="#" key={social.name} className="hover:scale-110 transition-transform">
                  <img 
                    src={`/Assests/${social.icon}`} 
                    className="w-[22px] h-[22px] opacity-90 hover:opacity-100 transition-all" 
                    style={{ filter: "invert(64%) sepia(85%) saturate(3025%) hue-rotate(345deg) brightness(101%) contrast(97%)" }} 
                    alt={social.name} 
                  />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Columns */}
          <div className="col-span-1 lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4 mt-8 lg:mt-0 text-center sm:text-left">
            <div>
              {/* Heading */}
              <h4 className="text-gray-900 font-serif font-bold text-[16px] leading-[14px] mb-6">E-Commerce</h4>
              <ul className="space-y-2 lg:space-y-0">
                {['Big-Commerce', 'Magento', 'OScommerce', 'Prestashop', 'Shopify', 'Ubercart', 'Wpcommerce', 'Opencart', 'Woocommerce'].map(link => (
                  <li key={link} className="font-['Segoe_UI',sans-serif] font-normal text-[15px] lg:leading-[28px] text-gray-600 hover:text-[#ff7301] transition-colors cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-serif font-bold text-[16px] leading-[14px] mb-6">Company</h4>
              <ul className="space-y-2 lg:space-y-0">
                <li className="font-['Segoe_UI',sans-serif] font-bold text-[#ff7301] text-[15px] lg:leading-[28px] cursor-pointer">Home</li>
                {['Our Tools', 'Services', 'Skills Network', 'Industries', 'AI Talent', 'Case Studies', 'Resources'].map(link => (
                  <li 
                    key={link} 
                    className={`font-['Segoe_UI',sans-serif] font-normal text-[15px] lg:leading-[28px] text-gray-600 hover:text-[#ff7301] transition-colors cursor-pointer ${link === 'Skills Network' ? 'italic' : ''}`}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-serif font-bold text-[16px] leading-[14px] mb-6">Services</h4>
              <ul className="space-y-2 lg:space-y-0">
                {['E-Learning', 'E-Commerce', 'Framework', 'CMS', 'Virtual Classroom'].map(link => (
                  <li key={link} className="font-['Segoe_UI',sans-serif] font-normal text-[15px] lg:leading-[28px] text-gray-600 hover:text-[#ff7301] transition-colors cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-serif font-bold text-[16px] leading-[14px] mb-6">E-Learning</h4>
              <ul className="space-y-2 lg:space-y-0">
                {['Moodle', 'Joomoodle', 'WPLMS', 'Mahara', 'Learndash', 'Learnpress', 'Totara', 'Opigno'].map(link => (
                  <li key={link} className="font-['Segoe_UI',sans-serif] font-normal text-[15px] lg:leading-[28px] text-gray-600 hover:text-[#ff7301] transition-colors cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-8 lg:pt-5 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center mt-12 gap-4 md:gap-0">
          <p className="font-['Segoe_UI',sans-serif] font-normal text-[12px] text-gray-500 text-center md:text-left">
            © 2026 CloudFire IT Services, &nbsp;All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 font-['Segoe_UI',sans-serif] text-[13px] font-medium text-gray-600">
            <span className="hover:text-[#ff7301] transition-colors cursor-pointer">Contact Us</span>
            <span className="hover:text-[#ff7301] transition-colors cursor-pointer">Request a Demo</span>
            <span className="hover:text-[#ff7301] transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-[#ff7301] transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
