import { useRef, Suspense } from "react";
import { useHelper, SoftShadows, PresentationControls } from "@react-three/drei";
import * as THREE from 'three';
import Toolbox from "./Toolbox.jsx";
import Thread from "./Thread.jsx";
import Microphone from "./Microphone.jsx";
import Keyboard from "./Keyboard.jsx";
import LeicaM6 from "./LeicaM6.jsx";
import BusinessCard from "./BusinessCard.js";
import BusinessCardHorizontal from "./BusinessCardHorizontal.js";

{/* ToolboxWithObjects accepts a keyboardRef prop and forwards it to the Keyboard component. */ }

const ToolboxWithObjects = ({ keyboardRef, microphoneRef, leicaM6Ref, threadRef, businessCardRef, businessCardHorizontalRef, ...props }) => {
  // const directionalLightRef = useRef();
  // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink');

  return <>
    {/** Essentials */}
    {/* <gridHelper args={[10, 10]} /> */}
    <axesHelper scale={ 5 } />
    <SoftShadows size={ 80 } samples={ 20 } focus={ 0 } />
    <directionalLight
            // ref={ directionalLightRef }
            position={ [ 1, 3, 1.8]}
            intensity={ 4 }
            castShadow
            shadow-mapSize={ [1024 * 3, 1024 * 3] }
            shadow-camera-top={ 4 }
            shadow-camera-right={ 4 }
            shadow-camera-bottom={ -2 }
            shadow-camera-left={ -2 }
            shadow-camera-near={ 0.5 }
            shadow-camera-far={ 50 }
          />
    <ambientLight intensity={ 1 } />

    {/** Toolbox with Objects */}
    <PresentationControls
       config={{ mass: 2, tension: 500 }}
       snap={{ mass: 4, tension: 1500 }}
       zoom={1}
       polar={[-Math.PI / 3, Math.PI / 3]}
       azimuth={[-Math.PI / 1.4, Math.PI / 2]}>

      <group>
        <BusinessCard ref={ businessCardRef }/>
        <BusinessCardHorizontal ref={ businessCardHorizontalRef }/>

        <Suspense fallback={ null }>
          <LeicaM6 ref={ leicaM6Ref } scale={ 0.33 } rotation={ [ 0, 0, 0.1 ] } position={ [1.015, 3.1, 0.47 ] }/>
        </Suspense>

        <Suspense fallback={ null }>
          <Keyboard ref={ keyboardRef } scale={ 0.013 } rotation={ [-1.6, -0.75, -1.6] } position={ [-0.6, 3, 0.62] } />
        </Suspense>

        <Suspense fallback={ null }>
          <Thread ref={ threadRef } scale={ 1 } rotation={ [0, 0.08, 1.6] } position={ [1.5, 3.4, -0.4] } />
        </Suspense>

        <Suspense fallback={ null }>
          <Microphone ref={ microphoneRef } scale={ 1 } rotation={ [ 5, 0.02, 1.6 ] } position={ [ 0.3, 2.8, -1.7 ] }/>
        </Suspense>

        <Suspense fallback={ null }>
          <Toolbox scale={ 11 }/>
        </Suspense>
      </group>

    </PresentationControls>
  </>
};

export default ToolboxWithObjects; {/* replaces: export default function ToolboxWithObjects() { }; */}
