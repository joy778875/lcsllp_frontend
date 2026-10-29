import React from 'react';
import PageHero from '../components/PageHero';
import CTASection from '../components/CTASection';
import { companyRegistrationDetails } from '../data/navigationData';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#F6F5F1]">
      <PageHero
        eyebrow="LEGAL & PRIVACY"
        title="Privacy Policy"
        description="Privacy policy and data protection framework for Labradorite Consultancy & Services LLP."
        breadcrumbs={[{ label: 'Privacy Policy', path: '/privacy-policy' }]}
      />

      <section className="py-16 sm:py-24 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-sm text-[#64748B] leading-relaxed">
        <div className="bg-white border border-[#D9DEE5] rounded-xl p-8 shadow-sm space-y-6">
          <h2 className="text-xl font-bold font-display text-[#0B1726]">
            1. Information Collection &amp; Use
          </h2>
          <p>
            Labradorite Consultancy &amp; Services LLP respects the privacy of our clients, partners, and website visitors. Information submitted through our opportunity enquiry forms (including name, company, email, and phone number) is processed strictly for evaluating defence acquisition consultancy inquiries.
          </p>

          <h2 className="text-xl font-bold font-display text-[#0B1726]">
            2. Confidentiality &amp; Non-Disclosure
          </h2>
          <p>
            Given the sensitive nature of aerospace and defence acquisition projects, all communication, technology parameters, and contractual discussions are treated with professional confidentiality in accordance with Indian Defence procurement guidelines.
          </p>

          <h2 className="text-xl font-bold font-display text-[#0B1726]">
            3. Contact Information
          </h2>
          <p>
            For privacy inquiries or data requests, please contact our administrative team at:
            <br />
            <strong>Email:</strong> {companyRegistrationDetails.email2}
            <br />
            <strong>LLP Registration:</strong> {companyRegistrationDetails.llpin}
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
