# British Educational Network (BEN) Website

A modern, responsive website for British Educational Network - a premier O & A Level coaching center in Multan, Pakistan.

## 🌟 Features

- **Modern Design**: Clean, professional interface with BEN's signature red and gold color scheme
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **WhatsApp Integration**: Primary contact method with instant messaging
- **Google Maps Integration**: Real location with embedded maps and directions
- **Fast Performance**: Built with Next.js 14+ and optimized for speed
- **SEO Optimized**: Comprehensive meta tags and structured data
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🚀 Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS v4 (CSS-based configuration)
- **Icons**: FontAwesome (Free Solid & Brands)
- **Animations**: Framer Motion (ready for implementation)
- **Maps**: Google Maps Embed API
- **Analytics**: Google Analytics 4 (ready for setup)
- **Deployment**: Vercel-ready
- **Fonts**: Google Fonts (Merriweather, Playfair Display, Lato, Open Sans)

## 📁 Project Structure

```
ben-website/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── globals.css         # Global styles & Tailwind config
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.js            # Homepage
│   │   ├── academics/         # Academics page
│   │   ├── instructors/       # Instructors page
│   │   └── contact/           # Contact page
│   ├── components/
│   │   ├── layout/            # Header, Footer
│   │   ├── sections/          # Page sections
│   │   └── ui/                # Reusable UI components
│   └── data/                  # Static data files
├── public/                    # Static assets
└── ...config files
```

## 🎨 Design System

### Colors
- **Primary Red**: `#8B0000` - Main brand color
- **Primary Gold**: `#FFD700` - Accent color
- **Neutral Light**: `#F5F5F5` - Background
- **Neutral Dark**: `#333333` - Text

### Typography
- **Headings**: Merriweather, Playfair Display (serif)
- **Body**: Lato, Open Sans (sans-serif)

### Components
- **Button**: Primary, Secondary, Outline variants
- **Card**: Reusable card component with hover effects
- **WhatsAppFloat**: Floating WhatsApp contact button

## 📄 Pages

### 1. Homepage (`/`)
- Hero section with main CTA
- About Us with key statistics
- Subjects Offered (O & A Level)
- Why Choose Us features
- Student testimonials
- Admissions announcement

### 2. Academics (`/academics`)
- Academic programs overview
- Detailed subject listings
- Teaching methodology
- Class options (On-campus, Online, Recorded)
- Study resources provided
- Exam preparation programs

### 3. Instructors (`/instructors`)
- Faculty introduction
- Instructor profiles grid
- What makes faculty exceptional
- Demo class booking section

### 4. Contact (`/contact`)
- Multiple contact methods
- Office hours and location
- Google Maps integration
- Campus visit scheduling
- WhatsApp support options

## 📱 WhatsApp Integration

Primary contact method with pre-filled messages for different purposes:

- **General Inquiries**: Admissions, fees, timings
- **Trial Classes**: Free demo class booking
- **Campus Visits**: Tour scheduling
- **Academic Counseling**: Subject and career guidance
- **Support**: 24/7 instant assistance

**Contact Number**: +92 300 1234567

## 🗺️ Location

- **Address**: Main Campus, Multan, Punjab, Pakistan
- **Coordinates**: 30.165669, 71.409663
- **Google Maps**: [View Location](https://maps.app.goo.gl/9KtJqBCgxWrTGdza9)

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd ben-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Update the following variables:
   ```env
   # Google Analytics
   NEXT_PUBLIC_GA_ID=your_google_analytics_id
   
   # Google Maps
   NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   NEXT_PUBLIC_MAPS_LAT=30.165669
   NEXT_PUBLIC_MAPS_LNG=71.409663
   NEXT_PUBLIC_MAPS_LINK=https://maps.app.goo.gl/9KtJqBCgxWrTGdza9
   
   # WhatsApp Contact
   NEXT_PUBLIC_WHATSAPP_NUMBER=+923001234567
   
   # Site URL
   NEXT_PUBLIC_SITE_URL=https://your-domain.com
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect repository to Vercel**
2. **Add environment variables** in Vercel dashboard
3. **Deploy** - Automatic deployments on push to main

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Export static files** (if needed)
   ```bash
   npm run export
   ```

## 📊 Performance Optimizations

- **Image Optimization**: Next.js automatic image optimization
- **Font Loading**: Google Fonts with preload hints
- **Code Splitting**: Automatic with Next.js App Router
- **Lazy Loading**: Components loaded on demand
- **Caching**: Static generation for better performance

## 🎯 SEO Features

- **Meta Tags**: Comprehensive title, description, keywords
- **Open Graph**: Social media sharing optimization
- **Structured Data**: JSON-LD for search engines
- **Sitemap**: Automatic generation
- **Mobile-First**: Responsive design for mobile SEO

## 📞 Contact Information

- **Phone**: +92 300 1234567
- **Email**: info@ben-multan.com
- **WhatsApp**: +92 300 1234567
- **Address**: Main Campus, Multan, Punjab, Pakistan
- **Office Hours**: Monday - Saturday, 9:00 AM - 8:00 PM

## 🔮 Future Enhancements

- [ ] **Blog System**: Educational content and announcements
- [ ] **Online Portal**: Student login and progress tracking
- [ ] **Payment Gateway**: Online fee payment system
- [ ] **Live Chat**: Real-time customer support
- [ ] **Course Management**: Dynamic course scheduling
- [ ] **Student Reviews**: Integrated testimonial system
- [ ] **Multi-language**: Urdu language support
- [ ] **Mobile App**: React Native companion app

## 🐛 Known Issues

- Blog section is prepared but not implemented (marked as future enhancement)
- Social media links are placeholder (need real URLs)
- Some placeholder images need to be replaced with actual photos
- Google Maps API key needs to be configured for production

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and confidential. All rights reserved by British Educational Network (BEN).

## 👨‍💻 Development Team

- **Frontend Development**: Next.js, Tailwind CSS, React
- **UI/UX Design**: Modern, responsive design system
- **Content Management**: Static content with easy updates
- **Integration**: WhatsApp, Google Maps, Analytics

---

**Built with ❤️ for British Educational Network (BEN) - Excellence in O & A Level Education**
