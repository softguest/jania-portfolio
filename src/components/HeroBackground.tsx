"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float } from "@react-three/drei"
import { useRef } from "react"
import * as THREE from "three"

function FloatingSphere({ position }: any) {
  const ref = useRef<THREE.Mesh>(null!)

  useFrame(() => {
    ref.current.rotation.x += 0.002
    ref.current.rotation.y += 0.003
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial
          color="#d4af37"
          metalness={1}
          roughness={0.2}
          transparent
          opacity={0.7}
        />
      </mesh>
    </Float>
  )
}

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />

        <FloatingSphere position={[-3, 1, 0]} />
        <FloatingSphere position={[3, -1, -1]} />
        <FloatingSphere position={[0, 2, -2]} />
        <FloatingSphere position={[-2, -2, -1]} />
      </Canvas>
    </div>
  )
}