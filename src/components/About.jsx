import React from 'react';
import { GraduationCap, Code, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-800/40 border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          About <span className="text-teal-400">Me</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center space-y-4">
            <GraduationCap className="w-10 h-10 text-teal-400 mx-auto" />
            <h3 className="text-xl font-semibold">Education</h3>
            <p className="text-slate-400 text-sm">
              Bachelor of Computer Applications (BCA) graduate pursuing specialization in Java Full Stack Development.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center space-y-4">
            <Code className="w-10 h-10 text-teal-400 mx-auto" />
            <h3 className="text-xl font-semibold">Tech Focus</h3>
            <p className="text-slate-400 text-sm">
              Building dynamic single-page applications with React, managing state, routing, and backend integration.
            </p>
          </div>

          <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-center space-y-4">
            <Award className="w-10 h-10 text-teal-400 mx-auto" />
            <h3 className="text-xl font-semibold">Performance & Clean Code</h3>
            <p className="text-slate-400 text-sm">
              Focusing on responsive design across all devices, lazy loading, optimized build delivery, and standard UI/UX patterns.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;