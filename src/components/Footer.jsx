import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 bg-slate-900 border-t border-slate-800 text-center text-slate-500 text-sm">
      <p>© {new Date().getFullYear()} Rutuja Shinde. Built with React & Tailwind CSS.</p>
    </footer>
  );
};

export default Footer;