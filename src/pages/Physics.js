import React, { useEffect, useState, useRef } from 'react';
import Matter from 'matter-js';

const Physics = () => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  const [constraints, setContraints] = useState();
  const [scene, setScene] = useState();

  const handleResize = () => {
    setContraints(boxRef.current.getBoundingClientRect());
  };

  useEffect(() => {
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let World = Matter.World;
    let Bodies = Matter.Bodies;

    let engine = Engine.create({});

    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: window.innerWidth,
        height: 400,
        pixelRatio: 1,
        background: '#6867AA',
        wireframes: false,
      },
    });

    var arts = "#EDDC8C"
    const floorHeight = 5;

    const floor = Bodies.rectangle(window.innerWidth / 2, 400 - floorHeight / 2, window.innerWidth, floorHeight, { // x, y, width, height
      isStatic: true,
      render: {
        fillStyle: 'blue',
      },
    });

    var ground = Bodies.rectangle(
      (window.innerWidth / 2) + 160, window.innerHeight + 80, window.innerWidth + 320, 160,{render: { fillStyle: '#080808'}, isStatic: true });

    const ball = Bodies.circle(150, 0, 20, { // x, y, radius
      restitution: 0.9,
      render: {
        fillStyle: 'yellow',
      },
    });

    var illustration = Bodies.rectangle(80, -10, 133, 40, { // x, y, width, height
      render: { fillStyle: arts},
      chamfer: {radius: 20} // round corners
    })

    World.add(engine.world, [floor, ball, ground, illustration]);
    Matter.Runner.run(engine);
    Render.run(render);

    setContraints(boxRef.current.getBoundingClientRect());
    setScene(render);

    window.addEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Updates canvas and floor dimensions on resize
  useEffect(() => {
    if (constraints) {
      let { width, height } = constraints;

      // Update canvas dimensions
      scene.bounds.max.x = width;
      scene.bounds.max.y = height;
      scene.options.width = width;
      scene.options.height = height;
      scene.canvas.width = width;
      scene.canvas.height = height;

      // Update floor dimensions
      const floor = scene.engine.world.bodies.find(body => body.label === 'Floor');
      if (floor) {
        Matter.Body.setVertices(floor, [
          { x: 0, y: height - floorHeight },
          { x: width, y: height - floorHeight },
          { x: width, y: height },
          { x: 0, y: height },
        ]);
        Matter.Body.setPosition(floor, { x: width / 2, y: height - floorHeight / 2 }); // Centering floor
      }
    }
  }, [scene, constraints]);

  return <>
    <div
      ref={boxRef}
      style={{ width: '100%', height: '400px' }}
    >
      <canvas ref={canvasRef} />
    </div>
  </>
};

export default Physics;
