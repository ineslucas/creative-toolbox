/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Microphone(props) {
  const { nodes, materials } = useGLTF("./microphone.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[0, -8.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[-1.3, 8, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={4}
          >
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.defaultMaterial.geometry}
              material={materials.MetalicMic}
              position={[0, 0, 0.1]}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.defaultMaterial001.geometry}
              material={materials.material}
              position={[0, 0, 0.35]}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.defaultMaterial002.geometry}
              material={materials.Plastic}
              position={[0, 0, 0.243]}
            />
            <mesh
              receiveShadow
              castShadow
              geometry={nodes.defaultMaterial003.geometry}
              material={materials.BlueLogo}
              position={[0, -0.08, 0.22]}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./microphone.glb");
