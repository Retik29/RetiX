import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GridItem from './GridItem';
import { Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isFocused, setIsFocused] = useState('');
  const [isHovered, setIsHovered] = useState(false);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <GridItem 
      className={`group/contact transition-all duration-300 ${isHovered || isFocused ? 'col-span-1 md:col-span-2 row-span-2' : 'col-span-1 md:col-span-1 row-span-1'}`}
      onClick={() => setIsHovered(!isHovered)}
    >
      <div className="flex items-center gap-3 mb-6 relative z-10">
        <Mail className="w-6 h-6 text-[#009A8D]" />
        <h3 className="text-3xl font-bold tracking-tight">Let's Work Together</h3>
      </div>
      
      <p className="text-gray-400 mb-6 relative z-10">
        I am always open to discussing product design work or partnership opportunities.
      </p>

      <form className="flex flex-col gap-4 relative z-10 h-full" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-2 gap-4">
          <motion.div>
            <input 
              type="text" 
              name="name" 
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              onFocus={() => setIsFocused('name')}
              onBlur={() => setIsFocused('')}
              className={`w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white font-medium 
                focus:outline-none focus:border-[#009A8D] focus:ring-1 focus:ring-[#009A8D]/50 transition-all duration-300
                ${isFocused === 'name' ? 'shadow-sm' : ''}`}
            />
          </motion.div>
          <motion.div>
            <input 
              type="email" 
              name="email" 
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              onFocus={() => setIsFocused('email')}
              onBlur={() => setIsFocused('')}
              className={`w-full bg-white/5 border border-white/10 p-3 rounded-lg text-white font-medium 
                focus:outline-none focus:border-[#009A8D] focus:ring-1 focus:ring-[#009A8D]/50 transition-all duration-300
                ${isFocused === 'email' ? 'shadow-sm' : ''}`}
            />
          </motion.div>
        </div>
        
        <motion.textarea 
          name="message" 
          placeholder="Your Message..."
          rows="4"
          value={formData.message}
          onChange={handleChange}
          onFocus={() => setIsFocused('message')}
          onBlur={() => setIsFocused('')}
          className={`w-full flex-grow bg-white/5 border border-white/10 p-3 rounded-lg text-white font-medium resize-none
            focus:outline-none focus:border-[#009A8D] focus:ring-1 focus:ring-[#009A8D]/50 transition-all duration-300 no-scrollbar
            ${isFocused === 'message' ? 'shadow-sm' : ''}`}
        />

        <motion.button 
          type="submit"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full mt-auto bg-[#009A8D] text-white font-bold p-4 rounded-lg flex items-center justify-center gap-2 hover:bg-[#007f74] hover:shadow-sm transition-all overflow-hidden relative group/btn"
        >
          <span className="relative z-10 flex items-center gap-2">Send Message <Send className="w-5 h-5" /></span>
          <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity pointer-events-none mix-blend-overlay" />
        </motion.button>
      </form>
      
      {/* Background glow on focus */}
      <motion.div 
        className="absolute bottom-0 right-0 w-64 h-64 bg-[#009A8D]/10 blur-3xl rounded-full pointer-events-none"
        animate={{ scale: isFocused ? 1.5 : 1, opacity: isFocused ? 0.8 : 0.3 }}
        transition={{ duration: 0.5 }}
      />
    </GridItem>
  );
};

export default ContactSection;
