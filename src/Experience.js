import React, { useLayoutEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Perf } from 'r3f-perf';
import { useControls } from 'leva';
import ToolboxWithObjects from "./ToolboxWithObjects.js";
// import EIF from "./projectpages/EIF.js";

gsap.registerPlugin(ScrollTrigger);

export default function Experience()
{
  {/** Experience is a component inside the Canvas - only place where we can use R3F hooks */}
  const { camera, gl } = useThree();
  const { perfVisible } = useControls({
    perfVisible: true,
  });
  const keyboardRef = useRef();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: gl.domElement,
      start: "top top",
      toggleActions: "play none none hone", // default
      // end: "bottom center",
      scrub: true,
      markers: true,
    },
  });

  useLayoutEffect(() => {

    if (keyboardRef.current) {
      tl.to(keyboardRef.current.position, { x: 0, y: 3, z: 0, duration: 4 });
    }

    tl.to(camera.position, { x: 0, y: 6, z: 0, duration: 4 });

  }, []);

  return <>
    { perfVisible && <Perf position="top-left" /> }

    <group position-y={-0.6}>
      <ToolboxWithObjects keyboardRef={keyboardRef}/>
    </group>
  </>
}


{/* Temporary Placeholder */}
{/* <mesh position={ [ 0, -2, 4.6] }>
  <planeGeometry args={[6, 2]}/>
  <meshStandardMaterial color="white"/>
</mesh> */}

{/* <EIF/> */}

// Notes
{/* delta = how much time has passed since last frame in seconds, can use it directly on rotation.y*/}
{/* add an object that's color="mediumpurple" */}
{/** maybe bake the shadows as part of a sequence of movement? */}

{/* seek() is a method that allows us to jump to a specific point in the animation. */}
{/* offset is a value between 0 and 1 that represents how far down the page we've scrolled. */}
{/* tl.current.duration() is the total duration of the animation. */}
{/* tl.current.seek() is the current point in the animation. */}
