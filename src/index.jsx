import './style.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import * as THREE from 'three'
import styled from 'styled-components';
import EIFForOverlay from './projectpages/EIFForOverlay.js'

export const ScrollContainer = styled.div`
  height: 200vh; // Adjust this to play with toolbox animation duration.
  width: 100vw;
`

export default function Index() {
  return <>
    <ScrollContainer>
      <Canvas
        shadows
        dpr={ 1 }
        style={{ width: '100vw', height: '100vh', position: 'fixed', top: 0, left: 0 }}
        gl={ {
          antialias: true, // default
          toneMapping: THREE.ACESFilmicToneMapping, // default
          // outputColorSpace: THREE.LinearDisplayP3ColorSpace
        } }
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [3, 4, 6],
        }}
      >
        <Experience />
      </Canvas>
    </ScrollContainer>

    {/* Place here what's is needed to play */}
    {/* <EIFForOverlay/> */}
      {/* className="second-section" */}
  </>
}
