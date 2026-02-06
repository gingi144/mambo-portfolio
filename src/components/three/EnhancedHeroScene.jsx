import React, { useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Float, Text3D, Center, Environment, Stars, Sparkles } from '@react-three/drei'
import * as THREE from 'three'

const EnhancedHeroScene = () => {
  return (
    <div style={{
      width: '100%',
      height: '100%',
      position: 'relative',
      borderRadius: '24px',
      overflow: 'hidden',
    }}>
      {/* Particle Background Canvas */}
      <Canvas
        camera={{ position: [0, 0, 10], fov: 75 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
        }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#667eea" />
          <pointLight position={[-10, -10, 5]} intensity={0.8} color="#f5576c" />
          
          <FloatingTechLogos />
          <ParticleField />
          <Stars radius={100} depth={50} count={5000} factor={4} />
          <Sparkles count={200} size={2} speed={0.3} opacity={0.8} color="#ffffff" />
          
          <Environment preset="city" />
          <OrbitControls 
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
            enableDamping
            dampingFactor={0.05}
          />
        </Suspense>
      </Canvas>
      
      {/* Overlay Text */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        zIndex: 2,
      }}>
        <div style={{
          textAlign: 'center',
          padding: '2rem',
          background: 'rgba(15, 23, 42, 0.7)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          maxWidth: '600px',
        }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: 900,
            margin: '0 0 1rem',
            background: 'linear-gradient(135deg, #667eea, #764ba2, #f093fb)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            lineHeight: 1.2,
          }}>
            Code · Create · Innovate
          </h1>
          <p style={{
            fontSize: '1.25rem',
            color: '#94a3b8',
            margin: '0 0 2rem',
            lineHeight: 1.6,
          }}>
            Building digital experiences that inspire and transform
          </p>
          <div style={{
            display: 'inline-flex',
            gap: '1rem',
            pointerEvents: 'auto',
          }}>
            <button style={{
              padding: '1rem 2rem',
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              border: 'none',
              borderRadius: '12px',
              color: 'white',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}>
              View Projects
            </button>
            <button style={{
              padding: '1rem 2rem',
              background: 'transparent',
              border: '2px solid rgba(102, 126, 234, 0.5)',
              borderRadius: '12px',
              color: '#94a3b8',
              fontWeight: 600,
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
            }}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const FloatingTechLogos = () => {
  const groupRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1
    }
  })

  const logos = [
    { position: [3, 2, 0], color: '#61DAFB', size: 1.5, text: 'React' },
    { position: [-3, 1, 0], color: '#3178C6', size: 1.5, text: 'TS' },
    { position: [0, -2, 2], color: '#339933', size: 1.5, text: 'Node' },
    { position: [2, -1, -2], color: '#000000', size: 1.5, text: 'Next' },
    { position: [-2, 2, -1], color: '#764ABC', size: 1.5, text: '3JS' },
  ]

  return (
    <group ref={groupRef}>
      {logos.map((logo, index) => (
        <Float
          key={index}
          speed={2}
          rotationIntensity={1}
          floatIntensity={2}
          position={logo.position}
        >
          <Center>
            <Text3D
              font="/fonts/helvetiker_regular.typeface.json"
              size={logo.size}
              height={0.2}
              curveSegments={12}
              bevelEnabled
              bevelThickness={0.02}
              bevelSize={0.02}
              bevelOffset={0}
              bevelSegments={5}
            >
              {logo.text}
              <meshNormalMaterial color={logo.color} />
            </Text3D>
          </Center>
        </Float>
      ))}
      
      {/* Central React Logo */}
      <Float speed={3} rotationIntensity={2} floatIntensity={3}>
        <mesh position={[0, 0, 0]}>
          <torusGeometry args={[1, 0.3, 16, 100]} />
          <meshStandardMaterial 
            color="#61DAFB"
            emissive="#61DAFB"
            emissiveIntensity={0.5}
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
      </Float>
    </group>
  )
}

const ParticleField = () => {
  const particlesRef = useRef()
  const count = 1000
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.05
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={new Float32Array(count * 3).map(() => (Math.random() - 0.5) * 20)}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={new Float32Array(count * 3).map(() => Math.random())}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default EnhancedHeroScene