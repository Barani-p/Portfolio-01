import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, MapPin, Send, CheckCircle, AlertCircle, Loader, MessageSquareCode } from 'lucide-react';
import { personalInfo } from '../data';
import BlurText from './BlurText';

// ── EmailJS config ─────────────────────────────────────────────────────────────
const EMAILJS_SERVICE_ID  = 'service_wyla0in';
const EMAILJS_TEMPLATE_ID = 'template_r7ykk8i';
const EMAILJS_PUBLIC_KEY  = 'VCr-g5xayKTbLri-3';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  // Initialise EmailJS once on mount
  useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const validateForm = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email';
    }

    if (!formData.subject.trim()) tempErrors.subject = 'Subject cannot be empty';
    if (!formData.message.trim()) tempErrors.message = 'Please type a brief message';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error on write
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:    formData.name,
          from_email:   formData.email,
          subject:      formData.subject,
          message:      formData.message,
          reply_to:     formData.email,
        }
      );

      setToastType('success');
      setToastMessage('Message transmitted successfully! I will correspond shortly.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch {
      setToastType('error');
      setToastMessage('Transmission failed. Please try again or email me directly.');
    } finally {
      setIsSubmitting(false);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-6 md:px-12 bg-[#050505] overflow-hidden"
    >
      {/* Background neon elements */}
      <div className="absolute bottom-[10%] left-[5%] w-96 h-96 rounded-full bg-pink-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[20%] right-[10%] w-80 h-80 rounded-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="font-mono text-xs tracking-[0.25em] text-white/60 block mb-3">
            (CONTACT SECTION)
          </span>
          <div className="font-display font-bold text-4xl sm:text-5xl text-white uppercase tracking-tight">
            <BlurText
              text="Initiate a Dialogue"
              delay={50}
              animateBy="words"
              direction="bottom"
              className="mb-2"
            />
            <span className="gradient-text font-black">& Let's Collaborate</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Area: Info widgets (5 columns) */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-gray-400 text-sm leading-relaxed font-light">
              Do you have an outstanding idea or project specification that requires deep technical execution? Submit the transmission slip, or reach out directly across digital communication networks.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {/* Email Card widget */}
              <a
                href={`mailto:${personalInfo.email}`}
                className="group glass-card p-6 rounded-3xl flex items-center space-x-4 border border-white/5 hover:border-white/20 hover:bg-white/[0.05] transition-all"
              >
                <div className="p-3.5 rounded-2xl bg-white/10 text-white group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-gray-500 tracking-wider uppercase">
                    EMAIL INBOX
                  </span>
                  <span className="block text-sm text-white font-medium group-hover:text-white/80 transition-colors mt-0.5">
                    {personalInfo.email}
                  </span>
                </div>
              </a>

              {/* Geographic Card widget */}
              <div className="glass-card p-6 rounded-3xl flex items-center space-x-4 border border-white/5">
                <div className="p-3.5 rounded-2xl bg-white/10 text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-gray-500 tracking-wider uppercase">
                    GEOGRAPHIC LOCATION
                  </span>
                  <span className="block text-sm text-white font-medium mt-0.5">
                    {personalInfo.location}
                  </span>
                </div>
              </div>

              {/* Instant WhatsApp/Call Card widget */}
              <div className="glass-card p-6 rounded-3xl flex items-center space-x-4 border border-white/5">
                <div className="p-3.5 rounded-2xl bg-white/10 text-white">
                  <MessageSquareCode className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-mono text-[9px] text-gray-500 tracking-wider uppercase">
                    MOBILE CONTACT
                  </span>
                  <span className="block text-sm text-white font-medium mt-0.5">
                    {personalInfo.phone}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick response commitment banner */}
            <div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 space-y-1">
              <span className="text-white font-mono text-[10px] tracking-widest block">
                ✦ COMMITTED TURNAROUND TIME
              </span>
              <p className="text-gray-300 text-xs font-light leading-relaxed">
                I regularly audit digital notifications and will generally respond to verified contact inquiries within 12-24 business hours.
              </p>
            </div>
          </div>

          {/* Right Area: Contact Form (7 columns) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="glass-card p-8 md:p-10 rounded-3xl border border-white/5 space-y-6 shadow-2xl relative"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name field */}
                <div className="space-y-2">
                  <label htmlFor="name" className="block font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="E.g., John Doe"
                    className={`w-full bg-white/[0.03] border ${
                      errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-white/45'
                    } rounded-xl px-5 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-gray-600`}
                  />
                  {errors.name && (
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-red-400 text-[10px] font-mono flex items-center space-x-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </motion.p>
                  )}
                </div>

                {/* Email field */}
                <div className="space-y-2">
                  <label htmlFor="email" className="block font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="E.g., john@example.com"
                    className={`w-full bg-white/[0.03] border ${
                      errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-white/45'
                    } rounded-xl px-5 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-gray-600`}
                  />
                  {errors.email && (
                    <motion.p
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="text-red-400 text-[10px] font-mono flex items-center space-x-1"
                    >
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </motion.p>
                  )}
                </div>
              </div>

              {/* Subject field */}
              <div className="space-y-2">
                <label htmlFor="subject" className="block font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                  Discussion Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="E.g., Project Collaboration Inquiry"
                  className={`w-full bg-white/[0.03] border ${
                    errors.subject ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-white/45'
                  } rounded-xl px-5 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-gray-600`}
                />
                {errors.subject && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-red-400 text-[10px] font-mono flex items-center space-x-1"
                  >
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.subject}</span>
                  </motion.p>
                )}
              </div>

              {/* Message field */}
              <div className="space-y-2">
                <label htmlFor="message" className="block font-mono text-[10px] tracking-widest text-gray-400 uppercase">
                  Inquiry Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write details about your vision..."
                  className={`w-full bg-white/[0.03] border ${
                    errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-white/45'
                  } rounded-xl px-5 py-3.5 text-sm text-white outline-none transition-colors placeholder:text-gray-600 resize-none`}
                />
                {errors.message && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-red-400 text-[10px] font-mono flex items-center space-x-1"
                  >
                    <AlertCircle className="w-3 h-3" />
                    <span>{errors.message}</span>
                  </motion.p>
                )}
              </div>

              {/* Submit Button with Loading Indicator */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="group relative w-full flex items-center justify-center space-x-3 bg-white text-black hover:bg-gray-100 disabled:bg-white/10 disabled:text-gray-500 font-mono text-xs font-bold tracking-widest uppercase py-4.5 rounded-2xl overflow-hidden transition-all duration-300 shadow-xl cursor-pointer"
              >
                {isSubmitting ? (
                  <span className="flex items-center space-x-2">
                    <Loader className="w-4 h-4 animate-spin text-black" />
                    <span>TRANSMITTING SPECS...</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-2">
                    <span>TRANSMIT MESSAGE</span>
                    <Send className="w-3.5 h-3.5 text-black group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>

      {/* Interactive Top Right Succesful Toast Alert */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            className={`fixed bottom-6 right-6 z-50 glass-card p-5 rounded-2xl flex items-center space-x-4 shadow-2xl max-w-sm bg-[#050505]/90 backdrop-blur-md border ${
              toastType === 'success' ? 'border-green-500/30' : 'border-red-500/30'
            }`}
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          >
            <div className={`p-2 rounded-xl ${
              toastType === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
            }`}>
              {toastType === 'success'
                ? <CheckCircle className="w-5 h-5" />
                : <AlertCircle className="w-5 h-5" />}
            </div>
            <div>
              <h5 className="font-display font-bold text-xs text-white uppercase tracking-wider">
                {toastType === 'success' ? 'TRANSMISSION COMPLETE' : 'TRANSMISSION FAILED'}
              </h5>
              <p className="text-gray-400 text-[11px] font-light mt-0.5 leading-snug">
                {toastMessage}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
