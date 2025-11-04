import './style.css';
import { Canvas } from '@react-three/fiber';
import { Loader } from '@react-three/drei';
import Experience from './Experience.js'; // Default Export
import * as THREE from 'three';
import styled, { keyframes } from 'styled-components';
import React, { useState, useRef } from "react";
import { Cursor } from './layout/Cursor.js'; // Named Export
// import { BottomLeft } from './layout/styles.js';
import SkillsTags from './pages/SkillsTags.js';
import ArrowDown from '../public/images/icons/arrow-down-solid.svg';
// import EIFForOverlay from './pages/EIFForOverlay.js';
// import InteractiveFooter from './pages/InteractiveFooter.js';

const ScrollContainer = styled.div`
  // height: 200vh; // Adjust this to play with toolbox animation duration.
  // height: 100vh;
   // TBC adjust to be responsive to how many contents there are in the page

  // No height set atm.
  width: 100vw;
  background-color: rgb(181, 79, 111);
`

const ThreeJSContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
`

const bounceAnimation = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

const AnimatedArrow = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 35px;
  animation: ${bounceAnimation} 2s infinite;
`;

const IntroductionContainer = styled.div`
  min-width: 400px;
  padding: 15vh 3vw 10vh 2vw; // top right bottom left

  h1 {
    font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
    font-weight: 400;
    font-size: 2.2em;
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

const ArtistBio = styled.div`
  padding: 6vh 3vw 6vh 2vw; // top right bottom left
  min-width: 400px;
  background-color: #EDB3C9;

  p {
    font-family: 'ABCMonumentGrotesk-Regular-Trial', sans-serif;
    font-weight: 400;


    color: #3C536C;
  }

  // Colors:
  // color: #CED1B6;
  // color: #AE9DD3;
  // background-color: #53364F;
  // color: #707669;

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

  // Scrolling upwards to the introduction section from the SkillsTags component
  // const introductionContainerRef = useRef(null);
  // const scrollToIntroduction = () => introductionContainerRef.current?.scrollIntoView({ behavior: 'smooth' });

  return <>
    <Loader
      dataStyles={loaderFont}
      containerStyles={loaderStyles} // Flex layout styles
      barStyles={barStyles} // Loading-bar styles
      dataInterpolation={(p) => `${p.toFixed(2)}%`} />

    <ScrollContainer>
      {/* 3: Physics Container */}
      <SkillsTags/>

      {/* 2: Introduction Container */}
      {/* <IntroductionContainer> */}
        {/* <h1>
          I'm <a href="https://mariaineslucas.com/" target="_blank" style={{ color: '#660134' }}>Inês Lucas</a>, a full stack creative developer based in Lisbon into entrepreneurship, previously at the European Investment Fund.
          Incoming NYU Interactive Telecommunications grad student.
        </h1> */}
      {/* </IntroductionContainer> */}

      {/* 4: Artist Bio Container */}
      <ArtistBio>
        <p>
          <b>Inês Lucas</b> is a Portuguese <b>interdisciplinary artist and creative technologist</b>. Inês brings communities together through interactive intimate experiences of <b>presence, memory and motions of nature</b>. These explorations have taken physical form as speculative objects, immersive archives, sensory materials and even short films. Recent work has been presented by Shadow Traffic and at various interactive media art shows.
          <br />
          <br />
          Social impact and accessibility has been at the center of her practice as a full stack developer, data analyst, marketeer, founder and organizer. Her professional background includes roles with governmental agencies, such as the <b>European Union</b>, <b>European Investment Fund</b>, <b>Unbabel</b> and the <b>Center for Responsible AI</b>.
          <br />
          <br />
          Inês has a soft spot for fabrication and works fluently across digital and physical media. Her tools of choice include creative coding, interactive media platforms, physical computing, and machine learning for real-time experiences.
          <br />
          <br />
          She is based in Brooklyn, New York, where she’s currently pursuing her Master’s at <b>NYU’s Interactive Telecommunications Program</b>.
        </p>
      </ArtistBio>

      {/* 1: Toolbox + Overlays */}
      <ThreeJSContainer>
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

        {/* Container positioned at the top */}
        <div style={{ position: 'absolute', top: '3vw', right: '3vw', textAlign: 'right', color: '#73003A' }}>
          {/* TO DO: replace this with arrows and something more playful such as 'Drag me!'*/}
          {/* <p>Hi there, I’m <a href="https://mariaineslucas.com/" target="_blank" style={{ color: '#660134' }}>Inês’</a> creative toolbox, home to her creative projects. Pleasure to see you here. Each object means something - except the Leica. She sadly doesn’t own one. Drag the box and hover around. See what you can find.</p> */}
        </div>

        {/* Container with Github Info Icon + Arrow */}
        <div style={{ position: 'absolute', display: 'flex', bottom: '3vw', right: '3vw', maxWidth: '300px' }}>
          <div
            onMouseEnter={() => setIsHoveringInfoIcon(true)}
            onMouseLeave={() => setIsHoveringInfoIcon(false)}
          >
              <div className="info-icon-container">
              { isHoveringInfoIcon && (
                <span>
                  I designed and coded this creative toolbox. <br /> Drag the box, hover and explore. Code on <a href="https://github.com/ineslucas/" target="_blank">Github</a>.
                </span>
              )}
              <div className="info-icon">
                <img src="/images/icons/info.svg"/>
              </div>
            </div>
          </div>
          <AnimatedArrow src={ArrowDown} alt="Arrow to scroll up" style={{ width: '40px', height: '40px' }} />
        </div>

      </ThreeJSContainer>

    </ScrollContainer>

    { isAnimationComplete && <Cursor isHoveringLeicaM6={isHoveringLeicaM6} isHoveringMicrophone={isHoveringMicrophone} isHoveringKeyboard={isHoveringKeyboard}/>}

    {/* <EIFForOverlay/> */}

    {/* USING 2D in r3F */}
    {/* <InteractiveFooter/> */}
</>
}
