import { useLayoutEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
// import { gsap } from "gsap";
// import ScrollTrigger from 'gsap/ScrollTrigger';
import { Perf } from 'r3f-perf';
import { useControls } from 'leva';
import ToolboxWithObjects from "./ToolboxWithObjects.js";

// gsap.registerPlugin(ScrollTrigger);

export default function Experience()
{
  {/** Experience is a component inside the Canvas - only place where we can use R3F hooks */}
  const { camera, gl } = useThree();
  const { perfVisible } = useControls({
    perfVisible: true,
  })

  return <>
    {/* <div id="scroll-container" style={{ height: '500px', overflow: 'scroll' }}> */}
      {/* <ScrollControls pages={3} damping={0.25}> */}
      <group>
        {/** Essentials */}
        { perfVisible && <Perf position="top-left" /> }

        {/* Toolbox and Objects */}
        <group position-y={-0.6}>
          <ToolboxWithObjects/>
        </group>
      </group>

      {/* Temporary Placeholder */}
      <mesh position={ [ 0, -2, 4.6] }>
        <planeGeometry args={[6, 2]}/>
        <meshStandardMaterial color="white"/>
      </mesh>
    {/* </div> */}
    {/* </ScrollControls> */}
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
