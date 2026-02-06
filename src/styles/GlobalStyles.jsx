import { Global, css } from '@emotion/react'

const GlobalStyles = () => (
  <Global
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }

      :root {
        /* Light Theme Colors */
        --color-primary-50: #eff6ff;
        --color-primary-100: #dbeafe;
        --color-primary-200: #bfdbfe;
        --color-primary-300: #93c5fd;
        --color-primary-400: #60a5fa;
        --color-primary-500: #3b82f6;
        --color-primary-600: #2563eb;
        --color-primary-700: #1d4ed8;
        --color-primary-800: #1e40af;
        --color-primary-900: #1e3a8a;
        
        /* Dark Theme Colors */
        --color-dark-bg: #0f172a;
        --color-dark-card: #1e293b;
        --color-dark-border: #334155;
        --color-dark-text: #f8fafc;
        
        /* Neutral Colors */
        --color-gray-50: #f9fafb;
        --color-gray-100: #f3f4f6;
        --color-gray-200: #e5e7eb;
        --color-gray-300: #d1d5db;
        --color-gray-400: #9ca3af;
        --color-gray-500: #6b7280;
        --color-gray-600: #4b5563;
        --color-gray-700: #374151;
        --color-gray-800: #1f2937;
        --color-gray-900: #111827;
        
        /* Spacing */
        --spacing-xs: 0.25rem;
        --spacing-sm: 0.5rem;
        --spacing-md: 1rem;
        --spacing-lg: 1.5rem;
        --spacing-xl: 2rem;
        --spacing-2xl: 3rem;
        
        /* Shadows */
        --shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
        --shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        --shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        --shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        
        /* Transitions */
        --transition-fast: 150ms ease;
        --transition-base: 300ms ease;
        --transition-slow: 500ms ease;
        
        /* Border Radius */
        --radius-sm: 0.25rem;
        --radius-md: 0.5rem;
        --radius-lg: 1rem;
        --radius-xl: 1.5rem;
        --radius-full: 9999px;
      }

      body {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: linear-gradient(135deg, var(--color-gray-50) 0%, #f0f9ff 100%);
        color: var(--color-gray-900);
        transition: background-color var(--transition-base), color var(--transition-base);
        min-height: 100vh;
      }

      body.dark {
        background: linear-gradient(135deg, var(--color-dark-bg) 0%, #1a202c 100%);
        color: var(--color-dark-text);
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      button {
        font-family: inherit;
        cursor: pointer;
      }

      /* Custom scrollbar */
      ::-webkit-scrollbar {
        width: 10px;
      }

      ::-webkit-scrollbar-track {
        background: var(--color-gray-100);
      }

      body.dark ::-webkit-scrollbar-track {
        background: var(--color-gray-900);
      }

      ::-webkit-scrollbar-thumb {
        background: var(--color-primary-500);
        border-radius: var(--radius-full);
      }

      ::-webkit-scrollbar-thumb:hover {
        background: var(--color-primary-600);
      }
    `}
  />
)

export default GlobalStyles