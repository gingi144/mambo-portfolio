import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Code, Server, Cloud, Database, Cpu, Paintbrush,
  Smartphone, Shield, GitBranch, Terminal, Zap,
  TrendingUp, Users, Rocket, CheckCircle, Target,
  BarChart, Layers, Puzzle, Globe, Award
} from 'lucide-react'

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillsData = {
    frontend: {
      title: 'Frontend Development',
      icon: <Code size={24} />,
      color: '#0ea5e9',
      description: 'Building responsive, interactive user interfaces with modern frameworks',
      skills: [
        { name: 'React.js', level: 95, description: 'Building complex SPAs and component libraries' },
        { name: 'Next.js', level: 90, description: 'Server-side rendering and static site generation' },
        { name: 'TypeScript', level: 88, description: 'Type-safe JavaScript development' },
        { name: 'Tailwind CSS', level: 92, description: 'Utility-first CSS framework' },
        { name: 'Redux/Context', level: 85, description: 'State management solutions' },
        { name: 'Framer Motion', level: 80, description: 'Advanced animations and transitions' }
      ]
    },
    backend: {
      title: 'Backend Development',
      icon: <Server size={24} />,
      color: '#10b981',
      description: 'Building scalable server-side applications and APIs',
      skills: [
        { name: 'Node.js', level: 92, description: 'JavaScript runtime for server-side' },
        { name: 'Express.js', level: 90, description: 'Fast, minimalist web framework' },
        { name: 'Python/Django', level: 85, description: 'Rapid backend development' },
        { name: 'REST APIs', level: 93, description: 'Designing robust API endpoints' },
        { name: 'GraphQL', level: 80, description: 'Query language for APIs' },
        { name: 'Authentication', level: 88, description: 'JWT, OAuth, and session management' }
      ]
    },
    devops: {
      title: 'DevOps & Cloud',
      icon: <Cloud size={24} />,
      color: '#8b5cf6',
      description: 'Infrastructure, deployment, and cloud management',
      skills: [
        { name: 'AWS/Azure', level: 85, description: 'Cloud platform management' },
        { name: 'Docker', level: 88, description: 'Containerization and orchestration' },
        { name: 'Kubernetes', level: 80, description: 'Container orchestration' },
        { name: 'CI/CD', level: 90, description: 'Automated deployment pipelines' },
        { name: 'Terraform', level: 75, description: 'Infrastructure as code' },
        { name: 'Linux/Shell', level: 85, description: 'Server administration and scripting' }
      ]
    },
    database: {
      title: 'Database & Storage',
      icon: <Database size={24} />,
      color: '#f59e0b',
      description: 'Data modeling, optimization, and management',
      skills: [
        { name: 'MongoDB', level: 90, description: 'NoSQL database management' },
        { name: 'PostgreSQL', level: 85, description: 'Relational database design' },
        { name: 'Redis', level: 78, description: 'In-memory data structure store' },
        { name: 'Database Design', level: 88, description: 'Schema architecture and optimization' },
        { name: 'Query Optimization', level: 82, description: 'Performance tuning and indexing' },
        { name: 'Data Migration', level: 80, description: 'Database migration strategies' }
      ]
    },
    mobile: {
      title: 'Mobile Development',
      icon: <Smartphone size={24} />,
      color: '#ec4899',
      description: 'Cross-platform mobile application development',
      skills: [
        { name: 'React Native', level: 85, description: 'Cross-platform mobile apps' },
        { name: 'Flutter', level: 70, description: 'UI toolkit for native apps' },
        { name: 'Mobile UI/UX', level: 80, description: 'Designing mobile-first interfaces' },
        { name: 'App Store Deployment', level: 75, description: 'Publishing to stores' },
        { name: 'Push Notifications', level: 78, description: 'Mobile notification systems' },
        { name: 'Offline Storage', level: 72, description: 'Local data persistence' }
      ]
    }
  }

  const certifications = [
    { name: 'AWS Certified Solutions Architect', provider: 'Amazon Web Services', year: '2023' },
    { name: 'React Developer Certification', provider: 'Meta', year: '2023' },
    { name: 'Node.js Certified Developer', provider: 'OpenJS Foundation', year: '2022' },
    { name: 'Google Cloud Associate', provider: 'Google', year: '2022' },
    { name: 'Docker Certified Associate', provider: 'Docker', year: '2021' },
    { name: 'MongoDB Certified Developer', provider: 'MongoDB', year: '2021' }
  ]

  const softSkills = [
    { skill: 'Problem Solving', icon: <Puzzle size={16} /> },
    { skill: 'Team Collaboration', icon: <Users size={16} /> },
    { skill: 'Project Management', icon: <Target size={16} /> },
    { skill: 'Communication', icon: <Globe size={16} /> },
    { skill: 'Adaptability', icon: <Layers size={16} /> },
    { skill: 'Leadership', icon: <TrendingUp size={16} /> }
  ]

  const tools = [
    { category: 'Development', items: ['VS Code', 'Git', 'Postman', 'Docker', 'Chrome DevTools'] },
    { category: 'Design', items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator'] },
    { category: 'Project Management', items: ['Jira', 'Trello', 'Notion', 'Slack'] },
    { category: 'Testing', items: ['Jest', 'Cypress', 'Postman', 'Selenium'] }
  ]

  return (
    <div style={{
      background: '#020617',
      minHeight: '100vh',
      color: '#f8fafc',
      padding: '40px 20px'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            textAlign: 'center',
            marginBottom: '60px'
          }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(14, 165, 233, 0.1)',
            borderRadius: '20px',
            padding: '8px 20px',
            marginBottom: '20px'
          }}>
            <Zap size={16} />
            <span style={{
              fontSize: '14px',
              fontWeight: '600',
              color: '#0ea5e9'
            }}>
              Technical Expertise
            </span>
          </div>
          
          <h1 style={{
            fontSize: '40px',
            fontWeight: '800',
            margin: '0 0 16px',
            background: 'linear-gradient(to right, #0ea5e9, #8b5cf6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Skills & Technologies
          </h1>
          
          <p style={{
            fontSize: '18px',
            color: '#94a3b8',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Continuous learning and mastery of modern technologies to build scalable, 
            performant applications across the entire development stack.
          </p>
        </motion.div>

        {/* Skills Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          style={{
            marginBottom: '60px'
          }}
        >
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '12px',
            marginBottom: '40px'
          }}>
            {Object.entries(skillsData).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '10px',
                  border: `1px solid ${activeCategory === key ? category.color : '#334155'}`,
                  background: activeCategory === key 
                    ? category.color 
                    : 'rgba(15, 23, 42, 0.7)',
                  color: activeCategory === key ? 'white' : '#94a3b8',
                  fontSize: '15px',
                  fontWeight: '600',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'all 0.3s ease'
                }}
              >
                {category.icon}
                {category.title}
              </button>
            ))}
          </div>

          {/* Active Category Content */}
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'rgba(15, 23, 42, 0.7)',
              border: '1px solid #334155',
              borderRadius: '16px',
              padding: '30px'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '24px'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '12px',
                background: skillsData[activeCategory].color + '20',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: skillsData[activeCategory].color
              }}>
                {skillsData[activeCategory].icon}
              </div>
              <div>
                <h2 style={{
                  fontSize: '24px',
                  fontWeight: '700',
                  margin: '0 0 4px',
                  color: 'white'
                }}>
                  {skillsData[activeCategory].title}
                </h2>
                <p style={{
                  fontSize: '15px',
                  color: '#94a3b8',
                  margin: 0
                }}>
                  {skillsData[activeCategory].description}
                </p>
              </div>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '20px'
            }}>
              {skillsData[activeCategory].skills.map((skill, index) => (
                <div
                  key={index}
                  style={{
                    padding: '20px',
                    background: 'rgba(30, 41, 59, 0.5)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '12px'
                  }}>
                    <span style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: 'white'
                    }}>
                      {skill.name}
                    </span>
                    <span style={{
                      fontSize: '14px',
                      fontWeight: '600',
                      color: skillsData[activeCategory].color
                    }}>
                      {skill.level}%
                    </span>
                  </div>
                  
                  <p style={{
                    fontSize: '13px',
                    color: '#94a3b8',
                    margin: '0 0 12px',
                    lineHeight: '1.5'
                  }}>
                    {skill.description}
                  </p>
                  
                  <div style={{
                    height: '6px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '3px',
                    overflow: 'hidden'
                  }}>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      style={{
                        height: '100%',
                        background: `linear-gradient(to right, ${skillsData[activeCategory].color}, ${skillsData[activeCategory].color}80)`,
                        borderRadius: '3px'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{
            marginBottom: '60px'
          }}
        >
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '30px'
          }}>
            <Award size={24} color="#0ea5e9" />
            <h2 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: 'white',
              margin: 0
            }}>
              Certifications
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '20px'
          }}>
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                style={{
                  padding: '20px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid #334155',
                  borderRadius: '12px',
                  transition: 'all 0.3s ease'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '12px'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'white'
                  }}>
                    <CheckCircle size={20} />
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '16px',
                      fontWeight: '600',
                      color: 'white',
                      margin: '0 0 4px'
                    }}>
                      {cert.name}
                    </h3>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '13px',
                      color: '#94a3b8'
                    }}>
                      <span>{cert.provider}</span>
                      <span>•</span>
                      <span>{cert.year}</span>
                    </div>
                  </div>
                </div>
                
                <div style={{
                  fontSize: '14px',
                  color: '#cbd5e1',
                  lineHeight: '1.5'
                }}>
                  Validated expertise in industry-standard technologies and best practices.
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills & Tools */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          marginBottom: '60px'
        }}>
          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px'
            }}>
              <Users size={24} color="#10b981" />
              <h2 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: 'white',
                margin: 0
              }}>
                Soft Skills
              </h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px'
            }}>
              {softSkills.map((skill, index) => (
                <div
                  key={index}
                  style={{
                    padding: '16px',
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid #334155',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px'
                  }}
                >
                  <div style={{
                    color: '#10b981'
                  }}>
                    {skill.icon}
                  </div>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#e2e8f0'
                  }}>
                    {skill.skill}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Tools */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px'
            }}>
              <Terminal size={24} color="#8b5cf6" />
              <h2 style={{
                fontSize: '24px',
                fontWeight: '700',
                color: 'white',
                margin: 0
              }}>
                Development Tools
              </h2>
            </div>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '16px'
            }}>
              {tools.map((category, index) => (
                <div
                  key={index}
                  style={{
                    padding: '20px',
                    background: 'rgba(15, 23, 42, 0.7)',
                    border: '1px solid #334155',
                    borderRadius: '12px'
                  }}
                >
                  <h3 style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#8b5cf6',
                    margin: '0 0 12px',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                  }}>
                    {category.category}
                  </h3>
                  <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '8px'
                  }}>
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        style={{
                          fontSize: '13px',
                          color: '#cbd5e1',
                          padding: '6px 0',
                          borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
                        }}
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            background: 'linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(139, 92, 246, 0.1))',
            border: '1px solid rgba(14, 165, 233, 0.2)',
            borderRadius: '16px',
            padding: '40px',
            textAlign: 'center'
          }}
        >
          <div style={{
            width: '80px',
            height: '80px',
            margin: '0 auto 20px',
            background: 'linear-gradient(135deg, #0ea5e9, #8b5cf6)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white'
          }}>
            <Rocket size={32} />
          </div>
          
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: 'white',
            margin: '0 0 12px'
          }}>
            Ready to Build Together?
          </h2>
          
          <p style={{
            fontSize: '16px',
            color: '#cbd5e1',
            maxWidth: '500px',
            margin: '0 auto 24px',
            lineHeight: '1.6'
          }}>
            Let's leverage these skills to create something amazing. Whether it's a 
            complex enterprise application or an innovative startup idea, I'm ready to contribute.
          </p>
          
          <button style={{
            padding: '14px 32px',
            background: '#0ea5e9',
            color: 'white',
            border: 'none',
            borderRadius: '10px',
            fontSize: '16px',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            Start a Project
            <Zap size={18} />
          </button>
        </motion.div>
      </div>
    </div>
  )
}

export default Skills
