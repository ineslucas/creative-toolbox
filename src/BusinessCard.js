import React from "react";
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { MeshStandardMaterial } from 'three';

export default function BusinessCard()
{
  const front = useLoader(TextureLoader, '/images/card_front.png');
  const back = useLoader(TextureLoader, '/images/card_back.png');

  return <>
    {/** card with both faces */}
    <group rotation={ [ 0, 0, 0 ]} position={ [ 0.005, 0, 0]}>
      <mesh
        scale={ 0.33 }
        rotation={ [ 1.6, -1.19, 9.45]}
        position={ [-1.535, 0.1, 0.4]}
        castShadow
        receiveShadow>
        <boxGeometry args={ [ 3, 2, 0.01 ] } />
        <meshStandardMaterial map={ front }/>
      </mesh>

      <mesh
        scale={ 0.33 }
        rotation={ [ 1.6, -1.19, 9.45]}
        position={ [-1.536, 0.1, 0.4]}
        castShadow
        receiveShadow>
        <boxGeometry args={ [ 3, 2, 0.005 ] } />
        <meshStandardMaterial map={ back }/>
      </mesh>
    </group>


    {/** horizontal card */}
    <mesh
      scale={ 0.33 }
      rotation={ [-0.135, 0, 0]}
      position={ [0, 0, 0.075]}
      castShadow
      receiveShadow>
      <boxGeometry args={ [ 3, 2, 0.02 ] } /> {/** width, height, depth */}
      <meshStandardMaterial map={ back }/>
    </mesh>
  </>
}
