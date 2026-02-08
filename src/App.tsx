import React, { Suspense, lazy, useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Loader from './components/common/Loader'
import RouteFallbackLoader from './components/common/RouteFallbackLoader' // New component

// Lazy load pages for better performance
const Home = lazy(() => import('./pages/Home'))
const Projects = lazy(() => import('./pages/Projects'))
const Certificates = lazy(() => import('./pages/Certificates'))
const Contact = lazy(() => import('./pages/Contact'))
const About = lazy(() => import('./pages/About'))
const Skills = lazy(() => import('./pages/Skills'))

const App = () => {
  const [isInitialLoading, setIsInitialLoading] = useState(true)
  const [showContent, setShowContent] = useState(false)

  // Remove loader from body when loading completes
  useEffect(() => {
    if (isInitialLoading) {
      document.body.classList.add('initial-loading')
      document.body.style.overflow = 'hidden'
    } else {
      document.body.classList.remove('initial-loading')
      document.body.style.overflow = 'auto'
      
      // Delay content fade-in for smooth transition
      setTimeout(() => {
        setShowContent(true)
      }, 300)
    }

    return () => {
      document.body.classList.remove('initial-loading')
      document.body.style.overflow = 'auto'
    }
  }, [isInitialLoading])

  // Safety timeout
  useEffect(() => {
    const timeout = setTimeout(() => {
      if (isInitialLoading) {
        console.log('App: Safety timeout triggered')
        setIsInitialLoading(false)
      }
    }, 10000)

    return () => clearTimeout(timeout)
  }, [isInitialLoading])

  const handleLoaderComplete = () => {
    console.log('App: Initial loader completed')
    setIsInitialLoading(false)
  }

  return (
    <ThemeProvider>
      {/* Initial Loader (Full Screen) */}
      {isInitialLoading && (
        <Loader onComplete={handleLoaderComplete} />
      )}
      
      {/* Main App Content */}
      <div style={{
        ...styles.appContainer,
        opacity: showContent ? 1 : 0,
        visibility: showContent ? 'visible' : 'hidden',
        transition: 'opacity 0.8s ease, visibility 0.8s ease'
      }}>
        <Router>
          <Navbar />
          <main style={styles.mainContent}>
            <Suspense fallback={<RouteFallbackLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/certificates" element={<Certificates />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </Router>
      </div>
    </ThemeProvider>
  )
}

const styles = {
  appContainer: {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  mainContent: {
    flex: 1,
    paddingTop: '80px' // Account for fixed navbar
  }
}

export default App