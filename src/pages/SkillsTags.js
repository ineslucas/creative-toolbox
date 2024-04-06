// using Matter.js to create a 2D physics simulation
import React, { useEffect, useRef } from 'react';
import Matter, { use } from 'matter-js';
import Adobe from "/images/skillsTags/Adobe Creative Suite.png"

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

    const containerWidth = window.innerWidth // 600
    const containerHeight = window.innerHeight

    if (canvasRef.current) {
      canvasRef.current.width = containerWidth;
      canvasRef.current.height = containerHeight;
    }

    // Create Renderer
    const render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: window.innerWidth,
        height: window.innerHeight,
        hasBounds: true, // displaying the part of the simulation that has bodies
        wireframes: false,
        background: '#73003A',
        showPerformance: true,
        showDebug: false,
      },
    });

    // var yellow = "#EDDC8C"
    // var lightPurple = "#c4c3fa"
    // var darkPurple = "#671069"

    // MOUSE 🐭
    const mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: { visible: false }
        }
      });

    const textures = [
      '/images/skillsTags/Adobe Creative Suite.png',
      '/images/skillsTags/Blender.png',
      '/images/skillsTags/Figma.png',
      '/images/skillsTags/Git.png',
      '/images/skillsTags/GSAP.png',
      '/images/skillsTags/Heroku.png',
      '/images/skillsTags/HtmlCSS.png',
      '/images/skillsTags/JavaScript.png',
      '/images/skillsTags/React Three Fiber.png',
      '/images/skillsTags/React.png',
      // '/images/skillsTags/RubyOnRails.png',
      // '/images/skillsTags/SQL.png',
      // '/images/skillsTags/Three JS.png',
      // '/images/skillsTags/Vercel.png',
    ];


    const boxA = Bodies.rectangle(400, 200, 86, 40, { // x, y, width, height
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

    const boxB = Bodies.rectangle(50, 380, 86, 40, {
      chamfer: { radius: 20 },
      render: {
        sprite: {
          texture: 'https://i.imgur.com/tc3MsJP.png',
          xScale: 0.5,
          yScale: 0.5
        }
      }
    })

    // Create 4 boxes with specified options // creating multiple pills
    const createLightPurpleBoxes = (x, y, width, height, textures, count = 10) => {
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
        console.log(`Box ${i} created`, box);
        boxes.push(box);
      }
      return boxes;
    };

    const boxes = createLightPurpleBoxes(200, 200, 100, 36, textures); // x, y, width, height, textures
    World.add(engine.world, boxes); // moving this downwards made boxes not render 🍓

    // Adding circles on the click position
    boxRef.current.addEventListener("click", (event) => {
      World.add(engine.world, Bodies.circle(event.clientX, event.clientY, 30, { restitution: 0.7 }));
    })
        // ‼️ Doesn't work well when canvas is inside ScrollContainer

    // WALLS
    const wallOptions = { isStatic: true, render: { visible: false } };
    const ceiling = Bodies.rectangle( // x, y, width, height
      render.options.width / 2,
      0,
      containerWidth,
      2,
      wallOptions
    );

    const ground = Bodies.rectangle(
      containerWidth / 2, // Divided by two because Matter JS uses the center of the canvas to place the object
      containerHeight, // Should be at the bottom (y: 0 is the ceiling level, full height is the very bottom)
      containerWidth,
      2,
      wallOptions
    );

    const leftWall = Bodies.rectangle(
      0,
      containerHeight / 2,
      2,
      containerHeight,
      wallOptions
    );

    const rightWall = Bodies.rectangle(
      containerWidth,
      containerHeight / 2,
      2,
      containerHeight,
      wallOptions
    );

    World.add(engine.world, [
      mouseConstraint,
      boxA,
      boxB,
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
    return () => {
      // Render.stop(render);
      // Runner.stop(runner);
      // Engine.clear(engine);
      Render.stop(render)
      World.clear(engine.world)
      Engine.clear(engine)
      render.canvas.remove()
      render.canvas = null
      render.context = null
      render.textures = {}
      console.log("Component unmounted")
    };
  }, []);

  return <>
    <div ref={boxRef}>
      <canvas ref={canvasRef} />
    </div>
  </>
};

export default SkillsTags;


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

// Issues to solve:
  // Impossible to scroll down
