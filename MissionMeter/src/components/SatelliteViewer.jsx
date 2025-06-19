// src/components/SatelliteViewer.jsx
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Suspense, useRef } from 'react'

function SatelliteModel() {
  const { scene } = useGLTF('/assets/satellite.glb')
  const satelliteRef = useRef()

  // 🎯 Add subtle floating animation
  useFrame(({ clock }) => {
    const t = clock.getElapsedTime()
    if (satelliteRef.current) {
      satelliteRef.current.rotation.y = t * 0.2
      satelliteRef.current.position.y = Math.sin(t * 1.5) * 0.1
    }
  })

  return (
    <primitive
      ref={satelliteRef}
      object={scene}
      scale={0.3} // Smaller scale
      position={[0, 0, 0]}
    />
  )
}

export default function SatelliteViewer() {
  return (
    <Canvas camera={{ position: [0, 1.5, 3], fov: 50 }}>
      <ambientLight intensity={0.7} />
      <directionalLight position={[2, 2, 2]} intensity={1.2} />
      <Suspense fallback={null}>
        <SatelliteModel />
      </Suspense>
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate={false}
      />
    </Canvas>
  )
}
