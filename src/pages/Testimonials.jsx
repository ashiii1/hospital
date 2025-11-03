import { useState, useEffect } from 'react'
import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { ParallaxSection } from '../components/ParallaxSection'
import CountUp from '../components/CountUp'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function Testimonials() {
  const { t } = useI18n()
  
  const testimonials = [
    {
      quote: t.testimonials.patient1Quote,
      author: t.testimonials.patient1Name,
      location: t.testimonials.patient1Location,
      rating: 5,
      featured: true
    },
    {
      quote: t.testimonials.patient2Quote,
      author: t.testimonials.patient2Name,
      location: t.testimonials.patient2Location,
      rating: 5
    },
    {
      quote: t.testimonials.patient3Quote,
      author: t.testimonials.patient3Name,
      location: t.testimonials.patient3Location,
      rating: 5
    },
    {
      quote: t.testimonials.patient4Quote,
      author: t.testimonials.patient4Name,
      location: t.testimonials.patient4Location,
      rating: 5
    },
    {
      quote: t.testimonials.patient5Quote,
      author: t.testimonials.patient5Name,
      location: t.testimonials.patient5Location,
      rating: 5
    },
    {
      quote: t.testimonials.patient6Quote,
      author: t.testimonials.patient6Name,
      location: t.testimonials.patient6Location,
      rating: 5
    }
  ]
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  
  // Auto-rotate testimonials every 5 seconds (pauses on user interaction)
  useEffect(() => {
    if (isPaused) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isPaused])
  
  // Touch swipe handlers
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX)
  }
  
  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    
    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > 50
    const isRightSwipe = distance < -50
    
    if (isLeftSwipe) {
      handleNext({ preventDefault: () => {}, stopPropagation: () => {} })
    }
    if (isRightSwipe) {
      handlePrev({ preventDefault: () => {}, stopPropagation: () => {} })
    }
    
    // Reset
    setTouchStart(0)
    setTouchEnd(0)
  }
  
  const featuredTestimonial = testimonials[currentIndex]
  const otherTestimonials = testimonials.filter((_, index) => index !== currentIndex)
  
  const handlePrev = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsPaused(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    setTimeout(() => setIsPaused(false), 3000) // Resume after 3 seconds
  }
  
  const handleNext = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setIsPaused(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    setTimeout(() => setIsPaused(false), 3000) // Resume after 3 seconds
  }
  
  const handleDotClick = (index) => {
    setIsPaused(true)
    setCurrentIndex(index)
    setTimeout(() => setIsPaused(false), 3000) // Resume after 3 seconds
  }

  // FAQ Data
  const faqs = [
    {
      question: "What specialties are available at Dr. Ramaswamy Hospitals?",
      answer: "We offer a wide range of specialties including Orthopedics, General Medicine, General Surgery, Urology, Nephrology. Our multi-speciality setup ensures that patients receive comprehensive and coordinated care under one roof."
    },
    {
      question: "Do you offer emergency and 24/7 services?",
      answer: "Yes, our hospital provides round-the-clock emergency services, supported by an experienced team of doctors, nurses, and technicians."
    },
    {
      question: "How can I book an appointment with a doctor?",
      answer: "Appointments cannot be booked before hand. We do not book appointment. We offer First in First out of patients."
    },
    {
      question: "Do you provide cashless treatment or insurance support?",
      answer: "Yes, we are empanelled with insurance providers and government health schemes. Our billing team assists patients in processing insurance claims and cashless treatment approvals smoothly."
    },
    {
      question: "Is there a pharmacy inside the hospital?",
      answer: "Yes, our in-house pharmacy operates 24/7, ensuring patients and their families can easily access prescribed medicines without delay."
    }
  ]

  const [openFAQ, setOpenFAQ] = useState(null)

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }
  
  return (
    <section className="section">
      {/* Hero Section */}
      <FadeIn>
        <div className="testimonials-hero">
          <h1>{t.testimonials.title}</h1>
          <p className="testimonials-subtitle">
            {t.testimonials.subtitle}
          </p>
        </div>
      </FadeIn>

      {/* Featured Testimonial Carousel */}
      <ScaleIn>
        <div className="testimonial-carousel-container">
          <button 
            className="carousel-btn carousel-btn-prev" 
            onClick={handlePrev} 
            aria-label="Previous testimonial"
            type="button"
          >
            ‹
          </button>
          
          <div 
            className="featured-testimonial" 
            key={currentIndex}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div className="featured-quote-icon">"</div>
            <div className="featured-testimonial-stars">
              {'★'.repeat(featuredTestimonial.rating)}
            </div>
            <p className="featured-testimonial-quote">{featuredTestimonial.quote}</p>
            <div className="featured-testimonial-author">
              <div className="featured-author-avatar">
                {featuredTestimonial.author.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <div className="featured-author-name">{featuredTestimonial.author}</div>
                <div className="featured-author-location">{featuredTestimonial.location}</div>
              </div>
            </div>
          </div>
          
          <button 
            className="carousel-btn carousel-btn-next" 
            onClick={handleNext} 
            aria-label="Next testimonial"
            type="button"
          >
            ›
          </button>
          
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </ScaleIn>

      {/* Stats Section */}
      <FadeIn>
        <div className="testimonial-stats">
          <div className="testimonial-stat">
            <div className="testimonial-stat-number">
              <CountUp end="1500" duration={2500} suffix="+" />
            </div>
            <div className="testimonial-stat-label">{t.testimonials.happyPatients}</div>
          </div>
          <div className="testimonial-stat">
            <div className="testimonial-stat-number">
              <CountUp end="4.9" duration={2000} suffix="/5" />
            </div>
            <div className="testimonial-stat-label">{t.testimonials.averageRating}</div>
          </div>
          <div className="testimonial-stat">
            <div className="testimonial-stat-number">
              <CountUp end="98" duration={2200} suffix="%" />
            </div>
            <div className="testimonial-stat-label">{t.testimonials.satisfactionRate}</div>
          </div>
        </div>
      </FadeIn>

      {/* Other Testimonials */}
      <div style={{ marginTop: 64 }}>
        <FadeIn>
          <h2 className="section-heading">{t.testimonials.whatPatientsSay}</h2>
        </FadeIn>
        
        <StaggerContainer className="testimonials-grid">
          {otherTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card-new">
              <div className="testimonial-card-stars">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-card-quote">"{testimonial.quote}"</p>
              <div className="testimonial-card-divider"></div>
              <div className="testimonial-card-footer">
                <div className="testimonial-card-avatar">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="testimonial-card-author">{testimonial.author}</div>
                  <div className="testimonial-card-location">{testimonial.location}</div>
                </div>
              </div>
            </div>
          ))}
        </StaggerContainer>
      </div>

      {/* FAQ Section */}
      <FadeIn>
        <div style={{ marginTop: 80 }}>
          <div className="faq-section-header">
            <HelpCircle className="faq-icon" size={32} />
            <h2 className="faq-section-title">Frequently Asked Questions</h2>
            <p className="faq-section-subtitle">
              Find answers to common questions about our services and facilities
            </p>
          </div>

          <div className="faq-container">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item ${openFAQ === index ? 'faq-item-open' : ''}`}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={openFAQ === index}
                  aria-controls={`faq-answer-${index}`}
                >
                  <span className="faq-question-number">{String(index + 1).padStart(2, '0')}</span>
                  <span className="faq-question-text">{faq.question}</span>
                  <ChevronDown 
                    className={`faq-chevron ${openFAQ === index ? 'faq-chevron-open' : ''}`} 
                    size={20} 
                  />
                </button>
                <div 
                  className={`faq-answer ${openFAQ === index ? 'faq-answer-open' : ''}`}
                  id={`faq-answer-${index}`}
                >
                  <div className="faq-answer-content">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  )
}