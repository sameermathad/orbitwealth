'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function ToolsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
            Financial Planning Tools & Calculators
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-body mb-8">
            Take control of your financial future with our comprehensive suite of planning tools. 
            From retirement planning to investment analysis, our tools provide the insights you need.
          </p>
          <Link 
            href="#retirement-calculator" 
            className="btn-primary text-lg px-8 py-3"
          >
            Try Calculator
          </Link>
        </div>
      </section>

      {/* Retirement Calculator */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Retirement Planning Calculator
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-body">
                Plan your retirement with confidence using our comprehensive calculator. 
                Input your current savings, expected expenses, and retirement goals to see 
                how much you need to save and invest.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-body">Calculate retirement corpus needs</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-body">Monthly savings requirements</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-body">Investment return projections</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-body">Inflation impact analysis</span>
                </div>
              </div>
              <button className="btn-primary inline-flex items-center">
                Try Calculator
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/happycouple.jpg"
                  alt="Retirement planning calculator and tools"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other Tools Preview */}
      <section className="py-16 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              More Planning Tools Coming Soon
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              We&apos;re continuously developing new tools to help you make informed financial decisions. 
              Here&apos;s what&apos;s in development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Investment Goal Calculator",
                description: "Calculate how much you need to invest to reach your financial goals.",
                status: "Coming Soon",
                icon: "🎯"
              },
              {
                title: "Asset Allocation Tool",
                description: "Get personalized asset allocation recommendations based on your risk profile.",
                status: "Coming Soon",
                icon: "⚖️"
              },
              {
                title: "Tax Planning Calculator",
                description: "Optimize your tax strategy and maximize your savings.",
                status: "Coming Soon",
                icon: "💰"
              },
              {
                title: "Emergency Fund Calculator",
                description: "Determine the right emergency fund size for your situation.",
                status: "Coming Soon",
                icon: "🛡️"
              },
              {
                title: "Debt Payoff Planner",
                description: "Create a strategic plan to eliminate debt efficiently.",
                status: "Coming Soon",
                icon: "📊"
              },
              {
                title: "Insurance Needs Analyzer",
                description: "Assess your insurance coverage and identify gaps.",
                status: "Coming Soon",
                icon: "🔒"
              }
            ].map((tool, index) => (
              <div key={index} className="card-modern p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-6">{tool.icon}</div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">{tool.title}</h3>
                <p className="text-gray-600 leading-relaxed font-body mb-4">{tool.description}</p>
                <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium font-body">
                  {tool.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Downloadable Worksheets */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src="/images/tools.jpg"
                  alt="Financial planning worksheets and resources"
                  width={600}
                  height={400}
                  className="w-full h-80 object-cover"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
                Downloadable Worksheets & Resources
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed font-body">
                Access our comprehensive collection of financial planning worksheets, 
                checklists, and guides to help you organize your finances and stay on track.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-body">Monthly budget templates</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-body">Financial goal setting worksheets</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-body">Investment tracking spreadsheets</span>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-body">Retirement planning checklists</span>
                </div>
              </div>
              <button className="btn-primary inline-flex items-center">
                Download Resources
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Planning Tips */}
      <section className="py-16 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
              Financial Planning Tips & Insights
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
              Learn from our experts with practical tips and insights to improve your financial planning.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Start Early, Stay Consistent",
                description: "The earlier you begin saving and investing, the more time your money has to grow through compound interest.",
                category: "Saving",
                icon: "⏰"
              },
              {
                title: "Diversify Your Portfolio",
                description: "Spread your investments across different asset classes to reduce risk and improve potential returns.",
                category: "Investing",
                icon: "🎯"
              },
              {
                title: "Emergency Fund First",
                description: "Build an emergency fund covering 3-6 months of expenses before focusing on other investments.",
                category: "Planning",
                icon: "🛡️"
              },
              {
                title: "Review Regularly",
                description: "Schedule quarterly reviews of your financial plan to ensure it stays aligned with your goals.",
                category: "Maintenance",
                icon: "📊"
              },
              {
                title: "Tax-Efficient Investing",
                description: "Consider tax implications when making investment decisions to maximize after-tax returns.",
                category: "Taxes",
                icon: "💰"
              },
              {
                title: "Professional Guidance",
                description: "Consider working with a financial advisor for complex planning needs and ongoing support.",
                category: "Advice",
                icon: "🤝"
              }
            ].map((tip, index) => (
              <div key={index} className="card-modern p-8 text-center group hover:scale-105 transition-transform duration-300">
                <div className="text-5xl mb-6">{tip.icon}</div>
                <div className="mb-4">
                  <span className="inline-block bg-primary/20 text-primary px-3 py-1 rounded-full text-sm font-medium font-body">
                    {tip.category}
                  </span>
                </div>
                <h3 className="text-xl font-heading font-bold text-gray-900 mb-4">{tip.title}</h3>
                <p className="text-gray-600 leading-relaxed font-body">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Ready to Start Planning?
          </h2>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed font-body">
            Use our tools and resources to take control of your financial future. 
            For personalized guidance, schedule a consultation with our experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="btn-primary inline-flex items-center"
            >
              Schedule Consultation
            </Link>
            <Link 
              href="/services" 
              className="btn-secondary inline-flex items-center"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
