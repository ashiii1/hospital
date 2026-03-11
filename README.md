# Dr. Demo Hospitals - Frontend Website

A modern, bilingual (English & Telugu) hospital website built with React and Vite, featuring a patient-centered design and comprehensive healthcare information.

🌐 **Live Website**: [https://www.Demohospitals.com/](https://www.Demohospitals.com/)

## 🏥 About

Frontend website for Dr. Demo Hospitals, Kavali - providing 25+ years of trusted healthcare services. The website offers a seamless user experience with multilingual support and modern UI/UX design.

## ✨ Features

- **Bilingual Support**: Full internationalization (i18n) with English and Telugu languages
- **Modern UI/UX**: Clean, responsive design with smooth animations
- **9 Complete Pages**: Home, About, Services, Doctors, Facilities, Achievements, Testimonials, Contact, 404
- **Advanced Components**: Toast notifications, page transitions, parallax effects, photo gallery, loading states
- **Fast Performance**: Built with Vite for lightning-fast load times
- **Code Splitting**: Lazy-loaded routes for optimal performance
- **Accessibility**: WCAG compliant with proper ARIA labels and semantic HTML
- **Mobile Responsive**: Optimized for all screen sizes (mobile, tablet, desktop)
- **SEO Optimized**: Meta tags, Open Graph, Google Site Verification
- **WhatsApp Integration**: Floating button and multiple CTAs for easy patient contact

## 🚀 Tech Stack

- **React 19** - UI library
- **Vite 7** - Build tool and dev server
- **React Router DOM 7** - Client-side routing
- **Framer Motion 12** - Smooth animations
- **Custom i18n** - Internationalization solution
- **CSS3** - Modern styling with custom properties
- **ESLint** - Code quality and linting

## 📦 Installation

### Prerequisites

- Node.js 18+ and npm 9+
- Git

### Setup Steps

1. **Clone the repository**
```bash
git clone <repository-url>
cd hospital-frontend
```

2. **Install dependencies**
```bash
npm install
```

3. **Run development server**
```bash
npm run dev
```
The site will be available at `http://localhost:5173`

4. **Build for production**
```bash
npm run build
```
This creates optimized files in the `dist/` directory.

5. **Preview production build locally**
```bash
npm run preview
```

## 🌐 Pages

1. **Home** (`/`) - Hero section, stats, services overview, testimonials preview
2. **About** (`/about`) - Hospital history, mission, vision, and leadership
3. **Services** (`/services`) - Comprehensive medical services offered
4. **Doctors** (`/doctors`) - Medical professionals and their specialties
5. **Facilities** (`/facilities`) - Modern medical facilities and equipment
6. **Achievements** (`/achievements`) - Milestones, certifications, and awards
7. **Testimonials** (`/testimonials`) - Patient reviews and experiences
8. **Contact** (`/contact`) - Location, hours, contact information, and feedback form
9. **404** - Not found page with navigation

## 📁 Project Structure

```
hospital-frontend/
├── public/
│   ├── favicon.jpg           # Hospital logo favicon
│   └── vite.svg              # Vite logo
├── src/
│   ├── assets/               # Images, videos, and static files
│   ├── components/           # Reusable React components
│   │   ├── AnimatedSection.jsx
│   │   ├── Breadcrumbs.jsx
│   │   ├── CountUp.jsx
│   │   ├── LanguageModal.jsx
│   │   ├── LoadingScreen.jsx
│   │   ├── LoadingSkeleton.jsx
│   │   ├── PageTransition.jsx
│   │   ├── ParallaxSection.jsx
│   │   ├── PhotoGallery.jsx
│   │   ├── ScrollProgress.jsx
│   │   ├── ScrollToTop.jsx
│   │   └── Toast.jsx
│   ├── pages/                # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Doctors.jsx
│   │   ├── Facilities.jsx
│   │   ├── Achievements.jsx
│   │   ├── Testimonials.jsx
│   │   ├── Contact.jsx
│   │   └── NotFound.jsx
│   ├── styles/               # Component-specific styles
│   │   ├── pageTransition.css
│   │   ├── parallax.css
│   │   ├── photoGallery.css
│   │   └── toast.css
│   ├── hooks/                # Custom React hooks
│   │   └── useScrollAnimation.js
│   ├── App.jsx               # Main app component with routing
│   ├── App.css               # Global app styles
│   ├── i18n.jsx              # Internationalization setup
│   ├── index.css             # Global base styles
│   └── main.jsx              # App entry point
├── index.html                # HTML template
├── package.json              # Dependencies and scripts
├── vite.config.js            # Vite configuration
└── eslint.config.js          # ESLint configuration
```

## 🎨 Design System

### Colors
- **Primary**: `#2a5b6c` (Teal-blue) - Main brand color
- **Secondary**: `#1a3a47` (Dark teal) - Headers and emphasis
- **Accent**: `#25D366` (WhatsApp green) - CTAs
- **Background**: `#f8f9fa` (Light gray)
- **Text**: `#333333` (Dark gray)
- **White**: `#ffffff`

### Typography
- **Font Family**: Montserrat (Google Fonts)
- **Weights**: 400 (Regular), 600 (Semi-bold), 700 (Bold)

### Breakpoints
- Mobile: `< 768px`
- Tablet: `768px - 1024px`
- Desktop: `> 1024px`

## 🛠️ Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

### Code Quality

The project uses ESLint for code quality. Run linting before committing:

```bash
npm run lint
```

## 🚀 Deployment

**Current Deployment**: Render + Wix Domain

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

**Quick Deploy:**
1. Push code to GitHub
2. Render automatically builds and deploys
3. Site is live at https://www.Demohospitals.com/

## 📝 Content Management

For detailed instructions on updating content, see [CONTENT_UPDATE_GUIDE.md](./CONTENT_UPDATE_GUIDE.md)

### Quick Content Updates

**Update text content:**
- Edit translations in `src/i18n.jsx`

**Update images:**
- Replace files in `src/assets/`
- Update imports in page components

**Add testimonials:**
- Edit testimonials array in `src/pages/Testimonials.jsx`

## 🧩 Components

For detailed component documentation, see [COMPONENTS.md](./COMPONENTS.md)

**Key Components:**
- Toast notifications for user feedback
- Page transitions for smooth navigation
- Parallax effects for visual depth
- Photo gallery with lightbox
- Loading skeletons for better UX
- Breadcrumb navigation

## 🌍 Internationalization

The site supports English and Telugu. All text content is managed through the i18n system.

**Add/Edit translations:**
1. Open `src/i18n.jsx`
2. Update the `translations` object
3. Add corresponding Telugu text

**Language toggle:**
- Top-right corner of the website
- Automatically persists user preference

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## ♿ Accessibility

- WCAG AA compliant
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Screen reader compatible
- Reduced motion support

## 🔧 Configuration

### Environment Variables

See [ENVIRONMENT.md](./ENVIRONMENT.md) for environment variable documentation.

Currently, the project doesn't require environment variables for basic functionality.

## 📞 Support

For technical support or hosting issues, see [SUPPORT.md](./SUPPORT.md)

**Quick Contacts:**
- **Website**: https://www.Demohospitals.com/
- **Hospital Phone**: +91 99127 57854
- **Location**: Kavali, Nellore District, Andhra Pradesh

## 🐛 Troubleshooting

### Development Issues

**Issue: Port already in use**
```bash
# Kill process on port 5173
npx kill-port 5173
# Then run dev server again
npm run dev
```

**Issue: Dependencies not installing**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue: Build fails**
```bash
# Check Node version (should be 18+)
node --version
# Update dependencies
npm update
```

### Production Issues

**Issue: Images not loading**
- Check image paths are relative
- Ensure images are in `src/assets/` or `public/`
- Verify import statements

**Issue: Routes not working**
- Check React Router configuration
- Ensure Render is configured for SPA (redirects to index.html)

## 📄 Documentation

- [README.md](./README.md) - This file (project overview)
- [COMPONENTS.md](./COMPONENTS.md) - Component documentation
- [CONTENT_UPDATE_GUIDE.md](./CONTENT_UPDATE_GUIDE.md) - Content update instructions
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
- [ENVIRONMENT.md](./ENVIRONMENT.md) - Environment variables
- [SUPPORT.md](./SUPPORT.md) - Support and contact information
- [FEATURES.md](./FEATURES.md) - New features documentation

## 📊 Performance

- Lighthouse Score: 90+ (Performance, Accessibility, Best Practices, SEO)
- First Contentful Paint: < 1.5s
- Time to Interactive: < 3s
- Bundle Size: Optimized with code splitting

## 🔐 Security

- No sensitive data in client-side code
- HTTPS enabled via Render
- XSS protection via React's built-in sanitization
- CSP headers recommended for production

## 🎯 Future Enhancements

Potential features for future development:
- Online appointment booking system
- Patient portal login
- Blog/news section
- Live chat support
- Multilingual support (add more languages)
- Backend API integration
- Admin dashboard for content management

## 📜 License

© 2025 Dr. Demo Hospitals. All rights reserved.

This is a proprietary project for Dr. Demo Hospitals, Kavali.

## 👨‍💻 Development Team

**Developer**: Sai Sharan V  
**Company**: Course5 Intelligence (C5I.AI)  
**Email**: [saisharanvishnu@gmail.com](mailto:saisharanvishnu@gmail.com)  
**Phone**: [+91 63839 91383](tel:+916383991383)  
**LinkedIn**: [linkedin.com/in/sai-sharan-vishnu](https://www.linkedin.com/in/sai-sharan-vishnu/)  
**Availability**: Ad-hoc updates (billed separately at ₹1,000/hour)

---

**Built with ❤️ for Dr. Demo Hospitals**

For questions or support, please refer to [SUPPORT.md](./SUPPORT.md)
