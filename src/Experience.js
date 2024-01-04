import React, { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from 'gsap/ScrollTrigger';
import { Perf } from 'r3f-perf';
import { useControls } from 'leva';
import ToolboxWithObjects from "./ToolboxWithObjects.js";
import EIF from "./projectpages/EIF.js";

gsap.registerPlugin(ScrollTrigger);

export default function Experience()
{
  {/** Experience is a component inside the Canvas - only place where we can use R3F hooks */}
  const { camera, gl } = useThree();
  // const { perfVisible } = useControls({
  //   perfVisible: false,
  // });
  const keyboardRef = useRef();
  const microphoneRef = useRef();
  const leicaM6Ref = useRef();
  const threadRef = useRef();
  const businessCardRef = useRef();
  const businessCardHorizontalRef = useRef();
  const fullToolboxRef = useRef();

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: gl.domElement,
        start: "top top",
        toggleActions: "play none none none", // default
        scrub: true,
        // end: '10%',
        // pin: true,
        markers: true,
        // onComplete: () => console.log("scroll completed"),
      },
    });

    // instead of useLayoutEffect
    if (businessCardHorizontalRef.current) {
      // Mid position
      tl.to(businessCardHorizontalRef.current.position, { x: 0, y: 1, z: 0.075, duration: 1 }, 0);
      tl.to(businessCardHorizontalRef.current.rotation, { x: -0.135, y: 0, z: 0, duration: 1 }, 0);
      // Final position + rotation inside the box
      tl.to(businessCardHorizontalRef.current.position, { x: 0, y: 0, z: 0.075, duration: 2 }, 2);
      tl.to(businessCardHorizontalRef.current.rotation, { x: -0.135, y: 0, z: 0, duration: 2 }, 2);
    }

    if (businessCardRef.current) {
      // Mid position
      tl.to(businessCardRef.current.position, { x: 0.005, y: 3.3, z: 0, duration: 2 }, 0);
      tl.to(businessCardRef.current.rotation, { x: 0, y: 0, z: 0, duration: 2 }, 0);
      // Final position + rotation inside the box
      tl.to(businessCardRef.current.position, { x: 0.005, y: 0, z: 0, duration: 2 }, 2);
      tl.to(businessCardRef.current.rotation, { x: 0, y: 0, z: 0, duration: 2 }, 2);
    }

    if (threadRef.current) {
      // Mid position
      tl.to(threadRef.current.position, { x: 1.6, y: 4, z: -0.4, duration: 2 }, 0);
      // Final position + rotation inside the box
      tl.to(threadRef.current.position, { x: 1.5, y: -0.18, z: -0.4, duration: 2 }, 2);
      tl.to(threadRef.current.rotation, { x: 0, y: 0.08, z: 1.6, duration: 4 }, 0);
    }

    if (leicaM6Ref.current) {
      // Mid position
      tl.to(leicaM6Ref.current.rotation, { x: 0, y: 0, z: 0.1, duration: 2 }, 0);
      // Final position + rotation inside the box
      tl.to(leicaM6Ref.current.position, { x: 1.015, y: -0.27, z: 0.47, duration: 2 }, 2);
      tl.to(leicaM6Ref.current.rotation, { x: 0, y: 0, z: 0.1, duration: 2 }, 2);
    }

    if (keyboardRef.current) {
      // Mid position
      tl.to(keyboardRef.current.position, { x: -0.6, y: 3, z: 0.8, duration: 2 }, 1);
      // Final position + rotation inside the box
      tl.to(keyboardRef.current.position, { x: -0.6, y: 0.13, z: 0.62, duration: 2 }, 2);
      tl.to(keyboardRef.current.rotation, { x: -1.6, y: -0.75, z: -1.6, duration: 2 }, 2);
    }

    if (microphoneRef.current) {
      // mid position
      tl.to(microphoneRef.current.position, { x: 0.3, y: 2.8, z: -1.7, duration: 2 }, 0);
      tl.to(microphoneRef.current.rotation, { x: 5, y: 0.02, z: 1.6, duration: 2 }, 0);
      // Final position + rotation inside the box
      tl.to(microphoneRef.current.position, { x: 0.3, y: 0.4, z: -1.7, duration: 2 }, 2);
      tl.to(microphoneRef.current.rotation, { x: 5, y: 0.02, z: 1.6, duration: 2 }, 2);
    }

    tl.to(camera.rotation, { x: -0.6, y: 0, z: 0, duration: 3 }, 0);
    tl.to(camera.position, { x: 0, y: 4, z: 6, duration: 3 }, 0);

    if (fullToolboxRef.current) {
      // objects could fall down inside the box
      tl.to(fullToolboxRef.current.rotation, { x: 0, y: -1.525, z: 0, duration: 1 }, 4);
      tl.to(camera.rotation, { x: -1.25, y: 0, z: 0, duration: 1 }, 4);
      tl.to(camera.position, { x: 0, y: 6, z: 2.1, duration: 1 }, 4);
    }

    // camera.lookAt(keyboardRef.current.position); // ✅
    // camera.lookAt(0, 0, 0); // ✅

    return () => {
      tl.scrollTrigger.kill();
    };
  }, []);

  return <>
    {/* { perfVisible && <Perf position="top-left" /> } */}

    <group position-y={-0.6}>
      <ToolboxWithObjects keyboardRef={keyboardRef} microphoneRef={microphoneRef} leicaM6Ref={leicaM6Ref} threadRef={threadRef} businessCardRef={businessCardRef} businessCardHorizontalRef={businessCardHorizontalRef} fullToolboxRef={fullToolboxRef} />
    </group>
    {/* <EIF/> */}
  </>
}


{/* in Experience.js, created a ref for the keyboard, passed it to ToolboxWithObjects, which will then forward it to the Keyboard component */}

{/* Temporary Placeholder */}
{/* <mesh position={ [ 0, -2, 4.6] }>
  <planeGeometry args={[6, 2]}/>
  <meshStandardMaterial color="white"/>
</mesh> */}



// Notes
{/* delta = how much time has passed since last frame in seconds, can use it directly on rotation.y*/}
{/* add an object that's color="mediumpurple" */}
{/** maybe bake the shadows as part of a sequence of movement? */}

{/* seek() is a method that allows us to jump to a specific point in the animation. */}
{/* offset is a value between 0 and 1 that represents how far down the page we've scrolled. */}
{/* tl.current.duration() is the total duration of the animation. */}
{/* tl.current.seek() is the current point in the animation. */}
