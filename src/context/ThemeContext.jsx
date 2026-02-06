import React, { createContext, useContext, useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ThemeContext = createContext()

export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : 
      window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
      document.documentElement.style.setProperty('--bg-primary', '#0a0a0f')
      document.documentElement.style.setProperty('--bg-secondary', '#12121a')
      document.documentElement.style.setProperty('--text-primary', '#f0f0f5')
      document.documentElement.style.setProperty('--text-secondary', '#a0a0b0')
      document.documentElement.style.setProperty('--border-color', '#222233')
      document.documentElement.style.setProperty('--card-bg', '#161622')
      document.documentElement.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)')
      document.documentElement.style.setProperty('--gradient-secondary', 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)')
    } else {
      document.documentElement.classList.remove('dark')
      document.documentElement.style.setProperty('--bg-primary', '#ffffff')
      document.documentElement.style.setProperty('--bg-secondary', '#f8f9ff')
      document.documentElement.style.setProperty('--text-primary', '#1a1a2e')
      document.documentElement.style.setProperty('--text-secondary', '#4a4a6e')
      document.documentElement.style.setProperty('--border-color', '#e0e0ff')
      document.documentElement.style.setProperty('--card-bg', '#ffffff')
      document.documentElement.style.setProperty('--gradient-primary', 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)')
      document.documentElement.style.setProperty('--gradient-secondary', 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)')
    }
  }, [isDarkMode])

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
  }

  // Add floating particles on theme change
  const ThemeParticles = () => (
    <AnimatePresence>
      {mounted && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            pointerEvents: 'none',
            zIndex: 9999,
            background: isDarkMode 
              ? 'radial-gradient(ellipse at center, rgba(102, 126, 234, 0.1) 0%, transparent 70%)'
              : 'radial-gradient(ellipse at center, rgba(79, 70, 229, 0.1) 0%, transparent 70%)',
          }}
        />
      )}
    </AnimatePresence>
  )

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeParticles />
      {children}
    </ThemeContext.Provider>
  )
}