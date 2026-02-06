import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Eye, Download, Calendar, Award } from 'lucide-react'

const CertificateCard = ({ certificate, index }) => {
  const [isHovered, setIsHovered] = useState(false)

  const handleView = () => {
    // In a real app, this would open a modal or navigate to detail page
    console.log('View certificate:', certificate.id)
  }

  const handleDownload = (e) => {
    e.stopPropagation()
    // In a real app, this would trigger download
    console.log('Download certificate:', certificate.id)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleView}
      style={styles.card}
    >
      {/* Certificate Header */}
      <div style={styles.header}>
        <div style={{
          ...styles.iconContainer,
          background: certificate.color + '20',
          color: certificate.color
        }}>
          <Award size={24} />
        </div>
        
        <div style={styles.headerContent}>
          <h3 style={styles.title}>{certificate.title}</h3>
          <p style={styles.issuer}>{certificate.issuer}</p>
        </div>
      </div>

      {/* Description */}
      <p style={styles.description}>
        {certificate.description}
      </p>

      {/* Skills Gained */}
      <div style={styles.skills}>
        <span style={styles.skillsLabel}>Skills:</span>
        <div style={styles.skillTags}>
          {certificate.skills.slice(0, 3).map((skill) => (
            <span key={skill} style={styles.skillTag}>
              {skill}
            </span>
          ))}
          {certificate.skills.length > 3 && (
            <span style={styles.moreSkills}>
              +{certificate.skills.length - 3} more
            </span>
          )}
        </div>
      </div>

      {/* Footer with Actions */}
      <div style={styles.footer}>
        <div style={styles.meta}>
          <div style={styles.metaItem}>
            <Calendar size={14} style={styles.metaIcon} />
            <span style={styles.metaText}>{certificate.date}</span>
          </div>
          
          <div style={styles.metaItem}>
            <div style={{
              ...styles.statusBadge,
              background: certificate.verified ? '#10b98120' : '#f59e0b20',
              color: certificate.verified ? '#10b981' : '#f59e0b'
            }}>
              {certificate.verified ? 'Verified' : 'Pending'}
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
          transition={{ duration: 0.2 }}
          style={styles.actions}
        >
          <button
            onClick={handleView}
            style={styles.actionButton}
            aria-label="View certificate"
          >
            <Eye size={18} />
          </button>
          
          <button
            onClick={handleDownload}
            style={styles.actionButton}
            aria-label="Download certificate"
          >
            <Download size={18} />
          </button>
        </motion.div>
      </div>

      {/* Hover Effect */}
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={styles.hoverEffect}
      />
    </motion.div>
  )
}

const styles = {
  card: {
    position: 'relative',
    background: 'var(--bg-secondary)',
    borderRadius: '16px',
    padding: '24px',
    border: '1px solid var(--border-color, #e5e7eb)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    overflow: 'hidden'
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    marginBottom: '16px'
  },
  iconContainer: {
    width: '56px',
    height: '56px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '12px',
    flexShrink: 0
  },
  headerContent: {
    flex: 1
  },
  title: {
    fontSize: '1.125rem',
    fontWeight: '700',
    margin: '0 0 4px',
    color: 'var(--text-primary)'
  },
  issuer: {
    fontSize: '0.875rem',
    color: '#6b7280',
    margin: 0
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
  skills: {
    marginBottom: '20px'
  },
  skillsLabel: {
    fontSize: '0.75rem',
    fontWeight: '600',
    color: 'var(--text-secondary)',
    marginBottom: '8px',
    display: 'block'
  },
  skillTags: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  skillTag: {
    fontSize: '0.75rem',
    padding: '4px 12px',
    background: 'var(--bg-primary)',
    borderRadius: '9999px',
    color: 'var(--text-secondary)',
    fontWeight: '500'
  },
  moreSkills: {
    fontSize: '0.75rem',
    padding: '4px 12px',
    background: 'rgba(59, 130, 246, 0.1)',
    borderRadius: '9999px',
    color: '#3b82f6',
    fontWeight: '500'
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: '16px',
    borderTop: '1px solid var(--border-color, #e5e7eb)'
  },
  meta: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px'
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
  metaIcon: {
    color: '#9ca3af'
  },
  metaText: {
    fontSize: '0.875rem',
    color: 'var(--text-secondary)'
  },
  statusBadge: {
    fontSize: '0.75rem',
    padding: '4px 12px',
    borderRadius: '9999px',
    fontWeight: '600'
  },
  actions: {
    display: 'flex',
    gap: '8px'
  },
  actionButton: {
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--bg-primary)',
    border: '1px solid var(--border-color, #e5e7eb)',
    borderRadius: '8px',
    color: 'var(--text-secondary)',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  hoverEffect: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: '2px solid #3b82f6',
    borderRadius: '16px',
    pointerEvents: 'none',
    opacity: 0
  }
}

// Add hover effects
styles.card[':hover'] = {
  transform: 'translateY(-5px)',
  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  borderColor: '#3b82f6'
}

styles.actionButton[':hover'] = {
  background: '#3b82f6',
  borderColor: '#3b82f6',
  color: 'white',
  transform: 'translateY(-2px)'
}

export default CertificateCard