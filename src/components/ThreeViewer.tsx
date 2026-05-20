"use client";

import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
} from "@react-three/drei";

function ProductModel() {
  return (
    <Float speed={2} rotationIntensity={1}>

      <mesh rotation={[0.4,0.2,0]}>

        <torusKnotGeometry args={[1,0.35,128,32]} />

        <meshStandardMaterial
          color="#8b5cf6"
          metalness={1}
          roughness={0.2}
        />

      </mesh>

    </Float>
  );
}

export default function ThreeViewer() {

  return (
    <section className="section">

      <div className="flex justify-between items-center mb-14">

        <div>

          <h2 className="text-5xl font-bold">
            3D Product Viewer
          </h2>

          <p className="text-gray-400 mt-4 text-lg">
            Inspect AI-generated 3D assets,
            CAD geometry,
            and interactive product visualizations.
          </p>

        </div>

      </div>

      <div className="card h-[600px] overflow-hidden">

        <Canvas camera={{ position:[0,0,4] }}>

          <ambientLight intensity={2} />

          <directionalLight
            position={[2,2,2]}
            intensity={3}
          />

          <ProductModel />

          <OrbitControls />

        </Canvas>

      </div>

    </section>
  );
}