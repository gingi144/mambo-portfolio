import React from 'react'
import { motion } from 'framer-motion'
import { Home, ArrowLeft, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div style={styles.container}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        style={styles.content}
      >
        {/* Animated 404 */}
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          transition={{ 
            duration: 0.5,
            type: "spring",
            stiffness: 200
          }}
          style={styles.numberContainer}
        >
          <span style={styles.number}>4</span>
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 10, 0],
              scale: [1, 1.1, 1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 1
            }}
            style={styles.zero}
          >
            0
          </motion.div>
          <span style={styles.number}>4</span>
        </motion.div>

        {/* Error Icon */}
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 1,
            delay: 0.3
          }}
          style={styles.errorIcon}
        >
          <AlertCircle size={64} />
        </motion.div>

        {/* Message */}
        <h1 style={styles.title}>Page Not Found</h1>
        <p style={styles.message}>
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Search Suggestion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          style={styles.searchSuggestion}
        >
          <p style={styles.suggestionText}>
            Try searching for it or check the URL for errors.
          </p>
        </motion.div>

        {/* Action Buttons */}
        <div style={styles.buttons}>
          <Link to="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={styles.homeButton}
            >
              <Home size={20} />
              Go Home
            </motion.button>
          </Link>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            style={styles.backButton}
          >
            <ArrowLeft size={20} />
            Go Back
          </motion.button>
        </div>

        {/* Additional Links */}
        <div style={styles.links}>
          <Link to="/projects" style={styles.link}>Projects</Link>
          <Link to="/certificates" style={styles.link}>Certificates</Link>
          <Link to="/contact" style={styles.link}>Contact</Link>
        </div>

        {/* Decorative Elements */}
        <div style={styles.decorative}>
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                delay: 0.1 * i,
                duration: 0.5
              }}
              style={{
                ...styles.dot,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: i % 2 === 0 ? '#3b82f6' : '#06b6d4',
                opacity: 0.1
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Background Pattern */}
      <div style={styles.backgroundPattern}>
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            style={{
              ...styles.patternItem,
              animationDelay: `${i * 0.1}s`,
              left: `${(i % 5) * 20}%`,
              top: `${Math.floor(i / 5) * 20}%`
            }}
          />
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    position: 'relative',
    overflow: 'hidden',
    background: 'var(--bg-primary)'
  },
  content: {
    textAlign: 'center',
    position: 'relative',
    zIndex: 2,
    maxWidth: '600px',
    width: '100%'
  },
  numberContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '32px',
    gap: '8px'
  },
  number: {
    fontSize: '8rem',
    fontWeight: '900',
    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: 1
  },
  zero: {
    fontSize: '8rem',
    fontWeight: '900',
    background: 'linear-gradient(135deg, #ec4899, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    lineHeight: 1
  },
  errorIcon: {
    margin: '0 auto 32px',
    color: '#f59e0b',
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '800',
    margin: '0 0 16px',
    color: 'var(--text-primary)'
  },
  message: {
    fontSize: '1.125rem',
    color: 'var(--text-secondary)',
    margin: '0 auto 32px',
    maxWidth: '400px',
    lineHeight: '1.6'
  },
  searchSuggestion: {
    background: 'var(--bg-secondary)',
    borderRadius: '12px',
    padding: '20px',
    margin: '0 auto 32px',
    maxWidth: '400px',
    border: '1px solid var(--border-color, #e5e7eb)'
  },
  suggestionText: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
    margin: 0
  },
  buttons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '16px',
    marginBottom: '48px',
    flexWrap: 'wrap'
  },
  homeButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '16px 32px',
    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    border: 'none',
    borderRadius: '12px',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    textDecoration: 'none'
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    padding: '16px 32px',
    background: 'var(--bg-secondary)',
    border: '2px solid var(--border-color, #e5e7eb)',
    borderRadius: '12px',
    color: 'var(--text-primary)',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '24px',
    flexWrap: 'wrap'
  },
  link: {
    color: '#3b82f6',
    fontSize: '0.875rem',
    fontWeight: '500',
    textDecoration: 'none',
    transition: 'all 0.2s ease',
    padding: '8px 16px',
    borderRadius: '8px'
  },
  decorative: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: 'none',
    zIndex: 1
  },
  dot: {
    position: 'absolute',
    width: '60px',
    height: '60px',
    borderRadius: '50%',
    filter: 'blur(20px)'
  },
  backgroundPattern: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    opacity: 0.05,
    zIndex: 1
  },
  patternItem: {
    position: 'absolute',
    width: '20%',
    height: '20%',
    border: '2px solid #3b82f6',
    borderRadius: '50%',
    animation: 'float 6s ease-in-out infinite'
  }
}

// Add hover effects
styles.homeButton[':hover'] = {
  boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)',
  transform: 'translateY(-2px)'
}

styles.backButton[':hover'] = {
  borderColor: '#3b82f6',
  color: '#3b82f6',
  transform: 'translateY(-2px)'
}

styles.link[':hover'] = {
  background: 'rgba(59, 130, 246, 0.1)',
  transform: 'translateY(-2px)'
}

// Add animations
const notFoundStyleSheet = document.createElement('style')
notFoundStyleSheet.textContent = `
  @keyframes float {
    0%, 100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(180deg);
    }
  }
`
document.head.appendChild(notFoundStyleSheet)

export default NotFound