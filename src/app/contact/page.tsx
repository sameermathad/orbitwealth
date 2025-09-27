'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    preferredContact: 'email',
    serviceInterest: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitSuccess(true);
    
    // Reset form after success
    setTimeout(() => {
      setSubmitSuccess(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
        preferredContact: 'email',
        serviceInterest: '',
        timeline: ''
      });
    }, 5000);
  };

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      description: "Send us a detailed message and we'll respond within 24 hours.",
      contact: "connect@orbitwealth.in",
      action: "Send Email"
    },
    {
      icon: "📞",
      title: "Call Us",
      description: "Speak directly with our financial advisors during business hours.",
      contact: "+91 - 970 3616 879",
      action: "Call Now"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      description: "Quick questions? Send us a message on WhatsApp for fast responses.",
      contact: "+91 - 970 3616 879",
      action: "WhatsApp"
    }
  ];

  const officeLocations = [
    {
      city: "Hyderabad",
      address: "4th Floor Apurupa Turbo, #787, Road#36, Jubilee Hills",
      phone: "+91 - 970 3616 879",
      email: "connect@orbitwealth.in",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
            Let&apos;s Make Your Financial Goals a Reality
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-body mb-8">
            Ready to start your financial journey? We&apos;re here to help you create a personalized plan 
            that puts your dreams within reach. Let&apos;s begin with a conversation.
          </p>
          <a 
            href="#contact-form" 
            className="btn-primary text-lg px-8 py-3"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* Contact Form and Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Get in Touch</h2>
              
              {submitSuccess ? (
                <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
                  <div className="text-6xl mb-4">✅</div>
                  <h3 className="text-2xl font-bold text-green-800 mb-4">Thank You!</h3>
                  <p className="text-green-700 mb-6">
                    Your message has been sent successfully. We&apos;ll get back to you within 24 hours 
                    to discuss your financial goals and how we can help.
                  </p>
                  <div className="text-sm text-green-600">
                    You&apos;ll also receive a confirmation email shortly.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Contact Method
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="whatsapp">WhatsApp</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="serviceInterest" className="block text-sm font-medium text-gray-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="serviceInterest"
                      name="serviceInterest"
                      value={formData.serviceInterest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="financial-planning">Financial Planning</option>
                      <option value="asset-allocation">Asset Allocation</option>
                      <option value="investment-solutions">Investment Solutions</option>
                      <option value="global-investments">Global Investments</option>
                      <option value="retirement-planning">Retirement Planning</option>
                      <option value="regular-income-planning">Regular Income Planning</option>
                      <option value="succession-planning">Succession Planning</option>
                      <option value="general-consultation">General Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="timeline" className="block text-sm font-medium text-gray-700 mb-2">
                      Timeline for Implementation
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">Select timeline</option>
                      <option value="immediately">Immediately</option>
                      <option value="within-1-month">Within 1 month</option>
                      <option value="within-3-months">Within 3 months</option>
                      <option value="within-6-months">Within 6 months</option>
                      <option value="just-exploring">Just exploring options</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Tell Us About Your Goals *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="Describe your financial goals, current situation, or any specific questions you have..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary-dark disabled:bg-gray-400 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending Message...' : 'Send Message'}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our{' '}
                    <Link href="/privacy" className="text-primary hover:text-primary-dark underline">
                      Privacy Policy
                    </Link>{' '}
                    and consent to being contacted regarding your inquiry.
                  </p>
                </form>
              )}
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">Contact Information</h2>
              
              {/* Contact Methods */}
              <div className="space-y-6 mb-12">
                {contactMethods.map((method, index) => (
                  <div key={index} className="bg-neutral rounded-2xl p-6">
                    <div className="flex items-start space-x-4">
                      <div className="text-3xl">{method.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-primary mb-2">{method.title}</h3>
                        <p className="text-gray-600 mb-3">{method.description}</p>
                        <div className="text-lg font-medium text-primary mb-3">{method.contact}</div>
                        <button className="bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300">
                          {method.action}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Locations */}
              <div>
                <h3 className="text-xl font-bold text-primary mb-6">Our Offices</h3>
                <div className="space-y-6">
                  {officeLocations.map((office, index) => (
                    <div key={index} className="border border-gray-200 rounded-2xl p-6">
                      <h4 className="text-lg font-semibold text-primary mb-3">{office.city}</h4>
                      <div className="space-y-2 text-gray-600">
                        <p>{office.address}</p>
                        <p>📞 {office.phone}</p>
                        <p>📧 {office.email}</p>
                        <p className="text-sm text-gray-500">{office.hours}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scheduling Section */}
      <section className="py-16 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Schedule a Consultation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Prefer to schedule a meeting? Book a consultation at your convenience. 
              We offer both in-person and virtual meetings to accommodate your schedule.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-6xl mb-6">📅</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Book Online</h3>
              <p className="text-gray-600 mb-6">
                Schedule a consultation at your convenience using our online booking system. 
                Choose your preferred time and meeting format.
              </p>
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Book Consultation
              </button>
            </div>
            
            <div className="bg-white rounded-2xl p-8 text-center shadow-lg">
              <div className="text-6xl mb-6">🎥</div>
              <h3 className="text-2xl font-bold text-primary mb-4">Virtual Meeting</h3>
              <p className="text-gray-600 mb-6">
                Can&apos;t visit our office? We offer secure video consultations from anywhere in the world. 
                Same expertise, same personal touch.
              </p>
              <button className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
                Schedule Video Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about working with Orbit Wealth.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "What happens during the first consultation?",
                answer: "Your first consultation is a discovery session where we learn about your financial situation, goals, and concerns. We'll discuss your current financial picture and outline how we can help you achieve your objectives."
              },
              {
                question: "How much do your services cost?",
                answer: "Our fee structure is transparent and varies based on the complexity of your financial situation and the services you need. We offer both hourly and retainer-based arrangements, with no hidden fees."
              },
              {
                question: "Do you work with clients outside your office locations?",
                answer: "Absolutely! We work with clients across India and internationally through virtual consultations. Technology allows us to provide the same high-quality service regardless of your location."
              },
              {
                question: "How often will we meet to review my financial plan?",
                answer: "We typically meet quarterly to review your financial plan and make any necessary adjustments. However, we're always available for urgent questions or when life circumstances change."
              },
              {
                question: "What makes Orbit Wealth different from other financial advisors?",
                answer: "Our personalized approach, combined with our expertise in both Indian and global markets, sets us apart. We focus on building long-term relationships and creating strategies that evolve with your life changes."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-neutral rounded-2xl p-6">
                <h3 className="text-lg font-semibold text-primary mb-3">{faq.question}</h3>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Financial Journey?
          </h2>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed">
            Don&apos;t wait to secure your financial future. Every day of planning brings you closer to your goals. 
            Let&apos;s start the conversation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contact-form" 
              className="bg-white hover:bg-primary-light text-primary-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl"
            >
              Contact Us Now
            </Link>
            <Link 
              href="/tools" 
              className="border-2 border-white hover:bg-white hover:text-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Try Our Tools
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
