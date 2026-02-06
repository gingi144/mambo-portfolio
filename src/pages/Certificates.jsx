import React, { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { 
  Award, Filter, Calendar, Download, Eye, Search, TrendingUp, 
  CheckCircle, ExternalLink, FileText, Clock, Shield,
  Zap, Star, Users, BookOpen, DownloadCloud, ArrowRight,
  ChevronDown, ChevronUp
} from 'lucide-react'

const Certificates = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedYear, setSelectedYear] = useState('all')
  const [isDownloading, setIsDownloading] = useState(null)
  const [expandedCertificate, setExpandedCertificate] = useState(null)

  // Mock certificates data - replace with your actual data
  const certificates = [
    {
      id: 1,
      title: 'AWS Solutions Architect',
      issuer: 'Amazon Web Services',
      category: 'Cloud',
      year: 2024,
      level: 'Associate',
      verified: true,
      hours: 40,
      color: '#FF9900',
      description: 'Designing and deploying scalable systems on AWS',
      skills: ['AWS', 'Cloud Architecture', 'Security', 'Networking'],
      downloadUrl: '/certificates/aws-solutions-architect.pdf',
      verifyUrl: 'https://aws.amazon.com/certification/'
    },
    {
      id: 2,
      title: 'React Developer',
      issuer: 'Meta',
      category: 'Frontend',
      year: 2023,
      level: 'Professional',
      verified: true,
      hours: 30,
      color: '#61DAFB',
      description: 'Advanced React patterns and best practices',
      skills: ['React', 'JavaScript', 'State Management', 'Performance'],
      downloadUrl: '/certificates/react-developer.pdf',
      verifyUrl: 'https://react.dev/'
    },
    {
      id: 3,
      title: 'Node.js Certified Developer',
      issuer: 'OpenJS Foundation',
      category: 'Backend',
      year: 2023,
      level: 'Professional',
      verified: true,
      hours: 35,
      color: '#339933',
      description: 'Building scalable server-side applications',
      skills: ['Node.js', 'Express', 'API Design', 'Authentication'],
      downloadUrl: '/certificates/nodejs-certified.pdf',
      verifyUrl: 'https://openjsf.org/'
    },
    {
      id: 4,
      title: 'Docker Certified Associate',
      issuer: 'Docker',
      category: 'DevOps',
      year: 2022,
      level: 'Associate',
      verified: true,
      hours: 25,
      color: '#2496ED',
      description: 'Containerization and orchestration expertise',
      skills: ['Docker', 'Containers', 'Orchestration', 'CI/CD'],
      downloadUrl: '/certificates/docker-certified.pdf',
      verifyUrl: 'https://www.docker.com/'
    },
    {
      id: 5,
      title: 'MongoDB Certified Developer',
      issuer: 'MongoDB',
      category: 'Database',
      year: 2022,
      level: 'Associate',
      verified: true,
      hours: 20,
      color: '#47A248',
      description: 'NoSQL database design and optimization',
      skills: ['MongoDB', 'NoSQL', 'Database Design', 'Aggregation'],
      downloadUrl: '/certificates/mongodb-certified.pdf',
      verifyUrl: 'https://www.mongodb.com/'
    },
    {
      id: 6,
      title: 'Google Cloud Associate',
      issuer: 'Google',
      category: 'Cloud',
      year: 2021,
      level: 'Associate',
      verified: true,
      hours: 30,
      color: '#4285F4',
      description: 'Google Cloud Platform fundamentals',
      skills: ['GCP', 'Cloud Computing', 'Storage', 'Networking'],
      downloadUrl: '/certificates/gcp-associate.pdf',
      verifyUrl: 'https://cloud.google.com/certification'
    }
  ]

  // Extract unique categories and years
  const categories = useMemo(() => 
    ['all', ...new Set(certificates.map(c => c.category))], 
    []
  )
  
  const years = useMemo(() => {
    const yearSet = new Set(certificates.map(c => c.year))
    return ['all', ...Array.from(yearSet).sort((a, b) => b - a)]
  }, [])

  // Filter certificates
  const filteredCertificates = useMemo(() => {
    let filtered = [...certificates]
    
    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(cert =>
        cert.title.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.description.toLowerCase().includes(query) ||
        cert.skills.some(skill => skill.toLowerCase().includes(query))
      )
    }
    
    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(cert => cert.category === selectedCategory)
    }
    
    // Year filter
    if (selectedYear !== 'all') {
      filtered = filtered.filter(cert => cert.year === parseInt(selectedYear))
    }
    
    return filtered
  }, [searchQuery, selectedCategory, selectedYear])

  // Stats calculations
  const stats = useMemo(() => ({
    total: certificates.length,
    verified: certificates.filter(c => c.verified).length,
    totalHours: certificates.reduce((acc, cert) => acc + (cert.hours || 0), 0),
    categories: categories.length - 1
  }), [])

  // Handle download
  const handleDownload = async (certificate, event) => {
    event.stopPropagation()
    setIsDownloading(certificate.id)
    
    // Simulate download delay
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    // Create a link element to trigger download
    const link = document.createElement('a')
    link.href = certificate.downloadUrl
    link.download = `${certificate.title.replace(/\s+/g, '-').toLowerCase()}.pdf`
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    
    setIsDownloading(null)
  }

  // Handle download all
  const handleDownloadAll = async () => {
    setIsDownloading('all')
    
    // Simulate download delay
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // In a real app, you would create a ZIP file
    alert('All certificates downloaded! In production, this would create a ZIP file.')
    
    setIsDownloading(null)
  }

  // Toggle certificate expansion
  const toggleCertificate = (id) => {
    setExpandedCertificate(expandedCertificate === id ? null : id)
  }

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.hero}
      >
        <div style={styles.heroBadge}>
          <Award size={16} />
          <span>Professional Certifications</span>
        </div>
        
        <h1 style={styles.heroTitle}>Verified Credentials</h1>
        
        <p style={styles.heroSubtitle}>
          Industry-recognized certifications validating expertise in modern technologies and best practices.
        </p>
        
        <div style={styles.statsGrid}>
          <div style={styles.statCard}>
            <div style={styles.statIcon}>
              <Award size={20} />
            </div>
            <div>
              <div style={styles.statNumber}>{stats.total}</div>
              <div style={styles.statLabel}>Certificates</div>
            </div>
          </div>
          
          <div style={styles.statCard}>
            <div style={styles.statIcon}>
              <Clock size={20} />
            </div>
            <div>
              <div style={styles.statNumber}>{stats.totalHours}h</div>
              <div style={styles.statLabel}>Learning Hours</div>
            </div>
          </div>
          
          <div style={styles.statCard}>
            <div style={styles.statIcon}>
              <CheckCircle size={20} />
            </div>
            <div>
              <div style={styles.statNumber}>{stats.verified}</div>
              <div style={styles.statLabel}>Verified</div>
            </div>
          </div>
          
          <div style={styles.statCard}>
            <div style={styles.statIcon}>
              <BookOpen size={20} />
            </div>
            <div>
              <div style={styles.statNumber}>{stats.categories}</div>
              <div style={styles.statLabel}>Categories</div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Download All Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        style={styles.downloadAllCard}
      >
        <div style={styles.downloadAllContent}>
          <div style={styles.downloadAllInfo}>
            <div style={styles.downloadAllIcon}>
              <DownloadCloud size={24} />
            </div>
            <div>
              <h3 style={styles.downloadAllTitle}>Complete Collection</h3>
              <p style={styles.downloadAllText}>
                Download all certificates as a single ZIP archive
              </p>
            </div>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleDownloadAll}
            disabled={isDownloading === 'all'}
            style={{
              ...styles.downloadAllButton,
              ...(isDownloading === 'all' && styles.downloadingButton)
            }}
          >
            {isDownloading === 'all' ? (
              <>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  style={styles.spinner}
                />
                <span>Downloading...</span>
              </>
            ) : (
              <>
                <Download size={18} />
                <span>Download All ({certificates.length} files)</span>
              </>
            )}
          </motion.button>
        </div>
      </motion.div>

      {/* Search & Filters */}
      <div style={styles.controlsSection}>
        <div style={styles.searchBox}>
          <Search style={styles.searchIcon} />
          <input
            type="text"
            placeholder="Search certificates by title, issuer, or skills..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={styles.searchInput}
          />
        </div>
        
        <div style={styles.filters}>
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>
              <Filter size={14} />
              Category
            </label>
            <div style={styles.filterButtons}>
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  style={{
                    ...styles.filterButton,
                    ...(selectedCategory === category && styles.filterButtonActive)
                  }}
                >
                  {category === 'all' ? 'All' : category}
                </button>
              ))}
            </div>
          </div>
          
          <div style={styles.filterGroup}>
            <label style={styles.filterLabel}>
              <Calendar size={14} />
              Year
            </label>
            <div style={styles.filterButtons}>
              {years.map(year => (
                <button
                  key={year}
                  onClick={() => setSelectedYear(year)}
                  style={{
                    ...styles.filterButton,
                    ...(selectedYear === year && styles.filterButtonActive)
                  }}
                >
                  {year === 'all' ? 'All Years' : year}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Count */}
      <div style={styles.resultsInfo}>
        <span style={styles.resultsCount}>
          {filteredCertificates.length} certificate{filteredCertificates.length !== 1 ? 's' : ''} found
        </span>
        {selectedCategory !== 'all' && (
          <span style={styles.filterTag}>
            Category: {selectedCategory}
          </span>
        )}
        {selectedYear !== 'all' && (
          <span style={styles.filterTag}>
            Year: {selectedYear}
          </span>
        )}
      </div>

      {/* Certificates Grid */}
      {filteredCertificates.length > 0 ? (
        <div style={styles.certificatesGrid}>
          {filteredCertificates.map((certificate, index) => (
            <motion.div
              key={certificate.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <CertificateCard
                certificate={certificate}
                isExpanded={expandedCertificate === certificate.id}
                isDownloading={isDownloading === certificate.id}
                onToggle={() => toggleCertificate(certificate.id)}
                onDownload={handleDownload}
              />
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={styles.noResults}
        >
          <Award size={48} style={{ color: '#64748b', marginBottom: '16px' }} />
          <h3 style={{ color: 'white', marginBottom: '8px' }}>No certificates found</h3>
          <p style={{ color: '#94a3b8' }}>Try adjusting your search criteria</p>
        </motion.div>
      )}

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        style={styles.ctaSection}
      >
        <div style={styles.ctaIcon}>
          <Star size={24} />
        </div>
        <h2 style={styles.ctaTitle}>Continuous Learning Journey</h2>
        <p style={styles.ctaText}>
          Certifications are milestones in my ongoing learning journey. 
          I'm constantly updating my skills with new technologies and methodologies.
        </p>
        <button style={styles.ctaButton}>
          View Learning Roadmap
          <ArrowRight size={18} />
        </button>
      </motion.div>
    </div>
  )
}

// Certificate Card Component
const CertificateCard = ({ certificate, isExpanded, isDownloading, onToggle, onDownload }) => {
  const getLevelColor = (level) => {
    switch(level.toLowerCase()) {
      case 'professional': return '#10b981'
      case 'associate': return '#0ea5e9'
      case 'expert': return '#8b5cf6'
      default: return '#64748b'
    }
  }

  return (
    <div style={styles.card}>
      {/* Card Header */}
      <div 
        style={styles.cardHeader}
        onClick={onToggle}
      >
        <div style={styles.cardIcon} className="card-icon">
          <div style={{
            ...styles.iconWrapper,
            background: `${certificate.color}20`,
            border: `1px solid ${certificate.color}30`
          }}>
            <Award size={20} color={certificate.color} />
          </div>
          <div style={styles.cardTitle}>
            <h3 style={{ margin: 0, color: 'white', fontSize: '18px' }}>
              {certificate.title}
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ color: '#94a3b8', fontSize: '14px' }}>
                {certificate.issuer}
              </span>
              <span style={{
                fontSize: '12px',
                padding: '2px 8px',
                background: getLevelColor(certificate.level),
                color: 'white',
                borderRadius: '12px'
              }}>
                {certificate.level}
              </span>
              {certificate.verified && (
                <CheckCircle size={14} color="#10b981" />
              )}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div style={styles.yearBadge}>
            <Calendar size={12} />
            {certificate.year}
          </div>
          <div style={styles.hoursBadge}>
            <Clock size={12} />
            {certificate.hours}h
          </div>
          <div style={styles.expandIcon}>
            {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          transition={{ duration: 0.3 }}
          style={styles.expandedContent}
        >
          <p style={styles.description}>{certificate.description}</p>
          
          <div style={styles.skillsSection}>
            <div style={styles.sectionLabel}>Skills Validated</div>
            <div style={styles.skillsList}>
              {certificate.skills.map((skill, index) => (
                <span key={index} style={styles.skillTag}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
          
          <div style={styles.actions}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => onDownload(certificate, e)}
              disabled={isDownloading}
              style={{
                ...styles.downloadButton,
                ...(isDownloading && styles.downloading)
              }}
            >
              {isDownloading ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    style={styles.spinner}
                  />
                  <span>Downloading...</span>
                </>
              ) : (
                <>
                  <Download size={16} />
                  <span>Download PDF</span>
                </>
              )}
            </motion.button>
            
            <a
              href={certificate.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={styles.verifyButton}
            >
              <ExternalLink size={16} />
              <span>Verify Online</span>
            </a>
          </div>
        </motion.div>
      )}
    </div>
  )
}

// Styles
const styles = {
  container: {
    minHeight: '100vh',
    background: '#020617',
    color: '#f8fafc',
    padding: '40px 20px'
  },
  
  hero: {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto 60px'
  },
  
  heroBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: 'rgba(14, 165, 233, 0.1)',
    border: '1px solid rgba(14, 165, 233, 0.2)',
    borderRadius: '20px',
    padding: '8px 16px',
    marginBottom: '20px'
  },
  
  heroTitle: {
    fontSize: '40px',
    fontWeight: '800',
    margin: '0 0 16px',
    background: 'linear-gradient(to right, #0ea5e9, #8b5cf6)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text'
  },
  
  heroSubtitle: {
    fontSize: '18px',
    color: '#94a3b8',
    lineHeight: '1.6',
    margin: '0 auto 40px',
    maxWidth: '600px'
  },
  
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gap: '16px',
    maxWidth: '400px',
    margin: '0 auto'
  },
  
  statCard: {
    background: 'rgba(15, 23, 42, 0.7)',
    border: '1px solid #334155',
    borderRadius: '12px',
    padding: '20px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  
  statIcon: {
    width: '40px',
    height: '40px',
    background: 'rgba(14, 165, 233, 0.1)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0ea5e9'
  },
  
  statNumber: {
    fontSize: '20px',
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
  
  downloadAllCard: {
    background: 'rgba(15, 23, 42, 0.7)',
    border: '2px solid rgba(14, 165, 233, 0.3)',
    borderRadius: '16px',
    padding: '24px',
    marginBottom: '40px'
  },
  
  downloadAllContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  
  downloadAllInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px'
  },
  
  downloadAllIcon: {
    width: '48px',
    height: '48px',
    background: 'rgba(14, 165, 233, 0.1)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0ea5e9'
  },
  
  downloadAllTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: 'white',
    margin: '0 0 4px'
  },
  
  downloadAllText: {
    fontSize: '14px',
    color: '#94a3b8',
    margin: 0
  },
  
  downloadAllButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    background: 'linear-gradient(to right, #0ea5e9, #8b5cf6)',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '14px 24px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width: '100%'
  },
  
  downloadingButton: {
    opacity: 0.8,
    cursor: 'not-allowed'
  },
  
  controlsSection: {
    marginBottom: '30px'
  },
  
  searchBox: {
    position: 'relative',
    marginBottom: '24px'
  },
  
  searchIcon: {
    position: 'absolute',
    left: '16px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#64748b',
    width: '18px',
    height: '18px'
  },
  
  searchInput: {
    width: '100%',
    padding: '14px 14px 14px 48px',
    background: 'rgba(15, 23, 42, 0.7)',
    border: '1px solid #334155',
    borderRadius: '10px',
    color: 'white',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.3s ease'
  },
  
  filters: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px'
  },
  
  filterGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px'
  },
  
  filterLabel: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#e2e8f0'
  },
  
  filterButtons: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  
  filterButton: {
    padding: '8px 16px',
    background: 'rgba(15, 23, 42, 0.7)',
    border: '1px solid #334155',
    borderRadius: '8px',
    color: '#94a3b8',
    fontSize: '13px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    border: 'none'
  },
  
  filterButtonActive: {
    background: '#0ea5e9',
    color: 'white',
    borderColor: '#0ea5e9'
  },
  
  resultsInfo: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '20px',
    flexWrap: 'wrap'
  },
  
  resultsCount: {
    fontSize: '14px',
    color: '#94a3b8'
  },
  
  filterTag: {
    fontSize: '12px',
    background: 'rgba(14, 165, 233, 0.1)',
    color: '#0ea5e9',
    padding: '4px 12px',
    borderRadius: '20px'
  },
  
  certificatesGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '16px',
    marginBottom: '60px'
  },
  
  card: {
    background: 'rgba(15, 23, 42, 0.7)',
    border: '1px solid #334155',
    borderRadius: '12px',
    overflow: 'hidden',
    transition: 'all 0.3s ease',
    cursor: 'pointer'
  },
  
  cardHeader: {
    padding: '20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '16px'
  },
  
  cardIcon: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    flex: 1
  },
  
  iconWrapper: {
    width: '48px',
    height: '48px',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0
  },
  
  cardTitle: {
    flex: 1
  },
  
  yearBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '12px',
    background: 'rgba(30, 41, 59, 0.8)',
    color: '#cbd5e1',
    padding: '6px 12px',
    borderRadius: '20px',
    fontWeight: '500'
  },
  
  hoursBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    fontSize: '12px',
    background: 'rgba(30, 41, 59, 0.8)',
    color: '#cbd5e1',
    padding: '6px 12px',
    borderRadius: '20px',
    fontWeight: '500'
  },
  
  expandIcon: {
    color: '#64748b'
  },
  
  expandedContent: {
    padding: '0 20px 20px 20px',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
  },
  
  description: {
    fontSize: '14px',
    color: '#cbd5e1',
    lineHeight: '1.6',
    margin: '0 0 20px'
  },
  
  skillsSection: {
    marginBottom: '20px'
  },
  
  sectionLabel: {
    fontSize: '12px',
    fontWeight: '600',
    color: '#94a3b8',
    marginBottom: '8px',
    textTransform: 'uppercase',
    letterSpacing: '1px'
  },
  
  skillsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px'
  },
  
  skillTag: {
    fontSize: '12px',
    background: 'rgba(14, 165, 233, 0.1)',
    color: '#0ea5e9',
    padding: '6px 12px',
    borderRadius: '20px',
    fontWeight: '500'
  },
  
  actions: {
    display: 'flex',
    gap: '12px'
  },
  
  downloadButton: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    background: '#0ea5e9',
    color: 'white',
    border: 'none',
    borderRadius: '8px',
    padding: '12px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  
  downloading: {
    background: '#0c4a6e',
    cursor: 'not-allowed'
  },
  
  verifyButton: {
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    background: 'rgba(30, 41, 59, 0.8)',
    color: '#e2e8f0',
    border: '1px solid #334155',
    borderRadius: '8px',
    padding: '12px',
    fontSize: '14px',
    fontWeight: '500',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'all 0.3s ease'
  },
  
  spinner: {
    width: '16px',
    height: '16px',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    borderTopColor: 'white',
    borderRadius: '50%'
  },
  
  noResults: {
    textAlign: 'center',
    padding: '60px 20px',
    background: 'rgba(15, 23, 42, 0.5)',
    borderRadius: '12px',
    marginBottom: '60px'
  },
  
  ctaSection: {
    background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(139, 92, 246, 0.1))',
    border: '1px solid rgba(14, 165, 233, 0.2)',
    borderRadius: '16px',
    padding: '40px 30px',
    textAlign: 'center'
  },
  
  ctaIcon: {
    width: '60px',
    height: '60px',
    background: 'rgba(14, 165, 233, 0.2)',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#0ea5e9',
    margin: '0 auto 20px'
  },
  
  ctaTitle: {
    fontSize: '24px',
    fontWeight: '700',
    color: 'white',
    margin: '0 0 12px'
  },
  
  ctaText: {
    fontSize: '16px',
    color: '#cbd5e1',
    maxWidth: '500px',
    margin: '0 auto 24px',
    lineHeight: '1.6'
  },
  
  ctaButton: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '8px',
    background: '#0ea5e9',
    color: 'white',
    border: 'none',
    borderRadius: '10px',
    padding: '14px 28px',
    fontSize: '15px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  
  // Responsive styles
  '@media (min-width: 640px)': {
    statsGrid: {
      gridTemplateColumns: 'repeat(4, 1fr)',
      maxWidth: '100%'
    },
    
    downloadAllContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    
    downloadAllButton: {
      width: 'auto'
    },
    
    filters: {
      flexDirection: 'row',
      gap: '40px'
    },
    
    certificatesGrid: {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px'
    },
    
    actions: {
      flexDirection: 'row'
    }
  },
  
  '@media (min-width: 1024px)': {
    container: {
      padding: '60px 40px'
    },
    
    heroTitle: {
      fontSize: '48px'
    },
    
    certificatesGrid: {
      gridTemplateColumns: 'repeat(3, 1fr)'
    }
  }
}

export default Certificates