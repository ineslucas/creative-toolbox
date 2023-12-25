import React, { forwardRef } from "react";
import { useLoader } from '@react-three/fiber';
import { TextureLoader, MeshStandardMaterial } from 'three';

const BusinessCardHorizontal = forwardRef((props, ref) => {
  // const front = useLoader(TextureLoader, '/images/card_front.png');
  const back = useLoader(TextureLoader, '/images/card_back.png');

  return <>
    {/** horizontal card */}
    <mesh
      scale={ 0.33 }
      ref={ref}
      rotation={ [-0.135, 0, 0]}
      position={ [0, 2.7, 0.075]}
      castShadow
      receiveShadow>
      <boxGeometry args={ [ 3, 2, 0.02 ] } /> {/** width, height, depth */}
      <meshStandardMaterial map={ back }/>
    </mesh>
  </>
});

export default BusinessCardHorizontal;
