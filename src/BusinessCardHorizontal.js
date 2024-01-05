import React, { forwardRef } from "react";
import { useLoader } from '@react-three/fiber';
import { TextureLoader, MeshStandardMaterial } from 'three';

const BusinessCardHorizontal = forwardRef((props, ref) => {
  // const front = useLoader(TextureLoader, '/images/card_front.png');
  const back = useLoader(TextureLoader, '/images/card_back.png');
  const front = useLoader(TextureLoader, '/images/card_front.png'); // png is way better than an svg

  return <>
    {/** horizontal card */}
    <group ref={ref} scale={ 0.33 } position={ [-0.5, 3, -1.5]} rotation={ [-0.135, 1, 0]}>
      <mesh
        castShadow
        receiveShadow
        position={ [0, 0, 0.001]}>
        <boxGeometry args={ [ 3, 2, 0.02 ] } /> {/** width, height, depth */}
        <meshStandardMaterial map={ back }/>
      </mesh>
      <mesh castShadow receiveShadow>
        <boxGeometry args={ [ 3, 2, 0.02 ] } /> {/** width, height, depth */}
        <meshStandardMaterial map={ front }/>
      </mesh>
    </group>

  </>
});

export default BusinessCardHorizontal;
