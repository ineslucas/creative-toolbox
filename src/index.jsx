import './style.css';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Experience from './Experience.js'; // Default Export
import * as THREE from 'three';
import styled from 'styled-components';
import { useState } from "react";
import EIFForOverlay from './pages/EIFForOverlay.js';
import { Cursor } from './layout/Cursor.js'; // Named Export
import { BottomRight } from './layout/styles.js';

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
  const [isHoveringMicrophone, setIsHoveringMicrophone] = useState(false);
  const [isHoveringKeyboard, setIsHoveringKeyboard] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

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
        <Experience
          isAnimationComplete={isAnimationComplete}
          isHoveringKeyboard={isHoveringKeyboard}
          isHoveringLeicaM6={isHoveringLeicaM6}
          isHoveringMicrophone={isHoveringMicrophone}
          setIsAnimationComplete={setIsAnimationComplete}
          setIsHoveringLeicaM6={setIsHoveringLeicaM6}
          setIsHoveringMicrophone={setIsHoveringMicrophone}
          setIsHoveringKeyboard={setIsHoveringKeyboard}/>
      </Canvas>
      {/* <Loader /> */}

    </ScrollContainer>

    { isAnimationComplete && <Cursor isHoveringLeicaM6={isHoveringLeicaM6} isHoveringMicrophone={isHoveringMicrophone} isHoveringKeyboard={isHoveringKeyboard}/>}

    {/* Place here what's is needed to play */}
    {/* <EIFForOverlay/> */}
        {/* className="second-section" */}

    <BottomRight>
      Hi there, I’m <a href="https://mariaineslucas.com/" target="_blank">Inês’</a> creative toolbox, home to her creative projects. Pleasure to see you here. Each object means something - except the Leica.{/* <br></br> */} I unfortunately don’t own one. Drag the box and hover around. See what you can find.
    </BottomRight>
</>
}
