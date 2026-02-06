import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, Phone, MapPin, Send, CheckCircle, Linkedin, 
  Github, MessageCircle, Zap, Clock, User, FileText,
  ArrowRight, Sparkles, Shield, Globe
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Here you would send the data to your backend
    console.log('Form submitted:', formData)
    
    setIsSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })

    // Reset success message
    setTimeout(() => setIsSubmitted(false), 5000)
    
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <Mail size={20} />,
      title: 'Email',
      value: 'stallonemambo@gmail.com',
      color: '#0bedf5ad',
      link: 'mailto:stallonemambo@gmail.com'
    },
    {
      icon: <Phone size={20} />,
      title: 'Phone',
      value: '+254 114 811 180',
      color: '#10b981',
      link: 'tel:+254114811180'
    },
    {
      icon: <MapPin size={20} />,
      title: 'Location',
      value: 'Remote • Worldwide  Nairobi, Kenya',
      color: '#8b5cf6'
    }
  ]

  const socialLinks = [
    {
      icon: <Github size={20} />,
      label: 'GitHub',
      href: 'https://github.com/gingi144',
      color: '#181717'
    },
    {
      icon: <Linkedin size={20} />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/mambo-stallone-645418262/',
      color: '#0077B5'
    },
    {
      icon: <MessageCircle size={20} />,
      label: 'WhatsApp',
      href: 'https://wa.me/+254114811180',
      color: '#25D366'
    }
  ]

  const responseTimes = [
    { type: 'General Inquiries', time: '24 hours', icon: <Clock size={16} /> },
    { type: 'Project Proposals', time: '12 hours', icon: <FileText size={16} /> },
    { type: 'Urgent Matters', time: '4 hours', icon: <Zap size={16} /> }
  ]

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.hero}
      >
        <div style={styles.heroBadge}>
          <MessageCircle size={16} />
          <span>Let's Connect</span>
        </div>
        
        <h1 style={styles.heroTitle}>Get In Touch</h1>
        
        <p style={styles.heroSubtitle}>
          Ready to bring your ideas to life? Whether it's a quick question or a 
          complex project, I'm here to help you succeed.
        </p>
      </motion.div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Left Column - Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          style={styles.leftColumn}
        >
          {/* Contact Methods */}
          <div style={styles.contactMethods}>
            <h2 style={styles.sectionTitle}>Contact Methods</h2>
            
            <div style={styles.infoCards}>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  style={styles.infoCard}
                >
                  <div style={{
                    ...styles.infoIcon,
                    background: `${info.color}20`,
                    border: `1px solid ${info.color}30`
                  }}>
                    {info.icon}
                  </div>
                  <div style={styles.infoContent}>
                    <h3 style={styles.infoTitle}>{info.title}</h3>
                    {info.link ? (
                      <a 
                        href={info.link} 
                        style={styles.infoLink}
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p style={styles.infoValue}>{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div style={styles.socialSection}>
            <h3 style={styles.socialTitle}>Find me online</h3>
            <p style={styles.socialSubtitle}>
              Connect with me on professional networks
            </p>
            
            <div style={styles.socialLinks}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.00, y: 0 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    ...styles.socialLink,
                    background: `${social.color}15`,
                    border: `1px solid ${social.color}30`
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                  <span style={{ color: social.color }}>{social.label}</span>
                </motion.a>
              ))}
            </div>
          </div>

          {/* Response Times */}
          <div style={styles.responseSection}>
            <div style={styles.responseHeader}>
              <Clock size={20} />
              <h3 style={styles.responseTitle}>Response Time</h3>
            </div>
            
            <div style={styles.responseList}>
              {responseTimes.map((item, index) => (
                <div key={index} style={styles.responseItem}>
                  <div style={styles.responseIcon}>
                    {item.icon}
                  </div>
                  <div style={styles.responseInfo}>
                    <span style={styles.responseType}>{item.type}</span>
                    <span style={styles.responseTime}>{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Availability */}
          <div style={styles.availabilityCard}>
            <div style={styles.availabilityHeader}>
              <div style={styles.availabilityDot} />
              <span style={styles.availabilityText}>Available for work</span>
            </div>
            <p style={styles.availabilitySubtext}>
              Currently accepting new projects for Q1 2026. Let's discuss your needs and how I can help you achieve your goals.
            </p>
          </div>
        </motion.div>

        {/* Right Column - Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          style={styles.rightColumn}
        >
          <div style={styles.formCard}>
            <div style={styles.formHeader}>
              <div style={styles.formIcon}>
                <Send size={24} />
              </div>
              <div>
                <h2 style={styles.formTitle}>Send a Message</h2>
                <p style={styles.formSubtitle}>
                  Fill out the form below and I'll get back to you promptly
                </p>
              </div>
            </div>

            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={styles.successCard}
              >
                <div style={styles.successIcon}>
                  <CheckCircle size={48} />
                </div>
                <h3 style={styles.successTitle}>Message Sent!</h3>
                <p style={styles.successText}>
                  Thank you for reaching out. I'll respond to your message 
                  within 24 hours.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsSubmitted(false)}
                  style={styles.successButton}
                >
                  Send Another Message
                </motion.button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={styles.form}>
                <div style={styles.formGrid}>
                  <div style={styles.formGroup}>
                    <label style={styles.label}>
                      <User size={16} />
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={styles.input}
                      placeholder=""
                    />
                  </div>

                  <div style={styles.formGroup}>
                    <label style={styles.label}>
                      <Mail size={16} />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={styles.input}
                      placeholder=""
                    />
                  </div>
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    <FileText size={16} />
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={styles.input}
                    placeholder="Project inquiry or question"
                  />
                </div>

                <div style={styles.formGroup}>
                  <label style={styles.label}>
                    <MessageCircle size={16} />
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    style={styles.textarea}
                    placeholder="Tell me about your project, timeline, and goals..."
                    rows={5}
                  />
                </div>

                <div style={styles.formFooter}>
                  <div style={styles.privacyNote}>
                    <Shield size={14} />
                    <span>Your information is secure and will not be shared</span>
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                      ...styles.submitButton,
                      ...(isSubmitting && styles.submittingButton)
                    }}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          style={styles.spinner}
                        />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight size={18} />
                      </>
                    )}
                  </motion.button>
                </div>
              </form>
            )}
          </div>

          {/* Quick Info */}
          <div style={styles.quickInfo}>
            <div style={styles.infoItem}>
              <Sparkles size={20} color="#8b5cf6" />
              <div>
                <h4>Quick Response</h4>
                <p>Typically reply within a few hours</p>
              </div>
            </div>
            <div style={styles.infoItem}>
              <Globe size={20} color="#0ea5e9" />
              <div>
                <h4>Global Reach</h4>
                <p>Working across time zones</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={styles.ctaSection}
      >
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Ready to Start Your Project?</h2>
          <p style={styles.ctaText}>
            Let's schedule a call to discuss your requirements in detail. 
            I'll provide a comprehensive proposal and timeline.
          </p>
          <button style={styles.ctaButton}>
            Schedule a Call
            <ArrowRight size={20} />
          </button>
        </div>
      </motion.div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#020617',
    color: '#f8fafc',
    padding: '40px 20px'
  },
  
  hero: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 60px'
  },
  
  heroBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(14, 165, 233, 0.1)',
    border: '1px solid rgba(14, 165, 233, 0.2)',
    borderRadius: '20px',
    padding: '8px 16px',
    marginBottom: '20px'
  },
  
  heroTitle: {
    fontSize: '40px',
    fontWeight: '800',
    margin: '0 0 16px',
    background: 'linear-gradient(to right, #0ea5e9, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  
  heroSubtitle: {
    fontSize: '18px',
    color: '#94a3b8',
    lineHeight: '1.6',
    margin: '0 auto',
    maxWidth: '600px'
  },
  
  mainContent: {
    maxWidth: '1200px',
    margin: '0 auto 80px',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '40px'
  },
  
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  },
  
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '30px'
  },
  
  contactMethods: {
    background: 'rgba(15, 23, 42, 0.7)',
    border: '1px solid #334155',
    borderRadius: '16px',
    padding: '30px'
  },
  
  sectionTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: 'white',
    margin: '0 0 20px'
  },
  
  infoCards: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px'
  },
  
  infoCard: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    padding: '20px',
    background: 'rgba(30, 41, 59, 0.5)',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '12px',
    transition: 'all 0.3s ease'
  },
  
  infoIcon: {
    width: '48px',
    height: '48px',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  
  infoContent: {
    flex: 1
  },
  
  infoTitle: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#94a3b8',
    margin: '0 0 4px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  
  infoValue: {
    fontSize: '16px',
    fontWeight: '500',
    color: 'white',
    margin: 0
  },
  
  infoLink: {
    fontSize: '16px',
    fontWeight: '500',
    color: '#0ea5e9',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  },
  
  socialSection: {
    background: 'rgba(15, 23, 42, 0.7)',
    border: '1px solid #334155',
    borderRadius: '16px',
    padding: '30px'
  },
  
  socialTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: 'white',
    margin: '0 0 8px'
  },
  
  socialSubtitle: {
    fontSize: '14px',
    color: '#94a3b8',
    margin: '0 0 20px'
  },
  
  socialLinks: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  
  socialLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px',
    borderRadius: '10px',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  },
  
  responseSection: {
    background: 'rgba(15, 23, 42, 0.7)',
    border: '1px solid #334155',
    borderRadius: '16px',
    padding: '30px'
  },
  
  responseHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '20px',
    color: '#0ea5e9'
  },
  
  responseTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: 'white',
    margin: 0
  },
  
  responseList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  
  responseItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '12px',
    background: 'rgba(30, 41, 59, 0.5)',
    borderRadius: '8px'
  },
  
  responseIcon: {
    color: '#0ea5e9'
  },
  
  responseInfo: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  
  responseType: {
    fontSize: '14px',
    color: '#cbd5e1'
  },
  
  responseTime: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#0ea5e9'
  },
  
  availabilityCard: {
    background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(139, 92, 246, 0.1))',
    border: '1px solid rgba(14, 165, 233, 0.2)',
    borderRadius: '16px',
    padding: '20px',
    textAlign: 'center'
  },
  
  availabilityHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '8px'
  },
  
  availabilityDot: {
    width: '8px',
    height: '8px',
    background: '#10b981',
    borderRadius: '50%',
    animation: 'pulse 2s infinite'
  },
  
  availabilityText: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#10b981'
  },
  
  availabilitySubtext: {
    fontSize: '12px',
    color: '#94a3b8',
    margin: 0
  },
  
  formCard: {
    background: 'rgba(15, 23, 42, 0.7)',
    border: '1px solid #334155',
    borderRadius: '16px',
    padding: '30px'
  },
  
  formHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '30px'
  },
  
  formIcon: {
    width: '56px',
    height: '56px',
    background: 'rgba(14, 165, 233, 0.1)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0ea5e9'
  },
  
  formTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: 'white',
    margin: '0 0 4px'
  },
  
  formSubtitle: {
    fontSize: '14px',
    color: '#94a3b8',
    margin: 0
  },
  
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  
  formGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '20px'
  },
  
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  
  label: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#e2e8f0'
  },
  
  input: {
    padding: '14px 16px',
    background: 'rgba(30, 41, 59, 0.5)',
    border: '1px solid #475569',
    borderRadius: '10px',
    color: 'white',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.3s ease'
  },
  
  textarea: {
    padding: '14px 16px',
    background: 'rgba(30, 41, 59, 0.5)',
    border: '1px solid #475569',
    borderRadius: '10px',
    color: 'white',
    fontSize: '14px',
    outline: 'none',
    resize: 'vertical',
    minHeight: '120px',
    transition: 'all 0.3s ease'
  },
  
  formFooter: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    marginTop: '10px'
  },
  
  privacyNote: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '12px',
    color: '#94a3b8'
  },
  
  submitButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    background: 'linear-gradient(to right, #0ea5e9, #8b5cf6)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '16px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  
  submittingButton: {
    opacity: 0.7,
    cursor: 'not-allowed'
  },
  
  spinner: {
    width: '20px',
    height: '20px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderTopColor: 'white',
    borderRadius: '50%'
  },
  
  successCard: {
    textAlign: 'center',
    padding: '40px 20px'
  },
  
  successIcon: {
    color: '#10b981',
    margin: '0 auto 20px'
  },
  
  successTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: 'white',
    margin: '0 0 12px'
  },
  
  successText: {
    fontSize: '15px',
    color: '#94a3b8',
    margin: '0 auto 24px',
    maxWidth: '400px',
    lineHeight: '1.6'
  },
  
  successButton: {
    padding: '12px 24px',
    background: 'rgba(30, 41, 59, 0.5)',
    color: 'white',
    border: '1px solid #475569',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  
  quickInfo: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px'
  },
  
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    padding: '16px',
    background: 'rgba(15, 23, 42, 0.7)',
    border: '1px solid #334155',
    borderRadius: '12px'
  },
  
  ctaSection: {
    maxWidth: '800px',
    margin: '0 auto',
    background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(139, 92, 246, 0.1))',
    border: '1px solid rgba(14, 165, 233, 0.2)',
    borderRadius: '20px',
    padding: '40px',
    textAlign: 'center'
  },
  
  ctaContent: {
    maxWidth: '500px',
    margin: '0 auto'
  },
  
  ctaTitle: {
    fontSize: '28px',
    fontWeight: '700',
    color: 'white',
    margin: '0 0 16px'
  },
  
  ctaText: {
    fontSize: '16px',
    color: '#cbd5e1',
    margin: '0 auto 24px',
    lineHeight: '1.6'
  },
  
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: '#0ea5e9',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '14px 28px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  
  // Hover effects
  infoCardHover: {
    transform: 'translateY(-2px)',
    borderColor: '#0ea5e9',
    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
  },
  
  socialLinkHover: {
    transform: 'translateY(-2px)',
    boxShadow: '0 8px 20px rgba(0, 0, 0, 0.2)'
  },
  
  infoLinkHover: {
    color: '#38bdf8'
  },
  
  inputFocus: {
    borderColor: '#0ea5e9',
    boxShadow: '0 0 0 3px rgba(14, 165, 233, 0.1)'
  },
  
  submitButtonHover: {
    boxShadow: '0 10px 25px rgba(14, 165, 233, 0.3)'
  },
  
  successButtonHover: {
    background: 'rgba(30, 41, 59, 0.8)',
    borderColor: '#64748b'
  },
  
  ctaButtonHover: {
    boxShadow: '0 10px 25px rgba(14, 165, 233, 0.3)',
    transform: 'translateY(-2px)'
  },
  
  // Responsive styles
  '@media (min-width: 768px)': {
    formGrid: {
      gridTemplateColumns: '1fr 1fr'
    }
  },
  
  '@media (min-width: 1024px)': {
    container: {
      padding: '60px 40px'
    },
    
    mainContent: {
      gridTemplateColumns: '1fr 1fr'
    },
    
    heroTitle: {
      fontSize: '48px'
    },
    
    quickInfo: {
      gridTemplateColumns: '1fr'
    }
  }
}

// Add pulse animation
const styleSheet = document.createElement('style')
styleSheet.textContent = `
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`
document.head.appendChild(styleSheet)

export default Contact