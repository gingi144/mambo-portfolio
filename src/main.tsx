import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Loader from './components/common/Loader' // Import your loader
import './styles/index.css'

// Create a separate div for loader
const loaderRoot = document.createElement('div')
loaderRoot.id = 'loader-root'
document.body.appendChild(loaderRoot)

const root = ReactDOM.createRoot(document.getElementById('root')!)
const loaderRootDiv = ReactDOM.createRoot(loaderRoot)

// Create a wrapper component
function RootComponent() {
  const [isLoading, setIsLoading] = React.useState(true)

  return (
    <>
      {/* Render loader in portal */}
      {isLoading && (
        <Loader onComplete={() => {
          console.log('Loader completed!')
          setIsLoading(false)
        }} />
      )}
      
      {/* Main app */}
      <div style={{
        opacity: isLoading ? 0 : 1,
        transition: 'opacity 0.5s ease-in-out',
        width: '100%'
      }}>
        <App />
      </div>
    </>
  )
}

root.render(
  <React.StrictMode>
    <RootComponent />
  </React.StrictMode>
)