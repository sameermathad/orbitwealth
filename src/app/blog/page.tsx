import Link from 'next/link';
import Image from 'next/image';

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "5 Steps to Building a Solid Emergency Fund",
      excerpt: "Learn how to create a financial safety net that protects you and your family during unexpected situations. We'll walk you through the essential steps to build and maintain an emergency fund that gives you peace of mind.",
      content: "Building an emergency fund is one of the most important steps in financial planning. It serves as a buffer against unexpected expenses and provides financial security during challenging times. In this comprehensive guide, we'll explore the five essential steps to creating a robust emergency fund that can weather any storm.",
      category: "Financial Planning",
      readTime: "5 min read",
      publishDate: "2024-01-15",
      author: "Orbit Wealth Team",
      featured: true,
      image: "emergency fund planning and savings"
    },
    {
      id: 2,
      title: "Global Investment Opportunities in 2024",
      excerpt: "Discover international markets and investment vehicles that can diversify your portfolio and enhance returns. We'll explore the best global investment opportunities and how to access them safely.",
      content: "Global diversification is a key principle of sound investment strategy. By investing beyond domestic markets, you can access growth opportunities in different economies and reduce concentration risk. In this analysis, we'll examine the most promising global investment opportunities for 2024 and beyond.",
      category: "Global Investing",
      readTime: "7 min read",
      publishDate: "2024-01-10",
      author: "Orbit Wealth Team",
      featured: true,
      image: "global markets and international investments"
    },
    {
      id: 3,
      title: "Retirement Planning: Start Early, Retire Comfortably",
      excerpt: "Why starting your retirement planning in your 20s and 30s can make all the difference in your golden years. Learn the power of compound interest and early planning.",
      content: "Retirement planning is often viewed as something to worry about later in life, but the truth is that the earlier you start, the better your chances of achieving financial freedom. Compound interest works best when given time, and early planning allows for more aggressive strategies that can pay off significantly.",
      category: "Retirement",
      readTime: "6 min read",
      publishDate: "2024-01-05",
      author: "Orbit Wealth Team",
      featured: true,
      image: "retirement planning and future goals"
    },
    {
      id: 4,
      title: "Understanding Asset Allocation: The Key to Investment Success",
      excerpt: "Master the fundamentals of asset allocation and learn how to create a balanced portfolio that aligns with your risk tolerance and financial goals.",
      content: "Asset allocation is often considered the most important decision in investment management. It involves dividing your investment portfolio among different asset classes such as stocks, bonds, and cash. The right allocation can help you achieve your financial goals while managing risk effectively.",
      category: "Investment Strategy",
      readTime: "8 min read",
      publishDate: "2024-01-01",
      author: "Orbit Wealth Team",
      featured: false,
      image: "portfolio diversification and asset allocation"
    },
    {
      id: 5,
      title: "Tax-Efficient Investing: Maximize Your Returns",
      excerpt: "Learn strategies to minimize your tax burden and keep more of your investment returns working for you. From tax-loss harvesting to retirement account optimization.",
      content: "Taxes can significantly impact your investment returns over time. By implementing tax-efficient investing strategies, you can potentially increase your after-tax returns and accelerate your wealth-building journey. This guide covers the most effective tax optimization techniques.",
      category: "Tax Planning",
      readTime: "9 min read",
      publishDate: "2023-12-28",
      author: "Orbit Wealth Team",
      featured: false,
      image: "tax planning and financial optimization"
    },
    {
      id: 6,
      title: "The Psychology of Money: How Your Mindset Affects Financial Success",
      excerpt: "Explore the behavioral aspects of financial decision-making and learn how to overcome common psychological barriers to wealth building.",
      content: "Financial success isn't just about numbers and strategies—it's also about psychology. Understanding how your emotions and mindset influence financial decisions can help you make better choices and avoid common pitfalls. Let's explore the psychology of money.",
      category: "Behavioral Finance",
      readTime: "7 min read",
      publishDate: "2023-12-20",
      author: "Orbit Wealth Team",
      featured: false,
      image: "psychology and financial decision making"
    }
  ];

  const categories = [
    { name: "Financial Planning", count: 12, color: "from-primary to-primary-medium" },
    { name: "Investment Strategy", count: 18, color: "from-primary-medium to-primary-light" },
    { name: "Retirement", count: 8, color: "from-primary-light to-primary" },
    { name: "Global Investing", count: 6, color: "from-primary to-primary-medium" },
    { name: "Tax Planning", count: 9, color: "from-primary-medium to-primary-light" },
    { name: "Behavioral Finance", count: 5, color: "from-primary-light to-primary" }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold leading-tight mb-6">
            Insights to Strengthen Your Financial Journey
          </h1>
          <p className="text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed font-body mb-8">
            Stay informed with expert insights, market analysis, and practical financial advice from our team. 
            Knowledge is power when it comes to building wealth and securing your financial future.
          </p>
          <Link 
            href="#featured-posts" 
            className="btn-primary text-lg px-8 py-3"
          >
            Read Articles
          </Link>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
              Featured Articles
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our most popular and insightful articles to help you make informed financial decisions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {featuredPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="h-48 overflow-hidden">
                  <Image
                    src="/images/advisor.jpg"
                    alt={post.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-primary-medium text-sm font-medium">{post.category}</span>
                    <span className="text-gray-500 text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold text-primary mb-3 line-clamp-2">{post.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.author}</span>
                    <Link 
                      href={`/blog/${post.id}`} 
                      className="text-primary-medium hover:text-primary font-semibold transition-colors"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content and Sidebar */}
      <section className="py-16 bg-neutral">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-primary mb-8">Latest Articles</h2>
                <div className="space-y-8">
                  {regularPosts.map((post) => (
                    <article key={post.id} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="md:col-span-1">
                          <div className="h-48 overflow-hidden rounded-xl">
                            <Image
                              src="/images/advisor.jpg"
                              alt={post.title}
                              width={400}
                              height={200}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        <div className="md:col-span-2">
                          <div className="flex items-center space-x-4 mb-3">
                            <span className="text-primary-medium text-sm font-medium">{post.category}</span>
                            <span className="text-gray-500 text-sm">{post.readTime}</span>
                            <span className="text-gray-500 text-sm">{new Date(post.publishDate).toLocaleDateString()}</span>
                          </div>
                          <h3 className="text-2xl font-bold text-primary mb-3">{post.title}</h3>
                          <p className="text-gray-600 mb-4 leading-relaxed">{post.excerpt}</p>
                          <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-500">By {post.author}</span>
                            <Link 
                              href={`/blog/${post.id}`} 
                              className="text-primary-medium hover:text-primary font-semibold transition-colors"
                            >
                              Read Full Article →
                            </Link>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Pagination */}
              <div className="flex justify-center">
                <nav className="flex items-center space-x-2">
                  <button className="px-4 py-2 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                    Previous
                  </button>
                  <button className="px-4 py-2 text-white bg-primary border border-primary rounded-lg">
                    1
                  </button>
                  <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                    2
                  </button>
                  <button className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                    3
                  </button>
                  <button className="px-4 py-2 text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-50">
                    Next
                  </button>
                </nav>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mb-8">
                <h3 className="text-xl font-bold text-primary mb-6">Categories</h3>
                <div className="space-y-3">
                  {categories.map((category, index) => (
                    <Link 
                      key={index} 
                      href={`/blog?category=${category.name.toLowerCase().replace(' ', '-')}`}
                      className="flex items-center justify-between p-3 rounded-lg hover:bg-neutral transition-colors"
                    >
                      <span className="text-gray-700">{category.name}</span>
                      <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {category.count}
                      </span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* CTA to Tools */}
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-6 text-white text-center">
                <h3 className="text-xl font-bold mb-3">Plan Your Financial Future</h3>
                <p className="text-gray-100 mb-6">
                  Use our interactive tools and calculators to gain clarity on your financial goals.
                </p>
                <Link 
                  href="/tools" 
                  className="inline-block bg-white hover:bg-primary-light text-primary-dark px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg"
                >
                  Explore Tools
                </Link>
              </div>

              {/* Recent Posts */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mt-8">
                <h3 className="text-xl font-bold text-primary mb-6">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <div key={post.id} className="border-b border-gray-200 pb-4 last:border-b-0">
                      <Link 
                        href={`/blog/${post.id}`}
                        className="text-gray-700 hover:text-primary font-medium line-clamp-2"
                      >
                        {post.title}
                      </Link>
                      <p className="text-sm text-gray-500 mt-1">{post.readTime}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="bg-white rounded-2xl p-6 shadow-lg mt-8">
                <h3 className="text-xl font-bold text-primary mb-4">Stay Updated</h3>
                <p className="text-gray-600 mb-4">
                  Get the latest financial insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <button className="w-full bg-primary hover:bg-primary-dark text-white px-4 py-2 rounded-lg font-medium transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Take Action?
          </h2>
          <p className="text-xl text-gray-100 mb-8 leading-relaxed">
            Knowledge is power, but action creates results. Use our insights to make informed decisions 
            and take the next step toward your financial goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-white hover:bg-primary-light text-primary-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-xl"
            >
              Schedule a Consultation
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
