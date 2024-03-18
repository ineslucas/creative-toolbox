import React, { useEffect, useRef } from 'react';
import Matter, { use } from 'matter-js';
import Adobe from "/images/skillsTags/Adobe Creative Suite.png"

// TO DO: some skills float around in a cluster and the rest stay down with gravity.

// Coding skills:
// JavaScript
// Ruby on Rails
// React
// React Three Fiber
// Three JS
// HTML
// CSS
// GSAP
// Vercel
// Heroku
// SQL
// Git
// Figma

// Other Skills:
// Project Management
// Copywriting
// Product Development
// Marketing
// Immersive Experiences

// Interests:
// Sustainability
// EdTech
// Wellness Tech (????)
// Neuroscience


const SkillsTags = () => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Runner doesn't need to be created
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let Mouse = Matter.Mouse;
    let MouseConstraint = Matter.MouseConstraint;
    let Bodies = Matter.Bodies;
    let World = Matter.World;

    // Create Engine
    const engine = Engine.create();

    const containerWidth = 600 // 600
    const containerHeight = 600

    // Create Renderer
    const render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: containerWidth,
        height: containerHeight,
        wireframes: false,
        background: '#73003A',
      },
    });

    var yellow = "#EDDC8C"
    var lightPurple = "#c4c3fa"
    // var darkPurple = "#671069"

    const textures = [
      '/images/skillsTags/Adobe Creative Suite.png',
      '/images/skillsTags/Blender.png',
      '/images/skillsTags/Figma.png',
      '/images/skillsTags/Git.png',
      // '/images/skillsTags/GSAP.png',
      // '/images/skillsTags/Heroku.png',
      // '/images/skillsTags/HtmlCss.png',
      // '/images/skillsTags/JavaScript.png',
      // '/images/skillsTags/React Three Fiber.png',
      // '/images/skillsTags/React.png',
      // '/images/skillsTags/RubyOnRails.png',
      // '/images/skillsTags/SQL.png',
      // '/images/skillsTags/Three JS.png',
      // '/images/skillsTags/Vercel.png',
    ];


    const boxA = Bodies.rectangle(400, 200, 133, 80, {
      chamfer: { radius: 20 },
      render: {
        // fillStyle: lightPurple,
        sprite: {
          texture: Adobe,
          yScale: 0.3,
          xScale: 0.3,
        }
      }
    });

    // Create 4 boxes with specified options // creating multiple pills
    const createLightPurpleBoxes = (x, y, width, height, textures, count = 4) => {
      const boxes = [];

      for (let i = 0; i < count; i++) {

        const options = {
          chamfer: { radius: 20 },
          render: {
            sprite: {
              texture: textures[i], // assigning the i-th texture
              xScale: 0.3,
              yScale: 0.3,
            }
          }
        };

        // Adjust the x position for each box to avoid overlap
        const box = Bodies.rectangle(x + i * (width + 10), y, width, height, options);
        boxes.push(box);
      }
      return boxes;
    };

    const boxes = createLightPurpleBoxes(200, 200, 300, 80, textures);

    World.add(engine.world, boxes);

    // Mouse 🐭
    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: { visible: false }
        }
      });

    // Adding circles on the click position
    boxRef.current.addEventListener("click", (event) => {
      World.add(engine.world, Bodies.circle(event.clientX, event.clientY, 30, { restitution: 0.7 }));
    })

    const wallOptions = { isStatic: true, render: { visible: true } };
    const ceiling = Bodies.rectangle(containerWidth / 2 , 0, containerWidth, 10, wallOptions ); // x, y, width, height
    const ground = Bodies.rectangle(300, containerWidth, containerWidth, 10, wallOptions ); // ground
    const rightWall = Bodies.rectangle(containerWidth + 2, containerWidth / 2, 10, containerHeight, wallOptions ); // x, y
    const leftWall = Bodies.rectangle(0, containerWidth / 2, 10, containerHeight, wallOptions );


    World.add(engine.world, [
      mouseConstraint,
      boxA,
      ceiling,
      ground,
      rightWall,
      leftWall,
    ]);

    // Run the engine and runner
    Matter.Runner.run(engine);
    // Run the renderer
    Render.run(render);

    // Clean up
    // return () => {
    //   Render.stop(render);
    //   Runner.stop(runner);
    //   Engine.clear(engine);
    // };
  }, []);

  return <>
    <div ref={boxRef}>
      <canvas ref={canvasRef} />
    </div>
  </>
};

export default SkillsTags;
