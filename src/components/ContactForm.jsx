import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import api from '../utils/api';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    enquiryType: 'Technology Consultancy',
    message: '',
    consent: false,
  });

  const [status, setStatus] = useState({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const enquiryOptions = [
    'Technology Consultancy',
    'MRO & Sustenance / TOT',
    'Leasing Consultancy',
    'Project Management',
    'Supply Chain Support',
    'Miscellaneous Services',
    'General Strategic Enquiry',
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ type: null, message: '' });

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({
        type: 'error',
        message: 'Please complete all required fields (Name, Email, Message).',
      });
      return;
    }

    if (!formData.consent) {
      setStatus({
        type: 'error',
        message: 'Please accept the consent checkbox to submit your enquiry.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await api.post('/enquiries', {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: `${formData.enquiryType} - ${formData.company || 'General'}`,
        message: formData.message,
      });

      setStatus({
        type: 'success',
        message: res.message || 'Thank you for reaching out! Your enquiry has been received.',
      });

      setFormData({
        name: '',
        company: '',
        email: '',
        phone: '',
        enquiryType: 'Technology Consultancy',
        message: '',
        consent: false,
      });
    } catch (err) {
      setStatus({
        type: 'error',
        message: err.message || 'Failed to submit enquiry. Please try again later.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-stone-200 rounded-xl p-6 sm:p-8 shadow-sm">
      <div className="mb-6 border-b border-stone-100 pb-4">
        <h3 className="text-2xl font-serif font-normal text-[#1A1A1A]">
          Send an Opportunity Enquiry
        </h3>
        <p className="text-xs text-stone-500 mt-1 font-light">
          Direct consultation request for Indian defence acquisition, technology transfer, or MRO services.
        </p>
      </div>

      {status.type === 'success' && (
        <div className="mb-6 p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-lg text-xs flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-emerald-900">Enquiry Received</div>
            <div>{status.message}</div>
          </div>
        </div>
      )}

      {status.type === 'error' && (
        <div className="mb-6 p-4 bg-rose-50 border border-rose-200 text-rose-800 rounded-lg text-xs flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-rose-900">Validation Notice</div>
            <div>{status.message}</div>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4 text-xs font-light">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-[#1A1A1A] mb-1">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. Arvind Sharma"
              className="w-full px-3.5 py-2.5 bg-[#FAFAF8] border border-stone-200 rounded text-[#1A1A1A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C9A96E]"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-[#1A1A1A] mb-1">
              Company / Entity Name
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g. Defence Dynamics Pvt Ltd"
              className="w-full px-3.5 py-2.5 bg-[#FAFAF8] border border-stone-200 rounded text-[#1A1A1A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C9A96E]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-[#1A1A1A] mb-1">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g. contact@entity.com"
              className="w-full px-3.5 py-2.5 bg-[#FAFAF8] border border-stone-200 rounded text-[#1A1A1A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C9A96E]"
              required
            />
          </div>

          <div>
            <label className="block font-medium text-[#1A1A1A] mb-1">
              Phone Number / WhatsApp
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="e.g. +91 98765 43210"
              className="w-full px-3.5 py-2.5 bg-[#FAFAF8] border border-stone-200 rounded text-[#1A1A1A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C9A96E]"
            />
          </div>
        </div>

        <div>
          <label className="block font-medium text-[#1A1A1A] mb-1">
            Enquiry Type / Sector Focus
          </label>
          <select
            name="enquiryType"
            value={formData.enquiryType}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 bg-[#FAFAF8] border border-stone-200 rounded text-[#1A1A1A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C9A96E]"
          >
            {enquiryOptions.map((opt, i) => (
              <option key={i} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium text-[#1A1A1A] mb-1">
            Opportunity / Capability Overview <span className="text-rose-500">*</span>
          </label>
          <textarea
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            placeholder="Please summarize your technology, acquisition interest, or consultancy requirements..."
            className="w-full px-3.5 py-2.5 bg-[#FAFAF8] border border-stone-200 rounded text-[#1A1A1A] focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#C9A96E]"
            required
          />
        </div>

        <div className="flex items-start gap-2.5 pt-2">
          <input
            type="checkbox"
            id="consent"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-0.5 rounded border-stone-300 text-[#C9A96E] focus:ring-[#C9A96E]"
          />
          <label htmlFor="consent" className="text-[11px] text-stone-500">
            I consent to Labradorite Consultancy &amp; Services LLP processing this information for defence acquisition consultancy communications.
          </label>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#C9A96E] hover:bg-[#DFCA9B] text-black font-medium text-xs uppercase tracking-[0.2em] px-8 py-3.5 rounded-sm transition-all disabled:opacity-50 shadow-md"
        >
          {isSubmitting ? (
            'Processing...'
          ) : (
            <>
              Submit Opportunity Enquiry
              <Send className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
