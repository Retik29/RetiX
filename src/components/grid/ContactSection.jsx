import React, { useState } from 'react';
import GridItem from './GridItem';
import { Mail, MapPin, Globe } from 'lucide-react';
import { personalData } from '../../data/portfolioData';

const ContactSection = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setEmail('');
    }
  };

  return (
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

        <div className="bg-[var(--color-bg-base)] p-6 flex flex-col justify-center">
           <h3 className="text-xs font-mono text-[var(--color-text-primary)] uppercase tracking-widest mb-2">Initiate Comms</h3>
           <p className="text-[9px] text-[var(--color-text-muted)] font-mono leading-relaxed mb-4 uppercase tracking-widest max-w-[200px]">
             Join the network for deployment updates and code drops.
           </p>
           
           <form className="flex w-full" onSubmit={handleSubmit}>
              <input 
                type="email" 
                placeholder="EMAIL@ADDRESS.COM" 
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[var(--color-text-primary)]/5 border border-[var(--color-border)] text-[9px] px-3 py-2.5 text-[var(--color-text-primary)] font-mono focus:border-[var(--color-text-primary)] focus:outline-none placeholder:text-[#444] rounded-none border-r-0 tracking-widest" 
              />
              <button 
                type="submit" 
                className="bg-[var(--color-accent)] text-[var(--color-bg-base)] px-4 text-[9px] font-mono tracking-widest font-bold uppercase hover:opacity-80 transition-opacity cursor-pointer rounded-none flex items-center justify-center min-w-[80px]"
              >
                {submitted ? 'SENT' : 'JOIN'}
              </button>
           </form>
           {submitted && (
             <p className="text-[8px] text-[#009A8D] font-mono mt-2 uppercase tracking-widest">Address logged.</p>
           )}
        </div>
      </div>
    </GridItem>
  );
};

export default ContactSection;
