import { useState, useEffect } from 'react'

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem('darkMode')
    if (saved !== null) {
      return JSON.parse(saved)
    }
    
    // Check system preference
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    // Update localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode))
    
    // Update document class
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    // Update CSS variables
    if (isDarkMode) {
      document.documentElement.style.setProperty('--bg-primary', '#0f172a')
      document.documentElement.style.setProperty('--bg-secondary', '#1e293b')
      document.documentElement.style.setProperty('--text-primary', '#f8fafc')
      document.documentElement.style.setProperty('--text-secondary', '#cbd5e1')
      document.documentElement.style.setProperty('--border-color', '#334155')
    } else {
      document.documentElement.style.setProperty('--bg-primary', '#ffffff')
      document.documentElement.style.setProperty('--bg-secondary', '#f8fafc')
      document.documentElement.style.setProperty('--text-primary', '#1e293b')
      document.documentElement.style.setProperty('--text-secondary', '#64748b')
      document.documentElement.style.setProperty('--border-color', '#e5e7eb')
    }
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
  }

  const setDarkMode = (value) => {
    setIsDarkMode(value)
  }

  return {
    isDarkMode,
    toggleDarkMode,
    setDarkMode
  }
}

// Media query listener for system preference changes
export const useSystemTheme = () => {
  const [systemTheme, setSystemTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  )

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    
    const handleChange = (e) => {
      setSystemTheme(e.matches ? 'dark' : 'light')
    }
    
    mediaQuery.addEventListener('change', handleChange)
    
    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return systemTheme
}