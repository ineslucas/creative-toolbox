import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useThree } from "@react-three/fiber";
import { useHelper, SoftShadows, PresentationControls, Text, Billboard, Html } from "@react-three/drei";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Toolbox from "./Toolbox.jsx";
import Thread from "./Thread.jsx";
import Microphone from "./Microphone.jsx";
import Keyboard from "./Keyboard.jsx";
import LeicaM6 from "./LeicaM6.jsx";
import BusinessCard from "./BusinessCard.js";
import BusinessCardHorizontal from "./BusinessCardHorizontal.js";
// import ScrollTrigger from 'gsap/ScrollTrigger';
// gsap.registerPlugin(ScrollTrigger);

{/* in ToolboxWithObjects.js, created a ref for the keyboard, which will then be forwarded it to the Keyboard component */}

const ToolboxWithObjects = ({ setIsHoveringLeicaM6, setIsHoveringMicrophone, setIsHoveringKeyboard, ...props }) => {
  // const directionalLightRef = useRef();
  // useHelper(directionalLightRef, THREE.DirectionalLightHelper, 1, 'hotpink');
  const keyboardRef = useRef();
  const microphoneRef = useRef();
  const leicaM6Ref = useRef();
  const threadRef = useRef();
  const businessCardRef = useRef();
  const businessCardHorizontalRef = useRef();
  const fullToolboxRef = useRef();

  const { camera, gl } = useThree();
  // const fontProps = { font: '/ABCMonumentGrotesk-Regular-Trial.woff', fontSize: 0.2, letterSpacing: 0, lineHeight: 1, 'material-toneMapped': false }
  const navigate = useNavigate();

  useGSAP(() => { // useGSAP instead of useLayoutEffect
    const tl = gsap.timeline({
      // scrollTrigger: {
      //   trigger: gl.domElement,
      //   start: "top top",
      //   toggleActions: "play none none none", // default
      //   scrub: true,
      //   markers: true,
      //   // end: '10%',
      //   // pin: true,
      //   // onComplete: () => console.log("scroll completed"),
      // },
    });

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
      tl.to(keyboardRef.current.position, { x: -0.6, y: 3, z: 0.8, duration: 1 }, 1);
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

    if (fullToolboxRef.current && microphoneRef.current && keyboardRef.current && leicaM6Ref.current && threadRef.current && businessCardRef.current && businessCardHorizontalRef.current) {
      tl.to(camera.rotation, { x: -0.6, y: 0, z: 0, duration: 3 }, 0);
      tl.to(camera.position, { x: 0, y: 4, z: 6, duration: 3 }, 0);
    }

    if (fullToolboxRef.current) {
      tl.to(fullToolboxRef.current.rotation, { x: 0, y: -1.525, z: 0, duration: 1 }, 4);
      tl.to(camera.rotation, { x: -1.25, y: 0, z: 0, duration: 1 }, 4);
      tl.to(camera.position, { x: 0, y: 6, z: 2.1, duration: 1 }, 4);
    }

    // camera.lookAt(keyboardRef.current.position); // ✅
    // camera.lookAt(0, 0, 0); // ✅

    // return () => {
    //   tl.scrollTrigger.kill();
    // };
  }, []);

  return <>
    {/** Essentials */}
    {/* <gridHelper args={[10, 10]} /> */}
    {/* <axesHelper scale={ 5 } /> */}
    <SoftShadows size={ 80 } samples={ 20 } focus={ 0 } />
    <directionalLight
            // ref={ directionalLightRef }
            position={ [ 1, 3, 1.8]}
            intensity={ 4 }
            castShadow
            shadow-mapSize={ [1024 * 3, 1024 * 3] }
            shadow-camera-top={ 4 }
            shadow-camera-right={ 4 }
            shadow-camera-bottom={ -3 }
            shadow-camera-left={ -2 }
            shadow-camera-near={ 0.5 }
            shadow-camera-far={ 50 }
          />
    <ambientLight intensity={ 1 } />

    {/* <Billboard>
      <Text position={ [ 2, 3.6, -0.2]} fontSize={0.1} color="#fab4ca" {...fontProps}>
        Full Stack{'\n'}Developer
      </Text>
      <Text position={ [ 1, 3, -0.4]} fontSize={0.1} color="#f5a4bd" {...fontProps} >Creative Technologist</Text>
    </Billboard> */}

    <PresentationControls
       config={{ mass: 2, tension: 500 }}
       snap={{ mass: 4, tension: 1500 }}
       zoom={1}
       polar={[-Math.PI / 3, Math.PI / 3]} // Vertical limits
       azimuth={[-Math.PI / 1.4, Math.PI / 1.4]}> {/* Horizontal limits */}

      {/** Toolbox with Objects */}
      <group ref={ fullToolboxRef }>
        <BusinessCard ref={ businessCardRef }/>
        <BusinessCardHorizontal ref={ businessCardHorizontalRef }/>
        <LeicaM6
          ref={ leicaM6Ref }
          scale={ 0.33 }
          rotation={ [ 0, -1, 0.3 ] }
          position={ [0.5, 3.6, 0.4 ] }
          // onClick={ () => window.open('https://www.memorylab.space/', '_blank')}
          onClick={() => navigate('/memory-lab')}
          onPointerEnter={ () => setIsHoveringLeicaM6(true)}
          onPointerLeave={ () => setIsHoveringLeicaM6(false)} />
        <Keyboard
          ref={ keyboardRef }
          scale={ 0.013 }
          rotation={ [-1.2, -0.75, -1.6] }
          position={ [-0.6, 3, 2] }
          onClick={() => navigate('/gathergo')}
          onPointerEnter={ () => setIsHoveringKeyboard(true)}
          onPointerLeave={ () => setIsHoveringKeyboard(false)} />
        <Thread ref={ threadRef } scale={ 1 } rotation={ [0, 1, 1.6] } position={ [1.6, 4, -0.7] } />
        <Microphone
          ref={ microphoneRef }
          scale={ 1 }
          rotation={ [ 5.2, 0.5, 2.2 ] }
          position={ [ -0.3, 3.5, -0.9 ] }
          onClick={() => navigate('/surf-the-job')}
          onPointerEnter={ () => setIsHoveringMicrophone(true)}
          onPointerLeave={ () => setIsHoveringMicrophone(false)}/>
        <Toolbox scale={ 11 }/>
      </group>

    </PresentationControls>
  </>
};

export default ToolboxWithObjects; {/* replaces: export default function ToolboxWithObjects() { }; */}
