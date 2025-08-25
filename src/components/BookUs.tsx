import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, MessageCircle, Send } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  menu: string;
  message: string;
}

interface BookUsProps {
  formData: FormData;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
}

const BookUs: React.FC<BookUsProps> = ({ formData, handleInputChange }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create message as a single string with line breaks
    let message = 'Hi! I would like to make a reservation:\n\n';
    message += `Name: ${formData.name}\n\n`;
    message += `Email: ${formData.email}\n\n`;
    message += `Phone: ${formData.phone}\n\n`;
    message += `Date: ${formData.date}\n\n`;
    message += `Time: ${formData.time}\n\n`;
    message += `Guests: ${formData.guests}\n\n`;
    message += `Menu Selection: ${formData.menu}`;
    
    // Only add special requests if it's not empty
    if (formData.message.trim()) {
      message += `\n\nSpecial Requests: ${formData.message}`;
    }
    
    // Use encodeURIComponent for WhatsApp compatibility
    const whatsappUrl = `https://wa.me/+923018153293?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleQuickBooking = () => {
    // Create message as a single string with line breaks
    let message = 'Hi! I would like to make a reservation at Marquee Skydine.\n\n';
    message += 'Please let me know your availability.';
    
    // Use encodeURIComponent for WhatsApp compatibility
    const whatsappUrl = `https://wa.me/+923018153293?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="book-us" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Book Your Experience</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reserve your table for an unforgettable dining experience at Skydine Shadihall
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Make a Reservation</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="+92 300 1234567"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Reservation Date *</label>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Time *</label>
                  <select
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select time</option>
                    <option value="lunch">Lunch</option>
                    <option value="dinner">Dinner</option>
                    <option value="custom">Custom</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Guests *</label>
                  <input
                    type="number"
                    name="guests"
                    required
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Number of guests"
                    min="1"
                    max="1000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Menu Selection *</label>
                  <select
                    name="menu"
                    required
                    value={formData.menu}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select Menu</option>
                    <option value="Mehndi Menu 1">Mehndi Menu 1</option>
                    <option value="Mehndi Menu 2">Mehndi Menu 2</option>
                    <option value="Barat Menu 1">Barat Menu 1</option>
                    <option value="Barat Menu 2">Barat Menu 2</option>
                    <option value="Walima Menu 1">Walima Menu 1</option>
                    <option value="Walima Menu 2">Walima Menu 2</option>
                    <option value="Special Menu">Special Menu</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Any special requests, dietary restrictions, or occasion details..."
                ></textarea>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <Send className="h-5 w-5" />
                <span>Send via WhatsApp</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Quick Booking Options */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Booking</h3>
              <p className="text-gray-600 mb-6">
                Need to book immediately? Contact us directly via WhatsApp for instant confirmation.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleQuickBooking}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Quick Book on WhatsApp</span>
              </motion.button>
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Booking Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Open 7 days a week</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Lunch: 12:00 PM - 3:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Dinner: 6:00 PM - 11:00 PM</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700">Capacity: Up to 1000 guests</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl shadow-xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Special Occasions</h3>
              <p className="mb-6">
                Planning something special? We offer customized experiences for birthdays, anniversaries, and corporate events.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                   // Create message as a single string with line breaks
                   let message = 'Hi! I would like to inquire about special event planning at Shadihall Skydine.\n\n';
                   message += 'Please provide details about your special event packages.';
                   
                   // Use encodeURIComponent for WhatsApp compatibility
                   const whatsappUrl = `https://wa.me/+923018153293?text=${encodeURIComponent(message)}`;
                  window.open(whatsappUrl, '_blank');
                }}
                className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg transition-colors backdrop-blur-sm"
              >
                Plan Special Event
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookUs;
