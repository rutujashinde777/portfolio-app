import React from 'react';
import { Download, FileText } from 'lucide-react';

const Resume = () => {
  return (
    <section id="resume" className="py-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-8 sm:p-12 space-y-6 max-w-3xl mx-auto">
        <FileText className="w-12 h-12 text-teal-400 mx-auto" />
        <h2 className="text-3xl font-bold">Resume & Curriculum Vitae</h2>
        <p className="text-slate-300 text-base max-w-lg mx-auto">
          View or download my resume outlining technical skillsets, project implementations, and educational background.
        </p>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); alert("Resume PDF download link clicked!"); }}
          className="inline-flex items-center gap-2 bg-teal-500 hover:bg-teal-400 text-slate-900 font-bold px-6 py-3 rounded-lg transition-all"
        >
          <Download className="w-5 h-5" /> Download Resume (PDF)
        </a>
      </div>
    </section>
  );
};

export default Resume;