// components/common/RouteFallbackLoader.jsx
import React from 'react'

const RouteFallbackLoader = () => {
  return (
    <div style={styles.container}>
      <div style={styles.spinner} />
      <p style={styles.text}>Loading page...</p>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '300px',
    width: '100%'
  },
  spinner: {
    width: '40px',
    height: '40px',
    border: '3px solid rgba(59, 130, 246, 0.1)',
    borderTop: '3px solid #3b82f6',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite',
    marginBottom: '16px'
  },
  text: {
    color: '#64748b',
    fontSize: '0.9rem'
  }
}

// Add styles if needed
if (typeof document !== 'undefined') {
  const styleId = 'route-loader-styles'
  if (!document.getElementById(styleId)) {
    const styleEl = document.createElement('style')
    styleEl.id = styleId
    styleEl.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `
    document.head.appendChild(styleEl)
  }
}

export default RouteFallbackLoader