import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function SEOMetaTags() {
  const location = useLocation()
  
  useEffect(() => {
    const baseUrl = 'https://www.ramaswamyhospitals.com'
    
    // Define SEO data for each route
    const seoData = {
      '/': {
        title: 'Hospitals in Kavali | Kavali Super Speciality Hospital | Dr.Ramaswamy Hospitals',
        description: 'Dr.Ramaswamy Hospitals - Kavali\'s first Super Speciality Hospital. Leading hospitals in Kavali with 25+ years of trusted healthcare. Best Kavali ortho hospital, 24/7 emergency, ICU, dialysis services in Kavali, Nellore.',
        keywords: 'hospitals in kavali, kavali super speciality hospital, kavali ortho hospital, orthopedic hospital kavali, best hospital in kavali, multi specialty hospital kavali, dialysis center kavali, ICU kavali, emergency hospital kavali, ramaswamy hospitals kavali, dr ramaswamy hospitals, hospital kavali nellore, super speciality hospital nellore',
        ogTitle: 'Hospitals in Kavali | Kavali Super Speciality Hospital | Dr.Ramaswamy Hospitals',
        ogDescription: 'Kavali\'s first Super Speciality Hospital. Leading hospitals in Kavali with 25+ years of trusted healthcare. Best Kavali ortho hospital, 24/7 emergency, ICU, dialysis.',
      },
      '/about': {
        title: 'About Us | Hospitals in Kavali | Kavali Super Speciality Hospital',
        description: 'Learn about Dr.Ramaswamy Hospitals - Kavali\'s first Super Speciality Hospital. Leading hospitals in Kavali with 25+ years of excellence. Best Kavali ortho hospital with 50,000+ successful surgeries.',
        keywords: 'hospitals in kavali, kavali super speciality hospital, kavali ortho hospital, about ramaswamy hospitals, best hospital in kavali, hospital kavali history',
        ogTitle: 'About Us | Hospitals in Kavali | Kavali Super Speciality Hospital',
        ogDescription: 'Kavali\'s first Super Speciality Hospital with 25+ years of excellence. Leading hospitals in Kavali with 50,000+ successful surgeries.',
      },
      '/services': {
        title: 'Medical Services | Hospitals in Kavali | Orthopedic Hospital Kavali',
        description: 'Comprehensive medical services at Kavali\'s best Super Speciality Hospital. Orthopedic surgery, nephrology, general medicine, ICU, dialysis, emergency care in Kavali, Nellore.',
        keywords: 'hospitals in kavali, kavali super speciality hospital, kavali ortho hospital, orthopedic services kavali, medical services kavali, hospital services nellore',
        ogTitle: 'Medical Services | Hospitals in Kavali | Kavali Super Speciality Hospital',
        ogDescription: 'Comprehensive medical services at Kavali\'s best Super Speciality Hospital. Orthopedic surgery, nephrology, ICU, dialysis, emergency care.',
      },
      '/doctors': {
        title: 'Best Doctors in Kavali | Orthopedic Surgeon Kavali | Dr.Ramaswamy Hospitals',
        description: 'Meet the best doctors in Kavali at Dr.Ramaswamy Hospitals. Experienced orthopedic surgeon, nephrologist, and specialists. Leading hospitals in Kavali with expert medical team.',
        keywords: 'best doctors in kavali, orthopedic surgeon kavali, doctors kavali, kavali super speciality hospital doctors, hospital doctors nellore',
        ogTitle: 'Best Doctors in Kavali | Orthopedic Surgeon Kavali',
        ogDescription: 'Meet the best doctors in Kavali. Experienced orthopedic surgeon, nephrologist, and specialists at Kavali\'s leading Super Speciality Hospital.',
      },
      '/facilities': {
        title: 'Hospital Facilities in Kavali | ICU, Dialysis Center Kavali | Dr.Ramaswamy Hospitals',
        description: 'State-of-the-art hospital facilities in Kavali. Advanced ICU, dialysis center, operation theatres, digital X-ray, laboratory. Best Kavali super speciality hospital facilities.',
        keywords: 'hospital facilities kavali, ICU kavali, dialysis center kavali, hospital equipment kavali, kavali super speciality hospital facilities',
        ogTitle: 'Hospital Facilities in Kavali | ICU, Dialysis Center Kavali',
        ogDescription: 'State-of-the-art hospital facilities in Kavali. Advanced ICU, dialysis center, operation theatres, digital X-ray, laboratory.',
      },
      '/achievements': {
        title: 'Medical Achievements | Kavali Ortho Hospital | First Super Speciality Hospital Kavali',
        description: 'Medical achievements of Kavali\'s first Super Speciality Hospital. First MSMCH ortho in Kavali, first hip replacement, knee replacement. Leading Kavali ortho hospital achievements.',
        keywords: 'kavali ortho hospital, kavali super speciality hospital achievements, first hospital kavali, orthopedic achievements kavali',
        ogTitle: 'Medical Achievements | Kavali Ortho Hospital',
        ogDescription: 'Medical achievements of Kavali\'s first Super Speciality Hospital. First MSMCH ortho, hip replacement, knee replacement in Kavali.',
      },
      '/testimonials': {
        title: 'Patient Reviews | Hospitals in Kavali | Kavali Super Speciality Hospital',
        description: 'Read patient reviews and testimonials from Kavali\'s best Super Speciality Hospital. Trusted hospitals in Kavali with excellent patient feedback. Best Kavali ortho hospital reviews.',
        keywords: 'hospitals in kavali reviews, kavali super speciality hospital reviews, patient reviews kavali, hospital testimonials kavali',
        ogTitle: 'Patient Reviews | Hospitals in Kavali',
        ogDescription: 'Read patient reviews from Kavali\'s best Super Speciality Hospital. Trusted hospitals in Kavali with excellent patient feedback.',
      },
      '/contact': {
        title: 'Contact Us | Hospitals in Kavali | Kavali Super Speciality Hospital',
        description: 'Contact Dr.Ramaswamy Hospitals - Kavali\'s first Super Speciality Hospital. Location, phone, email. Leading hospitals in Kavali, Nellore. Emergency: +91 99127 57854',
        keywords: 'hospitals in kavali contact, kavali super speciality hospital contact, hospital kavali phone, hospital kavali address',
        ogTitle: 'Contact Us | Hospitals in Kavali',
        ogDescription: 'Contact Kavali\'s first Super Speciality Hospital. Location, phone, email. Emergency: +91 99127 57854',
      },
    }
    
    // Get SEO data for current route or use default
    const currentSEO = seoData[location.pathname] || seoData['/']
    
    // Update title
    document.title = currentSEO.title
    
    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      let meta = document.querySelector(isProperty 
        ? `meta[property="${name}"]` 
        : `meta[name="${name}"]`
      )
      
      if (!meta) {
        meta = document.createElement('meta')
        if (isProperty) {
          meta.setAttribute('property', name)
        } else {
          meta.setAttribute('name', name)
        }
        document.head.appendChild(meta)
      }
      
      meta.setAttribute('content', content)
    }
    
    // Update meta tags
    updateMetaTag('title', currentSEO.title)
    updateMetaTag('description', currentSEO.description)
    updateMetaTag('keywords', currentSEO.keywords)
    updateMetaTag('og:title', currentSEO.ogTitle, true)
    updateMetaTag('og:description', currentSEO.ogDescription, true)
    updateMetaTag('og:url', `${baseUrl}${location.pathname}`, true)
    updateMetaTag('twitter:title', currentSEO.ogTitle)
    updateMetaTag('twitter:description', currentSEO.ogDescription)
    updateMetaTag('twitter:url', `${baseUrl}${location.pathname}`)
    
  }, [location.pathname])
  
  return null
}

