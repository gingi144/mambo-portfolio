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

  // Colors
  const colors = {
    primary: '#0ea5e9',
    secondary: '#8b5cf6',
    accent: '#ec4899',
    dark: '#020617',
    light: '#f8fafc',
  }

  return (
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

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <>
            <motion.div
              style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(2, 6, 23, 0.9)',
                backdropFilter: 'blur(4px)',
                zIndex: 999,
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              style={{
                position: 'fixed',
                top: '70px',
                left: 0,
                right: 0,
                bottom: 0,
                background: 'rgba(15, 23, 42, 0.98)',
                backdropFilter: 'blur(20px)',
                borderTop: '1px solid rgba(14, 165, 233, 0.2)',
                zIndex: 1000,
                overflowY: 'auto',
                padding: '2rem 1.5rem',
              }}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
            >
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0.5rem',
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
                          padding: '1rem 1.25rem',
                          color: isActive ? 'white' : '#94a3b8',
                          fontWeight: 600,
                          textDecoration: 'none',
                          borderRadius: '12px',
                          background: isActive 
                            ? 'linear-gradient(135deg, rgba(14, 165, 233, 0.2), rgba(139, 92, 246, 0.2))' 
                            : 'rgba(255, 255, 255, 0.05)',
                          border: `1px solid ${isActive ? 'rgba(14, 165, 233, 0.3)' : 'rgba(255, 255, 255, 0.1)'}`,
                          transition: 'all 0.3s ease',
                        }}
                        onClick={() => setIsOpen(false)}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                          <div style={{ 
                            opacity: isActive ? 1 : 0.7,
                            transition: 'opacity 0.3s ease'
                          }}>
                            {item.icon}
                          </div>
                          <span>{item.label}</span>
                        </div>
                        <motion.div
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <ChevronRight size={16} />
                        </motion.div>
                      </Link>
                    </motion.div>
                  )
                })}
              </div>

              {/* Additional mobile menu content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                style={{
                  marginTop: '3rem',
                  padding: '1.5rem',
                  background: 'rgba(14, 165, 233, 0.05)',
                  borderRadius: '16px',
                  border: '1px solid rgba(14, 165, 233, 0.1)',
                }}
              >
                <div style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '1rem',
                  marginBottom: '1rem' 
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Sparkles size={18} color="white" />
                  </div>
                  <div>
                    <div style={{ 
                      fontSize: '0.875rem', 
                      fontWeight: 600, 
                      color: '#94a3b8' 
                    }}>
                      Available for opportunities
                    </div>
                    <div style={{ 
                      fontSize: '1rem', 
                      fontWeight: 700, 
                      color: 'white',
                      marginTop: '0.25rem'
                    }}>
                      Let's build something amazing
                    </div>
                  </div>
                </div>
                <a
                  href="mailto:contact@example.com"
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '0.875rem',
                    background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
                    color: 'white',
                    fontWeight: 600,
                    textAlign: 'center',
                    borderRadius: '10px',
                    textDecoration: 'none',
                    fontSize: '0.9375rem',
                    transition: 'all 0.3s ease',
                  }}
                  onClick={() => setIsOpen(false)}
                >
                  Get In Touch
                </a>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar