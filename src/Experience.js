import React, { Suspense, useRef } from "react";
import ToolboxWithObjects from "./ToolboxWithObjects.js";
// import { Perf } from 'r3f-perf';
// import { useControls } from 'leva';
// import EIF from "./pages/EIF.js";

export default function Experience({ setIsHoveringLeicaM6 })
{
  {/** Experience is a component inside the Canvas - only place where we can use R3F hooks */}

  // const { perfVisible } = useControls({
  //   perfVisible: false,
  // });

  return <>
    {/* { perfVisible && <Perf position="top-left" /> } */}
    <group position-y={-0.6}>
      <Suspense>
        <ToolboxWithObjects
          setIsHoveringLeicaM6={setIsHoveringLeicaM6} />
      </Suspense>
    </group>
    {/* <EIF/> */}
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
