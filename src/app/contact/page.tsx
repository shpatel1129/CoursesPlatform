"use client";

import React, { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MessageSquare, ShieldCheck, CheckCircle2, Send, Clock, Sparkles } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name && email && message) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col">
      <Header />

      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>We're Here For You</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
              Contact Student Support
            </h1>
            <p className="text-base sm:text-lg text-slate-400">
              Have a question about course access, curriculum details, or enterprise team licensing? Our dedicated support team responds in less than 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-3 mb-3 text-indigo-400">
                  <Mail className="w-6 h-6" />
                  <h3 className="text-base font-bold text-white">Email Us Directly</h3>
                </div>
                <p className="text-xs text-slate-400 mb-2">For support, enrollment help, or refunds:</p>
                <a href="mailto:support@apexskills.com" className="text-sm font-semibold text-indigo-400 hover:text-indigo-300">
                  support@apexskills.com
                </a>
              </div>

              <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-3 mb-3 text-emerald-400">
                  <Clock className="w-6 h-6" />
                  <h3 className="text-base font-bold text-white">Support Hours</h3>
                </div>
                <p className="text-xs text-slate-400">
                  Monday – Friday: 9:00 AM – 8:00 PM EST<br />
                  Weekends: 10:00 AM – 4:00 PM EST
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-slate-900/80 border border-slate-800">
                <div className="flex items-center gap-3 mb-3 text-violet-400">
                  <ShieldCheck className="w-6 h-6" />
                  <h3 className="text-base font-bold text-white">30-Day Guarantee Inquiries</h3>
                </div>
                <p className="text-xs text-slate-400">
                  All refund requests submitted within 30 days of purchase are processed promptly with zero friction.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Dispatched!</h3>
                    <p className="text-sm text-slate-300 max-w-sm mx-auto mb-6">
                      Thank you for contacting us. A member of our support team will respond to {email} shortly.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setName("");
                        setEmail("");
                        setSubject("");
                        setMessage("");
                      }}
                      className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <h3 className="text-xl font-bold text-white mb-2">Send us a message</h3>
                    
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        placeholder="Course access, refund, or general question"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-1.5">
                        Message *
                      </label>
                      <textarea
                        rows={4}
                        required
                        placeholder="How can we help you?"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-2xl text-center text-sm font-bold text-white bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 shadow-xl shadow-indigo-600/30 transition-all flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Send Support Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
