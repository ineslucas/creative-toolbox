/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Thread(props) {
  const { nodes, materials } = useGLTF("./thread.glb");
  const threadRef = useRef();

  useFrame((state, delta) => // state is inside useFrame but we don't want to get it at each reload. Only at 1st load to use for OrbitControls
    {
        threadRef.current.rotation.y += delta; {/* cubeRef.current gives access to the mesh */}
        {/* delta = how much time has passed since last frame in seconds, can use it directly on rotation.y*/}
    });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        ref={ threadRef }
        geometry={nodes.thread_spool.geometry}
        material={materials.material_0}
      />
    </group>
  );
}

useGLTF.preload("./thread.glb");
