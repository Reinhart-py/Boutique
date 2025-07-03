
import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      name: 'Pinterest',
      url: 'https://www.pinterest.com/davindraboutique007',
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.236 2.636 7.855 6.356 9.312-.087-.791-.166-2.005.035-2.868.182-.78 1.172-4.97 1.172-4.97s-.299-.6-.299-1.486c0-1.39.806-2.428 1.81-2.428.853 0 1.264.641 1.264 1.408 0 .858-.546 2.14-.828 3.33-.236.995.499 1.807 1.481 1.807 1.778 0 3.144-1.874 3.144-4.58 0-2.393-1.72-4.068-4.177-4.068-2.845 0-4.515 2.135-4.515 4.34 0 .859.331 1.781.745 2.281a.3.3 0 01.069.288l-.278 1.133c-.044.183-.145.223-.334.134-1.249-.581-2.03-2.407-2.03-3.874 0-3.154 2.292-6.052 6.608-6.052 3.469 0 6.165 2.473 6.165 5.776 0 3.447-2.173 6.22-5.19 6.22-1.013 0-1.965-.525-2.291-1.148l-.623 2.378c-.226.869-.835 1.958-1.244 2.621.937.29 1.931.446 2.962.446 5.523 0 10-4.477 10-10S17.523 2 12 2z"/>
        </svg>
      )
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/tailoredbyjeet',
      icon: <Instagram className="w-5 h-5" />
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/davindraboutique007',
      icon: <Twitter className="w-5 h-5" />
    }
  ];

  return (
    <footer className="bg-black/90 border-t border-gold-500/20 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <motion.div
              className="text-3xl font-playfair font-bold text-gradient mb-4"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Jeet Davindra Boutique
            </motion.div>
            <p className="text-muted-foreground leading-relaxed">
              Where timeless elegance meets contemporary fashion. Crafting stories through premium pieces.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h3 className="text-xl font-playfair font-semibold text-gold-400 mb-6">
              Visit Our Store
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <p className="leading-relaxed">
                Bhikhiwind, opposite sewa Kendra,<br />
                Khem Karn road, district Tarn Taran<br />
                Pin code: 143303
              </p>
              <p>
                <a 
                  href="mailto:JeetDavindraBoutique@gmail.com" 
                  className="text-gold-400 hover:text-gold-300 transition-colors"
                >
                  JeetDavindraBoutique@gmail.com
                </a>
              </p>
            </div>
          </div>

          {/* Social Media */}
          <div className="text-center md:text-right">
            <h3 className="text-xl font-playfair font-semibold text-gold-400 mb-6">
              Connect With Us
            </h3>
            <div className="flex justify-center md:justify-end space-x-4 mb-8">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  whileHover={{ 
                    y: -5, 
                    scale: 1.1,
                    boxShadow: "0 10px 25px rgba(245, 158, 11, 0.3)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Developer Credit & Copyright */}
        <div className="border-t border-gold-500/20 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © 2024 Jeet Davindra Boutique. All rights reserved.
            </div>
            
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="text-muted-foreground text-sm">Created with ❤️ by</span>
              <a
                href="https://reinlabs.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-gold-400 hover:text-gold-300 transition-colors"
              >
                <img 
                  src="/rein-uploads/c6f7c311-00d7-4c9a-a539-d5199a99d0da.png" 
                  alt="Reinhart Logo" 
                  className="w-6 h-6 rounded-full"
                />
                <span className="font-semibold">Reinhart / Kiri</span>
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
