import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Heart, MessageCircle } from 'lucide-react';

const Footer = () => {
  const handleWhatsAppClick = () => {
    // Create message as a single string with line breaks
    let message = 'Hi! I found your contact on the Marquee Skydine website.\n\n';
    message += 'I would like to get more information about your services.';
    
    // Use encodeURIComponent for WhatsApp compatibility
    const whatsappUrl = `https://wa.me/+923018153293?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-2 mb-4">
              <MapPin className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold">Shadihall Skydine</span>
            </div>
            <p className="text-gray-300 mb-4">
              Experience culinary excellence above the clouds. Where every meal is a celebration and every moment is memorable.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleWhatsAppClick}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors flex items-center space-x-2"
            >
              <MessageCircle className="h-4 w-4" />
              <span>WhatsApp Us</span>
            </motion.button>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'Gallery', 'Menus', 'Book Us', 'Contact'].map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => document.getElementById(link.toLowerCase().replace(' ', '-'))?.scrollIntoView({ behavior: 'smooth' })}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <p>Skyline Fizzagat Swat</p>
              <p>Swat City</p>
              <motion.p
                whileHover={{ scale: 1.05 }}
                className="cursor-pointer hover:text-white transition-colors flex items-center space-x-2"
                onClick={handleWhatsAppClick}
              >
                <MessageCircle className="h-4 w-4 text-green-500" />
                <span>+923018153293</span>
              </motion.p>
              <p>info@marqueeskydine.com</p>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-300 flex items-center justify-center space-x-1">
            <span> 2025 Marquee Skydine. Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-current" />
            <span>for great dining experiences.</span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
