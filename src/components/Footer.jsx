import React from 'react';

const Footer = () => {
  return (
    <footer className="pt-20 pb-10 bg-[#f9f9f9] border-t border-gray-200 text-gray-700">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
            <img src="/Assests/Cloudfire.png" className="h-24 w-auto object-contain" alt="Cloudfire" />
            
            <div className="bg-[#fbb03b] p-6 rounded-2xl flex flex-col items-center gap-3 w-full max-w-[300px] shadow-[0_10px_30px_rgba(251,176,59,0.3)]">
              <div className="bg-transparent mb-1">
                <img src="/Assests/address.png" className="w-8 h-8" alt="address" />
              </div>
              <span className="text-[13px] font-bold text-gray-900 leading-tight">
                Plot No.33, (225), Sohna,<br />
                Gurugram, Haryana 122103
              </span>
            </div>
            
            <div className="flex gap-6 pt-2">
              {[
                { name: 'fb', icon: 'fb.png' },
                { name: 'insta', icon: 'insta.png' },
                { name: 'yt', icon: 'youtube.png' },
                { name: 'in', icon: 'linkedin.png' }
              ].map((social) => (
                <a href="#" key={social.name} className="hover:scale-110 transition-transform">
                  <img src={`/Assests/${social.icon}`} className="w-6 h-6 grayscale hover:grayscale-0 transition-all opacity-80 hover:opacity-100" alt={social.name} />
                </a>
              ))}
            </div>
          </div>
          
          {/* Links Columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-10 text-left">
            <div>
              <h4 className="text-gray-900 font-serif font-bold text-xl mb-10">E-Commerce</h4>
              <ul className="space-y-4">
                {['Big-Commerce', 'Magento', 'OScommerce', 'Prestashop', 'Shopify', 'Ubercart', 'Wpcommerce', 'Opencart', 'Woocommerce'].map(link => (
                  <li key={link} className="hover:text-primary transition-colors cursor-pointer text-[15px] font-normal">{link}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-serif font-bold text-xl mb-10">Company</h4>
              <ul className="space-y-4">
                <li className="text-primary font-bold cursor-pointer">Home</li>
                {['Our Tools', 'Services', 'Skills Network', 'Industries', 'AI Talent', 'Case Studies', 'Resources'].map(link => (
                  <li 
                    key={link} 
                    className={`hover:text-primary transition-colors cursor-pointer text-[15px] font-normal ${link === 'Skills Network' ? 'italic' : ''}`}
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-serif font-bold text-xl mb-10">Services</h4>
              <ul className="space-y-4">
                {['E-Learning', 'E-Commerce', 'Framework', 'CMS', 'Virtual Classroom'].map(link => (
                  <li key={link} className="hover:text-primary transition-colors cursor-pointer text-[15px] font-normal">{link}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-gray-900 font-serif font-bold text-xl mb-10">E-Learning</h4>
              <ul className="space-y-4">
                {['Moodle', 'Joomoodle', 'WPLMS', 'Mahara', 'Learndash', 'Learnpress', 'Totara', 'Opigno'].map(link => (
                  <li key={link} className="hover:text-primary transition-colors cursor-pointer text-[15px] font-normal">{link}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="pt-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[13px] font-medium text-gray-500">
            © 2026 CloudFire IT Services. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-[13px] font-medium text-gray-600">
            <span className="hover:text-primary transition-colors cursor-pointer">Contact Us</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Request a Demo</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Privacy Policy</span>
            <span className="hover:text-primary transition-colors cursor-pointer">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
