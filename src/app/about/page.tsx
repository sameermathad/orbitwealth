import Link from 'next/link';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
            Your Future, Our Focus
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-body mb-8">
            We believe financial planning should be as personal as your dreams. 
            Every strategy we create is tailored to your unique life circumstances and goals.
          </p>
          <Link 
            href="/contact" 
            className="btn-primary text-lg px-8 py-3"
          >
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Mission & Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Mission & Philosophy
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">Client-Focused Approach</h3>
                  <p className="text-gray-700 leading-relaxed font-body">
                    We put you at the center of everything we do. Your financial goals, life circumstances, 
                    and personal values drive every recommendation and strategy we develop.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">Empathetic Understanding</h3>
                  <p className="text-gray-700 leading-relaxed font-body">
                    We understand that financial decisions are deeply personal and often emotional. 
                    Our approach combines professional expertise with genuine empathy and understanding.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">Outcome-Driven Strategies</h3>
                  <p className="text-gray-700 leading-relaxed font-body">
                    We don&apos;t just create plans; we create results. Every strategy is designed with 
                    clear, measurable outcomes that align with your life goals and timeline.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/success.jpg"
                  alt="Mission and vision representation"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story & Narrative */}
      <section className="py-16 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/advisor.jpg"
                  alt="Financial advisor having a conversation with clients"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Why Orbit Wealth Exists
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed font-body">
                  Orbit Wealth was born from a simple observation: too many people were receiving 
                  generic financial advice that didn&apos;t account for their unique circumstances, goals, and values.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-body">
                  Our founder, having experienced both the challenges of complex financial decisions and 
                  the transformative power of truly personalized planning, set out to create a different kind 
                  of financial advisory firm.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed font-body">
                  Today, we continue to uphold the values that inspired our founding: integrity, empathy, 
                  personalization, and an unwavering commitment to putting our clients&apos; interests first.
                </p>
                <div className="pt-4">
                  <h3 className="text-xl font-heading font-semibold text-primary mb-3">Our Core Values</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-700 font-body">Integrity & Transparency</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-700 font-body">Client-First Approach</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-700 font-body">Continuous Learning</span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 bg-primary rounded-full mr-3"></div>
                      <span className="text-gray-700 font-body">Long-term Relationships</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Professional Excellence & Credentials
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Our team brings together world-class education, industry certifications, and decades of 
              combined experience in financial planning and investment management.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                credential: "IIM",
                title: "Indian Institute of Management",
                description: "Advanced management education from one of India&apos;s premier business schools",
                icon: "🎓"
              },
              {
                credential: "Osmania",
                title: "Osmania University",
                description: "Strong foundation in economics and financial theory",
                icon: "🏛️"
              },
              {
                credential: "NISM",
                title: "National Institute of Securities Markets",
                description: "SEBI-recognized certification for investment advisors",
                icon: "📊"
              },
              {
                credential: "AMFI",
                title: "Association of Mutual Funds in India",
                description: "Certified mutual fund distributor and advisor",
                icon: "📈"
              }
            ].map((credential, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-medium rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">{credential.icon}</span>
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary mb-3">{credential.credential}</h3>
                <h4 className="text-lg font-heading font-semibold text-gray-800 mb-3">{credential.title}</h4>
                <p className="text-gray-600 leading-relaxed font-body">{credential.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Approach */}
      <section className="py-16 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Our Approach to Financial Planning
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-primary mb-2">Discovery & Understanding</h3>
                    <p className="text-gray-700 font-body">We begin by deeply understanding your financial situation, goals, and values.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-primary mb-2">Strategy Development</h3>
                    <p className="text-gray-700 font-body">We create a comprehensive, personalized financial plan tailored to your needs.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-primary mb-2">Implementation & Monitoring</h3>
                    <p className="text-gray-700 font-body">We help you implement the plan and continuously monitor progress toward your goals.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-white font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-heading font-semibold text-primary mb-2">Ongoing Support</h3>
                    <p className="text-gray-700 font-body">We provide continuous guidance and adjust strategies as your life evolves.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/discussion.jpg"
                  alt="Team collaboration and planning process"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Learn More About Our Approach?
          </h2>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed font-body">
            Discover how our personalized approach to financial planning can help you achieve your goals. 
            Let&apos;s start a conversation about your financial future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="btn-primary inline-flex items-center"
            >
              Get in Touch
            </Link>
            <Link 
              href="/services" 
              className="btn-secondary inline-flex items-center"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
