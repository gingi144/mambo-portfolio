import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  MapPin, Calendar, Code, Cloud, Server, 
  BookOpen, Target, Zap, Users, Heart,
  Coffee, Gamepad, Music, Globe, TrendingUp,
  Sparkles, Award, Download, Mail, ArrowRight,
  Quote, Book, Lightbulb, Rocket
} from 'lucide-react'
import profileImage from '../assets/images/gings.png'

const About = () => {
  const [activeStory, setActiveStory] = useState('journey')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Colors
  const colors = {
    primary: '#0ea5e9',
    secondary: '#8b5cf6',
    accent: '#10b981',
    dark: '#020617',
    light: '#f8fafc',
    gray: '#94a3b8',
  }

  // Personal Stories
  const stories = {
    journey: {
      title: "My Tech Journey",
      icon: <MapPin size={24} />,
      content: "I started coding at 20 with HTML/CSS, building simple websites for local businesses. Fast forward 5 years, I've architected cloud systems that handle millions of requests daily. My journey wasn't linear - from self-taught developer to AWS Solutions Architect, every project taught me something new.",
      milestones: [
        { year: '2023', event: 'Built first website' },
        { year: '2024', event: 'First freelance project' },
        { year: '2025', event: 'Professional developer role' },
        { year: '2026', event: 'Lead cloud engineer' },
        { year: '2027', event: 'Enterprise solutions architect' }
      ]
    },
    philosophy: {
      title: "Development Philosophy",
      icon: <Lightbulb size={24} />,
      content: "I believe code should be as readable as a well-written book. I'm passionate about clean architecture, comprehensive testing, and documentation that actually helps. My mantra: 'Build it to last, not just to work.' I prioritize maintainability over cleverness and collaboration over individual brilliance.",
      principles: [
        "Code is for humans, computers just happen to run it",
        "Always leave the codebase better than you found it",
        "The best solution is often the simplest one",
        "Automate everything that can be automated",
        "Security and performance from day one"
      ]
    },
    workspace: {
      title: "My Creative Space",
      icon: <Coffee size={24} />,
      content: "My workspace is a minimalist setup with dual monitors, mechanical keyboard, and plenty of plants. I'm a morning person - best code happens before 10 AM with a perfect cup of coffee. I keep a physical notebook for ideas and use digital tools only for execution.",
      setup: [
        "Standing desk with dual 4K monitors",
        "Custom mechanical keyboard (Cherry MX Browns)",
        "Multiple potted plants (snake plants thrive)",
        "Whiteboard wall for architecture diagrams",
        "Sound system for focus music"
      ],
      tools: [
        "VS Code with custom theme",
        "iTerm2 + Oh My Zsh",
        "Docker Desktop",
        "Postman/Insomnia",
        "Notion for planning"
      ]
    },
    beyond: {
      title: "Beyond the Code",
      icon: <Heart size={24} />,
      content: "When I'm not architecting cloud systems, you'll find me hiking mountains, playing guitar, or exploring new board games. I believe diverse experiences make better engineers. I volunteer teaching coding to underprivileged youth and contribute to open-source projects monthly.",
      passions: [
        { activity: "Mountain Hiking", icon: <MapPin /> },
        { activity: "Playing Guitar", icon: <Music /> },
        { activity: "Board Games", icon: <Gamepad /> },
        { activity: "Photography", icon: <Globe /> },
        { activity: "Coffee Brewing", icon: <Coffee /> }
      ]
    }
  }

  // Inspirational Quotes
  const quotes = [
    {
      text: "The best way to predict the future is to invent it.",
      author: "Alan Kay",
      context: "Computer Science Pioneer"
    },
    {
      text: "First, solve the problem. Then, write the code.",
      author: "John Johnson",
      context: "Software Engineer"
    },
    {
      text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
      author: "Martin Fowler",
      context: "Software Developer"
    }
  ]

  // Learning Journey
  const learning = {
    current: [
      "Rust for systems programming",
      "Advanced Kubernetes patterns",
      "Machine Learning basics",
      "Edge computing architectures",
      "Web3 fundamentals"
    ],
    books: [
      "Designing Data-Intensive Applications",
      "The Pragmatic Programmer",
      "Clean Architecture",
      "Site Reliability Engineering",
      "The Phoenix Project"
    ],
    mentors: [
      { name: "Senior Architect", taught: "System design patterns" },
      { name: "DevOps Lead", taught: "Infrastructure as code" },
      { name: "Open Source Maintainer", taught: "Community collaboration" },
      { name: "UX Designer", taught: "User-centric thinking" }
    ]
  }

  return (
    <div style={{
      background: colors.dark,
      minHeight: '100vh',
      color: colors.light,
    }}>
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: isMobile ? '40px 20px' : '80px 40px',
      }}>
        {/* HERO INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '40px' : '80px',
            alignItems: 'center',
            marginBottom: '80px',
          }}
        >
          <div style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(14, 165, 233, 0.15)',
                color: colors.primary,
                padding: '8px 20px',
                borderRadius: '50px',
                fontSize: '14px',
                fontWeight: '600',
                width: 'fit-content',
              }}
            >
              <Sparkles size={16} />
              More Than Just Code
            </motion.span>

            <h1 style={{
              fontSize: isMobile ? '32px' : '48px',
              fontWeight: '800',
              lineHeight: '1.1',
              margin: 0,
              background: 'linear-gradient(to right, #0ea5e9, #8b5cf6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              The Story Behind the Screens
            </h1>

            <p style={{
              fontSize: isMobile ? '16px' : '18px',
              color: colors.gray,
              lineHeight: '1.6',
              margin: 0,
            }}>
              Behind every line of code, there's a person with passions, quirks, and stories. 
              This is where I share mine - from early coding adventures to current obsessions, 
              and everything in between.
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
            }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  background: 'rgba(14, 165, 233, 0.1)',
                  borderRadius: '8px',
                  border: `1px solid rgba(14, 165, 233, 0.2)`,
                }}
              >
                <Calendar size={16} />
                <span style={{ fontSize: '14px', color: colors.gray }}>
                  8+ years in tech
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 16px',
                  background: 'rgba(139, 92, 246, 0.1)',
                  borderRadius: '8px',
                  border: `1px solid rgba(139, 92, 246, 0.2)`,
                }}
              >
                <Globe size={16} />
                <span style={{ fontSize: '14px', color: colors.gray }}>
                  Remote work advocate
                </span>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            style={{
              position: 'relative',
            }}
          >
            <div style={{
              position: 'relative',
              width: isMobile ? '240px' : '320px',
              height: isMobile ? '240px' : '320px',
              borderRadius: '20px',
              overflow: 'hidden',
              border: `3px solid ${colors.primary}`,
              boxShadow: `0 20px 40px rgba(14, 165, 233, 0.2)`,
            }}>
              <img 
                src={profileImage} 
                alt="Profile" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                }}
                loading="lazy"
              />
            </div>
            <div style={{
              position: 'absolute',
              bottom: '-20px',
              right: '-20px',
              background: colors.accent,
              color: 'white',
              padding: '12px 20px',
              borderRadius: '12px',
              fontSize: '14px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              boxShadow: '0 10px 20px rgba(16, 185, 129, 0.3)',
            }}>
              <Quote size={16} />
              "Still learning every day"
            </div>
          </motion.div>
        </motion.div>

        {/* STORIES SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ marginBottom: '80px' }}
        >
          <div style={{
            textAlign: 'center',
            marginBottom: '40px',
          }}>
            <h2 style={{
              fontSize: isMobile ? '28px' : '36px',
              fontWeight: '800',
              margin: '0 0 16px',
              color: 'white',
            }}>
              Stories & Experiences
            </h2>
            <p style={{
              color: colors.gray,
              fontSize: isMobile ? '16px' : '18px',
              margin: '0 auto',
              maxWidth: '600px',
              lineHeight: '1.6',
            }}>
              Different chapters of my journey through technology and life
            </p>
          </div>

          {/* Story Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '40px',
          }}>
            {Object.entries(stories).map(([key, story]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveStory(key)}
                style={{
                  padding: '12px 24px',
                  borderRadius: '8px',
                  background: activeStory === key ? colors.primary : 'transparent',
                  border: `1px solid ${activeStory === key ? colors.primary : 'rgba(255,255,255,0.1)'}`,
                  color: activeStory === key ? 'white' : colors.gray,
                  fontWeight: '600',
                  fontSize: '14px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  minWidth: '160px',
                  justifyContent: 'center',
                }}
              >
                {story.icon}
                {story.title}
              </motion.button>
            ))}
          </div>

          {/* Active Story Content */}
          <motion.div
            key={activeStory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            style={{
              maxWidth: '800px',
              margin: '0 auto',
              padding: isMobile ? '32px 24px' : '48px',
              background: 'rgba(15, 23, 42, 0.7)',
              border: '1px solid rgba(14, 165, 233, 0.1)',
              borderRadius: '20px',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '32px',
            }}>
              <div style={{
                width: '56px',
                height: '56px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(14, 165, 233, 0.1)',
                borderRadius: '12px',
                color: colors.primary,
              }}>
                {stories[activeStory].icon}
              </div>
              <h3 style={{
                fontSize: '28px',
                fontWeight: '700',
                color: 'white',
                margin: 0,
              }}>
                {stories[activeStory].title}
              </h3>
            </div>

            <p style={{
              fontSize: '18px',
              color: colors.gray,
              lineHeight: '1.8',
              marginBottom: '32px',
            }}>
              {stories[activeStory].content}
            </p>

            {/* Dynamic content based on story */}
            {activeStory === 'journey' && (
              <div style={{
                display: 'flex',
                overflowX: 'auto',
                gap: '20px',
                padding: '20px 0',
                scrollbarWidth: 'thin',
              }}>
                {stories.journey.milestones.map((milestone, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      minWidth: '180px',
                      padding: '20px',
                      background: 'rgba(14, 165, 233, 0.05)',
                      borderRadius: '12px',
                      border: '1px solid rgba(14, 165, 233, 0.1)',
                    }}
                  >
                    <div style={{
                      fontSize: '12px',
                      fontWeight: '600',
                      color: colors.primary,
                      marginBottom: '8px',
                      letterSpacing: '1px',
                    }}>
                      {milestone.year}
                    </div>
                    <div style={{
                      fontSize: '14px',
                      color: 'white',
                      fontWeight: '500',
                    }}>
                      {milestone.event}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeStory === 'philosophy' && (
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
              }}>
                {stories.philosophy.principles.map((principle, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      padding: '16px',
                      background: 'rgba(14, 165, 233, 0.05)',
                      borderRadius: '8px',
                    }}
                  >
                    <Target size={16} color={colors.primary} />
                    <span style={{ color: colors.gray, fontSize: '14px' }}>
                      {principle}
                    </span>
                  </motion.div>
                ))}
              </div>
            )}

            {activeStory === 'workspace' && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: '24px',
              }}>
                <div>
                  <h4 style={{ color: 'white', marginBottom: '16px' }}>My Setup</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {stories.workspace.setup.map((item, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Zap size={12} color={colors.primary} />
                        <span style={{ color: colors.gray, fontSize: '14px' }}>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 style={{ color: 'white', marginBottom: '16px' }}>Digital Tools</h4>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {stories.workspace.tools.map((tool, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Code size={12} color={colors.secondary} />
                        <span style={{ color: colors.gray, fontSize: '14px' }}>{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeStory === 'beyond' && (
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
                justifyContent: 'center',
              }}>
                {stories.beyond.passions.map((passion, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    style={{
                      padding: '16px',
                      background: 'rgba(14, 165, 233, 0.1)',
                      borderRadius: '12px',
                      textAlign: 'center',
                      minWidth: '120px',
                    }}
                  >
                    <div style={{ marginBottom: '8px', color: colors.primary }}>
                      {passion.icon}
                    </div>
                    <div style={{ color: 'white', fontSize: '14px', fontWeight: '500' }}>
                      {passion.activity}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>

        {/* INSPIRATIONAL QUOTES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          style={{
            marginBottom: '80px',
          }}
        >
          <div style={{
            textAlign: 'center',
            marginBottom: '40px',
          }}>
            <h2 style={{
              fontSize: isMobile ? '28px' : '36px',
              fontWeight: '800',
              margin: '0 0 16px',
              color: 'white',
            }}>
              Words That Guide Me
            </h2>
            <p style={{
              color: colors.gray,
              fontSize: isMobile ? '16px' : '18px',
              margin: '0 auto',
              maxWidth: '600px',
              lineHeight: '1.6',
            }}>
              Quotes that resonate with my approach to technology and life
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
            gap: '24px',
          }}>
            {quotes.map((quote, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                style={{
                  padding: '32px',
                  background: 'rgba(15, 23, 42, 0.7)',
                  border: '1px solid rgba(14, 165, 233, 0.1)',
                  borderRadius: '16px',
                  backdropFilter: 'blur(10px)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '240px',
                }}
              >
                <div>
                  <Quote size={24} color={colors.primary} style={{ marginBottom: '16px' }} />
                  <p style={{
                    fontSize: '18px',
                    color: 'white',
                    fontStyle: 'italic',
                    lineHeight: '1.6',
                    marginBottom: '24px',
                  }}>
                    "{quote.text}"
                  </p>
                </div>
                <div>
                  <div style={{ color: colors.primary, fontWeight: '600' }}>
                    {quote.author}
                  </div>
                  <div style={{ fontSize: '12px', color: colors.gray }}>
                    {quote.context}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CURRENT LEARNING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          style={{
            background: 'rgba(15, 23, 42, 0.7)',
            border: '1px solid rgba(14, 165, 233, 0.1)',
            borderRadius: '20px',
            padding: isMobile ? '32px 24px' : '48px',
            marginBottom: '80px',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: '40px',
            alignItems: 'center',
          }}>
            <div style={{ flex: 1 }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '24px',
              }}>
                <BookOpen size={32} color={colors.primary} />
                <h2 style={{
                  fontSize: '32px',
                  fontWeight: '800',
                  margin: 0,
                  color: 'white',
                }}>
                  Currently Learning
                </h2>
              </div>
              <p style={{
                color: colors.gray,
                fontSize: '16px',
                lineHeight: '1.6',
                marginBottom: '32px',
              }}>
                The tech world never stops evolving, and neither do I. Here's what's on my learning radar.
              </p>
              
              <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: '24px',
              }}>
                <div>
                  <h3 style={{ color: 'white', marginBottom: '16px' }}>Skills in Progress</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {learning.current.map((skill, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Rocket size={14} color={colors.accent} />
                        <span style={{ color: colors.gray, fontSize: '14px' }}>{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 style={{ color: 'white', marginBottom: '16px' }}>Influential Books</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {learning.books.map((book, index) => (
                      <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Book size={14} color={colors.secondary} />
                        <span style={{ color: colors.gray, fontSize: '14px' }}>{book}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div style={{
              width: isMobile ? '100%' : '300px',
              padding: '32px',
              background: 'rgba(14, 165, 233, 0.1)',
              borderRadius: '16px',
              border: `1px solid ${colors.primary}`,
            }}>
              <h3 style={{ color: 'white', marginBottom: '24px', textAlign: 'center' }}>
                Mentors & Influences
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {learning.mentors.map((mentor, index) => (
                  <div key={index} style={{ textAlign: 'center' }}>
                    <div style={{ color: colors.primary, fontWeight: '600', marginBottom: '4px' }}>
                      {mentor.name}
                    </div>
                    <div style={{ fontSize: '12px', color: colors.gray }}>
                      {mentor.taught}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* FINAL THOUGHTS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            padding: isMobile ? '40px 24px' : '60px',
            textAlign: 'center',
            background: `linear-gradient(135deg, rgba(14, 165, 233, 0.1), rgba(139, 92, 246, 0.1))`,
            border: '1px solid rgba(14, 165, 233, 0.2)',
            borderRadius: '24px',
            backdropFilter: 'blur(10px)',
          }}
        >
          <div style={{
            width: '80px',
            height: '80px',
            margin: '0 auto 32px',
            background: colors.primary,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
          }}>
            <Heart size={32} />
          </div>
          
          <h2 style={{
            fontSize: isMobile ? '28px' : '36px',
            fontWeight: '800',
            color: 'white',
            marginBottom: '16px',
          }}>
            The Human Behind the Code
          </h2>
          
          <p style={{
            fontSize: isMobile ? '16px' : '18px',
            color: colors.gray,
            maxWidth: '600px',
            margin: '0 auto 32px',
            lineHeight: '1.6',
          }}>
            Technology is my craft, but people are my passion. I believe the best solutions 
            come from understanding both the technical requirements and the human stories behind them.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '16px 32px',
              background: colors.primary,
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              fontSize: '16px',
              cursor: 'pointer',
            }}
          >
            <Mail size={20} />
            Share Your Story
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default About