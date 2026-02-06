import React, { useEffect, useState } from 'react'

const Loader = () => {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.')
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <div style={styles.loader}>
      <div style={styles.logoContainer}>
        <div style={styles.spinner} />
        <div style={styles.innerCircle} />
      </div>
      
      <div style={styles.textContainer}>
        <h1 style={styles.title}>Loading Portfolio</h1>
        <p style={styles.subtitle}>
          Preparing amazing experience{dots}
        </p>
      </div>

      <div style={styles.progressBar}>
        <div style={styles.progress} />
      </div>
    </div>
  )
}

const styles = {
  loader: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'var(--bg-primary)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999
  },
  logoContainer: {
    position: 'relative',
    width: '120px',
    height: '120px',
    marginBottom: '40px'
  },
  spinner: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: '8px solid rgba(59, 130, 246, 0.1)',
    borderTop: '8px solid #3b82f6',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  },
  innerCircle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '60px',
    height: '60px',
    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    borderRadius: '50%'
  },
  textContainer: {
    textAlign: 'center',
    marginBottom: '40px'
  },
  title: {
    fontSize: '2rem',
    fontWeight: '700',
    marginBottom: '12px',
    background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  subtitle: {
    color: 'var(--text-secondary)',
    fontSize: '1rem',
    opacity: 0.8
  },
  progressBar: {
    width: '200px',
    height: '4px',
    background: 'rgba(59, 130, 246, 0.1)',
    borderRadius: '2px',
    overflow: 'hidden'
  },
  progress: {
    height: '100%',
    background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
    animation: 'progress 2s ease-in-out infinite'
  }
}

// Add keyframes
const styleSheet = document.createElement('style')
styleSheet.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
  
  @keyframes progress {
    0% { width: 0%; }
    50% { width: 70%; }
    100% { width: 100%; }
  }
`
document.head.appendChild(styleSheet)

export default Loader