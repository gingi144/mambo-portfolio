// components/common/Loader.jsx
import React, { useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom'

const Loader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  const [shouldRender, setShouldRender] = useState(true)
  const startTime = useRef(Date.now())
  const duration = 7000
  const portalRef = useRef(null)

  // Create portal
  useEffect(() => {
    const portalId = 'initial-loader-portal'
    let portal = document.getElementById(portalId)
    
    if (!portal) {
      portal = document.createElement('div')
      portal.id = portalId
      portal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        z-index: 9999;
        pointer-events: auto;
        transition: opacity 0.5s ease;
      `
      document.body.appendChild(portal)
    }
    
    portalRef.current = portal
    
    return () => {
      // Clean up portal immediately when component unmounts
      if (portal && portal.parentNode) {
        portal.parentNode.removeChild(portal)
      }
    }
  }, [])

  // Progress animation - simplified
  useEffect(() => {
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime.current
      const percentage = Math.min((elapsed / duration) * 100, 100)
      setProgress(percentage)
      
      if (percentage >= 100 && !isComplete) {
        setIsComplete(true)
        clearInterval(interval)
        
        // Immediately notify parent that loading is complete
        if (onComplete) {
          console.log('Loader: Progress reached 100%, calling onComplete')
          onComplete()
        }
        
        // Start fade out immediately
        setTimeout(() => {
          setShouldRender(false)
        }, 300)
      }
    }, 50) // Update more frequently for smoother progress

    return () => clearInterval(interval)
  }, [isComplete, onComplete, duration])

  // Safety timeout - remove loader after 7.5 seconds no matter what
  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log('Loader: Safety timeout reached')
      if (onComplete) {
        onComplete()
      }
      setShouldRender(false)
    }, 7500)

    return () => clearTimeout(timeout)
  }, [onComplete])

  // Clean up portal when not rendering
  useEffect(() => {
    if (!shouldRender && portalRef.current) {
      const portal = portalRef.current
      // Add fade out animation
      portal.style.opacity = '0'
      
      // Remove from DOM after animation
      setTimeout(() => {
        if (portal && portal.parentNode) {
          portal.parentNode.removeChild(portal)
        }
      }, 500)
    }
  }, [shouldRender])

  // Don't render if portal doesn't exist or we shouldn't render
  if (!portalRef.current || !shouldRender) {
    return null
  }

  const loaderContent = (
    <div style={styles.loader}>
      <div style={styles.content}>
        <div style={styles.logoContainer}>
          <div style={styles.spinner} />
          <div style={styles.innerCircle}>
            {Math.round(progress)}%
          </div>
        </div>
        
        <h1 style={styles.title}>Loading Portfolio</h1>
        <p style={styles.subtitle}>Preparing your experience...</p>
        
        <div style={styles.progressBar}>
          <div 
            style={{
              ...styles.progressFill,
              width: `${progress}%`,
              transition: 'width 0.1s linear'
            }} 
          />
        </div>
        
        <div style={styles.counter}>
          {Math.round(progress)}% Complete
        </div>
        
        {/* Debug button - remove in production */}
        <button 
          onClick={() => {
            setProgress(100)
            setIsComplete(true)
            if (onComplete) {
              console.log('Loader: Debug button - forcing completion')
              onComplete()
            }
            setTimeout(() => setShouldRender(false), 100)
          }}
          style={styles.debugButton}
        >
          Skip Loader
        </button>
      </div>
    </div>
  )

  return ReactDOM.createPortal(loaderContent, portalRef.current)
}

const styles = {
  loader: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 9999,
    transition: 'opacity 0.3s ease'
  },
  content: {
    textAlign: 'center',
    color: 'white',
    padding: '2rem',
    maxWidth: '500px'
  },
  logoContainer: {
    position: 'relative',
    width: '120px',
    height: '120px',
    margin: '0 auto 30px'
  },
  spinner: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: '4px solid rgba(59, 130, 246, 0.2)',
    borderTop: '4px solid #3b82f6',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  },
  innerCircle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80px',
    height: '80px',
    background: 'rgba(59, 130, 246, 0.1)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    color: '#60a5fa'
  },
  title: {
    fontSize: '2.5rem',
    fontWeight: '700',
    marginBottom: '10px',
    background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  },
  subtitle: {
    color: '#94a3b8',
    fontSize: '1rem',
    marginBottom: '30px'
  },
  progressBar: {
    width: '100%',
    height: '6px',
    background: 'rgba(59, 130, 246, 0.1)',
    borderRadius: '3px',
    overflow: 'hidden',
    marginBottom: '10px'
  },
  progressFill: {
    height: '100%',
    background: 'linear-gradient(to right, #3b82f6, #06b6d4)',
    borderRadius: '3px',
    transition: 'width 0.1s linear'
  },
  counter: {
    color: '#60a5fa',
    fontSize: '0.9rem',
    marginBottom: '20px',
    fontFamily: 'monospace'
  },
  debugButton: {
    position: 'absolute',
    bottom: '20px',
    right: '20px',
    padding: '8px 16px',
    background: 'rgba(255,255,255,0.1)',
    border: '1px solid rgba(255,255,255,0.3)',
    color: 'white',
    borderRadius: '4px',
    cursor: 'pointer',
    fontSize: '12px',
    opacity: 0.7
  }
}

// Add spin animation globally
if (typeof document !== 'undefined') {
  if (!document.getElementById('loader-spin-animation')) {
    const styleEl = document.createElement('style')
    styleEl.id = 'loader-spin-animation'
    styleEl.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `
    document.head.appendChild(styleEl)
  }
}

export default Loader