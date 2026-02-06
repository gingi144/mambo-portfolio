import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github, Star, GitFork, Eye } from 'lucide-react'

const ProjectCard = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={styles.card}
    >
      {/* Image Container */}
      <div style={styles.imageContainer}>
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
            rotate: isHovered ? 2 : 0
          }}
          transition={{ duration: 0.4 }}
          style={styles.imageWrapper}
        >
          <div style={{
            ...styles.imagePlaceholder,
            background: `linear-gradient(135deg, ${project.color}30, ${project.color}60)`
          }}>
            <div style={{
              fontSize: '48px',
              fontWeight: 'bold',
              color: project.color,
              opacity: 0.3
            }}>
              {project.title.charAt(0)}
            </div>
          </div>
        </motion.div>
        
        {/* Overlay with buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={styles.imageOverlay}
        >
          <div style={styles.buttonGroup}>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconButton}
                aria-label="View code"
              >
                <Github size={18} />
              </a>
            )}
            
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.iconButton}
                aria-label="Live preview"
              >
                <ExternalLink size={18} />
              </a>
            )}
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div style={styles.content}>
        <div style={styles.header}>
          <div>
            <h3 style={styles.title}>{project.title}</h3>
            <p style={styles.category}>{project.category}</p>
          </div>
          
          <motion.div
            animate={{ x: isHovered ? 5 : 0 }}
            transition={{ duration: 0.2 }}
            style={styles.arrow}
          >
            →
          </motion.div>
        </div>
        
        <p style={styles.description}>{project.description}</p>
        
        {/* Tags */}
        <div style={styles.tags}>
          {project.technologies.slice(0, 3).map((tech) => (
            <span key={tech} style={styles.tag}>
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span style={styles.moreTag}>
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
        
        {/* Stats */}
        <div style={styles.stats}>
          <div style={styles.stat}>
            <Star size={16} style={styles.statIcon} />
            <span style={styles.statNumber}>{project.stats.stars}</span>
          </div>
          <div style={styles.stat}>
            <GitFork size={16} style={styles.statIcon} />
            <span style={styles.statNumber}>{project.stats.forks}</span>
          </div>
          <div style={styles.stat}>
            <Eye size={16} style={styles.statIcon} />
            <span style={styles.statNumber}>{project.stats.views}</span>
          </div>
        </div>
        
        {/* Timeline */}
        <div style={styles.timeline}>
          <span style={styles.timelineText}>
            {project.timeline}
          </span>
          <div style={{
            ...styles.statusBadge,
            background: project.status === 'Completed' ? '#10b98120' : '#f59e0b20',
            color: project.status === 'Completed' ? '#10b981' : '#f59e0b'
          }}>
            {project.status}
          </div>
        </div>
      </div>

      {/* Hover effect border */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={styles.hoverBorder}
      />
    </motion.div>
  )
}

const styles = {
  card: {
    position: 'relative',
    background: 'var(--bg-secondary)',
    borderRadius: '20px',
    overflow: 'hidden',
    border: '1px solid var(--border-color, #e5e7eb)',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  imageContainer: {
    position: 'relative',
    height: '200px',
    overflow: 'hidden'
  },
  imageWrapper: {
    width: '100%',
    height: '100%'
  },
  imagePlaceholder: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.7))',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonGroup: {
    display: 'flex',
    gap: '16px'
  },
  iconButton: {
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'rgba(255,255,255,0.9)',
    borderRadius: '50%',
    color: '#374151',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  },
  content: {
    padding: '24px'
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: '12px'
  },
  title: {
    fontSize: '1.25rem',
    fontWeight: '700',
    margin: '0 0 4px',
    color: 'var(--text-primary)'
  },
  category: {
    fontSize: '0.875rem',
    color: '#6b7280',
    margin: 0
  },
  arrow: {
    fontSize: '1.5rem',
    color: '#9ca3af',
    transition: 'transform 0.2s ease'
  },
  description: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)',
    lineHeight: '1.6',
    margin: '0 0 16px',
    display: '-webkit-box',
    WebkitLineClamp: 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden'
  },
  tags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
    marginBottom: '16px'
  },
  tag: {
    fontSize: '0.75rem',
    padding: '4px 12px',
    background: 'var(--bg-primary)',
    borderRadius: '9999px',
    color: 'var(--text-secondary)',
    fontWeight: '500'
  },
  moreTag: {
    fontSize: '0.75rem',
    padding: '4px 12px',
    background: 'rgba(59, 130, 246, 0.1)',
    borderRadius: '9999px',
    color: '#3b82f6',
    fontWeight: '500'
  },
  stats: {
    display: 'flex',
    gap: '24px',
    marginBottom: '16px',
    paddingBottom: '16px',
    borderBottom: '1px solid var(--border-color, #e5e7eb)'
  },
  stat: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
  statIcon: {
    color: '#9ca3af'
  },
  statNumber: {
    fontSize: '0.875rem',
    fontWeight: '600',
    color: 'var(--text-primary)'
  },
  timeline: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  timelineText: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)'
  },
  statusBadge: {
    fontSize: '0.75rem',
    padding: '4px 12px',
    borderRadius: '9999px',
    fontWeight: '600'
  },
  hoverBorder: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: '2px solid #3b82f6',
    borderRadius: '20px',
    pointerEvents: 'none',
    opacity: 0
  }
}

// Add hover effects
styles.card[':hover'] = {
  transform: 'translateY(-8px)',
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  borderColor: '#3b82f6'
}

styles.iconButton[':hover'] = {
  background: '#3b82f6',
  color: 'white',
  transform: 'translateY(-2px)'
}

styles.arrow[':hover'] = {
  transform: 'translateX(5px)'
}

export default ProjectCard