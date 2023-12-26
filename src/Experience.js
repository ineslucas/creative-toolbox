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
  const microphoneRef = useRef();
  const leicaM6Ref = useRef();
  const threadRef = useRef();
  const businessCardRef = useRef();
  const businessCardHorizontalRef = useRef();

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: gl.domElement,
      start: "top top",
      toggleActions: "play none none none", // default
      // end: "bottom center",
      scrub: true,
      markers: true,
    },
  });

  useLayoutEffect(() => {
    if (businessCardHorizontalRef.current) {
      tl.to(businessCardHorizontalRef.current.position, { x: 0, y: 2, z: 0.075, duration: 2 }, 0);
      // Final position + rotation inside the box
      tl.to(businessCardHorizontalRef.current.position, { x: 0, y: 0, z: 0.075, duration: 2 }, 2);
      tl.to(businessCardHorizontalRef.current.rotation, { x: -0.135, y: 0, z: 0, duration: 2 }, 2);
    }

    if (businessCardRef.current) {
      tl.to(businessCardRef.current.position, { x: 0.005, y: 3.3, z: 0, duration: 2 }, 0);
      tl.to(businessCardRef.current.rotation, { x: 0, y: 0, z: 0, duration: 2 }, 0);
      // Final position + rotation inside the box
      tl.to(businessCardRef.current.position, { x: 0.005, y: 0, z: 0, duration: 2 }, 2);
      tl.to(businessCardRef.current.rotation, { x: 0, y: 0, z: 0, duration: 2 }, 2);
    }

    if (threadRef.current) {
      // Final position + rotation inside the box
      tl.to(threadRef.current.position, { x: 1.5, y: -0.18, z: -0.4, duration: 4 }, 0);
      tl.to(threadRef.current.rotation, { x: 0, y: 0.08, z: 1.6, duration: 4 }, 0);
    }

    if (leicaM6Ref.current) {
      // Final position + rotation inside the box
      tl.to(leicaM6Ref.current.position, { x: 1.015, y: -0.27, z: 0.47, duration: 4 }, 0);
      tl.to(leicaM6Ref.current.rotation, { x: 0, y: 0, z: 0.1, duration: 4 }, 0);
    }

    if (keyboardRef.current) {
      // Final position + rotation inside the box
      tl.to(keyboardRef.current.position, { x: -0.6, y: 0.13, z: 0.62, duration: 4 }, 0);
      tl.to(keyboardRef.current.rotation, { x: -1.6, y: -0.75, z: -1.6, duration: 4 }, 0);
    }

    if (microphoneRef.current) {
      // Final position + rotation inside the box
      tl.to(microphoneRef.current.position, { x: 0.3, y: 0.4, z: -1.7, duration: 4 }, 0);
      tl.to(microphoneRef.current.rotation, { x: 5, y: 0.02, z: 1.6, duration: 4 }, 0);
    }

    tl.to(camera.rotation, { x: -0.6, y: 0, z: 0, duration: 3 }, 0);
    tl.to(camera.position, { x: 0, y: 4, z: 6, duration: 3 }, 0);

    tl.to(camera.rotation, { x: -2, y: 0, z: 1.6, duration: 1 }, 3);
    tl.to(camera.position, { x: 0.5, y: 7, z: -0.3, duration: 1 }, 3);

  }, []);

  return <>
    { perfVisible && <Perf position="top-left" /> }

    <group position-y={-0.6}>
      <ToolboxWithObjects keyboardRef={keyboardRef} microphoneRef={microphoneRef} leicaM6Ref={leicaM6Ref} threadRef={threadRef} businessCardRef={businessCardRef} businessCardHorizontalRef={businessCardHorizontalRef} />
    </group>
  </>
}


{/* in Experience.js, created a ref for the keyboard, passed it to ToolboxWithObjects, which will then forward it to the Keyboard component */}

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
