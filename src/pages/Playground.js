import { Canvas, useThree, useFrame } from '@react-three/fiber';
import { OrbitControls, Box, Text, Html } from "@react-three/drei";
import React, { Suspense, useRef, useState, useEffect } from "react";
import * as THREE from 'three';
import Pen from '../Pen.jsx';
import PaintBrush from '../PaintBrush.jsx';
import Bear from '../Bear.jsx';
import Rock from '../Rock.jsx';

// New component for camera animation
const CameraAnimation = ({ onAnimationComplete }) => {
  const { camera } = useThree();
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    // Set initial camera position (side view)
    camera.position.set(10, 2, 0);
    camera.rotation.set(0, -Math.PI/2, 0);
    setAnimationStarted(true);
  }, []);

  useFrame((state, delta) => {
    if (!animationStarted) return;

    // Calculate target positions
    const targetPos = new THREE.Vector3(0, 10, 0);
    const targetRot = new THREE.Euler(-Math.PI/2, 0, 0);

    // Smoothly interpolate position
    camera.position.lerp(targetPos, 0.02);

    // Smoothly interpolate rotation
    const currentRotation = new THREE.Euler().copy(camera.rotation);
    camera.rotation.set(
      THREE.MathUtils.lerp(currentRotation.x, targetRot.x, 0.02),
      THREE.MathUtils.lerp(currentRotation.y, targetRot.y, 0.02),
      THREE.MathUtils.lerp(currentRotation.z, targetRot.z, 0.02)
    );

    // Check if animation is complete
    if (camera.position.distanceTo(targetPos) < 0.1 &&
        Math.abs(camera.rotation.x - targetRot.x) < 0.01) {
      setAnimationStarted(false);
      onAnimationComplete();
    }
  });

  return null;
};

const DrawingCanvas = ({ currentTool, clearTrigger }) => {
  const canvasRef = useRef();
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPos, setLastPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    if (clearTrigger) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    const drawTools = {
      pen: (x, y) => {
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = '#000000';
        ctx.moveTo(lastPos.x, lastPos.y);
        ctx.lineTo(x, y);
        ctx.stroke();
      },

      watercolor: (x, y) => {
        ctx.globalAlpha = 0.1;
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.arc(
            x + Math.random() * 10 - 5,
            y + Math.random() * 10 - 5,
            20 + Math.random() * 10,
            0,
            Math.PI * 2
          );
          ctx.fillStyle = '#c5b7f7';
          ctx.fill();
        }
        ctx.globalAlpha = 1.0; // Reset alpha
      },

      bear: (x, y) => {
        ctx.font = '40px Arial';
        ctx.textBaseline = 'middle';
        ctx.textAlign = 'center';
        ctx.fillText('🐻', x, y);
      }
    };

    const draw = (e) => {
      if (!isDrawing) return;

      // Get the canvas position relative to the viewport
      const rect = e.currentTarget.getBoundingClientRect();

      // Calculate position within canvas
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // ctx.beginPath();
      // ctx.lineWidth = isErasing ? 20 : 5;
      // ctx.lineCap = 'round';
      // ctx.strokeStyle = isErasing ? '#73003A' : '#ffffff';
      // ctx.moveTo(lastPos.x, lastPos.y);
      // ctx.lineTo(x, y);
      // ctx.stroke();

      drawTools[currentTool](x, y);

      setLastPos({ x, y });
    };

    canvas.addEventListener('mousemove', draw);
    return () => canvas.removeEventListener('mousemove', draw);
  }, [isDrawing, lastPos, clearTrigger]);

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div style={{ position: 'absolute', zIndex: 1 }}>
      {/* zIndex might not matter */}
      <canvas
        ref={canvasRef}
        width={400}
        height={680}
        style={{
          border: '1px solid #EDB3C9',
          touchAction: 'none', // Prevents default touch actions
          cursor: 'crosshair' // Makes it clearer where you're drawing
        }}
        onMouseDown={(e) => {
          setIsDrawing(true);
          const rect = e.currentTarget.getBoundingClientRect();
          setLastPos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top
          });
        }}
        onMouseUp={() => setIsDrawing(false)}
        onMouseLeave={() => setIsDrawing(false)}
      />
    </div>
  );
};

const Playground = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const [currentTool, setCurrentTool] = useState('pen'); // 'pen', 'watercolor', 'bear'
  const [clearTrigger, setClearTrigger] = useState(false);

  return (
    <Canvas
      dpr={1}
      style={{ width: '100vw', height: '100vh', top: 0, left: 0, backgroundColor: '#73003A' }}
      camera={{
        // position: [0, 10, 0], // Position camera high above the scene
        // rotation: [-Math.PI / 2, 0, 0], // Point camera straight down
        fov: 50,
        near: 0.1,
        far: 1000
      }}
      gl={{
        antialias: true,
        toneMapping: THREE.ACESFilmicToneMapping,
      }}
    >
      <CameraAnimation onAnimationComplete={() => setShowCanvas(true)} />

      {/* LIGHTS */}
      <ambientLight intensity={0.5} />
      {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
      <directionalLight position={[10, 10, 5]} intensity={1} />


      <mesh position={[0, -2, 0]}>
        <boxGeometry args={[10, 0.1, 10]} />
        <meshStandardMaterial color="purple" />
      </mesh>

      <group>
        <Pen
          scale={2}
          position={[-3, -1.5, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          onClick={() => setCurrentTool('pen')}
        />
      </group>

      <PaintBrush
        scale={1.2}
        position={[-2, -1.5, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        onClick={() => setCurrentTool('watercolor')}
      />

      {/* Placeholder for the eraser */}
      <Rock
        scale={0.3}
        position={[-2, -2, 4]}
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={() => setClearTrigger(prev => !prev)} // Toggle clear trigger
      />

      <Bear
        position={[-4, -2, 4]}
        rotation={[-Math.PI / 2, 0, 0]}
        onClick={() => setCurrentTool('bear')}
      />

      {showCanvas && (
        <Html
          position={[-1, -1.9, -4.5]} // Position just above the box surface
          rotation={[-Math.PI / 2, 0, 0]} // Rotate to lie flat (-90 degrees around X axis)
          // occlude // Makes the element hide when something is in front of it
          style={{
            width: '500px',
            height: '500px',
          }}
        >
          <DrawingCanvas
            currentTool={currentTool}
            // clearCanvas={clearTrigger}
            clearTrigger={clearTrigger}
          />
        </Html>
      )}
    </Canvas>
  );
};

export default Playground;
