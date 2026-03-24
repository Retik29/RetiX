import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GridItem from './GridItem';
import { Mail, MapPin, Globe, X, Send } from 'lucide-react';
import { personalData } from '../../data/portfolioData';

const ContactSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [idea, setIdea] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [tileEmail, setTileEmail] = useState('');

  const handleTileSubmit = (e) => {
    e.preventDefault();
    if(tileEmail) {
      setEmail(tileEmail);
      setIsModalOpen(true);
    }
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if(email && idea) {
      window.location.href = `mailto:ritiknyadavofficial614@gmail.com?subject=New Idea from ${email}&body=${encodeURIComponent(idea)}`;
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setIsModalOpen(false);
        setEmail('');
        setIdea('');
        setTileEmail('');
      }, 3000);
    }
  };

  return (
    <>
      <GridItem className="col-span-1 sm:col-span-2 md:col-span-2 row-span-1 flex flex-col justify-between p-0 overflow-hidden">
        <div className="p-6 pb-4 flex justify-between items-start">
          <h2 className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#666]">GET.IN.TOUCH</h2>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[var(--color-border)] border-t border-[var(--color-border)]">
          <div className="bg-[var(--color-bg-base)] p-6 flex flex-col justify-center gap-4">
              <div className="flex items-center gap-4 text-xs text-[var(--color-text-secondary)]">
                 <MapPin className="w-3 h-3 text-[var(--color-text-muted)]" />
                 <span className="font-mono tracking-wide">West Bengal, India</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-[var(--color-text-secondary)]">
                 <Mail className="w-3 h-3 text-[var(--color-text-muted)]" />
                 <span className="font-mono tracking-wide">{personalData.email}</span>
              </div>
              <div className="flex items-center gap-4 text-xs text-[var(--color-text-secondary)]">
                 <Globe className="w-3 h-3 text-[var(--color-text-muted)]" />
                 <span className="font-mono tracking-wide">retik.dev</span>
              </div>
          </div>

          <div 
            className="bg-[var(--color-bg-base)] p-6 flex flex-col justify-center group/comms cursor-pointer relative overflow-hidden"
            onClick={() => setIsModalOpen(true)}
          >
             <h3 className="text-xs font-mono text-[var(--color-text-primary)] uppercase tracking-widest mb-2 group-hover/comms:text-[#0A84FF] transition-colors">Initiate Comms</h3>
             <p className="text-[9px] text-[var(--color-text-muted)] font-mono leading-relaxed mb-4 uppercase tracking-widest max-w-[200px]">
               Join the network for deployment updates and code drops.
             </p>
             
             <form className="flex w-full relative z-10" onSubmit={handleTileSubmit} onClick={e => e.stopPropagation()}>
                <input 
                  type="email" 
                  placeholder="EMAIL@ADDRESS.COM" 
                  value={tileEmail}
                  onChange={(e) => setTileEmail(e.target.value)}
                  className="w-full bg-[var(--color-text-primary)]/5 border border-[var(--color-border)] text-[9px] px-3 py-2.5 text-[var(--color-text-primary)] font-mono focus:border-[#0A84FF]/50 focus:outline-none placeholder:text-[#444] rounded-none border-r-0 tracking-widest transition-colors" 
                />
                <button 
                  type="submit" 
                  className="bg-[#0A84FF] text-white px-4 text-[9px] font-mono tracking-widest font-bold uppercase hover:bg-blue-600 transition-colors cursor-pointer rounded-none flex items-center justify-center min-w-[80px]"
                >
                  JOIN
                </button>
             </form>
          </div>
        </div>
      </GridItem>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="bg-zinc-950 border border-white/10 w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden flex flex-col relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10 bg-black/40 shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-[#0A84FF]/20 rounded-lg text-[#0A84FF]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-lg tracking-tight">Initiate Comms</h3>
                    <p className="text-[10px] font-mono text-[#666] uppercase tracking-widest mt-0.5">Secure Transmission</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8">
                <form className="flex flex-col gap-4" onSubmit={handleModalSubmit}>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10px] font-mono text-[#888] tracking-widest uppercase">Target Address</label>
                    <input 
                      type="text" 
                      disabled
                      value="ritiknyadavofficial614@gmail.com"
                      className="w-full bg-zinc-900 border border-white/10 text-[10px] px-4 py-3 text-white/50 font-mono rounded tracking-widest cursor-not-allowed" 
                    />
                  </div>
                  
                  <div className="flex flex-col gap-1.5 mt-2">
                    <label className="text-[10px] font-mono text-[#0A84FF] tracking-widest uppercase">Your Alias <span className="text-white/30">(Email)</span></label>
                    <input 
                      type="email" 
                      required
                      placeholder="ENTER YOUR EMAIL..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 text-[11px] px-4 py-3 text-white font-mono focus:border-[#0A84FF]/50 focus:bg-[#0A84FF]/5 focus:outline-none placeholder:text-[#444] rounded tracking-widest transition-all" 
                    />
                  </div>

                  <div className="flex flex-col gap-1.5 mt-2">
                    <label className="text-[10px] font-mono text-[#0A84FF] tracking-widest uppercase">Transmission Data <span className="text-white/30">(Idea)</span></label>
                    <textarea 
                      placeholder="OUTLINE YOUR IDEA OR PROPOSAL..." 
                      required
                      value={idea}
                      onChange={(e) => setIdea(e.target.value)}
                      className="w-full bg-white/5 border border-white/10 text-[11px] px-4 py-3 text-white font-mono focus:border-[#0A84FF]/50 focus:bg-[#0A84FF]/5 focus:outline-none placeholder:text-[#444] rounded tracking-widest resize-none h-[120px] transition-all" 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="mt-4 bg-[#0A84FF] text-white px-6 py-4 text-[11px] font-mono tracking-widest font-bold uppercase hover:bg-blue-600 transition-colors cursor-pointer rounded flex items-center justify-center gap-2 w-full"
                  >
                    {submitted ? 'TRANSMITTING...' : 'PITCH'}
                    {!submitted && <Send className="w-4 h-4 ml-1" />}
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactSection;
