import React, { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, Filter, X } from 'lucide-react'
import ProjectCard from './ProjectCard'
import { projects } from '../../data/projects'

const ProjectGrid = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedTechnologies, setSelectedTechnologies] = useState([])

  // Extract unique categories and technologies
  const categories = useMemo(() => 
    [...new Set(projects.map(p => p.category))], 
    []
  )
  
  const technologies = useMemo(() => 
    [...new Set(projects.flatMap(p => p.technologies))], 
    []
  )

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      // Search query filter
      const matchesSearch = searchQuery === '' || 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase())
      
      // Category filter
      const matchesCategory = selectedCategories.length === 0 || 
        selectedCategories.includes(project.category)
      
      // Technology filter
      const matchesTechnology = selectedTechnologies.length === 0 || 
        selectedTechnologies.some(tech => project.technologies.includes(tech))
      
      return matchesSearch && matchesCategory && matchesTechnology
    })
  }, [searchQuery, selectedCategories, selectedTechnologies])

  const toggleCategory = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    )
  }

  const toggleTechnology = (tech) => {
    setSelectedTechnologies(prev =>
      prev.includes(tech)
        ? prev.filter(t => t !== tech)
        : [...prev, tech]
    )
  }

  const clearFilters = () => {
    setSearchQuery('')
    setSelectedCategories([])
    setSelectedTechnologies([])
  }

  return (
    <div style={styles.container}>
      {/* Search and Filters */}
      <div style={styles.filtersSection}>
        {/* Search Bar */}
        <div style={styles.searchContainer}>
          <Search size={20} style={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search projects..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              style={styles.clearButton}
              aria-label="Clear search"
            >
              <X size={16} />
            </button>
          )}
        </div>

        {/* Active Filters */}
        <div style={styles.activeFilters}>
          {selectedCategories.map(category => (
            <button
              key={category}
              onClick={() => toggleCategory(category)}
              style={styles.activeFilter}
            >
              {category}
              <X size={12} />
            </button>
          ))}
          
          {selectedTechnologies.map(tech => (
            <button
              key={tech}
              onClick={() => toggleTechnology(tech)}
              style={styles.activeFilter}
            >
              {tech}
              <X size={12} />
            </button>
          ))}
          
          {(selectedCategories.length > 0 || selectedTechnologies.length > 0) && (
            <button
              onClick={clearFilters}
              style={styles.clearFiltersButton}
            >
              Clear all
            </button>
          )}
        </div>

        {/* Filter Options */}
        <div style={styles.filterOptions}>
          <div style={styles.filterGroup}>
            <div style={styles.filterHeader}>
              <Filter size={16} />
              <span style={styles.filterTitle}>Categories</span>
            </div>
            <div style={styles.filterTags}>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  style={{
                    ...styles.filterTag,
                    ...(selectedCategories.includes(category) ? styles.filterTagActive : {})
                  }}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div style={styles.filterGroup}>
            <div style={styles.filterHeader}>
              <Filter size={16} />
              <span style={styles.filterTitle}>Technologies</span>
            </div>
            <div style={styles.filterTags}>
              {technologies.slice(0, 10).map(tech => (
                <button
                  key={tech}
                  onClick={() => toggleTechnology(tech)}
                  style={{
                    ...styles.filterTag,
                    ...(selectedTechnologies.includes(tech) ? styles.filterTagActive : {})
                  }}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div style={styles.resultsInfo}>
          <span style={styles.resultsCount}>
            Showing {filteredProjects.length} of {projects.length} projects
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      <AnimatePresence mode="wait">
        {filteredProjects.length > 0 ? (
          <motion.div
            key="projects-grid"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={styles.grid}
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="no-results"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={styles.noResults}
          >
            <div style={styles.noResultsIcon}>🔍</div>
            <h3 style={styles.noResultsTitle}>No projects found</h3>
            <p style={styles.noResultsText}>
              Try adjusting your search or filter criteria
            </p>
            <button
              onClick={clearFilters}
              style={styles.noResultsButton}
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Load More (if needed) */}
      {filteredProjects.length > 0 && (
        <div style={styles.loadMoreContainer}>
          <button style={styles.loadMoreButton}>
            Load More Projects
          </button>
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px'
  },
  filtersSection: {
    marginBottom: '48px'
  },
  searchContainer: {
    position: 'relative',
    marginBottom: '24px'
  },
  searchIcon: {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af'
  },
  searchInput: {
    width: '100%',
    padding: '16px 16px 16px 48px',
    fontSize: '1rem',
    background: 'var(--bg-secondary)',
    border: '2px solid var(--border-color, #e5e7eb)',
    borderRadius: '12px',
    color: 'var(--text-primary)',
    outline: 'none',
    transition: 'all 0.3s ease'
  },
  clearButton: {
    position: 'absolute',
    right: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'transparent',
    border: 'none',
    color: '#9ca3af',
    cursor: 'pointer',
    padding: '4px'
  },
  activeFilters: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '24px'
  },
  activeFilter: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 12px',
    background: 'rgba(59, 130, 246, 0.1)',
    border: '1px solid #3b82f6',
    borderRadius: '9999px',
    color: '#3b82f6',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  clearFiltersButton: {
    padding: '8px 16px',
    background: 'transparent',
    border: '1px solid #dc2626',
    borderRadius: '9999px',
    color: '#dc2626',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  filterOptions: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '24px',
    marginBottom: '24px'
  },
  filterGroup: {
    background: 'var(--bg-secondary)',
    borderRadius: '12px',
    padding: '20px',
    border: '1px solid var(--border-color, #e5e7eb)'
  },
  filterHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    marginBottom: '16px',
    color: 'var(--text-primary)'
  },
  filterTitle: {
    fontSize: '1rem',
    fontWeight: '600'
  },
  filterTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  filterTag: {
    padding: '8px 16px',
    background: 'var(--bg-primary)',
    border: '1px solid var(--border-color, #e5e7eb)',
    borderRadius: '9999px',
    color: 'var(--text-secondary)',
    fontSize: '0.875rem',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  filterTagActive: {
    background: 'rgba(59, 130, 246, 0.1)',
    borderColor: '#3b82f6',
    color: '#3b82f6'
  },
  resultsInfo: {
    textAlign: 'center',
    padding: '16px',
    background: 'var(--bg-secondary)',
    borderRadius: '12px',
    border: '1px solid var(--border-color, #e5e7eb)'
  },
  resultsCount: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
    fontWeight: '500'
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '32px',
    marginBottom: '48px'
  },
  noResults: {
    textAlign: 'center',
    padding: '64px 20px'
  },
  noResultsIcon: {
    fontSize: '64px',
    marginBottom: '24px'
  },
  noResultsTitle: {
    fontSize: '1.5rem',
    fontWeight: '700',
    margin: '0 0 12px',
    color: 'var(--text-primary)'
  },
  noResultsText: {
    fontSize: '1rem',
    color: 'var(--text-secondary)',
    margin: '0 0 24px'
  },
  noResultsButton: {
    padding: '12px 32px',
    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    border: 'none',
    borderRadius: '12px',
    color: 'white',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  loadMoreContainer: {
    textAlign: 'center',
    padding: '32px 0'
  },
  loadMoreButton: {
    padding: '16px 48px',
    background: 'transparent',
    border: '2px solid #3b82f6',
    borderRadius: '12px',
    color: '#3b82f6',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  }
}

// Add hover effects
styles.searchInput[':focus'] = {
  borderColor: '#3b82f6',
  boxShadow: '0 0 0 3px rgba(59, 130, 246, 0.1)'
}

styles.activeFilter[':hover'] = {
  background: 'rgba(59, 130, 246, 0.2)'
}

styles.clearFiltersButton[':hover'] = {
  background: 'rgba(220, 38, 38, 0.1)'
}

styles.filterTag[':hover'] = {
  borderColor: '#3b82f6',
  color: '#3b82f6'
}

styles.noResultsButton[':hover'] = {
  transform: 'translateY(-2px)',
  boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)'
}

styles.loadMoreButton[':hover'] = {
  background: '#3b82f6',
  color: 'white',
  transform: 'translateY(-2px)'
}

// Media queries
if (typeof window !== 'undefined') {
  const updateGridStyles = () => {
    if (window.innerWidth >= 1024) {
      styles.grid.gridTemplateColumns = 'repeat(3, 1fr)'
      styles.filterOptions.gridTemplateColumns = 'repeat(2, 1fr)'
    } else if (window.innerWidth >= 768) {
      styles.grid.gridTemplateColumns = 'repeat(2, 1fr)'
      styles.filterOptions.gridTemplateColumns = 'repeat(2, 1fr)'
    } else {
      styles.grid.gridTemplateColumns = '1fr'
      styles.filterOptions.gridTemplateColumns = '1fr'
    }
  }
  
  window.addEventListener('resize', updateGridStyles)
  updateGridStyles()
}

export default ProjectGrid