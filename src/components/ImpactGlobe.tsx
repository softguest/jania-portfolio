"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function Globe() {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    if (!ref.current) return
    ref.current.rotation.y += 0.0015
  })

  return (
    <mesh ref={ref}>
      <sphereGeometry args={[2, 64, 64]} />
      <meshStandardMaterial
        color="#0a1a2f"
        metalness={0.5}
        roughness={0.4}
      />
    </mesh>
  )
}

function Location({ position }: any) {
  return (
    <mesh position={position}>
      <sphereGeometry args={[0.05, 16, 16]} />
      <meshStandardMaterial color="#d4af37" />
    </mesh>
  )
}

export default function ImpactGlobe() {
  return (
    <div className="absolute right-0 top-0 w-[600px] h-[600px] opacity-70">
      <Canvas camera={{ position: [0, 0, 6] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} />

        {/* <Globe /> */}

        {/* Impact Locations */}
        <Location position={[1.4, 0.5, 1.2]} />
        <Location position={[-1.2, 0.7, 1.4]} />
        <Location position={[0.3, -1.5, 1.6]} />

        <Stars radius={50} depth={20} count={1000} factor={4} />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  )
}