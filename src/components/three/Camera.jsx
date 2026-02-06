import React from 'react'
import { PerspectiveCamera } from '@react-three/drei'

const Camera = ({ position = [0, 0, 5], fov = 50 }) => {
  return (
    <PerspectiveCamera
      makeDefault
      position={position}
      fov={fov}
      near={0.1}
      far={1000}
    />
  )
}

export default Camera