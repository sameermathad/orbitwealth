import Link from 'next/link';
import Image from 'next/image';

export default function ClientStoriesPage() {
  const clientStories = [
    {
      id: 1,
      type: "NRI Family",
      title: "Managing Global Investments While Maintaining Family Ties",
      challenge: "A family of four living across three countries needed to manage investments, maintain financial security, and plan for their children's education while dealing with multiple currencies and tax jurisdictions.",
      solution: "We developed a comprehensive global investment strategy that included currency-hedged investments, tax-efficient structures, and regular family financial planning sessions via video calls.",
      outcome: "The family now has a coordinated investment portfolio across countries, reduced tax burden, and a clear roadmap for their children's education funding. They feel confident about their financial future despite living in different time zones.",
      image: "NRI family video-calling",
      testimonial: "Orbit Wealth made managing our complex international financial situation feel simple and secure. We finally have peace of mind knowing our family's future is well-planned.",
      clientName: "Rajesh & Priya (NRI Family)",
      location: "Singapore, UK, India"
    },
    {
      id: 2,
      type: "Doctors",
      title: "Balancing High Earnings with Smart Tax Planning",
      challenge: "A successful cardiologist was earning well but struggling with high tax bills, lack of retirement planning, and no clear strategy for building long-term wealth beyond their medical practice.",
      solution: "We created a comprehensive financial plan that included tax-efficient investment strategies, retirement planning, insurance optimization, and estate planning to protect their family's future.",
      outcome: "The doctor now saves significantly more on taxes, has a clear retirement plan, and is building wealth through diversified investments. They feel confident about retiring comfortably while maintaining their lifestyle.",
      image: "doctor at home with family",
      testimonial: "As a doctor, I was focused on saving lives but not on saving money. Orbit Wealth showed me how to secure my family's future while continuing to help others.",
      clientName: "Dr. Anjali Sharma",
      location: "Mumbai, India"
    },
    {
      id: 3,
      type: "CXOs",
      title: "Strategic Wealth Management for Corporate Executives",
      challenge: "A senior executive with complex compensation including stock options, bonuses, and deferred compensation needed a strategy to optimize wealth while managing high tax exposure and planning for early retirement.",
      solution: "We developed a sophisticated wealth management strategy that included stock option optimization, tax-efficient investment structures, and a comprehensive retirement plan that allowed for early retirement.",
      outcome: "The executive successfully exercised stock options at optimal times, minimized tax impact, and achieved early retirement with a sustainable income stream. They now enjoy financial freedom while pursuing personal interests.",
      image: "business executive in home office",
      testimonial: "Orbit Wealth's expertise in executive compensation and tax optimization helped me maximize my wealth and achieve my dream of early retirement.",
      clientName: "Vikram Mehta (Former CXO)",
      location: "Bangalore, India"
    },
    {
      id: 4,
      type: "Business Owners",
      title: "Succession Planning and Business Wealth Preservation",
      challenge: "A successful manufacturing business owner needed to plan for business succession, ensure family wealth preservation, and create a legacy for future generations while maintaining business operations.",
      solution: "We created a comprehensive succession plan that included business valuation, family governance structures, tax-efficient wealth transfer strategies, and ongoing business advisory support.",
      outcome: "The business owner successfully transferred ownership to the next generation, minimized tax implications, and created a lasting legacy. The business continues to thrive under new leadership.",
      image: "business owner in a home setting",
      testimonial: "Orbit Wealth helped us navigate the complex process of business succession while preserving our family's wealth and ensuring our legacy continues for generations.",
      clientName: "The Patel Family",
      location: "Ahmedabad, India"
    },
    {
      id: 5,
      type: "Young Professionals",
      title: "Building Wealth from the Ground Up",
      challenge: "A young software engineer in their late 20s had good income but no financial plan, high expenses, and was unsure how to start building wealth for future goals like buying a home and early retirement.",
      solution: "We developed a comprehensive financial plan that included budgeting, debt management, investment strategy, and goal-based planning for short-term and long-term objectives.",
      outcome: "The professional now has a clear budget, is debt-free, and is building wealth through systematic investments. They're on track to buy their dream home and achieve financial independence by age 45.",
      image: "young professional planning finances",
      testimonial: "Starting my financial journey with Orbit Wealth was the best decision I made. They helped me understand that building wealth is a marathon, not a sprint.",
      clientName: "Arjun Reddy",
      location: "Hyderabad, India"
    },
    {
      id: 6,
      type: "Retirees",
      title: "Securing Retirement Income and Legacy Planning",
      challenge: "A retired couple needed to ensure their retirement savings would last throughout their lifetime while creating a legacy for their children and supporting their desired lifestyle.",
      solution: "We created a sustainable withdrawal strategy, optimized their investment portfolio for income generation, and developed an estate plan that would preserve wealth for future generations.",
      outcome: "The couple now enjoys a comfortable retirement with confidence that their savings will last. They've also created a meaningful legacy for their family through charitable giving and estate planning.",
      image: "retired couple enjoying retirement",
      testimonial: "Orbit Wealth helped us transition from wealth accumulation to wealth preservation and distribution. We can enjoy our retirement knowing our family's future is secure.",
      clientName: "Mr. & Mrs. Iyer",
      location: "Chennai, India"
    }
  ];

  const clientTypes = [
    { name: "NRI Family", count: 45, description: "Managing investments across multiple countries" },
    { name: "Doctors", count: 32, description: "Optimizing high earnings and tax planning" },
    { name: "CXOs", count: 28, description: "Strategic wealth management for executives" },
    { name: "Business Owners", count: 38, description: "Succession planning and wealth preservation" },
    { name: "Young Professionals", count: 67, description: "Building wealth from the ground up" },
    { name: "Retirees", count: 23, description: "Securing retirement income and legacy" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-neutral text-foreground py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
            Lives We&apos;ve Helped
          </h1>
          <p className="text-xl text-secondary max-w-3xl mx-auto leading-relaxed font-body mb-8">
            Real stories from real people who have transformed their financial future with Orbit Wealth. 
            Discover how our personalized approach has helped families and individuals achieve their dreams.
          </p>
          <Link 
            href="#client-stories" 
            className="btn-primary text-lg px-8 py-3"
          >
            Read Stories
          </Link>
        </div>
      </section>

      {/* Client Types Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Who We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with clients from all walks of life, each with unique financial challenges and goals. 
              Our personalized approach ensures every client receives the attention and expertise they deserve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientTypes.map((type, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-gradient-to-br from-primary to-primary-medium rounded-2xl p-8 text-white h-full transition-transform duration-300 group-hover:scale-105">
                  <div className="text-center">
                    <div className="text-4xl mb-4">
                      {type.name === "NRI Family" && "🌍"}
                      {type.name === "Doctors" && "👨‍⚕️"}
                      {type.name === "CXOs" && "💼"}
                      {type.name === "Business Owners" && "🏢"}
                      {type.name === "Young Professionals" && "🚀"}
                      {type.name === "Retirees" && "🏖️"}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{type.name}</h3>
                    <p className="text-gray-100 leading-relaxed mb-4">{type.description}</p>
                    <div className="text-2xl font-bold">{type.count}+</div>
                    <div className="text-sm text-gray-200">Happy Clients</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Client Stories */}
      <section className="py-16 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Success Stories That Inspire
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each story represents a unique journey, but they all share one thing in common: 
              the power of personalized financial planning to transform lives.
            </p>
          </div>
          
          <div className="space-y-16">
            {clientStories.map((story, index) => (
              <div key={story.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="mb-6">
                    <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                      {story.type}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                      {story.title}
                    </h3>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">The Challenge</h4>
                      <p className="text-gray-700 leading-relaxed">{story.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">Our Solution</h4>
                      <p className="text-gray-700 leading-relaxed">{story.solution}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-primary mb-2">The Outcome</h4>
                      <p className="text-gray-700 leading-relaxed">{story.outcome}</p>
                    </div>
                  </div>
                  
                  <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg">
                    <blockquote className="text-gray-700 italic mb-4">
                      &ldquo;{story.testimonial}&rdquo;
                    </blockquote>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-primary">{story.clientName}</div>
                        <div className="text-sm text-gray-500">{story.location}</div>
                      </div>
                      <Link 
                        href="/contact" 
                        className="text-primary-medium hover:text-primary font-semibold transition-colors"
                      >
                        Start Your Own Journey →
                      </Link>
                    </div>
                  </div>
                </div>
                
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  {/* Client story image */}
                  <div className="w-full h-80 overflow-hidden rounded-xl">
                    <Image
                      src="/images/advisor.jpg"
                      alt={story.title}
                      width={400}
                      height={320}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              The Impact of Our Work
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers tell a story, but the real impact is measured in the lives we&apos;ve helped transform 
              and the dreams we&apos;ve helped achieve.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "👨‍👩‍👧‍👦", label: "100+ Families", description: "Diverse client base" },
              { icon: "💼", label: "Wealth Management", description: "Comprehensive strategies" },
              { icon: "⭐", label: "High Satisfaction", description: "Client feedback" },
              { icon: "🏢", label: "Since 2023", description: "Building relationships" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-medium rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{stat.label}</h3>
                <p className="text-gray-600 leading-relaxed">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Help */}
      <section className="py-16 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                How We Help Transform Financial Lives
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Personalized Approach</h3>
                    <p className="text-gray-700">Every client receives a customized financial plan tailored to their unique circumstances, goals, and values.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Expert Guidance</h3>
                    <p className="text-gray-700">Our team brings together world-class education, industry certifications, and decades of combined experience.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Ongoing Support</h3>
                    <p className="text-gray-700">We provide continuous monitoring, regular reviews, and ongoing support to keep your plan on track.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-primary mb-2">Results Focused</h3>
                    <p className="text-gray-700">We don&apos;t just create plans; we create results. Every strategy is designed with clear, measurable outcomes.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              {/* How we help image */}
              <div className="w-full h-80 overflow-hidden rounded-xl">
                <Image
                  src="/images/advisor.jpg"
                  alt="Team collaboration and client success celebration"
                  width={400}
                  height={320}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed">
            Join hundreds of families who have transformed their financial future with Orbit Wealth. 
            Your success story starts with a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white hover:bg-primary-light text-primary-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl"
            >
              Start Your Journey
            </Link>
            <Link 
              href="/services" 
              className="border-2 border-white hover:bg-white hover:text-primary-dark text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
