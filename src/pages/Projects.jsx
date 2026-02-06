import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { 
  Filter, Search, Grid, List, ExternalLink, 
  Github, Code, Smartphone, Server, BookOpen, 
  ShoppingCart, Brain, Truck, Zap, ArrowRight, 
  Database, Cloud, Calendar, Users, TrendingUp
} from 'lucide-react'

// Mock project images
const staraClothesImage = "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600"
const aiTroubleshootingImage = "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600"
const lmsImage = "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=600"
const saccoImage = "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600"
const foodDeliveryImage = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600"

const Projects = () => {
  const [viewMode, setViewMode] = useState('grid')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const projects = [
    {
      id: 1,
      title: 'Stara Clothes E-Commerce',
      description: 'Complete e-commerce solution with inventory, payments, and analytics',
      image: staraClothesImage,
      category: 'E-Commerce',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      year: 2025,
      status: 'Live',
      githubUrl: '#',
      liveUrl: 'https://staracrocheting.kesug.com/',
      featured: true
    },
    {
      id: 2,
      title: 'AI Computer Troubleshooting',
      description: 'AI system for diagnosing hardware/software issues with high accuracy',
      image: aiTroubleshootingImage,
      category: 'AI/ML',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'React'],
      year: 2026,
      status: 'In Development',
      githubUrl: '#',
      liveUrl: '#',
      featured: true
    },
    {
      id: 3,
      title: 'Learning Management System',
      description: 'Platform for course management and online learning',
      image: lmsImage,
      category: 'Education',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS'],
      year: 2025,
      status: 'In Development',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 4,
      title: 'SACCO Management System',
      description: 'Banking system for savings and credit cooperatives',
      image: saccoImage,
      category: 'Finance',
      tech: ['React', 'Express', 'MySQL', 'Docker'],
      year: 2023,
      status: 'Stalled',
      githubUrl: '#',
      liveUrl: '#'
    },
    {
      id: 5,
      title: 'Food Delivery App',
      description: 'Mobile platform with real-time tracking and payments',
      image: foodDeliveryImage,
      category: 'Mobile',
      tech: ['React Native', 'Firebase', 'Node.js', 'Mapbox'],
      year: 2023,
      status: 'In Development',
      githubUrl: '#',
      liveUrl: '#'
    }
  ]

  const categories = [
    { id: 'all', label: 'All', count: projects.length },
    { id: 'E-Commerce', label: 'E-Commerce', count: 1 },
    { id: 'AI/ML', label: 'AI/ML', count: 1 },
    { id: 'Education', label: 'Education', count: 1 },
    { id: 'Finance', label: 'Finance', count: 1 },
    { id: 'Mobile', label: 'Mobile', count: 1 }
  ]

  const filteredProjects = useMemo(() => {
    let result = [...projects]
    
    if (selectedCategory !== 'all') {
      result = result.filter(project => project.category === selectedCategory)
    }
    
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase()
      result = result.filter(project => 
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.tech.some(tech => tech.toLowerCase().includes(query))
      )
    }
    
    return result
  }, [selectedCategory, searchQuery])

  // Main Styles
  const styles = {
    container: {
      minHeight: '100vh',
      background: '#020617',
      color: '#f8fafc'
    },
    wrapper: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '40px 20px'
    },
    
    // Hero
    hero: {
      textAlign: 'center',
      marginBottom: '60px'
    },
    heroBadge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '6px',
      background: 'rgba(14, 165, 233, 0.1)',
      border: '1px solid rgba(14, 165, 233, 0.2)',
      borderRadius: '20px',
      padding: '6px 16px',
      marginBottom: '20px'
    },
    heroTitle: {
      fontSize: '36px',
      fontWeight: '800',
      margin: '0 0 12px',
      background: 'linear-gradient(to right, #0ea5e9, #8b5cf6)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    heroSubtitle: {
      fontSize: '16px',
      color: '#94a3b8',
      maxWidth: '500px',
      margin: '0 auto 30px',
      lineHeight: '1.6'
    },
    stats: {
      display: 'flex',
      justifyContent: 'center',
      gap: '30px',
      flexWrap: 'wrap'
    },
    statItem: {
      textAlign: 'center',
      minWidth: '80px'
    },
    statNumber: {
      fontSize: '24px',
      fontWeight: '700',
      color: 'white',
      marginBottom: '4px'
    },
    statLabel: {
      fontSize: '12px',
      color: '#94a3b8',
      textTransform: 'uppercase',
      letterSpacing: '1px'
    },
    
    // Controls
    controls: {
      marginBottom: '40px'
    },
    searchBox: {
      position: 'relative',
      maxWidth: '500px',
      margin: '0 auto 30px'
    },
    searchIcon: {
      position: 'absolute',
      left: '14px',
      top: '50%',
      transform: 'translateY(-50%)',
      color: '#64748b',
      width: '18px',
      height: '18px'
    },
    searchInput: {
      width: '100%',
      padding: '14px 14px 14px 44px',
      background: 'rgba(15, 23, 42, 0.7)',
      border: '1px solid #334155',
      borderRadius: '10px',
      color: 'white',
      fontSize: '14px',
      outline: 'none',
      transition: 'all 0.3s ease'
    },
    categories: {
      marginBottom: '20px'
    },
    categoriesLabel: {
      fontSize: '14px',
      fontWeight: '600',
      color: '#e2e8f0',
      marginBottom: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px'
    },
    categoriesList: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px'
    },
    categoryButton: {
      padding: '8px 16px',
      borderRadius: '8px',
      fontSize: '13px',
      fontWeight: '500',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    categoryButtonActive: {
      background: '#0ea5e9',
      color: 'white'
    },
    categoryButtonInactive: {
      background: 'rgba(15, 23, 42, 0.7)',
      color: '#94a3b8',
      border: '1px solid #334155'
    },
    viewControls: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingTop: '20px',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)'
    },
    resultsCount: {
      fontSize: '13px',
      color: '#94a3b8'
    },
    viewToggle: {
      display: 'flex',
      gap: '4px',
      background: 'rgba(15, 23, 42, 0.7)',
      borderRadius: '8px',
      padding: '4px'
    },
    viewButton: {
      padding: '8px',
      borderRadius: '6px',
      border: 'none',
      background: 'transparent',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    viewButtonActive: {
      background: 'rgba(30, 41, 59, 0.8)',
      color: 'white'
    },
    viewButtonInactive: {
      color: '#64748b'
    },
    
    // Grid View
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
      gap: '20px',
      marginBottom: '60px'
    },
    
    // List View
    list: {
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      marginBottom: '60px'
    },
    
    // Tech Stack
    techSection: {
      marginBottom: '60px'
    },
    techTitle: {
      fontSize: '24px',
      fontWeight: '700',
      textAlign: 'center',
      margin: '0 0 30px',
      color: 'white'
    },
    techGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
      gap: '15px'
    },
    techCard: {
      background: 'rgba(15, 23, 42, 0.7)',
      border: '1px solid #334155',
      borderRadius: '12px',
      padding: '20px',
      textAlign: 'center',
      transition: 'all 0.3s ease'
    },
    techIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0 auto 12px',
      color: 'white'
    },
    techName: {
      fontSize: '13px',
      fontWeight: '600',
      color: '#e2e8f0'
    },
    
    // CTA
    cta: {
      background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(139, 92, 246, 0.1))',
      border: '1px solid rgba(14, 165, 233, 0.2)',
      borderRadius: '16px',
      padding: '40px 30px',
      textAlign: 'center'
    },
    ctaTitle: {
      fontSize: '24px',
      fontWeight: '700',
      margin: '0 0 12px',
      color: 'white'
    },
    ctaText: {
      fontSize: '15px',
      color: '#cbd5e1',
      maxWidth: '500px',
      margin: '0 auto 25px',
      lineHeight: '1.6'
    },
    ctaButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '8px',
      background: '#0ea5e9',
      color: 'white',
      padding: '12px 28px',
      borderRadius: '10px',
      fontSize: '14px',
      fontWeight: '600',
      border: 'none',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.hero}
        >
          <div style={styles.heroBadge}>
            <Zap size={14} />
            <span>Portfolio Projects</span>
          </div>
          <h1 style={styles.heroTitle}>My Work</h1>
          <p style={styles.heroSubtitle}>
            Professional projects showcasing modern development practices and innovative solutions.
          </p>
          <div style={styles.stats}>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>{projects.length}</div>
              <div style={styles.statLabel}>Projects</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>4</div>
              <div style={styles.statLabel}>Live</div>
            </div>
            <div style={styles.statItem}>
              <div style={styles.statNumber}>5+</div>
              <div style={styles.statLabel}>Tech Stack</div>
            </div>
          </div>
        </motion.div>

        {/* Controls */}
        <div style={styles.controls}>
          <div style={styles.searchBox}>
            <Search style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={styles.searchInput}
            />
          </div>
          
          <div style={styles.categories}>
            <div style={styles.categoriesLabel}>
              <Filter size={14} />
              Filter by category
            </div>
            <div style={styles.categoriesList}>
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  style={{
                    ...styles.categoryButton,
                    ...(selectedCategory === category.id 
                      ? styles.categoryButtonActive 
                      : styles.categoryButtonInactive)
                  }}
                >
                  {category.label} ({category.count})
                </button>
              ))}
            </div>
          </div>
          
          <div style={styles.viewControls}>
            <div style={styles.resultsCount}>
              {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </div>
            <div style={styles.viewToggle}>
              <button
                onClick={() => setViewMode('grid')}
                style={{
                  ...styles.viewButton,
                  ...(viewMode === 'grid' 
                    ? styles.viewButtonActive 
                    : styles.viewButtonInactive)
                }}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                style={{
                  ...styles.viewButton,
                  ...(viewMode === 'list' 
                    ? styles.viewButtonActive 
                    : styles.viewButtonInactive)
                }}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Projects */}
        {viewMode === 'grid' ? (
          <div style={styles.grid}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <ProjectCardGrid project={project} />
              </motion.div>
            ))}
          </div>
        ) : (
          <div style={styles.list}>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <ProjectCardList project={project} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={styles.techSection}
        >
          <h2 style={styles.techTitle}>Technologies</h2>
          <div style={styles.techGrid}>
            {[
              { name: 'React', icon: <Code size={20} />, color: '#0ea5e9' },
              { name: 'Node.js', icon: <Server size={20} />, color: '#10b981' },
              { name: 'Python', icon: <Brain size={20} />, color: '#f59e0b' },
              { name: 'Databases', icon: <Database size={20} />, color: '#8b5cf6' },
              { name: 'Cloud', icon: <Cloud size={20} />, color: '#ec4899' }
            ].map((tech, index) => (
              <div
                key={index}
                style={styles.techCard}
              >
                <div style={{ ...styles.techIcon, background: tech.color }}>
                  {tech.icon}
                </div>
                <div style={styles.techName}>{tech.name}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={styles.cta}
        >
          <h2 style={styles.ctaTitle}>Want to collaborate?</h2>
          <p style={styles.ctaText}>
            Have an interesting project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
          <button style={styles.ctaButton}>
            Get in Touch
            <ArrowRight size={18} />
          </button>
        </motion.div>
      </div>
    </div>
  )
}

// Grid Card Component
const ProjectCardGrid = ({ project }) => {
  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'live': return '#10b981'
      case 'in development': return '#f59e0b'
      default: return '#64748b'
    }
  }

  const getCategoryIcon = (category) => {
    switch(category) {
      case 'E-Commerce': return <ShoppingCart size={14} />
      case 'AI/ML': return <Brain size={14} />
      case 'Education': return <BookOpen size={14} />
      case 'Finance': return <TrendingUp size={14} />
      case 'Mobile': return <Smartphone size={14} />
      default: return <Code size={14} />
    }
  }

  return (
    <div style={{
      background: 'rgba(15, 23, 42, 0.7)',
      border: '1px solid #334155',
      borderRadius: '12px',
      overflow: 'hidden',
      transition: 'all 0.3s ease'
    }}>
      {/* Image */}
      <div style={{
        height: '160px',
        overflow: 'hidden',
        position: 'relative'
      }}>
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
        {project.featured && (
          <div style={{
            position: 'absolute',
            top: '12px',
            left: '12px',
            background: 'linear-gradient(to right, #0ea5e9, #8b5cf6)',
            color: 'white',
            fontSize: '11px',
            fontWeight: '600',
            padding: '4px 10px',
            borderRadius: '20px'
          }}>
            Featured
          </div>
        )}
        <div style={{
          position: 'absolute',
          top: '12px',
          right: '12px',
          background: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          fontSize: '11px',
          fontWeight: '500',
          padding: '4px 10px',
          borderRadius: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          {getCategoryIcon(project.category)}
          {project.year}
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '20px' }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '12px'
        }}>
          <h3 style={{
            fontSize: '18px',
            fontWeight: '700',
            margin: 0,
            color: 'white'
          }}>
            {project.title}
          </h3>
          <div style={{
            fontSize: '11px',
            fontWeight: '600',
            padding: '4px 10px',
            borderRadius: '20px',
            background: 'rgba(16, 185, 129, 0.1)',
            color: getStatusColor(project.status),
            border: `1px solid ${getStatusColor(project.status)}20`
          }}>
            {project.status}
          </div>
        </div>

        <p style={{
          fontSize: '13px',
          color: '#94a3b8',
          margin: '0 0 16px',
          lineHeight: '1.5',
          height: '40px',
          overflow: 'hidden'
        }}>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '6px',
          marginBottom: '20px'
        }}>
          {project.tech.map((tech, index) => (
            <span
              key={index}
              style={{
                fontSize: '11px',
                background: 'rgba(14, 165, 233, 0.1)',
                color: '#0ea5e9',
                padding: '4px 10px',
                borderRadius: '20px',
                fontWeight: '500'
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div style={{
          display: 'flex',
          gap: '10px'
        }}>
          <a
            href={project.githubUrl}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '10px',
              background: 'rgba(30, 41, 59, 0.8)',
              border: '1px solid #334155',
              borderRadius: '8px',
              color: '#e2e8f0',
              fontSize: '13px',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            <Github size={14} />
            Code
          </a>
          <a
            href={project.liveUrl}
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '10px',
              background: '#0ea5e9',
              border: '1px solid #0ea5e9',
              borderRadius: '8px',
              color: 'white',
              fontSize: '13px',
              fontWeight: '500',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            <ExternalLink size={14} />
            Live
          </a>
        </div>
      </div>
    </div>
  )
}

// List Card Component
const ProjectCardList = ({ project }) => {
  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'live': return '#10b981'
      case 'in development': return '#f59e0b'
      default: return '#64748b'
    }
  }

  return (
    <div style={{
      background: 'rgba(15, 23, 42, 0.7)',
      border: '1px solid #334155',
      borderRadius: '12px',
      padding: '20px',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        {/* Image & Header */}
        <div style={{
          display: 'flex',
          gap: '20px',
          alignItems: 'flex-start'
        }}>
          <img
            src={project.image}
            alt={project.title}
            style={{
              width: '120px',
              height: '90px',
              objectFit: 'cover',
              borderRadius: '8px',
              flexShrink: 0
            }}
          />
          <div style={{ flex: 1 }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              marginBottom: '8px'
            }}>
              <h3 style={{
                fontSize: '18px',
                fontWeight: '700',
                margin: 0,
                color: 'white'
              }}>
                {project.title}
              </h3>
              <div style={{
                fontSize: '12px',
                fontWeight: '600',
                padding: '4px 12px',
                borderRadius: '20px',
                background: 'rgba(16, 185, 129, 0.1)',
                color: getStatusColor(project.status),
                border: `1px solid ${getStatusColor(project.status)}20`
              }}>
                {project.status}
              </div>
            </div>
            
            <p style={{
              fontSize: '14px',
              color: '#94a3b8',
              margin: '0 0 12px',
              lineHeight: '1.5'
            }}>
              {project.description}
            </p>
            
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '12px',
              color: '#64748b'
            }}>
              <span style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <Calendar size={12} />
                {project.year}
              </span>
              <span style={{
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}>
                <Code size={12} />
                {project.category}
              </span>
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px'
        }}>
          {project.tech.map((tech, index) => (
            <span
              key={index}
              style={{
                fontSize: '12px',
                background: 'rgba(14, 165, 233, 0.1)',
                color: '#0ea5e9',
                padding: '6px 12px',
                borderRadius: '20px',
                fontWeight: '500'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '12px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
        paddingTop: '16px'
      }}>
        <a
          href={project.githubUrl}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 20px',
            background: 'rgba(30, 41, 59, 0.8)',
            border: '1px solid #334155',
            borderRadius: '8px',
            color: '#e2e8f0',
            fontSize: '13px',
            fontWeight: '500',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}
        >
          <Github size={14} />
          View Code
        </a>
        <a
          href={project.liveUrl}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '10px 20px',
            background: '#0ea5e9',
            border: '1px solid #0ea5e9',
            borderRadius: '8px',
            color: 'white',
            fontSize: '13px',
            fontWeight: '500',
            textDecoration: 'none',
            transition: 'all 0.3s ease'
          }}
        >
          <ExternalLink size={14} />
          Live Demo
        </a>
      </div>
    </div>
  )
}

export default Projects