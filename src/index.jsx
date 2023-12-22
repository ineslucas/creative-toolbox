import './style.css'
import { Canvas } from '@react-three/fiber'
import Experience from './Experience.js'
import * as THREE from 'three'
// import EIFForOverlay from './projectpages/EIFForOverlay.js'

export default function Index() {
  return <>
    <Canvas
      shadows
      dpr={ 1 }
      style={{ width: '100vw', height: '100vh' }}
      gl={ {
        antialias: true, // default
        toneMapping: THREE.ACESFilmicToneMapping, // default
        // outputColorSpace: THREE.LinearDisplayP3ColorSpace
      } }
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [3, 2, 6],
      }}
    >
      <Experience />
    </Canvas>
    {/* <EIFForOverlay/> */}
      {/* className="second-section" */}
  </>
}
