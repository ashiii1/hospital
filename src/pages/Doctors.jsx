import { useI18n } from '../i18n'
import { FadeIn, StaggerContainer, ScaleIn } from '../components/AnimatedSection'
import { ParallaxSection } from '../components/ParallaxSection'
import drRamaswamy from '../assets/wetransfer_dr-jaheer-basha-jpg_2025-10-19_1041/Dr. Ramaswamy 1.jpg?format=webp&w=600&quality=80'
import drJaheerBasha from '../assets/wetransfer_dr-jaheer-basha-jpg_2025-10-19_1041/Dr. Jaheer Basha.jpg?format=webp&w=600&quality=80'
import drPadmavathi from '../assets/wetransfer_dr-jaheer-basha-jpg_2025-10-19_1041/Dr. Padmavathi.jpg?format=webp&w=600&quality=80'
import drPushpika from '../assets/wetransfer_dr-jaheer-basha-jpg_2025-10-19_1041/Dr.Pushpika.jpg?format=webp&w=600&quality=80'

export default function Doctors() {
  const { t } = useI18n()
  
  const doctors = [
    { 
      name: t.doctors.drRamaswamyName,
      specialty: t.doctors.drRamaswamySpecialty,
      bio: t.doctors.drRamaswamyBio,
      education: t.doctors.drRamaswamyEducation,
      specialties: [t.doctors.drRamaswamySpec1, t.doctors.drRamaswamySpec2],
      image: drRamaswamy
    },
    { 
      name: t.doctors.drPushpikaName,
      specialty: t.doctors.drPushpikaSpecialty,
      bio: t.doctors.drPushpikaBio,
      education: t.doctors.drPushpikaEducation,
      specialties: [t.doctors.drPushpikaSpec1, t.doctors.drPushpikaSpec2],
      image: drPushpika
    },
    { 
      name: t.doctors.drSurendraName,
      specialty: t.doctors.drSurendraSpecialty,
      bio: t.doctors.drSurendraBio,
      education: t.doctors.drSurendraEducation,
      specialties: [t.doctors.drSurendraSpec1, t.doctors.drSurendraSpec2],
      image: null
    },
    { 
      name: t.doctors.drJaheerName,
      specialty: t.doctors.drJaheerSpecialty,
      bio: t.doctors.drJaheerBio,
      education: t.doctors.drJaheerEducation,
      specialties: [t.doctors.drJaheerSpec1, t.doctors.drJaheerSpec2],
      image: drJaheerBasha
    },
    { 
      name: t.doctors.drPadmavathiName,
      specialty: t.doctors.drPadmavathiSpecialty,
      bio: t.doctors.drPadmavathiBio,
      education: t.doctors.drPadmavathiEducation,
      specialties: [t.doctors.drPadmavathiSpec1, t.doctors.drPadmavathiSpec2],
      image: drPadmavathi
    },
  ]
  
  return (
    <section className="section">
      {/* Hero Section */}
      <FadeIn>
        <div className="doctors-hero">
          <h1>{t.doctors.title}</h1>
          <p className="doctors-subtitle">
            {t.doctors.subtitle}
          </p>
        </div>
      </FadeIn>

      {/* Doctors Grid */}
      <StaggerContainer className="doctors-grid">
        {doctors.map((doctor, index) => (
          <div key={index} className="doctor-card-enhanced">
            <div className="doctor-card-header-enhanced">
              <div className="header-pattern"></div>
              <div className="doctor-avatar-wrapper">
                <div className="doctor-card-avatar-enhanced">
                  {doctor.image ? (
                    <img 
                      src={doctor.image} 
                      alt={doctor.name}
                      className="doctor-avatar-image"
                    />
                  ) : (
                    <div className="doctor-avatar-placeholder">
                      <span className="initials-text">
                        {doctor.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </span>
                    </div>
                  )}
                </div>
                <div className="avatar-glow"></div>
              </div>
            </div>
            
            <div className="doctor-card-content">
              <h3 className="doctor-name-enhanced">{doctor.name}</h3>
              <p className="doctor-specialty-enhanced">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
                </svg>
                {doctor.specialty}
              </p>
              <p className="doctor-education-enhanced">{doctor.education}</p>
              
              <div className="doctor-specialties-enhanced">
                {doctor.specialties.map((spec, idx) => (
                  <span key={idx} className="specialty-badge">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                      <circle cx="12" cy="12" r="10"/>
                    </svg>
                    {spec}
                  </span>
                ))}
              </div>
              
              <p className="doctor-bio-enhanced">{doctor.bio}</p>
              
              <div className="doctor-card-footer">
                <a href="tel:+919912757854" className="contact-doctor-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                  Contact Doctor
                </a>
              </div>
            </div>
          </div>
        ))}
      </StaggerContainer>

      {/* Why Choose Our Doctors */}
      <div style={{ marginTop: 80 }}>
        <FadeIn>
          <h2 className="section-heading">{t.doctors.whyChoose}</h2>
        </FadeIn>
        <StaggerContainer className="doctor-features-grid">
          <div className="doctor-feature-card">
            <div className="doctor-feature-number">01</div>
            <h3>{t.doctors.feature1Title}</h3>
            <p>{t.doctors.feature1Desc}</p>
          </div>
          <div className="doctor-feature-card">
            <div className="doctor-feature-number">02</div>
            <h3>{t.doctors.feature2Title}</h3>
            <p>{t.doctors.feature2Desc}</p>
          </div>
          <div className="doctor-feature-card">
            <div className="doctor-feature-number">03</div>
            <h3>{t.doctors.feature3Title}</h3>
            <p>{t.doctors.feature3Desc}</p>
          </div>
        </StaggerContainer>
      </div>

      {/* CTA Section */}
      <FadeIn>
        <div className="doctors-cta">
          <h2>{t.doctors.ctaTitle}</h2>
          <p>{t.doctors.ctaText}</p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="mailto:ramaswamyhospitals@gmail.com" className="btn btn-large">{t.doctors.emailResume}</a>
            <a href="tel:+917824055789" className="btn btn-large">{t.doctors.callNow}</a>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}