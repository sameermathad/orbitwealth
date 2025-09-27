'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Company Info */}
          <motion.div 
            className="col-span-1 md:col-span-2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            <div className="flex items-center mb-6 space-x-4">
              <div className="w-48 h-20">
                <Image
                  src="/logocharcoal/dark/logo.png"
                  alt="Orbit Wealth Logo"
                  width={192}
                  height={75}
                  className="w-full h-full object-contain"
                />
              </div>
              
            </div>
            <p className="text-gray-300 mb-6 max-w-md font-body leading-relaxed">
              Empathetic, goal-based financial planning that puts you first. 
              We help families and individuals achieve their financial dreams through 
              personalized strategies and professional guidance.
            </p>
            <motion.div 
              className="flex space-x-3"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
            >
              <div className="bg-primary backdrop-blur-sm border border-primary p-3 rounded-xl">
                <span className="text-white font-semibold text-sm">NISM</span>
              </div>
              <div className="bg-primary backdrop-blur-sm border border-primary p-3 rounded-xl">
                <span className="text-white font-semibold text-sm">AMFI</span>
              </div>
              <div className="bg-primary backdrop-blur-sm border border-primary p-3 rounded-xl">
                <span className="text-white font-semibold text-sm">IIM</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <h3 className="text-lg font-heading font-bold mb-6 text-primary">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-gray-300 hover:text-primary transition-colors font-body">About Us</Link></li>
              <li><Link href="/services" className="text-gray-300 hover:text-primary transition-colors font-body">Services</Link></li>
              <li><Link href="/tools" className="text-gray-300 hover:text-primary transition-colors font-body">Tools & Calculators</Link></li>
              <li><Link href="/blog" className="text-gray-300 hover:text-primary transition-colors font-body">Blog</Link></li>
              <li><Link href="/stories" className="text-gray-300 hover:text-primary transition-colors font-body">Client Stories</Link></li>
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <h3 className="text-lg font-heading font-bold mb-6 text-primary">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services#financial-planning" className="text-gray-300 hover:text-primary transition-colors font-body">Financial Planning</Link></li>
              <li><Link href="/services#asset-allocation" className="text-gray-300 hover:text-primary transition-colors font-body">Asset Allocation</Link></li>
              <li><Link href="/services#investment-solutions" className="text-gray-300 hover:text-primary transition-colors font-body">Investment Solutions</Link></li>
              <li><Link href="/services#retirement-planning" className="text-gray-300 hover:text-primary transition-colors font-body">Retirement Planning</Link></li>
              <li><Link href="/services#global-investments" className="text-gray-300 hover:text-primary transition-colors font-body">Global Investments</Link></li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div 
          className="border-t border-primary/30 mt-12 pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0 font-body">
              © {currentYear} Orbit Wealth. All rights reserved.
            </div>
            
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="text-gray-300 text-sm font-body">
                <span className="inline-flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  SSL Secured
                </span>
              </div>
              
              <div className="text-gray-300 text-sm font-body">
                <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
              </div>
              
              <div className="text-gray-300 text-sm font-body">
                <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
          
          {/* Compliance Notice */}
          <motion.div 
            className="mt-6 text-xs text-gray-400 text-center font-body"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.4, delay: 0.6, ease: "easeOut" }}
          >
            <p>
              Mutual Fund investments are subject to market risks, read all scheme related documents carefully. 
              Past performance does not guarantee future results. This is not an offer to buy or sell securities.
            </p>
            <p className="mt-2">
              Orbit Wealth is a SEBI registered Investment Advisor. Registration No: [REGISTRATION_NUMBER]
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
