import React, { useEffect, useState, useMemo, useRef, memo } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Zap,
  TrendingUp,
  Clock,
  ExternalLink,
  Code,
  Server,
  Shield,
  Cloud,
  Database,
  Cpu,
  Smartphone,
  Globe,
  Users,
  Terminal,
  Layers,
  Database as DbIcon,
} from 'lucide-react'

import Iridescence from '../components/ui/Iridescence'

/* ===========================
   Constants
=========================== */

const COLORS = {
  primary: '#0ea5e9',
  secondary: '#8b5cf6',
  accent: '#ec4899',
  dark: '#020617',
  light: '#f8fafc',
  blue: '#3b82f6',
  green: '#10b981',
  purple: '#8b5cf6',
  orange: '#f97316',
}

/* ===========================
   Memoized Static Data
=========================== */

const PROJECTS = [
  {
    id: 1,
    title: 'Enterprise Cloud Platform',
    description: 'Scalable cloud infrastructure for enterprise applications with auto-scaling and load balancing.',
    tech: ['AWS', 'Kubernetes', 'Terraform', 'Docker'],
    color: COLORS.blue,
    icon: Cloud,
  },
  {
    id: 2,
    title: 'Cybersecurity Dashboard',
    description: 'Real-time security monitoring and threat detection system with AI-powered analytics.',
    tech: ['React', 'Node.js', 'MongoDB', 'Redis'],
    color: COLORS.green,
    icon: Shield,
  },
  {
    id: 3,
    title: 'DevOps Automation Suite',
    description: 'CI/CD pipeline automation with monitoring, logging, and deployment orchestration.',
    tech: ['Python', 'Jenkins', 'Ansible', 'Prometheus'],
    color: COLORS.orange,
    icon: Terminal,
  },
]

const SERVICES = [
  {
    title: 'Cloud Architecture',
    description: 'Design and implementation of scalable cloud solutions on AWS, Azure, and GCP.',
    icon: Cloud,
    color: COLORS.blue,
  },
  {
    title: 'DevOps & CI/CD',
    description: 'Automated deployment pipelines, containerization, and infrastructure as code.',
    icon: Terminal,
    color: COLORS.green,
  },
  {
    title: 'Full-Stack Development',
    description: 'Modern web applications using React, Node.js, and microservices architecture.',
    icon: Layers,
    color: COLORS.purple,
  },
  {
    title: 'Database Solutions',
    description: 'Database design, optimization, and migration for high-performance applications.',
    icon: DbIcon,
    color: COLORS.orange,
  },
]

const STATS = [
  { value: '15+', label: 'Projects Delivered', icon: Code },
  { value: '99.95%', label: 'System Uptime', icon: Server },
  { value: '3x', label: 'Performance Boost', icon: TrendingUp },
  { value: '24/7', label: 'Monitoring', icon: Clock },
]

const TECH_STACK = [
  { name: 'React/Next.js', level: 95 },
  { name: 'Node.js/Python', level: 90 },
  { name: 'AWS/Azure/GCP', level: 88 },
  { name: 'Docker/K8s', level: 85 },
  { name: 'MongoDB/PostgreSQL', level: 87 },
  { name: 'CI/CD Tools', level: 92 },
  { name: 'C++', level: 80 },
]

/* ===========================
   Home Component
=========================== */

