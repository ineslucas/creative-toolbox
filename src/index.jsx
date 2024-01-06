import './style.css';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Experience from './Experience.js'; // Default Export
import * as THREE from 'three';
import styled from 'styled-components';
import { useState } from "react";
import EIFForOverlay from './pages/EIFForOverlay.js';
import { Cursor } from './layout/Cursor.js'; // Named Export

const ScrollContainer = styled.div`
  // height: 200vh; // Adjust this to play with toolbox animation duration.
  height: 100vh;
  width: 100vw;
  background-color: rgb(181, 79, 111);
`

export default function Index() {
  const cameraRotation = [0, 1.5, 0]; // 0, 0, 0 - do not move X or Z
  const cameraPosition = [4.5, 3, 0]; // 0, 2, 6

  const loaderFont = {
    font: '/ABCMonumentGrotesk-Regular-Trial.woff',
    fontSize: 30,
    letterSpacing: 0,
    lineHeight: 1,
    color: 'white',
    'materialToneMapped': false }
  const loaderStyles = {
    // backgroundColor: '#654873',
    backgroundColor: 'black',
    color: 'white',
    position: 'fixed',
  }
  const barStyles = {
    height: '5px', // Thicker bar
    width: '50%', // Bar width relative to its container
  };

  const [isHoveringLeicaM6, setIsHoveringLeicaM6] = useState(false);

  return <>
    <Loader
      dataStyles={loaderFont}
      containerStyles={loaderStyles} // Flex layout styles
      barStyles={barStyles} // Loading-bar styles
      dataInterpolation={(p) => `${p.toFixed(2)}%`} />

    <ScrollContainer>
      <Canvas
        shadows
        dpr={ 1 }
        style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0, backgroundColor: 'rgb(181, 79, 111)' }}
        //
        gl={ {
          antialias: true, // default
          toneMapping: THREE.ACESFilmicToneMapping, // default
          // outputColorSpace: THREE.LinearDisplayP3ColorSpace
        } }
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: cameraPosition,
          rotation: cameraRotation,
        }}
      >
        <Experience setIsHoveringLeicaM6={setIsHoveringLeicaM6} />
      </Canvas>
      {/* <Loader /> */}

    </ScrollContainer>

    <Cursor isHoveringLeicaM6={isHoveringLeicaM6}/>

    {/* Place here what's is needed to play */}
    {/* <EIFForOverlay/> */}
        {/* className="second-section" */}
  </>
}
