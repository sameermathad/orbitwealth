# Orbit Wealth - Financial Advisory Website

A modern, responsive website for Orbit Wealth, a boutique financial advisory firm specializing in personalized wealth management and financial planning services.

## 🌟 Overview

Orbit Wealth is a comprehensive financial advisory platform designed to help individuals and families achieve their financial goals through personalized strategies, cutting-edge technology, and expert guidance. The website showcases our services, client success stories, and provides tools for financial planning.

## ✨ Features

### 🎨 Modern Design
- **Clean, minimal aesthetic** with vibrant orange color scheme
- **Responsive design** that works seamlessly across all devices
- **Smooth animations** powered by Framer Motion
- **Interactive elements** including hover effects and parallax scrolling

### 📱 Pages & Sections
- **Homepage**: Hero section, services overview, client testimonials, and interactive tools
- **About Us**: Company story, founder profile, and core values
- **Services**: Comprehensive financial services including:
  - Financial Planning
  - Asset Allocation (AssetAlign methodology)
  - Investment Solutions
  - Global Investments
  - Retirement Planning
  - Regular Income Planning
  - Succession Planning
- **Tools & Calculators**: Interactive financial planning tools
- **Blog**: Financial insights and market updates
- **Client Stories**: Real success stories from various client segments
- **Contact**: Multiple ways to get in touch and consultation booking

### 🎯 Target Client Segments
- **NRI Families**: Managing investments across multiple countries
- **Doctors**: Optimizing high earnings and tax planning
- **CXOs**: Strategic wealth management for executives
- **Business Owners**: Succession planning and wealth preservation
- **Young Professionals**: Building wealth from the ground up
- **Retirees**: Securing retirement income and legacy planning

## 🛠️ Technology Stack

- **Framework**: Next.js 15+ with App Router
- **Styling**: Tailwind CSS 4
- **Language**: TypeScript
- **Animations**: Framer Motion
- **Fonts**: Lato (headings) and Inter (body text)
- **Deployment**: Vercel
- **Image Optimization**: Next.js Image component

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/sameermathad/orbitwealth.git
cd orbitwealth
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── about/             # About Us page
│   ├── blog/              # Blog page
│   ├── contact/           # Contact page
│   ├── services/          # Services page
│   ├── stories/           # Client Stories page
│   ├── tools/             # Tools & Calculators page
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Homepage
├── components/            # Reusable components
│   ├── Navigation.tsx     # Main navigation component
│   └── Footer.tsx         # Footer component
└── public/               # Static assets
    ├── images/           # Image assets
    └── logo files        # Brand assets
```

## 🎨 Design System

### Color Palette
- **Primary Orange**: `#ff6b35` - Main brand color
- **Primary Dark**: `#e55a2b` - Darker shade
- **Primary Medium**: `#ff8c5a` - Medium tone
- **Primary Light**: `#ffb088` - Lighter tint
- **Accent Green**: `#10b981` - Secondary accent
- **Neutral**: `#f8fafc` - Background color

### Typography
- **Headings**: Lato (300, 400, 700, 900 weights)
- **Body Text**: Inter (300, 400, 500, 600, 700 weights)

### Key Components
- **Service Cards**: Interactive hover effects with color transitions
- **Scrolling Ribbon**: Animated values display
- **Liquid Blob Frame**: Organic shape for founder image
- **Parallax Elements**: Subtle background animations

## 🚀 Deployment

The website is deployed on Vercel and automatically updates when changes are pushed to the main branch.

### Manual Deployment
```bash
npm run build
npm run start
```

## 📝 Content Management

The website content is managed through React components and can be easily updated by modifying the respective page files in the `src/app/` directory.

### Key Content Areas
- **Services**: Update service descriptions in `src/app/services/page.tsx`
- **Client Stories**: Modify stories in `src/app/stories/page.tsx`
- **About Us**: Update company information in `src/app/about/page.tsx`
- **Contact**: Update contact information in `src/app/contact/page.tsx`

## 🔧 Customization

### Adding New Pages
1. Create a new directory in `src/app/`
2. Add a `page.tsx` file with your page component
3. Update navigation in `src/components/Navigation.tsx`

### Styling Changes
- Global styles: `src/app/globals.css`
- Component-specific styles: Use Tailwind classes
- CSS variables: Defined in `globals.css` for consistent theming

## 📞 Contact

For questions about the website or technical issues, please contact the development team.

## 📄 License

This project is proprietary to Orbit Wealth. All rights reserved.

---

**Orbit Wealth** - Where Financial Dreams Take Flight 🚀