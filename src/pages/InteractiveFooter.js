// Not in use. 
// @react-three/rapier but trying to use the 2D components from @react-three/drei

import { Canvas } from '@react-three/fiber';
import { Box, Text } from "@react-three/drei";
import React, { Suspense } from "react";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import * as THREE from 'three';

const InteractiveFooter = () => {
  return <Canvas
      dpr={ 1 }
      style={{ width: '90vw', height: '40vh', top: 0, left: 0, backgroundColor: '#73003A' }}
      gl={ {
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
      } }
    >
      {/* <Suspense>
        <Physics debug>
          <RigidBody colliders={"hull"} restitution={2}>
            <Torus />
          </RigidBody>

          <CuboidCollider position={[0, -2, 0]} args={[20, 0.5, 20]} />
        </Physics>
      </Suspense> */}
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Physics gravity={[0, -9.81, 0]}>

        {/* Floor */}
        <RigidBody type="fixed">
          <CuboidCollider args={[10, 0.1, 10]} position={[0, -2, 0]} />
          <mesh position={[0, -2, 0]}>
            <boxGeometry args={[10, 0.1, 10]} />
            <meshStandardMaterial color="purple" />
          </mesh>
        </RigidBody>

      </Physics>
  </Canvas>
}

export default InteractiveFooter;
