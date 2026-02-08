import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, Sparkles, Home, User, Briefcase, Award, Mail, 
  ChevronRight, Terminal, Cloud, Cpu
} from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const location = useLocation()

  // Navigation items
  const navItems = [
    { path: '/', label: 'Home', icon: <Home size={18} /> },
    { path: '/about', label: 'About', icon: <User size={18} /> },
    { path: '/projects', label: 'Projects', icon: <Briefcase size={18} /> },
    { path: '/skills', label: 'Skills', icon: <Cpu size={18} /> },
    { path: '/certificates', label: 'Certificates', icon: <Award size={18} /> },
    { path: '/contact', label: 'Contact', icon: <Mail size={18} /> },
  ]

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location.pathname])

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          background: scrolled 
            ? 'rgba(2, 6, 23, 0.95)' 
            : 'rgba(2, 6, 23, 0.85)',
          borderBottom: `1px solid ${scrolled ? 'rgba(14, 165, 233, 0.2)' : 'rgba(14, 165, 233, 0.1)'}`,
          transition: 'all 0.3s ease',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.2)' : 'none',
          height: '70px',
        }}
      >
        <div style={{
          maxWidth: '1280px',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
          {/* Logo */}
          <Link 
            to="/" 
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              textDecoration: 'none',
            }}
          >
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
              style={{
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(14, 165, 233, 0.3)',
              }}
            >
              <Terminal style={{ color: 'white' }} size={20} />
            </motion.div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{
                fontSize: '1.25rem',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-0.5px',
              }}>
                Mambo Dev
              </span>
              <span style={{
                fontSize: '0.7rem',
                fontWeight: 600,
                color: '#94a3b8',
                letterSpacing: '0.5px',
                textTransform: 'uppercase',
              }}>
                Cloud Engineer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          {!isMobile && (
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(15, 23, 42, 0.4)',
              padding: '0.5rem',
              borderRadius: '12px',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(14, 165, 233, 0.1)',
            }}>
              {navItems.map((item) => {
                const isActive = location.pathname === item.path
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      padding: '0.75rem 1.25rem',
                      color: isActive ? 'white' : '#94a3b8',
                      fontWeight: 600,
                      fontSize: '0.9375rem',
                      textDecoration: 'none',
                      borderRadius: '8px',
                      background: isActive 
                        ? 'linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(139, 92, 246, 0.2))' 
                        : 'transparent',
                      position: 'relative',
                      overflow: 'hidden',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <div style={{ 
                      opacity: isActive ? 1 : 0.7,
                      transition: 'opacity 0.3s ease'
                    }}>
                      {item.icon}
                    </div>
                    <span>{item.label}</span>
                    
                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="navbar-active"
                        style={{
                          position: 'absolute',
                          bottom: 0,
                          left: 0,
                          right: 0,
                          height: '2px',
                          background: 'linear-gradient(90deg, #0ea5e9, #8b5cf6)',
                        }}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </Link>
                )
              })}
            </div>
          )}

          {/* Mobile Menu Button */}
          {isMobile && (
            <motion.button
              style={{
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(14, 165, 233, 0.1)',
                border: '1px solid rgba(14, 165, 233, 0.2)',
                borderRadius: '10px',
                color: '#94a3b8',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              animate={{ rotate: isOpen ? 90 : 0 }}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </motion.button>
          )}
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay - FIXED VERSION */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <>
            {/* Backdrop - Increased z-index */}
            <motion.div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(0, 0, 0, 0.7)',
                backdropFilter: 'blur(4px)',
                zIndex: 1100, // Increased from 999
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            {/* Mobile Menu Content - Moved outside nav and increased z-index */}
            <motion.div
              style={{
                position: 'fixed',
                top: '70px',
                left: 0,
                right: 0,
                bottom: 0,
                background: '#0f172a',
                borderTop: '1px solid rgba(14, 165, 233, 0.3)',
                zIndex: 1101, // Increased from 1000
                overflowY: 'auto',
                padding: '2rem 1.5rem',
                boxShadow: '0 -10px 30px rgba(0, 0, 0, 0.3)',
              }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              {/* Navigation Items */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.75rem',
                marginBottom: '2rem',
              }}>
                {navItems.map((item, index) => {
                  const isActive = location.pathname === item.path
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      <Link
                        to={item.path}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '1.25rem 1.5rem',
                          color: isActive ? 'white' : '#e2e8f0',
                          fontWeight: 600,
                          textDecoration: 'none',
                          borderRadius: '14px',
                          background: isActive 
                            ? 'linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(139, 92, 246, 0.2))' 
                            : 'rgba(255, 255, 255, 0.08)',
                          border: isActive 
                            ? '1px solid rgba(14, 165, 233, 0.4)'
                            : '1px solid rgba(255, 255, 255, 0.1)',
                          transition: 'all 0.3s ease',
                          boxShadow: isActive ? '0 4px 15px rgba(14, 165, 233, 0.2)' : 'none',
                        }}
                        onClick={() => setIsOpen(false)}
                      >
                        <div style={{ 
                          display: 'flex', 
                          alignItems: 'center', 
                          gap: '1.25rem',
                          fontSize: '1.1rem'
                        }}>
                          <div style={{ 
                            opacity: isActive ? 1 : 0.8,
                            transition: 'opacity 0.3s ease',
                            color: isActive ? '#0ea5e9' : '#94a3b8'
                          }}>
                            {item.icon}
                          </div>
                          <span style={{
                            fontSize: '1.05rem',
                            fontWeight: isActive ? 700 : 600,
                          }}>
                            {item.label}
                          </span>
                        </div>
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                          style={{
                            color: isActive ? '#0ea5e9' : '#64748b'
                          }}
                        >
                          <ChevronRight size={18} />
                        </motion.div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              {/* Call to Action Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{
                  padding: '1.75rem',
                  background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(139, 92, 246, 0.1))',
                  borderRadius: '18px',
                  border: '1px solid rgba(14, 165, 233, 0.2)',
                  boxShadow: '0 8px 32px rgba(14, 165, 233, 0.1)',
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1.25rem',
                  marginBottom: '1.25rem' 
                }}>
                  <div style={{
                    width: '50px',
                    height: '50px',
                    background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
                    borderRadius: '12px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 15px rgba(14, 165, 233, 0.3)',
                  }}>
                    <Sparkles size={22} color="white" />
                  </div>
                  <div>
                    <div style={{ 
                      fontSize: '0.95rem', 
                      fontWeight: 600, 
                      color: '#94a3b8',
                      marginBottom: '0.25rem'
                    }}>
                      Available for opportunities
                    </div>
                    <div style={{ 
                      fontSize: '1.2rem', 
                      fontWeight: 800, 
                      color: 'white',
                      lineHeight: '1.3'
                    }}>
                      Let's build something amazing together!
                    </div>
                  </div>
                </div>
                
                <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
                  <a
                    href="mailto:contact@example.com"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.75rem',
                      padding: '1rem',
                      background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
                      color: 'white',
                      fontWeight: 700,
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontSize: '1rem',
                      transition: 'all 0.3s ease',
                      boxShadow: '0 4px 15px rgba(14, 165, 233, 0.3)',
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    <Mail size={18} />
                    Get In Touch
                  </a>
                  
                  <a
                    href="tel:+1234567890"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.75rem',
                      padding: '1rem',
                      background: 'rgba(255, 255, 255, 0.1)',
                      color: '#e2e8f0',
                      fontWeight: 600,
                      borderRadius: '12px',
                      textDecoration: 'none',
                      fontSize: '0.95rem',
                      transition: 'all 0.3s ease',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    }}
                    onClick={() => setIsOpen(false)}
                  >
                    Call Now
                  </a>
                </div>
              </motion.div>

              {/* Footer note */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                  marginTop: '2rem',
                  textAlign: 'center',
                  color: '#64748b',
                  fontSize: '0.85rem',
                  padding: '1rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                }}
              >
                <p>© {new Date().getFullYear()} Mambo Dev Portfolio</p>
                <p style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
                  Cloud Engineer & Full Stack Developer
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar
