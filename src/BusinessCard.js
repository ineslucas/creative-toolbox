import React, { forwardRef } from "react";
import { useLoader, useThree } from '@react-three/fiber';
import { TextureLoader, MeshBasicMaterial, LinearFilter } from 'three';

const BusinessCard = forwardRef((props, ref) => {
  const { gl } = useThree();
  const front = useLoader(TextureLoader, '/images/card_front.png'); // png is way better than an svg
  const back = useLoader(TextureLoader, '/images/card_back.png');

  // Improve texture quality
  front.minFilter = LinearFilter;
  front.magFilter = LinearFilter;
  back.minFilter = LinearFilter;
  back.magFilter = LinearFilter;

  // Ensure renderer has high pixel ratio for better quality
  gl.setPixelRatio(window.devicePixelRatio);

  return <>
    {/** card with both faces */}
    <group ref={ref} rotation={ [ 1.3, 0, 0 ]} position={ [ 2, 3.3, -3]}>
      <mesh
        scale={ 0.33 }
        rotation={ [ 1.6, -1.19, 9.45]}
        position={ [-1.535, 0.1, 0.4]}
        castShadow
        receiveShadow>
        <boxGeometry args={ [ 3, 2, 0.01 ] } />
        <meshBasicMaterial map={ front }/>
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
  </>
});

export default BusinessCard;
