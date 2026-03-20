"use client";

import { useState } from "react";
import FadeUpWrapper from "./FadeUpWrapper";

export default function Footer() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    projectType: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", phone: "", projectType: "" });
  };

  return (
    <footer id="contact" className="bg-slate-900 pt-12 sm:pt-20 pb-6 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-20">
          {/* Left Column — Contact Info */}
          <FadeUpWrapper>
            <div id="about">
              <span className="text-orange-500 text-sm font-bold uppercase tracking-widest">
                Get In Touch
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-black text-white uppercase tracking-tight">
                Let&apos;s Build Together
              </h2>
              <div className="mt-4 w-16 h-1 bg-orange-500" />

              <p className="mt-8 text-slate-400 leading-relaxed max-w-md">
                Sai Shraddha Constructions has been serving the community for over 20
                years. We take pride in delivering projects on time and on budget,
                with an unwavering commitment to quality and safety. Your vision is
                our blueprint.
              </p>

              {/* Contact Links */}
              <div className="mt-10 space-y-5">
                <a
                  href="tel:+15551234567"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-sm flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                    <svg className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Phone</p>
                    <p className="text-base sm:text-lg text-white font-bold group-hover:text-orange-500 transition-colors">(555) 123-4567</p>
                  </div>
                </a>

                <a
                  href="mailto:info@saishraddhaconstructions.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-slate-800 rounded-sm flex items-center justify-center group-hover:bg-orange-500 transition-colors duration-300">
                    <svg className="w-5 h-5 text-orange-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Email</p>
                    <p className="text-sm sm:text-lg text-white font-bold group-hover:text-orange-500 transition-colors break-all sm:break-normal">info@saishraddhaconstructions.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-slate-800 rounded-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold">Address</p>
                    <p className="text-base sm:text-lg text-white font-bold">1234 Builder&apos;s Way, Suite 100</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeUpWrapper>

          {/* Right Column — Quote Form */}
          <FadeUpWrapper delay={0.2}>
            <div>
              <div className="bg-slate-800 rounded-sm p-5 sm:p-8 md:p-10 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-extrabold text-white uppercase tracking-tight">
                  Request a Quote
                </h3>
                <p className="mt-2 text-slate-400 text-sm">
                  Fill out the form below and we&apos;ll get back to you within 24 hours.
                </p>
                <div className="mt-3 w-12 h-1 bg-orange-500" />

                <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="John Smith"
                      className="w-full bg-slate-700 text-white text-sm font-medium px-4 py-3 rounded-sm border-0 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-slate-400 transition-shadow"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="(555) 000-0000"
                      className="w-full bg-slate-700 text-white text-sm font-medium px-4 py-3 rounded-sm border-0 focus:outline-none focus:ring-2 focus:ring-orange-500 placeholder:text-slate-400 transition-shadow"
                    />
                  </div>

                  <div>
                    <label htmlFor="project-type" className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                      Project Type
                    </label>
                    <select
                      id="project-type"
                      required
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full bg-slate-700 text-white text-sm font-medium px-4 py-3 rounded-sm border-0 focus:outline-none focus:ring-2 focus:ring-orange-500 transition-shadow appearance-none"
                    >
                      <option value="" disabled>Select a project type</option>
                      <option value="residential">Residential Build</option>
                      <option value="commercial">Commercial Project</option>
                      <option value="remodeling">Remodeling</option>
                      <option value="concrete">Concrete & Foundation</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold uppercase tracking-wider px-6 py-4 rounded-sm transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 mt-2"
                  >
                    {submitted ? (
                      <>
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Request Received!
                      </>
                    ) : (
                      <>
                        Submit Request
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </FadeUpWrapper>
        </div>

        {/* Bottom Bar */}
        <FadeUpWrapper delay={0.3}>
          <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-orange-500 rounded-sm flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
                </svg>
              </div>
              <span className="text-sm font-extrabold text-white uppercase tracking-tight">
                Sai<span className="text-orange-500"> Shraddha</span>
              </span>
            </div>
            <p className="text-slate-500 text-xs">
              &copy; {new Date().getFullYear()} Sai Shraddha Constructions. All rights reserved.
            </p>
          </div>
        </FadeUpWrapper>
      </div>
    </footer>
  );
}
