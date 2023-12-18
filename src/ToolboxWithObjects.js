import { useRef, Suspense } from "react";
import { useHelper, OrbitControls, SoftShadows } from "@react-three/drei";
import * as THREE from 'three';
import Toolbox from "./Toolbox.jsx";
import Thread from "./Thread.jsx";
import Microphone from "./Microphone.jsx";
import Keyboard from "./Keyboard.jsx";
import LeicaM6 from "./LeicaM6.jsx";
import BusinessCard from "./BusinessCard.js";

export default function ToolboxWithObjects()
{
  const directionalLightRef = useRef();
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink');

  return <>
    {/** Essentials */}
    <gridHelper args={[10, 10]} />
    <axesHelper scale={ 5 } />
    <OrbitControls enableZoom/> {/* there's a makeDefault command - could be turned on */}
    <SoftShadows size={ 80 } samples={ 20 } focus={ 0 } />
    <directionalLight
            ref={ directionalLightRef }
            position={ [ 1, 3, 1.8]}
            intensity={ 4 }
            castShadow
            shadow-mapSize={ [1024 * 3, 1024 * 3] }
            shadow-camera-top={ 3 }
            shadow-camera-right={ 3 }
            shadow-camera-bottom={ -2 }
            shadow-camera-left={ -2 }
            shadow-camera-near={ 0.5 }
            shadow-camera-far={ 50 }
          />
    <ambientLight intensity={ 1 } />

    {/** Toolbox with Objects */}
    <group>
      <BusinessCard/>

      <Suspense fallback={ null }>
        <LeicaM6 scale={ 0.33 } rotation={ [ 0, 0, 0.1 ] } position={ [1.015, -0.27, 0.47 ] }/>
      </Suspense>

      <Suspense fallback={ null }>
        <Keyboard scale={ 0.013 } rotation={ [-1.6, -0.75, -1.6] } position={ [-0.6, 0.13, 0.62] } />
      </Suspense>

      <Suspense fallback={ null }>
        <Thread scale={ 1 } rotation={ [0, 0.08, 1.6] } position={ [1.5, -0.18, -0.4] } />
      </Suspense>

      <Suspense fallback={ null }>
        <Microphone scale={ 1 } rotation={ [ 5, 0.02, 1.6 ] } position={ [ 0.3, 0.4, -1.7 ] }/>
      </Suspense>

      <Suspense fallback={ null }>
        <Toolbox scale={ 11 }/>
      </Suspense>
    </group>
  </>
}
