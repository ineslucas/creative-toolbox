import { Suspense, useLayoutEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { SoftShadows, OrbitControls, useGLTF, useHelper, ScrollControls, useScroll, Scroll } from '@react-three/drei';
import { gsap } from "gsap";
import { Perf } from 'r3f-perf';
import { useControls } from 'leva';
import * as THREE from 'three';
import Thread from "./Thread.jsx";
import Microphone from "./Microphone.jsx";
import Toolbox from "./Toolbox.jsx";

export default function Experience()
{
  {/** Experience is a component inside the Canvas - only place where we can use R3F hooks */}

  const directionalLightRef = useRef();
  useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink');
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

  const groupAnimationRef = useRef();
  const tl = useRef();
  const scroll = useScroll();
  console.log("Scroll:", scroll); // returns null
  // console.log("Scroll offset:", scroll.offset); // if uncommented, returns null and breaks website

  useFrame((state, delta) => {
      {/** useFrame is a hook that runs every frame. Add code that needs to run every frame, like animations. */}

    // Updating the animation based on the page's scroll position:
    if (tl.current) { // Is GSAP timeline defined?
      if (scroll) { // checks if the scroll position (from useScroll) is available.
        if (scroll.offset !== tl.current.progress()) { // checks if the current scroll offset is different from the timeline's current progress
          tl.current.seek(scroll.offset * tl.current.duration()); // seeks the timeline to a point that corresponds to the current scroll position. This means the timeline's progress is directly mapped to the scroll position.
        }
      };
    };
  });

  {/** useLayoutEffect is a hook that runs after the DOM has been updated but before the browser has had a chance to "paint" those changes (the user doesn't see them yet). This makes it perfect for running animations. Use this instead of useEffect if you want to make changes to the DOM */}
  useLayoutEffect(() => {
    tl.current = gsap.timeline({defaults: { duration: 2, ease: 'power1.inOut' }});

    tl.current // once page is fully loaded:
    .to(groupAnimationRef.current.rotation, { y: 0.5 }, 0)
    .to(groupAnimationRef.current.position, {y: 2}, 5)
    .to(groupAnimationRef.current.position, {x: -1}, 5)
    .to(groupAnimationRef.current.position, {z: -3}, 5)
    .to(groupAnimationRef.current.position, {z: -2}, 6)
  }, []);

  return <>
    <ScrollControls pages={3} damping={0.25}>
        {/* Toolbox and Objects inside */}
      <group ref={ groupAnimationRef }>
          {/** Essentials */}
          <gridHelper args={[10, 10]} />
          <axesHelper scale={ 5 } />
          <SoftShadows size={ 80 } samples={ 20 } focus={ 0 } />
          { perfVisible && <Perf position="top-left" /> }
          <OrbitControls enableZoom={ false }/> {/* there's a makeDefault command - could be turned on */}
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

        <group position-y={-0.6}>
          <Suspense fallback={ null }>
            <Thread scale={ 1 } rotation={ [0, 0.08, 1.6] } position={ [1.5, -0.18, -0.4] } />
          </Suspense>

          <Suspense fallback={ null }>
            <Microphone scale={ 1 } rotation={ [rotation.x, rotation.y, rotation.z ] } position={ [ position.x, position.y, position.z ] }/>
          </Suspense>

          <Suspense fallback={ null }>
            <Toolbox scale={ 11 }/>
          </Suspense>
        </group>

        {/* Floor & Cube*/}
        <group>
          <mesh receiveShadow position-y={ -6.97 } scale={ 6 }>
            <boxGeometry args={[1, 2, 1.5]}/> {/** width, height, depth */}
            <meshPhysicalMaterial color="#654873" />
          </mesh>

          {/* Temporary Placeholder */}
          <mesh position={ [ 0, -2, 4.6] }>
            <planeGeometry args={[6, 2]}/>
            <meshStandardMaterial color="clear"/>
          </mesh>
        </group>

        {/* Back Wall */}
        <mesh position-z={- 4.5}>
          <planeGeometry args={[6, 10]}/>
          <meshStandardMaterial color="#654873"/>
        </mesh>
      </group>

      {/* Temporary Placeholder */}
      <Scroll html style={{width: '100%'}}>
        <h1 style={{ position: 'absolute', top: `132vh`}} >Scroll down</h1>
      </Scroll>
    </ScrollControls>
  </>
}

// Notes
{/* delta = how much time has passed since last frame in seconds, can use it directly on rotation.y*/}
{/* add an object that's color="mediumpurple" */}
{/** maybe bake the shadows as part of a sequence of movement? */}

{/* seek() is a method that allows us to jump to a specific point in the animation. */}
{/* offset is a value between 0 and 1 that represents how far down the page we've scrolled. */}
{/* tl.current.duration() is the total duration of the animation. */}
{/* tl.current.seek() is the current point in the animation. */}
