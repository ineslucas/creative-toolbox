/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { forwardRef } from "react";
import { useGLTF } from "@react-three/drei";

const LeicaM6 = forwardRef((props, ref) => {
  const { nodes, materials } = useGLTF("./leicaM6.glb");
  return (
    <group {...props} ref={ref} dispose={null}>
      <group
        position={[0.7964, -0.3976, 0.0393]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[-0.835, 0, 2.4353]} rotation={[0, -1.5705, 0]}>
            <mesh
              geometry={nodes.Object_14.geometry}
              material={materials["flash.001"]}
              position={[-2.3391, 2.7155, 0.6359]}
              castShadow
              receiveShadow
            />
          </group>
          <group
            position={[0.4294, 2.1673, -0.0052]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[0.0931, 0.0175, 0.0931]}
          >
            <mesh
              geometry={nodes.Object_18.geometry}
              material={materials.R_metal}
              position={[0, 0.1785, 0.7524]}
              castShadow
              receiveShadow
            />
          </group>
          <group
            position={[-2.2977, 1.524, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={0.1513}
          >
            <mesh
              geometry={nodes.Object_22.geometry}
              material={materials.R_metal}
              position={[-0.2084, 0.1043, 1.0511]}
              castShadow
              receiveShadow
            />
          </group>
          <group
            position={[1.4879, 2.0334, 0.4984]}
            rotation={[0, 0, -Math.PI / 2]}
            scale={[1.3271, 1.1988, 1.3271]}
          >
            <mesh
              geometry={nodes.Object_24.geometry}
              material={materials.material}
              position={[0, -1.886, 0]}
              castShadow
              receiveShadow
            />
          </group>
          <group position={[-2.4979, 0.9038, 0.5121]} scale={0.5044}>
            <mesh
              geometry={nodes.Object_4.geometry}
              material={materials.leica_black}
              position={[3.3434, 1.6142, 0.0393]}
              castShadow
              receiveShadow
            />
            <mesh
              geometry={nodes.Object_5.geometry}
              material={materials.leather}
              position={[3.4322, 0.7826, -0.0202]}
              castShadow
              receiveShadow
            />
            <mesh
              geometry={nodes.Object_6.geometry}
              material={materials.viewfinder}
              position={[0.3616, 3.4589, -0.239]}
              castShadow
              receiveShadow
            />
            <mesh
              geometry={nodes.Object_7.geometry}
              material={materials["2nd_viewfinder"]}
              position={[2.4882, 3.5408, -1.0918]}
              castShadow
              receiveShadow
            />
          </group>
          <mesh
            geometry={nodes.Object_16.geometry}
            material={materials.flash}
            position={[-0.8198, 2.8647, 0.7399]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Object_10.geometry}
            material={materials.focus_ring}
            position={[-1.1942, 1.4568, -0.8078]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Object_11.geometry}
            material={materials.f_ring}
            position={[-1.1777, 1.467, -1.1181]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Object_12.geometry}
            material={materials.front_element}
            position={[-1.1942, 1.4568, -0.9845]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Object_9.geometry}
            material={materials.summicron}
            position={[-1.1873, 1.4611, -0.5521]}
            castShadow
            receiveShadow
          />
          <mesh
            geometry={nodes.Object_20.geometry}
            material={materials.leica}
            position={[-0.8447, 2.7398, -0.0451]}
            rotation={[-Math.PI / 2, -1.2217, 0]}
            scale={[0.1706, 0.0167, 0.1706]}
            castShadow
            receiveShadow
          />
        </group>
      </group>
    </group>
  );
});

useGLTF.preload("./leicaM6.glb");

export default LeicaM6;
