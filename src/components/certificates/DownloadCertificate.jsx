import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Eye, Check, Loader, FileText } from 'lucide-react'

const DownloadCertificate = ({ certificate, size = 'medium' }) => {
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)

  const handleDownload = async () => {
    if (isDownloading || downloaded) return
    
    setIsDownloading(true)
    
    try {
      // Simulate download process
      await new Promise(resolve => setTimeout(resolve, 1500))
      
      // In a real app, this would be:
      // const response = await fetch(certificate.downloadUrl)
      // const blob = await response.blob()
      // const url = window.URL.createObjectURL(blob)
      // const a = document.createElement('a')
      // a.href = url
      // a.download = `${certificate.title}.pdf`
      // document.body.appendChild(a)
      // a.click()
      // window.URL.revokeObjectURL(url)
      // document.body.removeChild(a)
      
      setDownloaded(true)
      
      // Reset after 3 seconds
      setTimeout(() => {
        setDownloaded(false)
      }, 3000)
      
    } catch (error) {
      console.error('Download failed:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  const handlePreview = () => {
    // In a real app, this would open a modal or PDF viewer
    console.log('Preview certificate:', certificate.id)
  }

  const sizes = {
    small: {
      button: { padding: '8px 16px', fontSize: '0.875rem' },
      icon: 16
    },
    medium: {
      button: { padding: '12px 24px', fontSize: '1rem' },
      icon: 20
    },
    large: {
      button: { padding: '16px 32px', fontSize: '1.125rem' },
      icon: 24
    }
  }

  const currentSize = sizes[size]

  return (
    <div style={styles.container}>
      {/* Preview Button */}
      <button
        onClick={handlePreview}
        style={{
          ...styles.previewButton,
          ...currentSize.button
        }}
        aria-label="Preview certificate"
      >
        <Eye size={currentSize.icon} />
        Preview
      </button>

      {/* Download Button */}
      <motion.button
        onClick={handleDownload}
        disabled={isDownloading || downloaded}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{
          ...styles.downloadButton,
          ...currentSize.button,
          ...(downloaded ? styles.downloadedButton : {}),
          ...(isDownloading ? styles.downloadingButton : {})
        }}
        aria-label={downloaded ? 'Certificate downloaded' : 'Download certificate'}
      >
        {isDownloading ? (
          <>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              style={styles.loader}
            >
              <Loader size={currentSize.icon} />
            </motion.div>
            Downloading...
          </>
        ) : downloaded ? (
          <>
            <Check size={currentSize.icon} />
            Downloaded!
          </>
        ) : (
          <>
            <Download size={currentSize.icon} />
            Download PDF
          </>
        )}
      </motion.button>

      {/* Additional Info */}
      <div style={styles.info}>
        <div style={styles.infoItem}>
          <FileText size={14} style={styles.infoIcon} />
          <span style={styles.infoText}>PDF Format</span>
        </div>
        
        <div style={styles.infoItem}>
          <span style={styles.fileSize}>
            {certificate.fileSize || '1.2 MB'}
          </span>
        </div>
      </div>

      {/* Verification Badge */}
      {certificate.verified && (
        <div style={styles.verifiedBadge}>
          <Check size={14} />
          <span>Verified Certificate</span>
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    maxWidth: '400px'
  },
  previewButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    background: 'var(--bg-primary)',
    border: '1px solid var(--border-color, #e5e7eb)',
    borderRadius: '8px',
    color: 'var(--text-secondary)',
    fontWeight: '500',
    cursor: 'pointer',
    transition: 'all 0.2s ease'
  },
  downloadButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    background: 'linear-gradient(135deg, #3b82f6, #06b6d4)',
    border: 'none',
    borderRadius: '8px',
    color: 'white',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s ease'
  },
  downloadedButton: {
    background: 'linear-gradient(135deg, #10b981, #059669)'
  },
  downloadingButton: {
    opacity: 0.8,
    cursor: 'not-allowed'
  },
  loader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  info: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontSize: '0.875rem',
    color: 'var(--text-secondary)'
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '6px'
  },
  infoIcon: {
    color: '#9ca3af'
  },
  infoText: {
    fontSize: '0.75rem'
  },
  fileSize: {
    fontSize: '0.75rem',
    color: '#6b7280'
  },
  verifiedBadge: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    background: 'rgba(16, 185, 129, 0.1)',
    border: '1px solid #10b981',
    borderRadius: '9999px',
    color: '#10b981',
    fontSize: '0.75rem',
    fontWeight: '600',
    width: 'fit-content',
    margin: '0 auto'
  }
}

// Add hover effects
styles.previewButton[':hover'] = {
  background: 'var(--bg-secondary)',
  borderColor: '#3b82f6',
  color: '#3b82f6'
}

styles.downloadButton[':hover'] = {
  boxShadow: '0 10px 25px -5px rgba(59, 130, 246, 0.5)',
  transform: 'translateY(-2px)'
}

styles.downloadedButton[':hover'] = {
  boxShadow: '0 10px 25px -5px rgba(16, 185, 129, 0.5)',
  transform: 'translateY(-2px)'
}

export default DownloadCertificate