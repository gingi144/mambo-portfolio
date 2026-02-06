import React, { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

const HeroScene = ({ mousePosition }) => {
  return (
    <Canvas
      style={{
        width: '100%',
        height: '100%',
        borderRadius: '20px',
        background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)'
      }}
      camera={{ position: [0, 0, 8], fov: 50 }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#06b6d4" />
      
      <FloatingShapes mousePosition={mousePosition} />
      
      <Environment preset="city" />
      <OrbitControls 
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </Canvas>
  )
}

const FloatingShapes = ({ mousePosition }) => {
  const groupRef = useRef()
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1
      
      // Mouse follow effect
      groupRef.current.rotation.y += (mousePosition.x - 0.5) * 0.5
      groupRef.current.rotation.x += (mousePosition.y - 0.5) * 0.5
    }
  })

  return (
    <group ref={groupRef}>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        {/* Main Cube */}
        <mesh position={[0, 0, 0]} castShadow receiveShadow>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial 
            color="#3b82f6"
            metalness={0.8}
            roughness={0.2}
            emissive="#3b82f6"
            emissiveIntensity={0.2}
          />
        </mesh>

        {/* Orbiting Sphere */}
        <mesh position={[3, 1, 0]} castShadow>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshStandardMaterial 
            color="#06b6d4"
            metalness={0.7}
            roughness={0.3}
            emissive="#06b6d4"
            emissiveIntensity={0.3}
          />
        </mesh>

        {/* Floating Torus */}
        <mesh position={[-3, -1, 0]} castShadow>
          <torusGeometry args={[1.2, 0.3, 16, 100]} />
          <meshStandardMaterial 
            color="#8b5cf6"
            metalness={0.6}
            roughness={0.4}
            emissive="#8b5cf6"
            emissiveIntensity={0.4}
          />
        </mesh>

        {/* Cylinder */}
        <mesh position={[2, -2, 2]} castShadow>
          <cylinderGeometry args={[0.5, 0.5, 1.5, 32]} />
          <meshStandardMaterial 
            color="#10b981"
            metalness={0.5}
            roughness={0.5}
            emissive="#10b981"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Pyramid */}
        <mesh position={[-2, 2, -2]} castShadow>
          <coneGeometry args={[0.8, 1.5, 4]} />
          <meshStandardMaterial 
            color="#f59e0b"
            metalness={0.4}
            roughness={0.6}
            emissive="#f59e0b"
            emissiveIntensity={0.6}
          />
        </mesh>
      </Float>

      {/* Particles */}
      <Particles />
    </group>
  )
}

const Particles = () => {
  const particlesRef = useRef()
  const count = 100
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.1
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.2
    }
  })

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={new Float32Array(count * 3).map(() => (Math.random() - 0.5) * 10)}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color="#ffffff"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

export default HeroScene