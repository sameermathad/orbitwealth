'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      setScrollY(newScrollY);
      // Debug: log scroll position
      if (newScrollY % 100 < 10) { // Log every ~100px
        console.log('Scroll Y:', newScrollY);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Subtle Global Background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div 
          className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-primary/3 to-accent/3 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        />
        <div 
          className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tl from-accent/3 to-primary/3 rounded-full blur-2xl"
          style={{ transform: `translateY(${scrollY * -0.03}px)` }}
        />
      </div>

      {/* Hero Section with Dramatic Parallax */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-24 overflow-hidden">
        {/* Hero Background Elements - Fixed */}
        {/* Subtle Hero Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-primary/6 to-accent/6 rounded-full blur-2xl"
            style={{ transform: `translateY(${scrollY * 0.05}px)` }}
          />
          <div 
            className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tl from-accent/5 to-primary/5 rounded-full blur-xl"
            style={{ transform: `translateY(${scrollY * -0.03}px)` }}
          />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text Content - Very subtle movement */}
            <motion.div 
              className="relative z-20"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight mb-8 text-gray-900"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              >
                Your Wealth, Your Orbit
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed font-body"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              >
                Navigate your financial journey with confidence. We craft personalized wealth strategies 
                that align with your unique goals, helping you build lasting prosperity for generations to come.
              </motion.p>
              <motion.div 
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              >
                <Link 
                  href="/contact" 
                  className="btn-primary inline-flex items-center text-lg px-8 py-4 group"
                >
                  Start Your Journey
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link 
                  href="/tools" 
                  className="btn-secondary inline-flex items-center text-lg px-8 py-4 group"
                >
                  Calculate Your Goals
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
            
            {/* Hero Image - No movement */}
            <motion.div 
              className="relative z-20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/success.jpg"
                  alt="Happy family planning their financial future together"
                  width={600}
                  height={800}
                  className="w-full h-[500px] object-cover"
                  priority
                />
              </div>
              {/* Decorative elements around image */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full blur-sm animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-accent/30 rounded-full blur-sm animate-pulse" style={{ animationDelay: '1s' }} />
            </motion.div>
          </div>
        </div>
        
        {/* Subtle floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary/20 rounded-full animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
      </section>

      {/* Key Metrics Section */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-20 relative z-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {[
              {
                icon: "🚀",
                metric: "₹150Cr+ Assets Managed",
                description: "Growing wealth across diverse portfolios"
              },
              {
                icon: "🎯",
                metric: "20+ Expert Advisors",
                description: "Specialized financial professionals"
              },
              {
                icon: "⭐",
                metric: "Trusted Since 2018",
                description: "Six years of client success"
              },
              {
                icon: "👨‍👩‍👧‍👦",
                metric: "800+ Happy Families",
                description: "Transforming financial futures"
              }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="card-modern p-6 text-center group hover:scale-105 transition-transform duration-300 relative overflow-hidden"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5 }}
              >
                {/* Floating background element */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="text-4xl mb-4 relative z-10">{stat.icon}</div>
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-2 relative z-10">{stat.metric}</h3>
                <p className="text-gray-600 text-sm font-body relative z-10">{stat.description}</p>
                <div className="mt-4 relative z-10">
                  <Link href="/about" className="text-primary hover:text-primary-dark font-semibold text-sm font-body inline-flex items-center group">
                    Learn More
                    <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-0 h-0 border-l-[20px] border-l-transparent border-t-[20px] border-t-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #ff6b35 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </section>

      {/* About Us Teaser */}
      <section className="py-24 bg-neutral relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                Where Financial Dreams Take Flight
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 mb-8 leading-relaxed font-body"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                Orbit Wealth isn&apos;t just about managing money—it&apos;s about orchestrating your financial future. 
                We blend cutting-edge market insights with personalized strategies, creating a unique orbit 
                of prosperity that revolves around your aspirations and values.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                <Link 
                  href="/about" 
                  className="btn-primary inline-flex items-center"
                >
                  Discover Our Story
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/about/nagaraj4.jpeg"
                  alt="Financial advisor having a consultation with clients"
                  width={600}
                  height={600}
                  className="w-full h-full object-center"
                />
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-primary/30 rounded-full animate-pulse" />
              <div className="absolute -bottom-2 -right-2 w-3 h-3 bg-accent/30 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values - Scrolling Ribbon */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Our Guiding Principles
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto font-body"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Every decision we make is anchored in principles that put your success at the center of our universe.
            </motion.p>
          </motion.div>
          
          {/* Scrolling Principles Ribbon */}
          <motion.div 
            className="principles-ribbon"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          >
            <div className="track">
              <div className="row">
                <span className="serif big">TRANSPARENCY</span>
                <span className="dot"></span>
                <span className="sans mid">clarity</span>
                <span className="sans light">honesty</span>
                <span className="serif big accent">PERSONALIZATION</span>
                <span className="dot"></span>
                <span className="sans mid">tailored</span>
                <span className="sans light">goals</span>
                <span className="serif big">INNOVATION</span>
                <span className="dot"></span>
                <span className="sans mid">strategy</span>
                <span className="sans light">technology</span>
                <span className="serif big">PARTNERSHIP</span>
                <span className="dot"></span>
                <span className="sans mid">long-term</span>
                <span className="sans light">trust</span>
                <span className="serif big">INTEGRITY</span>
                <span className="dot"></span>
                <span className="sans mid">ethics</span>
                <span className="sans light">standards</span>
                <span className="serif big">EXCELLENCE</span>
                <span className="dot"></span>
                <span className="sans mid">quality</span>
                <span className="sans light">precision</span>
              </div>
              {/* Duplicate for seamless loop */}
              <div className="row" aria-hidden="true">
                <span className="serif big">TRANSPARENCY</span>
                <span className="dot"></span>
                <span className="sans mid">clarity</span>
                <span className="sans light">honesty</span>
                <span className="serif big accent">PERSONALIZATION</span>
                <span className="dot"></span>
                <span className="sans mid">tailored</span>
                <span className="sans light">goals</span>
                <span className="serif big">INNOVATION</span>
                <span className="dot"></span>
                <span className="sans mid">strategy</span>
                <span className="sans light">technology</span>
                <span className="serif big">PARTNERSHIP</span>
                <span className="dot"></span>
                <span className="sans mid">long-term</span>
                <span className="sans light">trust</span>
                <span className="serif big">INTEGRITY</span>
                <span className="dot"></span>
                <span className="sans mid">ethics</span>
                <span className="sans light">standards</span>
                <span className="serif big">EXCELLENCE</span>
                <span className="dot"></span>
                <span className="sans mid">quality</span>
                <span className="sans light">precision</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-24 bg-neutral relative overflow-hidden">
        {/* Subtle Services Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-2xl"
            style={{ transform: `translateY(${scrollY * 0.03}px)` }}
          />
          <div 
            className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-gradient-to-tl from-accent/5 to-primary/5 rounded-full blur-xl"
            style={{ transform: `translateY(${scrollY * -0.02}px)` }}
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header - No movement */}
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Your Complete Financial Ecosystem
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto font-body"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              From your first investment to generational wealth transfer, we provide the complete spectrum 
              of financial services to keep you in perfect orbit around your goals.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {[
              {
                title: "Wealth Strategy",
                description: "Custom-built financial roadmaps that align with your unique life vision and goals."
              },
              {
                title: "Portfolio Orchestration",
                description: "Sophisticated asset allocation strategies that balance growth with security."
              },
              {
                title: "Investment Universe",
                description: "Access to exclusive investment opportunities across global markets."
              },
              {
                title: "International Expansion",
                description: "Global investment strategies to diversify and strengthen your portfolio."
              },
              {
                title: "Retirement Planning",
                description: "Comprehensive planning to ensure your golden years shine bright."
              },
              {
                title: "Legacy Navigation",
                description: "Strategic wealth transfer to preserve your family's financial future."
              }
            ].map((service, index) => (
              <motion.div 
                key={index} 
                className="group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="service-card bg-gradient-to-br from-primary to-primary-medium border border-primary rounded-2xl p-12 h-full transition-all duration-300 flex flex-col items-center justify-center text-center">
                  {/* Default state - orange background with white text */}
                  <h3 className="text-2xl font-heading font-bold text-white mb-0 transition-all duration-300 group-hover:text-gray-900 group-hover:mb-6">
                    {service.title}
                  </h3>
                  
                  {/* Hover state - description fades in */}
                  <p className="text-white leading-relaxed font-body opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:text-gray-600">
                    {service.description}
                  </p>
                  
                  {/* Subtle accent line on hover */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-primary transition-all duration-300 group-hover:w-full"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* CTA Button - No movement */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Link 
              href="/services" 
              className="btn-primary inline-flex items-center text-lg px-8 py-4"
            >
              Launch Your Journey
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
        
        {/* Parallax background elements */}
        <div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        />
        <div 
          className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-accent/5 to-primary/5 rounded-full blur-3xl"
          style={{ transform: `translateY(${scrollY * -0.3}px)` }}
        />
        
        {/* Subtle floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-12 h-12 border border-primary/15 rotate-45 opacity-30" />
          <div className="absolute bottom-20 left-20 w-8 h-8 bg-accent/15 rounded-full opacity-30" />
        </div>
      </section>

      {/* Tools Teaser */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.h2 
                className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                Navigate Your Financial Future with Precision
              </motion.h2>
              <motion.p 
                className="text-lg text-gray-600 mb-8 leading-relaxed font-body"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                Our advanced financial calculators and planning tools give you the power to chart your own course. 
                Explore different scenarios, test strategies, and gain the confidence to make informed financial decisions.
              </motion.p>
              <motion.div 
                className="space-y-4 mb-8"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              >
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-body">Retirement Orbit Calculator</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-body">Wealth Trajectory Planner</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-body">Portfolio Constellation Builder</span>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
              >
                <Link 
                  href="/tools" 
                  className="btn-primary inline-flex items-center text-lg px-8 py-4"
                >
                  Chart Your Course
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/tools.jpg"
                  alt="Person using financial planning tools and calculator"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="py-24 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Navigate Market Intelligence
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto font-body"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Stay ahead of market trends with our expert analysis, strategic insights, and actionable financial wisdom.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {[
              {
                title: "Building Your Financial Safety Net",
                excerpt: "Essential strategies for creating an emergency fund that provides security and peace of mind for your family.",
                category: "Wealth Protection",
                readTime: "5 min read",
                image: "/images/emergency.webp"
              },
              {
                title: "Global Markets: Your Gateway to Diversification",
                excerpt: "Explore international investment opportunities that can strengthen your portfolio and unlock new growth potential.",
                category: "Global Strategy",
                readTime: "7 min read",
                image: "/images/global.webp"
              },
              {
                title: "The Retirement Constellation: Planning Your Golden Years",
                excerpt: "How early strategic planning can transform your retirement from a distant dream into a brilliant reality.",
                category: "Retirement Planning",
                readTime: "6 min read",
                image: "/images/retirement.jpg"
              }
            ].map((post, index) => (
              <motion.div 
                key={index} 
                className="card-modern overflow-hidden hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5 }}
              >
                <div className="h-48 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-primary text-sm font-medium font-body">{post.category}</span>
                    <span className="text-gray-500 text-sm font-body">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3 font-body">{post.excerpt}</p>
                  <Link 
                    href="/blog" 
                    className="text-primary hover:text-primary-dark font-semibold transition-colors font-body"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Link 
              href="/blog" 
              className="btn-primary inline-flex items-center text-lg px-8 py-4"
            >
              Explore Our Insights
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Client Stories Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              Success Stories in Orbit
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto font-body"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            >
              Discover how families and individuals have achieved their financial dreams with our personalized approach.
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {[
              {
                type: "Global Families",
                story: "Navigating international investments while keeping family connections strong across continents.",
                image: "/images/nri.webp"
              },
              {
                type: "Healthcare Heroes",
                story: "Optimizing wealth for medical professionals with strategic tax planning and growth strategies.",
                image: "/images/doctor.jpg"
              },
              {
                type: "Corporate Leaders",
                story: "Sophisticated wealth management for executives with complex compensation and equity structures.",
                image: "/images/cxo.jpg"
              },
              {
                type: "Entrepreneurs",
                story: "Building and preserving business wealth with comprehensive succession and growth planning.",
                image: "/images/business.jpg"
              }
            ].map((client, index) => (
              <motion.div 
                key={index} 
                className="card-modern p-6 text-center hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                whileHover={{ y: -5 }}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src={client.image}
                    alt={client.type}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-heading font-bold text-gray-900 mb-3">{client.type}</h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 font-body">{client.story}</p>
                <Link 
                  href="/stories" 
                  className="text-primary hover:text-primary-dark font-semibold text-sm transition-colors font-body"
                >
                  See Full Story →
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Link 
              href="/stories" 
              className="btn-primary inline-flex items-center text-lg px-8 py-4"
            >
              Explore Success Stories
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section with Subtle Parallax */}
      <section className="py-24 bg-gradient-to-r from-gray-900 to-gray-800 text-white relative overflow-hidden">
        {/* Subtle CTA Background */}
        <div className="absolute inset-0">
          <div 
            className="absolute top-1/2 left-1/2 w-[500px] h-[500px] bg-gradient-to-br from-primary/8 to-accent/8 rounded-full blur-2xl"
            style={{ transform: `translateY(${scrollY * 0.02}px)` }}
          />
        </div>
        
        {/* Content - No movement */}
        <motion.div 
          className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-heading font-bold mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Ready to Launch Your Wealth Orbit?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-300 mb-10 leading-relaxed font-body"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            Join the families who have transformed their financial future with Orbit Wealth. 
            Your journey to lasting prosperity begins with a single conversation.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          >
            <Link 
              href="/contact" 
              className="btn-primary inline-flex items-center text-lg px-8 py-4 group"
            >
              Begin Your Journey
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/tools" 
              className="btn-secondary inline-flex items-center text-lg px-8 py-4 group"
            >
              Explore Our Tools
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>
        </motion.div>
        
        {/* Subtle floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-3 h-3 bg-primary/20 rounded-full animate-pulse" />
          <div className="absolute top-20 right-20 w-2 h-2 bg-accent/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-20 left-20 w-3 h-3 bg-primary-light/15 rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>
      </section>
    </div>
  );
}
