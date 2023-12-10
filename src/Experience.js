import { useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF } from '@react-three/drei'
import { Perf } from 'r3f-perf';
import { Suspense, useRef } from "react";
import { useControls } from 'leva';
import Thread from "./Thread.jsx";
import Microphone from "./Microphone.jsx";
import Toolbox from "./Toolbox.jsx";

export default function Experience()
{
    {/** Experience is a component inside the Canvas - only place where we can use R3F hooks */}

    const { camera, gl } = useThree();
    const { perfVisible, position, rotation } = useControls({
      position:
      {
          value: { x: 0.3, y: 0.4, z: -1.7 },
          step: 0.01,
      },
      rotation:
      {
          value: { x: 5, y: 0.02, z: 1.6 },
          step: 0.001,
      },
      perfVisible: true,
    })

    // const groupRef = useRef();

    // useFrame((state, delta) => // state is inside useFrame but we don't want to get it at each reload. Only at 1st load to use for OrbitControls
    // {
    //     // console.log("tick", delta);
    //     {/* delta = how much time has passed since last frame in seconds, can use it directly on rotation.y*/}
    //     groupRef.current.rotation.y += delta * 0.5;
    // });

    return <>
        <axesHelper scale={ 4 } />
        { perfVisible && <Perf position="top-left" /> }
        <OrbitControls makeDefault />
        <directionalLight castShadow position={ [ 1, 2, 3]} intensity={ 4.5 } />
        <ambientLight intensity={ 1.5 } />

        <group position-y={-0.6}>
          <Suspense fallback={ null }>
            <Thread scale={ 1 } rotation={ [0, 0.08, 1.6] } position={ [1.5, 0, -0.4] } />
          </Suspense>

          <Suspense fallback={ null }>
            <Microphone scale={ 1 } rotation={ [rotation.x, rotation.y, rotation.z ] } position={ [ position.x, position.y, position.z ] }/>
          </Suspense>

          <Suspense fallback={ null }>
            <Toolbox scale={ 11 }/>
          </Suspense>
        </group>

        {/* Floor */}
        <mesh position-y={ -1 } rotation-x={ -Math.PI * 0.5 } scale={ 10 }>
          <planeGeometry/>
          <meshStandardMaterial color="#654873" />
        </mesh>

        {/* add an object that's color="mediumpurple" */}
    </>
}
