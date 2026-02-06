import React, { useRef, useEffect, useState } from 'react';

const GooeyNav = ({
  items,
  animationTime = 600,
  particleCount = 15,
  particleDistances = [90, 10],
  particleR = 100,
  timeVariance = 300,
  colors = [1, 2, 3, 1, 2, 3, 1, 4],
  initialActiveIndex = 0
}) => {
  const containerRef = useRef(null);
  const navRef = useRef(null);
  const filterRef = useRef(null);
  const textRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(initialActiveIndex);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Check screen size
  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const noise = (n = 1) => n / 2 - Math.random() * n;

  const getXY = (distance, pointIndex, totalPoints) => {
    const angle = ((360 + noise(8)) / totalPoints) * pointIndex * (Math.PI / 180);
    return [distance * Math.cos(angle), distance * Math.sin(angle)];
  };

  const createParticle = (i, t, d, r) => {
    let rotate = noise(r / 10);
    return {
      start: getXY(d[0], particleCount - i, particleCount),
      end: getXY(d[1] + noise(7), particleCount - i, particleCount),
      time: t,
      scale: 1 + noise(0.2),
      color: colors[Math.floor(Math.random() * colors.length)],
      rotate: rotate > 0 ? (rotate + r / 20) * 10 : (rotate - r / 20) * 10
    };
  };

  const makeParticles = element => {
    const d = isMobile ? [60, 8] : isTablet ? [75, 9] : particleDistances;
    const r = isMobile ? 80 : isTablet ? 90 : particleR;
    const bubbleTime = animationTime * 2 + timeVariance;
    element.style.setProperty('--time', `${bubbleTime}ms`);

    for (let i = 0; i < (isMobile ? 10 : particleCount); i++) {
      const t = animationTime * 2 + noise(timeVariance * 2);
      const p = createParticle(i, t, d, r);
      element.classList.remove('active');

      setTimeout(() => {
        const particle = document.createElement('span');
        const point = document.createElement('span');
        particle.classList.add('particle');
        particle.style.setProperty('--start-x', `${p.start[0]}px`);
        particle.style.setProperty('--start-y', `${p.start[1]}px`);
        particle.style.setProperty('--end-x', `${p.end[0]}px`);
        particle.style.setProperty('--end-y', `${p.end[1]}px`);
        particle.style.setProperty('--time', `${p.time}ms`);
        particle.style.setProperty('--scale', `${p.scale}`);
        particle.style.setProperty('--color', `var(--color-${p.color}, white)`);
        particle.style.setProperty('--rotate', `${p.rotate}deg`);

        point.classList.add('point');
        particle.appendChild(point);
        element.appendChild(particle);
        requestAnimationFrame(() => {
          element.classList.add('active');
        });
        setTimeout(() => {
          try {
            element.removeChild(particle);
          } catch {
            // Do nothing
          }
        }, t);
      }, 30);
    }
  };

  const updateEffectPosition = (element, index) => {
    if (!filterRef.current || !textRef.current) return;
    
    const liEl = element;
    if (!liEl) return;

    // Get the exact position and dimensions of the list item
    const rect = liEl.getBoundingClientRect();
    
    const styles = {
      left: `${rect.left}px`,
      top: `${rect.top}px`,
      width: `${rect.width}px`,
      height: `${rect.height}px`,
      position: 'fixed', // Changed to fixed for accurate positioning
      zIndex: 2,
    };
    
    Object.assign(filterRef.current.style, styles);
    Object.assign(textRef.current.style, styles);
    
    if (items && items[index]) {
      textRef.current.innerText = items[index].label;
    }
  };

  const handleClick = (e, index) => {
    e.preventDefault();
    const liEl = e.currentTarget;
    if (activeIndex === index) return;

    setActiveIndex(index);
    
    // Update position immediately
    updateEffectPosition(liEl, index);

    if (filterRef.current) {
      const particles = filterRef.current.querySelectorAll('.particle');
      particles.forEach(p => filterRef.current.removeChild(p));
    }

    if (textRef.current) {
      textRef.current.classList.remove('active');
      void textRef.current.offsetWidth;
      textRef.current.classList.add('active');
    }

    if (filterRef.current) {
      makeParticles(filterRef.current);
    }

    // Close mobile menu on item click
    if (isMobile) {
      setIsMenuOpen(false);
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      const liEl = e.currentTarget.parentElement;
      if (liEl) {
        handleClick({ currentTarget: liEl }, index);
      }
    }
  };

  useEffect(() => {
    if (!navRef.current) return;
    const activeLi = navRef.current.querySelectorAll('li')[activeIndex];
    if (activeLi) {
      updateEffectPosition(activeLi, activeIndex);
      textRef.current?.classList.add('active');
    }

    const resizeObserver = new ResizeObserver(() => {
      const currentActiveLi = navRef.current?.querySelectorAll('li')[activeIndex];
      if (currentActiveLi) {
        updateEffectPosition(currentActiveLi, activeIndex);
      }
    });

    if (containerRef.current) {
      resizeObserver.observe(containerRef.current);
    }

    return () => resizeObserver.disconnect();
  }, [activeIndex, isMenuOpen]);

  // Internal CSS - UPDATED for better positioning
  const cssStyles = `
    .gooey-nav-container {
      position: relative;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
      z-index: 1000;
    }

    .gooey-nav-container nav {
      display: flex;
      position: relative;
      transform: translate3d(0, 0, 0.01px);
    }

    /* Mobile menu button */
    .mobile-menu-btn {
      display: none;
      background: transparent;
      border: none;
      color: white;
      cursor: pointer;
      padding: 0.5rem;
      border-radius: 0.5rem;
      z-index: 100;
    }

    @media (max-width: 767px) {
      .mobile-menu-btn {
        display: block;
      }
      
      .nav-menu {
        position: fixed;
        top: 0;
        right: ${isMenuOpen ? '0' : '-100%'};
        width: 80%;
        max-width: 300px;
        height: 100vh;
        background: rgba(15, 23, 42, 0.95);
        backdrop-filter: blur(10px);
        transition: right 0.3s ease;
        padding: 5rem 1.5rem 2rem;
        z-index: 90;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
      }

      .nav-menu ul {
        flex-direction: column;
        gap: 0.5rem;
        padding: 0;
        width: 100%;
      }

      .nav-menu ul li {
        width: 100%;
      }

      .nav-menu ul li a {
        display: block;
        padding: 0.875rem 1rem;
        width: 100%;
        text-align: left;
      }

      .overlay {
        display: ${isMenuOpen ? 'block' : 'none'};
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(3px);
        z-index: 80;
      }
    }

    /* Tablet styles */
    @media (min-width: 768px) and (max-width: 1023px) {
      .nav-menu ul {
        gap: 1.5rem;
        padding: 0 0.875em;
      }

      .nav-menu ul li a {
        padding: 0.5em 0.875em;
        font-size: 0.9375rem;
      }
    }

    /* Desktop styles */
    @media (min-width: 1024px) {
      .nav-menu ul {
        gap: 2em;
        padding: 0 1em;
      }
    }

    .nav-menu ul {
      display: flex;
      list-style: none;
      margin: 0;
      position: relative;
      z-index: 3;
      color: white;
      text-shadow: 0 1px 1px hsl(205deg 30% 10% / 0.2);
    }

    .nav-menu ul li {
      border-radius: 100vw;
      position: relative;
      cursor: pointer;
      transition:
        background-color 0.3s ease,
        color 0.3s ease,
        box-shadow 0.3s ease;
      box-shadow: 0 0 0.5px 1.5px transparent;
      color: white;
    }

    .nav-menu ul li a {
      display: inline-block;
      padding: 0.6em 1em;
      text-decoration: none;
      color: inherit;
      font-weight: 500;
      font-size: 0.9375rem;
      white-space: nowrap;
    }

    .nav-menu ul li:focus-within:has(:focus-visible) {
      box-shadow: 0 0 0.5px 1.5px white;
    }

    .nav-menu ul li::after {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 100vw;
      background: white;
      opacity: 0;
      transform: scale(0);
      transition: all 0.3s ease;
      z-index: -1;
    }

    .nav-menu ul li.active {
      color: black;
      text-shadow: none;
    }

    .nav-menu ul li.active::after {
      opacity: 1;
      transform: scale(1);
    }

    /* FIXED: Effect positioning */
    .gooey-nav-container .effect {
      opacity: 1;
      pointer-events: none;
      display: grid;
      place-items: center;
      border-radius: 100vw;
      overflow: hidden;
    }

    .gooey-nav-container .effect.text {
      color: white;
      transition: color 0.3s ease;
      font-weight: 500;
      font-size: 0.9375rem;
      z-index: 4;
    }

    .gooey-nav-container .effect.text.active {
      color: black;
    }

    .gooey-nav-container .effect.filter {
      filter: blur(${isMobile ? '5px' : '7px'}) contrast(100) blur(0);
      mix-blend-mode: lighten;
      z-index: 3;
    }

    .gooey-nav-container .effect.filter::before {
      content: '';
      position: absolute;
      inset: ${isMobile ? '-50px' : '-75px'};
      z-index: -2;
      background: black;
    }

    .gooey-nav-container .effect.filter::after {
      content: '';
      position: absolute;
      inset: 0;
      background: white;
      transform: scale(0);
      opacity: 0;
      z-index: -1;
      border-radius: 100vw;
    }

    .gooey-nav-container .effect.active::after {
      animation: pill 0.3s ease both;
    }

    @keyframes pill {
      to {
        transform: scale(1);
        opacity: 1;
      }
    }

    .particle,
    .point {
      display: block;
      opacity: 0;
      width: ${isMobile ? '16px' : '20px'};
      height: ${isMobile ? '16px' : '20px'};
      border-radius: 100%;
      transform-origin: center;
    }

    .particle {
      --time: 5s;
      position: absolute;
      top: calc(50% - ${isMobile ? '6px' : '8px'});
      left: calc(50% - ${isMobile ? '6px' : '8px'});
      animation: particle calc(var(--time)) ease 1 -350ms;
    }

    .point {
      background: var(--color);
      opacity: 1;
      animation: point calc(var(--time)) ease 1 -350ms;
    }

    @keyframes particle {
      0% {
        transform: rotate(0deg) translate(calc(var(--start-x)), calc(var(--start-y)));
        opacity: 1;
        animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
      }

      70% {
        transform: rotate(calc(var(--rotate) * 0.5)) translate(calc(var(--end-x) * 1.2), calc(var(--end-y) * 1.2));
        opacity: 1;
        animation-timing-function: ease;
      }

      85% {
        transform: rotate(calc(var(--rotate) * 0.66)) translate(calc(var(--end-x)), calc(var(--end-y)));
        opacity: 1;
      }

      100% {
        transform: rotate(calc(var(--rotate) * 1.2)) translate(calc(var(--end-x) * 0.5), calc(var(--end-y) * 0.5));
        opacity: 1;
      }
    }

    @keyframes point {
      0% {
        transform: scale(0);
        opacity: 0;
        animation-timing-function: cubic-bezier(0.55, 0, 1, 0.45);
      }

      25% {
        transform: scale(calc(var(--scale) * 0.25));
      }

      38% {
        opacity: 1;
      }

      65% {
        transform: scale(var(--scale));
        opacity: 1;
        animation-timing-function: ease;
      }

      85% {
        transform: scale(var(--scale));
        opacity: 1;
      }

      100% {
        transform: scale(0);
        opacity: 0;
      }
    }

    /* Color variables for particles */
    :root {
      --color-1: #8B5CF6;
      --color-2: #3B82F6;
      --color-3: #EC4899;
      --color-4: #9333EA;
    }
  `;

  useEffect(() => {
    const styleId = 'gooey-nav-styles';
    let style = document.getElementById(styleId);
    
    if (!style) {
      style = document.createElement('style');
      style.id = styleId;
      document.head.appendChild(style);
    }
    
    style.textContent = cssStyles;
    
    return () => {
      if (style && style.parentNode) {
        style.parentNode.removeChild(style);
      }
    };
  }, [cssStyles, isMenuOpen, isMobile]);

  // Sample menu items if none provided
  const menuItems = items || [
    { label: 'Home', href: '#' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' }
  ];

  return (
    <div className="gooey-nav-container" ref={containerRef}>
      {/* Mobile menu button */}
      <button 
        className="mobile-menu-btn" 
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
      >
        {isMenuOpen ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        )}
      </button>

      {/* Mobile overlay */}
      {isMobile && (
        <div 
          className="overlay" 
          onClick={() => setIsMenuOpen(false)}
          onKeyDown={(e) => e.key === 'Escape' && setIsMenuOpen(false)}
          tabIndex="-1"
        />
      )}

      {/* Navigation menu */}
      <nav className={`nav-menu ${isMobile ? 'mobile-nav' : ''}`}>
        <ul ref={navRef}>
          {menuItems.map((item, index) => (
            <li key={index} className={activeIndex === index ? 'active' : ''}>
              <a 
                href={item.href} 
                onClick={(e) => handleClick(e, index)} 
                onKeyDown={(e) => handleKeyDown(e, index)}
                tabIndex={isMobile && !isMenuOpen ? -1 : 0}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      
      {/* Visual effects - FIXED: These are now positioned fixed */}
      <span className="effect filter" ref={filterRef} />
      <span className="effect text" ref={textRef} />
    </div>
  );
};

export default GooeyNav;