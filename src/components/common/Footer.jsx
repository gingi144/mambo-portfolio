import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code,
  Server,
  Cloud,
  Terminal,
  Heart,
  ArrowUp
} from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const [isVisible, setIsVisible] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const styles = {
    footer: {
      background: 'linear-gradient(to bottom, #060606, #000000)',
      borderTop: '1px solid #374151',
      position: 'relative',
      overflow: 'hidden',
    },
    container: {
      maxWidth: '1280px',
      margin: '0 auto',
      padding: '48px 20px 24px',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '32px',
      '@media (min-width: 768px)': {
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '40px',
      },
      '@media (min-width: 1024px)': {
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '48px',
      },
    },
    brandSection: {
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
    },
    logoContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
    },
    logoIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '12px',
      background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      fontWeight: 'bold',
      fontSize: '18px',
    },
    logoText: {
      fontSize: '20px',
      fontWeight: 'bold',
      background: 'linear-gradient(to right, #60a5fa, #22d3ee)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
    },
    tagline: {
      color: '#9ca3af',
      fontSize: '12px',
    },
    description: {
      color: '#9ca3af',
      fontSize: '14px',
      lineHeight: '1.6',
    },
    socialLinks: {
      display: 'flex',
      gap: '12px',
      paddingTop: '8px',
    },
    socialLink: {
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textDecoration: 'none',
      transition: 'all 0.3s ease',
    },
    sectionTitle: {
      color: 'white',
      fontSize: '18px',
      fontWeight: '600',
      marginBottom: '24px',
      paddingBottom: '12px',
      borderBottom: '1px solid #374151',
    },
    linkList: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    linkItem: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      color: '#9ca3af',
      textDecoration: 'none',
      fontSize: '14px',
      transition: 'color 0.3s ease',
      '&:hover': {
        color: '#60a5fa',
      },
    },
    techStackGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
    },
    techBadge: {
      padding: '6px 12px',
      background: 'rgba(55, 65, 81, 0.5)',
      backdropFilter: 'blur(10px)',
      color: '#d1d5db',
      fontSize: '12px',
      borderRadius: '8px',
      border: '1px solid #4b5563',
      transition: 'all 0.3s ease',
      '&:hover': {
        borderColor: 'rgba(96, 165, 250, 0.5)',
        color: '#93c5fd',
      },
    },
    newsletterForm: {
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
    },
    emailInput: {
      width: '100%',
      padding: '12px 16px',
      borderRadius: '10px',
      background: 'rgba(55, 65, 81, 0.5)',
      border: '1px solid #4b5563',
      color: 'white',
      fontSize: '14px',
      transition: 'all 0.3s ease',
      '&:focus': {
        outline: 'none',
        borderColor: '#3b82f6',
        boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)',
      },
      '&::placeholder': {
        color: '#6b7280',
      },
    },
    subscribeButton: {
      width: '100%',
      padding: '12px 16px',
      borderRadius: '10px',
      background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
      color: 'white',
      fontSize: '14px',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      '&:hover': {
        boxShadow: '0 10px 25px rgba(59, 130, 246, 0.3)',
        transform: 'translateY(-2px)',
      },
    },
    divider: {
      height: '1px',
      background: '#374151',
      margin: '32px 0',
    },
    bottomBar: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '16px',
      textAlign: 'center',
      '@media (min-width: 768px)': {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        textAlign: 'left',
      },
    },
    copyright: {
      color: '#9ca3af',
      fontSize: '14px',
    },
    techStackText: {
      color: '#6b7280',
      fontSize: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      flexWrap: 'wrap',
      justifyContent: 'center',
    },
    heartIcon: {
      color: '#ef4444',
      animation: 'pulse 1.5s ease-in-out infinite',
    },
    techName: (color) => ({
      color: color,
      fontWeight: '500',
    }),
    legalLinks: {
      display: 'flex',
      gap: '16px',
      color: '#9ca3af',
      fontSize: '14px',
    },
    legalLink: {
      color: '#9ca3af',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      '&:hover': {
        color: '#60a5fa',
      },
    },
    backToTop: {
      position: 'fixed',
      bottom: '32px',
      right: '32px',
      width: '48px',
      height: '48px',
      borderRadius: '50%',
      background: 'linear-gradient(135deg, #3b82f6, #1d4ed8)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 4px 20px rgba(59, 130, 246, 0.3)',
      transition: 'all 0.3s ease',
      '&:hover': {
        transform: 'translateY(-4px)',
        boxShadow: '0 8px 30px rgba(59, 130, 246, 0.4)',
      },
      zIndex: 50,
    },
    gradientLine: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: '1px',
      background: 'linear-gradient(to right, transparent, #3b82f6, transparent)',
    },
    floatingParticle: (index) => ({
      position: 'absolute',
      width: '1px',
      height: '1px',
      background: 'rgba(59, 130, 246, 0.3)',
      borderRadius: '50%',
      animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
      animationDelay: `${Math.random() * 2}s`,
    }),
  }

  // Add CSS animation
  const floatAnimation = `
    @keyframes float {
      0%, 100% { transform: translateY(0) translateX(0); }
      50% { transform: translateY(-20px) translateX(10px); }
    }
    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }
  `

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    window.addEventListener('scroll', toggleVisibility)
    window.addEventListener('resize', checkMobile)
    
    checkMobile()
    toggleVisibility()

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const socialLinks = [
    { icon: <Github size={20} />, href: 'https://github.com/gingi144', label: 'GitHub', color: 'linear-gradient(135deg, #374151, #111827)' },
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/mambo-stallone-645418262/', label: 'LinkedIn', color: 'linear-gradient(135deg, #1e40af, #1e3a8a)' },
    { icon: <Mail size={20} />, href: 'mailto:stallonemambo@gmail.com', label: 'Email', color: 'linear-gradient(135deg, #dc2626, #991b1b)' },
    { icon: <ExternalLink size={20} />, href: 'https://portfolio.com', label: 'Portfolio', color: 'linear-gradient(135deg, #7c3aed, #5b21b6)' }
  ]

  const quickLinks = [
    { label: 'Projects', href: '/projects', icon: <Code size={14} /> },
    { label: 'Services', href: '/services', icon: <Server size={14} /> },
    { label: 'Cloud', href: '/cloud', icon: <Cloud size={14} /> },
    { label: 'DevOps', href: '/devops', icon: <Terminal size={14} /> }
  ]

  const techStack = [
    'React.js',
    'Next.js',
    'Node.js',
    'TypeScript',
    'AWS/Azure',
    'Docker',
    'Kubernetes',
    'MongoDB'
  ]

  return (
    <>
      <style>{floatAnimation}</style>
      <footer style={styles.footer}>
        {/* Back to top button */}
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            style={styles.backToTop}
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}

        <div style={styles.container}>
          <div style={styles.grid}>
            {/* Brand Column */}
            <div style={styles.brandSection}>
              <div style={styles.logoContainer}>
                <div style={styles.logoIcon}>M</div>
                <div>
                  <div style={styles.logoText}>Mambo Dev</div>
                  <div style={styles.tagline}>Cloud & DevOps Engineer</div>
                </div>
              </div>
              <p style={styles.description}>
                Building scalable solutions with modern technologies. 
                Focused on performance, security, and exceptional user experiences.
              </p>
              <div style={styles.socialLinks}>
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    style={{ ...styles.socialLink, background: link.color }}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links Column */}
            <div>
              <h4 style={styles.sectionTitle}>Quick Links</h4>
              <div style={styles.linkList}>
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    style={styles.linkItem}
                  >
                    {link.icon}
                    <span>{link.label}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Tech Stack Column */}
            <div>
              <h4 style={styles.sectionTitle}>Tech Stack</h4>
              <div style={styles.techStackGrid}>
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    style={styles.techBadge}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Newsletter Column */}
            <div>
              <h4 style={styles.sectionTitle}>Stay Updated</h4>
              <p style={styles.description}>
                Get the latest insights on cloud infrastructure, DevOps practices, and tech trends.
              </p>
              <form style={styles.newsletterForm}>
                <input
                  type="email"
                  placeholder="Your email"
                  style={styles.emailInput}
                />
                <button
                  type="submit"
                  style={styles.subscribeButton}
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div style={styles.divider} />

          {/* Bottom Bar */}
          <div style={styles.bottomBar}>
            <div style={styles.copyright}>
              © {currentYear} Mambo Dev. All rights reserved.
            </div>
            
            <div style={styles.techStackText}>
              <span>Built with</span>
              <Heart size={14} style={styles.heartIcon} />
              <span>using</span>
              <span style={styles.techName('#61dafb')}>React</span>
              <span style={styles.techName('#8b5cf6')}>Three.js</span>
              <span style={styles.techName('#ec4899')}>Framer Motion</span>
            </div>

            <div style={styles.legalLinks}>
              <a 
                href="/privacy" 
                style={styles.legalLink}
              >
                Privacy Policy
              </a>
              <a 
                href="/terms" 
                style={styles.legalLink}
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div style={styles.gradientLine} />
        
        {/* Floating particles */}
        {!isMobile && Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.floatingParticle(i),
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </footer>
    </>
  )
}

export default Footer