const Home = () => {
  const heroRef = useRef(null)
  const isScrollingRef = useRef(false)

  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  /* ===========================
     Responsive Detection
  =========================== */

  useEffect(() => {
    const checkResponsive = () => {
      const width = window.innerWidth
      setIsMobile(width < 768)
      setIsTablet(width >= 768 && width < 1024)
    }
    
    checkResponsive()
    window.addEventListener('resize', checkResponsive)
    return () => window.removeEventListener('resize', checkResponsive)
  }, [])

  /* ===========================
     Scroll detection
  =========================== */

  useEffect(() => {
    let t
    const onScroll = () => {
      isScrollingRef.current = true
      clearTimeout(t)
      t = setTimeout(() => (isScrollingRef.current = false), 150)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* ===========================
     Responsive Styles
  =========================== */

  const responsive = {
    padding: {
      section: isMobile ? '4rem 1rem' : isTablet ? '5rem 1.5rem' : '6rem 1.5rem',
      hero: isMobile ? '4rem 1rem' : isTablet ? '5rem 1.5rem' : '6rem 1.5rem',
    },
    fontSize: {
      h1: isMobile ? '2.2rem' : isTablet ? '2.8rem' : '3.5rem',
      h2: isMobile ? '1.8rem' : isTablet ? '2.2rem' : '2.5rem',
      h3: isMobile ? '1.3rem' : '1.5rem',
      body: isMobile ? '0.9rem' : '1rem',
    },
    grid: {
      services: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
      projects: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      stats: isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
    }
  }

  /* ===========================
     Render
  =========================== */

  return (
    <div style={{ background: COLORS.dark, overflow: 'hidden' }}>
      {/* HERO SECTION */}
      <section
        ref={heroRef}
        style={{
          minHeight: '100vh',
          position: 'relative',
          background: COLORS.dark,
        }}
      >
        {/* Background Effect */}
        {!isMobile && !isScrollingRef.current && (
          <Iridescence
            color={[0.55, 0.4, 0.95]}
            speed={1.2}
            amplitude={0.12}
            style={{
              position: 'absolute',
              inset: 0,
            }}
          />
        )}

        {/* Gradient Overlay */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(circle at 20% 50%, rgba(14, 165, 233, 0.15) 0%, transparent 50%)',
        }} />

        <div
          style={{
            position: 'relative',
            zIndex: 2,
            maxWidth: 1200,
            margin: '0 auto',
            padding: responsive.padding.hero,
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Title Badge */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '0.6rem 1.2rem',
                borderRadius: 999,
                background: 'rgba(14, 165, 233, 0.15)',
                color: COLORS.primary,
                fontWeight: 600,
                fontSize: responsive.fontSize.body,
              }}
            >
              <Sparkles size={16} />
              Senior DevOps & Full-Stack Engineer
            </motion.div>

            {/* Main Heading */}
            <h1
              style={{
                marginTop: '1.5rem',
                fontSize: responsive.fontSize.h1,
                fontWeight: 900,
                lineHeight: 1.1,
                color: COLORS.light,
              }}
            >
              Building Scalable{' '}
              <span style={{ color: COLORS.primary }}>Cloud Solutions</span>
              <br />
              That Drive Innovation
            </h1>

            {/* Subheading */}
            <p
              style={{
                maxWidth: 600,
                marginTop: '1.2rem',
                color: '#CBD5E1',
                lineHeight: 1.7,
                fontSize: responsive.fontSize.body,
              }}
            >
              I architect and implement high-performance systems using cutting-edge technologies. 
              From cloud infrastructure to full-stack applications, I deliver robust solutions 
              that scale with your business needs.
            </p>

            {/* CTA Buttons */}
            <div style={{ 
              marginTop: '2rem', 
              display: 'flex', 
              gap: '1rem',
              flexWrap: isMobile ? 'wrap' : 'nowrap'
            }}>
              <PrimaryButton text="View Projects" />
              <SecondaryButton text="Schedule Consultation" />
            </div>

            {/* Tech Stack Preview */}
            <div style={{ marginTop: '3rem' }}>
              <p style={{ color: '#94a3b8', marginBottom: '0.5rem' }}>
                Technologies I work with:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                {['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes', 'Python', 'MongoDB', 'Terraform'].map((tech) => (
                  <span
                    key={tech}
                    style={{
                      padding: '0.3rem 0.8rem',
                      borderRadius: 999,
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#cbd5e1',
                      fontSize: '0.8rem',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <AnimatedSocialLinks />
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section style={{ 
        padding: responsive.padding.section, 
        background: 'linear-gradient(to bottom, #020617, #0f172a)'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionTitle
            title="Specialized IT Services"
            subtitle="Comprehensive solutions for modern technology challenges"
          />
          
          <div style={{
            marginTop: '4rem',
            display: 'grid',
            gridTemplateColumns: responsive.grid.services,
            gap: '1.5rem',
          }}>
            {SERVICES.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section style={{ 
        padding: responsive.padding.section, 
        background: '#020617'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionTitle
            title="Featured Projects"
            subtitle="Real-world solutions delivering measurable impact"
          />
          
          <div style={{
            marginTop: '4rem',
            display: 'grid',
            gridTemplateColumns: responsive.grid.projects,
            gap: '2rem',
          }}>
            {PROJECTS.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* TECH STACK SECTION */}
      <section style={{ 
        padding: responsive.padding.section, 
        background: 'linear-gradient(to bottom, #020617, #0f172a)'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionTitle
            title="Technical Expertise"
            subtitle="Proficiency across the modern tech stack"
          />
          
          <div style={{
            marginTop: '3rem',
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: '2rem',
          }}>
            {TECH_STACK.map((skill, index) => (
              <SkillBar key={index} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section style={{ 
        padding: responsive.padding.section, 
        background: '#020617'
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionTitle
            title="Impact & Results"
            subtitle="Proven track record of delivering excellence"
          />
          
          <div style={{
            marginTop: '4rem',
            display: 'grid',
            gridTemplateColumns: responsive.grid.stats,
            gap: '1.5rem',
          }}>
            {STATS.map((stat, index) => (
              <StatCard key={stat.label} stat={stat} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ 
        padding: responsive.padding.section, 
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
      }}>
        <div style={{ 
          maxWidth: 800, 
          margin: '0 auto',
          textAlign: 'center',
          padding: isMobile ? '3rem 1.5rem' : '4rem 2rem',
          borderRadius: '1.5rem',
          background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}>
          <h2 style={{
            fontSize: responsive.fontSize.h2,
            fontWeight: 900,
            color: COLORS.light,
            marginBottom: '1rem',
          }}>
            Ready to Transform Your Technology?
          </h2>
          <p style={{
            color: '#cbd5e1',
            fontSize: responsive.fontSize.body,
            marginBottom: '2rem',
            maxWidth: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}>
            Let's discuss how we can build scalable, high-performance solutions for your business.
          </p>
          <motion.button
            whileHover={{ scale: 1.00 }}
            whileTap={{ scale: 0.95 }}
            style={{
              padding: isMobile ? '0.9rem 1.8rem' : '1rem 2rem',
              borderRadius: '0.75rem',
              border: 'none',
              fontWeight: 700,
              cursor: 'pointer',
              background: COLORS.primary,
              color: 'white',
              fontSize: responsive.fontSize.body,
            }}
          >
            Get in Touch <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
          </motion.button>
        </div>
      </section>
    </div>
  )
}

/* ===========================
   Memoized Subcomponents
=========================== */

const SectionTitle = memo(({ title, subtitle }) => (
  <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
    <h2 style={{
      fontSize: '2.5rem',
      fontWeight: 900,
      color: COLORS.light,
      marginBottom: '0.5rem',
    }}>
      {title}
    </h2>
    <p style={{
      color: '#94a3b8',
      fontSize: '1.1rem',
      maxWidth: 600,
      margin: '0 auto',
    }}>
      {subtitle}
    </p>
  </div>
))

const ServiceCard = memo(({ service, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ y: 0 }}
    style={{
      padding: '2rem',
      background: 'rgba(23, 80, 215, 0.78)',
      borderRadius: '1rem',
      border: `1px solid ${service.color}20`,
      backdropFilter: 'blur(10px)',
      position: 'relative',
      overflow: 'hidden',
      height: '100%',
    }}
  >
    <div style={{
      width: 50,
      height: 50,
      borderRadius: '0.75rem',
      background: `${service.color}20`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem',
    }}>
      <service.icon size={24} color={service.color} />
    </div>
    <h3 style={{ 
      color: 'white', 
      fontSize: '1.3rem', 
      fontWeight: 700,
      marginBottom: '0.75rem',
    }}>
      {service.title}
    </h3>
    <p style={{ 
      color: '#cbd5e1', 
      fontSize: '0.95rem',
      lineHeight: 1.6,
    }}>
      {service.description}
    </p>
  </motion.div>
))

const ProjectCard = memo(({ project }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    whileHover={{ y: 0 }}
    style={{
      padding: '2rem',
      background: 'rgba(24, 4, 41, 0.9)',
      borderRadius: '1rem',
      border: `1px solid ${project.color}20`,
      position: 'relative',
      overflow: 'hidden',
      height: '100%',
    }}
  >
    <div style={{
      width: 50,
      height: 50,
      borderRadius: '0.75rem',
      background: `${project.color}20`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '1.5rem',
    }}>
      <project.icon size={24} color={project.color} />
    </div>
    
    <h3 style={{ 
      color: 'white', 
      fontSize: '1.3rem', 
      fontWeight: 700,
      marginBottom: '0.75rem',
    }}>
      {project.title}
    </h3>
    <p style={{ 
      color: '#cbd5e1', 
      fontSize: '0.95rem',
      lineHeight: 1.6,
      marginBottom: '1.5rem',
    }}>
      {project.description}
    </p>

    <div style={{ 
      display: 'flex', 
      flexWrap: 'wrap',
      gap: '0.5rem',
      marginBottom: '1.5rem',
    }}>
      {project.tech.map((tech) => (
        <span
          key={tech}
          style={{
            padding: '0.3rem 0.7rem',
            borderRadius: 999,
            background: `${project.color}15`,
            color: project.color,
            fontSize: '0.75rem',
            fontWeight: 500,
          }}
        >
          {tech}
        </span>
      ))}
    </div>

    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={{
        background: 'transparent',
        border: `1px solid ${project.color}`,
        color: project.color,
        padding: '0.6rem 1.2rem',
        borderRadius: '0.5rem',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
        fontSize: '0.9rem',
        fontWeight: 500,
      }}
    >
      View Case Study
      <ExternalLink size={14} />
    </motion.button>
  </motion.div>
))

const SkillBar = memo(({ skill, index }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    style={{ marginBottom: '1.5rem' }}
  >
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-between',
      marginBottom: '0.5rem',
    }}>
      <span style={{ color: 'white', fontSize: '0.95rem' }}>
        {skill.name}
      </span>
      <span style={{ color: COLORS.primary, fontSize: '0.9rem', fontWeight: 600 }}>
        {skill.level}%
      </span>
    </div>
    <div style={{
      height: 8,
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: 4,
      overflow: 'hidden',
    }}>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${skill.level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: index * 0.1 }}
        style={{
          height: '100%',
          background: `linear-gradient(90deg, ${COLORS.primary}, ${COLORS.secondary})`,
          borderRadius: 4,
        }}
      />
    </div>
  </motion.div>
))

const StatCard = memo(({ stat, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    whileHover={{ scale: 1.00 }}
    style={{
      padding: '2rem',
      background: 'rgba(255, 255, 255, 0.03)',
      borderRadius: '1rem',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      textAlign: 'center',
    }}
  >
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      gap: '0.5rem',
      marginBottom: '0.5rem',
    }}>
      <stat.icon size={24} color={COLORS.primary} />
      <span style={{ 
        fontSize: '2.5rem', 
        fontWeight: 900, 
        color: 'white' 
      }}>
        {stat.value}
      </span>
    </div>
    <div style={{ 
      color: '#cbd5e1',
      fontSize: '0.9rem',
      fontWeight: 500,
    }}>
      {stat.label}
    </div>
  </motion.div>
))

const PrimaryButton = ({ text }) => (
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    style={{
      padding: '1rem 2rem',
      borderRadius: '0.75rem',
      border: 'none',
      fontWeight: 700,
      cursor: 'pointer',
      background: COLORS.primary,
      color: 'white',
      fontSize: '1rem',
      minWidth: '150px',
    }}
  >
    {text}
  </motion.button>
)

const SecondaryButton = ({ text }) => (
  <motion.button
    whileHover={{ scale: 1.00 }}
    whileTap={{ scale: 0.95 }}
    style={{
      padding: '1rem 2rem',
      borderRadius: '0.75rem',
      background: 'transparent',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      color: 'white',
      cursor: 'pointer',
      fontSize: '1rem',
      minWidth: '150px',
    }}
  >
    {text}
  </motion.button>
)

const AnimatedSocialLinks = () => (
  <div style={{ 
    marginTop: '3rem', 
    display: 'flex', 
    gap: '1rem' 
  }}>
    {[
      { icon: Github, label: 'GitHub', link: 'https://github.com/gingi144' },
      { icon: Linkedin, label: 'LinkedIn', link: 'https://www.linkedin.com/in/mambo-stallone-645418262/' },
      { icon: Mail, label: 'Email', link: 'mailto:stallonemambo@gmail.com' },
    ].map((social, index) => (
      <motion.a
        key={index}
        href={social.link}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.0, y: 0 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 + index * 0.1 }}
        style={{
          padding: '0.75rem',
          borderRadius: '0.5rem',
          background: 'rgba(255, 255, 255, 0.05)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textDecoration: 'none',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        }}
        aria-label={social.label}
      >
        <social.icon size={20} />
      </motion.a>
    ))}
  </div>
)

export default Home