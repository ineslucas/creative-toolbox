import React from "react";
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import { MeshStandardMaterial } from 'three';

export default function BusinessCard()
{
  const front = useLoader(TextureLoader, '/images/card_front.png');
  const back = useLoader(TextureLoader, '/images/card_back.png');

  return <>
    <mesh scale={ 0.35 } rotation={ [ 1.6, -1, 9.45]} position={ [-1, 0.1, -0.4]}>
      <boxGeometry args={ [ 3, 2, 0.03 ] } />
      <meshStandardMaterial map={ front }/>
    </mesh>
  </>
}
