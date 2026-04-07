import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#f6f6f6] border-t border-gray-200 flex flex-col items-center text-center">
      <div className="w-full max-w-[1440px] px-6 lg:px-[80px] py-12 lg:py-[60px] pb-10">
        
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12 lg:gap-20">
          
          {/* Logo Section (Order 1 for all) */}
          <div className="flex flex-col items-center lg:w-[248px] order-1">
             <img src="/Assests/Cloudfire.png" className="w-[180px] sm:w-[220px] lg:w-[174px] h-auto object-contain mb-8 lg:mb-4" alt="Cloudfire" />
             
             {/* Desktop-only Address and Socials (Hidden on Mobile) */}
             <div className="hidden lg:flex flex-col items-center gap-8">
               <div className="w-[248px] h-[116px] bg-linear-to-b from-[#ffaf38] to-[#ff7e06] rounded-[20px] flex flex-col items-center justify-center p-4 shadow-md">
                 <img src="/Assests/address.png" className="w-8 h-8 mb-2" alt="address" />
                 <span className="font-['Segoe_UI',sans-serif] font-semibold text-[15px] leading-[18px] text-gray-900 text-center">
                                      Plot No.33, (225), Sohna, <br />
                    Gurugram, Haryana 122103
                 </span>
               </div>
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
                       className="w-[24px] h-[24px] transition-all filter grayscale hover:grayscale-0 opacity-80 hover:opacity-100" 
                       alt={social.name} 
                     />
                   </a>
                 ))}
               </div>
             </div>
          </div>

          {/* Links Grid (Order 2 on Mobile) */}
          <div className="order-2 grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 flex-1 text-left">
            <div>
              <h4 className="text-gray-900 font-serif font-bold text-[18px] lg:text-[16px] mb-6">E-Commerce</h4>
              <ul className="space-y-3 lg:space-y-1">
                {['Big-Commerce', 'Magento', 'OScommerce', 'Prestashop', 'Shopify', 'Ubercart', 'Wpcommerce', 'Opencart', 'Woocommerce'].map(link => (
                  <li key={link} className="font-['Segoe_UI',sans-serif] font-normal text-[14px] lg:text-[15px] text-gray-600 hover:text-primary transition-colors cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-serif font-bold text-[18px] lg:text-[16px] mb-6">Company</h4>
              <ul className="space-y-3 lg:space-y-1">
                <li className="font-['Segoe_UI',sans-serif] font-bold text-primary text-[14px] lg:text-[15px] cursor-pointer">Home</li>
                {['Our Tools', 'Services', 'Skills Network', 'Industries', 'AI Talent', 'Case Studies', 'Resources'].map(link => (
                  <li key={link} className="font-['Segoe_UI',sans-serif] font-normal text-[14px] lg:text-[15px] text-gray-600 hover:text-primary transition-colors cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-serif font-bold text-[18px] lg:text-[16px] mb-6">Services</h4>
              <ul className="space-y-3 lg:space-y-1">
                {['E-Learning', 'E-Commerce', 'Framework', 'CMS', 'Virtual Classroom'].map(link => (
                  <li key={link} className="font-['Segoe_UI',sans-serif] font-normal text-[14px] lg:text-[15px] text-gray-600 hover:text-primary transition-colors cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-serif font-bold text-[18px] lg:text-[16px] mb-6">E-Learning</h4>
              <ul className="space-y-3 lg:space-y-1">
                {['Moodle', 'Joomoodle', 'WPLMS', 'Mahara', 'Learndash', 'Learnpress', 'Totara', 'Opigno'].map(link => (
                  <li key={link} className="font-['Segoe_UI',sans-serif] font-normal text-[14px] lg:text-[15px] text-gray-600 hover:text-primary transition-colors cursor-pointer">{link}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Mobile-only Address and Socials (Order 3 & 4) */}
          <div className="lg:hidden order-3 flex flex-col items-center gap-10">
            <div className="w-full max-w-[320px] bg-linear-to-b from-[#ffaf38] to-[#ff7e06] rounded-[15px] p-8 shadow-xl shadow-orange-500/20">
               <div className="flex flex-col items-center">
                 <img src="/Assests/address.png" className="w-10 h-10 mb-4" alt="address" />
                 <span className="font-['Segoe_UI',sans-serif] font-bold text-[18px] leading-tight text-gray-900 text-center">
                                      Plot No.33, (225), Sohna, <br />
                    Gurugram, Haryana 122103
                 </span>
               </div>
            </div>
            
            <div className="flex gap-8 justify-center">
               {[
                 { name: 'fb', icon: 'fb.png' },
                 { name: 'insta', icon: 'insta.png' },
                 { name: 'yt', icon: 'youtube.png' },
                 { name: 'in', icon: 'linkedin.png' }
               ].map((social) => (
                 <a href="#" key={social.name} className="hover:scale-110 transition-transform">
                   <img 
                     src={`/Assests/${social.icon}`} 
                     className="w-[28px] h-[28px] grayscale" 
                     alt={social.name} 
                   />
                 </a>
               ))}
            </div>
          </div>
        </div>

        {/* Sub-footer Section */}
        <div className="mt-20 pt-8 border-t border-gray-200">
           <div className="flex flex-col items-center gap-8">
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 font-['Segoe_UI',sans-serif] text-[13px] font-bold text-gray-500 uppercase tracking-wide">
                <span className="hover:text-primary cursor-pointer">Contact Us</span>
                <span className="hover:text-primary cursor-pointer">Request a Demo</span>
                <span className="hover:text-primary cursor-pointer">Privacy Policy</span>
                <span className="hover:text-primary cursor-pointer">Terms of Service</span>
              </div>
              <p className="font-['Segoe_UI',sans-serif] font-normal text-[12px] text-gray-400">
                © 2026 CloudFire IT Services. &nbsp;All rights reserved.
              </p>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
