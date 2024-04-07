import './style.css';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Experience from './Experience.js'; // Default Export
import * as THREE from 'three';
import styled from 'styled-components';
import { useState } from "react";
import EIFForOverlay from './pages/EIFForOverlay.js';
import { Cursor } from './layout/Cursor.js'; // Named Export
import { BottomRight, BottomLeft } from './layout/styles.js';
import SkillsTags from './pages/SkillsTags.js';
import InteractiveFooter from './pages/InteractiveFooter.js';

const ScrollContainer = styled.div`
  height: 200vh; // Adjust this to play with toolbox animation duration.
  // height: 100vh;
   // TBC adjust to be responsive to how many contents there are in the page
  width: 100vw;
  background-color: rgb(181, 79, 111);
  overflow: scroll;
`

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

const IntroductionContainer = styled.div`
  min-width: 400px;
  padding: 20vh 2vw 10vh 2vw; // top right bottom left

  h1 {
    font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
    font-weight: 400;
    font-size: 2.5em;
    line-height: 1.2em;
    color: #fad9e4;
  }

  p {
    font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
    font-weight: 400;
    font-size: 1.5em;
    line-height: 1.5em;
    color: #fad9e4;
  }
`

export default function Index() {
  const cameraRotation = [0, 1.5, 0]; // 0, 0, 0 - do not move X or Z
  const cameraPosition = [4.5, 3, 0]; // 0, 2, 6

  const loaderFont = {
    font: '/ABCMonumentGrotesk-Regular-Trial.woff',
    fontSize: 18,
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
  const [isHoveringInfoIcon, setIsHoveringInfoIcon] = useState(false);

  return <>
    <Loader
      dataStyles={loaderFont}
      containerStyles={loaderStyles} // Flex layout styles
      barStyles={barStyles} // Loading-bar styles
      dataInterpolation={(p) => `${p.toFixed(2)}%`} />

    <ScrollContainer>
      <SkillsTags style={{ position: 'fixed', top: 0, right: 0, backgroundColor: 'rgb(181, 79, 111)' }}/>

      <Canvas
        shadows
        dpr={ 1 }
        style={{ width: '100vw', height: '100vh', top: 0, left: 0, backgroundColor: 'rgb(181, 79, 111)' }}
        //  position: 'fixed',
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

      <FlexContainer>
        <IntroductionContainer>
          <h1>
            I'm Inês, a marketer turned full stack developer into entrepreneurship and creativity through tech, previously at the European Investment Fund and Nestlé.
          </h1>
        </IntroductionContainer>


      </FlexContainer>
    </ScrollContainer>

    {/* USING 2D in r3F */}
    {/* <InteractiveFooter/> */}

    { isAnimationComplete && <Cursor isHoveringLeicaM6={isHoveringLeicaM6} isHoveringMicrophone={isHoveringMicrophone} isHoveringKeyboard={isHoveringKeyboard}/>}

    {/* Place here what's is needed to play */}
    {/* <EIFForOverlay/> */}
        {/* className="second-section" */}

    {/* Absolutely positioned components */}
    <BottomLeft className="info-icon-container" onMouseEnter={() => setIsHoveringInfoIcon(true)} onMouseLeave={() => setIsHoveringInfoIcon(false)}>
      <div className="info-icon">
        <img src="/images/icons/info.svg"/>
      </div>
      { isHoveringInfoIcon && <span>I designed and coded this page. See how on <a href="https://github.com/ineslucas/" target="_blank">Github</a>.</span> }
    </BottomLeft>

    <BottomRight>
      Animated arrow down.
    </BottomRight>
</>
}
