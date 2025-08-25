import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, MessageCircle, Instagram, Facebook, Twitter } from 'lucide-react';

const Contact = () => {
  const handlePhoneClick = (phoneNumber: string) => {
    // Create message as a single string with line breaks
    let message = 'Hi! I found your number on the Marquee Skydine website.\n\n';
    message += 'I would like to get more information.';
    
    // Use encodeURIComponent for WhatsApp compatibility
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Swat Skydine location
  const mapsLink = 'https://maps.app.goo.gl/QYWxfsx9Ay7njdhJ9';
  // Embed-friendly URL (using query text; embed for maps.app shortlinks is unreliable)
  const embedLink = `https://www.google.com/maps?output=embed&q=${encodeURIComponent('Swat Skydine')}`;

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Address',
      details: ['Swat Skydine, Fizagat, Swat'],
      action: () => window.open(mapsLink, '_blank'),
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: ['+92 301 8153293', '+92 343 0668843'],
      action: () => handlePhoneClick('+923018153293'),
      isWhatsApp: true,
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['skydine@gmail.com', 'skydine.com'],
      action: () => window.open('mailto:info@marqueeskydine.com', '_blank'),
    },
    {
      icon: Clock,
      title: 'Opening Hours',
      details: ['Mon - Sun: 12:00 PM - 11:00 PM', 'Kitchen closes at 10:30 PM'],
    },
  ];

  const socialLinks = [
    { icon: Instagram, url: 'https://instagram.com', name: 'Instagram' },
    { icon: Facebook, url: 'https://facebook.com', name: 'Facebook' },
    { icon: Twitter, url: 'https://twitter.com', name: 'Twitter' },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get in touch with us for reservations, inquiries, or just to say hello
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <motion.div
                          key={detailIndex}
                          whileHover={info.action ? { scale: 1.05 } : {}}
                          className={`text-gray-300 ${
                            info.action ? 'cursor-pointer hover:text-white transition-colors' : ''
                          } ${info.isWhatsApp ? 'flex items-center space-x-2' : ''}`}
                          onClick={info.action}
                        >
                          {info.isWhatsApp && detailIndex === 0 && (
                            <MessageCircle className="h-4 w-4 text-green-500" />
                          )}
                          <span>{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Map and Social Links */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Find Us</h3>
              <div className="aspect-video rounded-lg overflow-hidden mb-6">
                <iframe
                  title="Marquee Skydine Location"
                  src={embedLink}
                  width="100%"
                  height="100%"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full border-0"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open(mapsLink, '_blank')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center space-x-2"
              >
                <MapPin className="h-5 w-5" />
                <span>Open in Maps</span>
              </motion.button>
              <p className="text-gray-300 mt-6">
                Located in the heart of downtown with stunning city views. Valet parking available.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gray-800 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => window.open(social.url, '_blank')}
                      className="bg-gray-700 hover:bg-blue-600 p-3 rounded-lg transition-colors"
                    >
                      <Icon className="h-6 w-6" />
                    </motion.button>
                  );
                })}
              </div>
              <p className="text-gray-300 mt-4">
                Stay updated with our latest events, menu additions, and special offers.
              </p>
            </motion.div>

            {/* WhatsApp CTA */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
              <p className="mb-6">
                Need immediate assistance? Chat with us directly on WhatsApp for the fastest response.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handlePhoneClick('+923018153293')}
                className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-colors backdrop-blur-sm flex items-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Chat on WhatsApp</span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
