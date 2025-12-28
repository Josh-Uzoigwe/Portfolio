import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="scroll-mt-24 py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">Let's Build Together</h2>
          <p className="text-slate-400">
            Open for freelance opportunities, full-time roles, or Web3 collaborations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info Card */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Contact Information</h3>
              <div className="space-y-6">
                <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                  <div className="p-3 bg-slate-800 rounded-lg">
                    <Mail className="w-5 h-5 text-web3-400" />
                  </div>
                  <span>{PERSONAL_INFO.email}</span>
                </a>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                  <div className="p-3 bg-slate-800 rounded-lg">
                    <Github className="w-5 h-5 text-web3-400" />
                  </div>
                  <span>github.com/Josh-Uzoigwe</span>
                </a>
                <a href={PERSONAL_INFO.linkedin} className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors">
                  <div className="p-3 bg-slate-800 rounded-lg">
                    <Linkedin className="w-5 h-5 text-web3-400" />
                  </div>
                  <span>LinkedIn Profile</span>
                </a>
              </div>
            </div>
          </div>

          {/* Form */}
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-web3-500 focus:ring-1 focus:ring-web3-500 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-web3-500 focus:ring-1 focus:ring-web3-500 transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-400 mb-1">Message</label>
              <textarea 
                id="message" 
                rows={4}
                className="w-full bg-slate-900 border border-slate-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-web3-500 focus:ring-1 focus:ring-web3-500 transition-all"
                placeholder="Tell me about your project..."
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-white text-slate-900 font-bold py-3 rounded-lg hover:bg-slate-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
