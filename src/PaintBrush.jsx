/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF,

 } from '@react-three/drei'


export default function Model(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/paint-brush/model.gltf')
  return (
    <group ref={group} {...props} dispose={null}>
<group rotation={[-Math.PI, 0, 0,]} scale={0.3} >
<group rotation={[Math.PI / 2, 0, 0,]} >
<mesh geometry={nodes.Mesh_3.geometry} material={materials['039BE5']} />
<mesh geometry={nodes.Mesh_1.geometry} material={materials['795548']} />
<mesh geometry={nodes.Mesh_0.geometry} material={materials['80DEEA']} />
<mesh geometry={nodes.Mesh_2.geometry} material={materials['455A64']} />
</group>
</group>

    </group>
  )
}

useGLTF.preload('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/paint-brush/model.gltf')
