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


{/* trial of code to apply 2 textures to 1 mesh */}
// import React, { forwardRef } from "react";
// import { useLoader } from '@react-three/fiber';
// import { TextureLoader, MeshStandardMaterial } from 'three';

// const BusinessCard = forwardRef((props, ref) => {
//   const front = useLoader(TextureLoader, '/images/card_front.png');
//   const back = useLoader(TextureLoader, '/images/card_back.png');

//   const materials = [
//     new MeshStandardMaterial({ color: 'white' }), // right side
//     new MeshStandardMaterial({ color: 'white' }), // left side
//     new MeshStandardMaterial({ map: front }),     // top side
//     new MeshStandardMaterial({ color: 'white' }), // bottom side
//     new MeshStandardMaterial({ color: 'white' }), // front side
//     new MeshStandardMaterial({ map: back }),      // back side
//   ];

//   return <>
//     <mesh material={materials} scale={ 0.4 } rotation={ [ 1.3, 1, 0 ]} position={ [ 2, 3.3, -2]}>
//       <boxGeometry args={ [ 3, 2, 0.03 ] } />
//       <meshStandardMaterial attach="materials"/>
//     </mesh>
//   </>
// });

// export default BusinessCard;
