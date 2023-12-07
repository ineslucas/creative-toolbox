import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import CustomObject from "./CustomObject.js";

extend ({ OrbitControls: OrbitControls });

export default function Experience()
{
    {/** Experience is a component inside the Canvas - only place where we can use R3F hooks */}

    const { camera, gl } = useThree();
    const cubeRef = useRef();
    const groupRef = useRef();

    useFrame((state, delta) => // state is inside useFrame but we don't want to get it at each reload. Only at 1st load to use for OrbitControls
    {
        // console.log("tick", delta);
        cubeRef.current.rotation.y += delta; {/* cubeRef.current gives access to the mesh */}
        {/* delta = how much time has passed since last frame in seconds, can use it directly on rotation.y*/}
        // groupRef.current.rotation.y += delta * 0.5;
    });

    return <>
        <orbitControls args={ [camera, gl.domElement] } />
        <directionalLight position={ [ 1, 2, 3]} intensity={ 4 } />
        <ambientLight intensity={ 1.5 } />

        <group ref={ groupRef }>
          <mesh position-x={ -2 }>
            <sphereGeometry/>
            <meshStandardMaterial color="#943e59" />
          </mesh>

          <mesh ref={ cubeRef } rotation-y={ Math.PI * 0.25 } position={ [2, 0, 0 ] } scale={ 1.5 }> {/* same as mesh.position.set(3, 2, 1) */}
              <boxGeometry scale={ 1.5 }/>
              <meshStandardMaterial color="mediumpurple" />
          </mesh>
        </group>

        <mesh position-y={ - 1 } rotation-x={ -Math.PI * 0.5 } scale={ 10 }>
          <planeGeometry/>
          <meshStandardMaterial color="#654873" />
        </mesh>

        <CustomObject/>
    </>
}
