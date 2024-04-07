// using Matter.js to create a 2D physics simulation
import React, { useEffect, useRef } from 'react';
import Matter, { use } from 'matter-js';
import Adobe from "/images/skillsTags/codingSkills/Adobe Creative Suite.png"

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
    let Composite = Matter.Composite; // previous Matter.World

    // Create Engine
    const engine = Engine.create();

    engine.gravity.y = 0.1; // 1 keeps the boxes on the ground

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
        pixelRatio: window.devicePixelRatio,
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
      '/images/skillsTags/codingSkills/Adobe Creative Suite.png',
      '/images/skillsTags/codingSkills/Blender.png',
      '/images/skillsTags/codingSkills/Figma.png',
      '/images/skillsTags/codingSkills/Git.png',
      '/images/skillsTags/codingSkills/GSAP.png',
      '/images/skillsTags/codingSkills/Heroku.png',
      '/images/skillsTags/codingSkills/HtmlCSS.png',
      '/images/skillsTags/codingSkills/JavaScript.png',
      '/images/skillsTags/codingSkills/React Three Fiber.png',
      '/images/skillsTags/codingSkills/React.png',
      '/images/skillsTags/codingSkills/RubyOnRails.png',
      '/images/skillsTags/codingSkills/SQL.png',
      '/images/skillsTags/codingSkills/Three JS.png',
      '/images/skillsTags/codingSkills/Vercel.png',
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
    const createLightPurpleBoxes = (x, y, height, textures, count = 14) => {
      // Width will be determined by texture width
      const boxes = [];
      textures.forEach((textureSrc, index) => {
        // Get width of each texture
        const texture = new Image();
        texture.src = textureSrc;

        texture.onload = () => {
          const scale = height / texture.height;
          const width = texture.width * scale;

          const options = {
            chamfer: { radius: 20 },
            render: {
              sprite: {
                texture: textureSrc, // assigning each texture
                xScale: scale, // might need adjustment
                yScale: scale,
              }
            }
          };

          // Create the box with dynamic width and fixed height
          const box = Bodies.rectangle(x, y + index * ( height + 20 ), width, height, options); // Adjust the y position for each box to avoid overlap
          console.log(`Box ${index} created`, box);
          Composite.add(engine.world, box);
          //boxes.push(box);
        };
      });
      return boxes; // Array will be populated asynchronously
    };

    const boxes = createLightPurpleBoxes(200, 200, 36, textures); // x, y, width, height, textures

    // Adding circles on the click position
    boxRef.current.addEventListener("click", (event) => {
      Composite.add(engine.world, Bodies.circle(event.clientX, event.clientY, 30, { restitution: 0.7 }));
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

    Composite.add(engine.world, [
      mouseConstraint,
      boxA,
      // boxB,
      // ...boxes, // multiple items
      ceiling,
      ground,
      rightWall,
      leftWall,
    ]);

    // Run the engine and runner
    Matter.Runner.run(engine);
    // Run the renderer
    Render.run(render);

    const handleResize = () => {
      render.options.width = window.innerWidth; // checking if it's the same as window.innerWidth
      render.options.height = window.innerHeight;
      render.canvas.width = render.options.width;
      render.canvas.height = render.options.height;

      // Remove previous walls from the world
      Composite.remove(engine.world, [ground, ceiling, rightWall, leftWall]);

      // Create new walls with new dimensions
      const wallOptions = { isStatic: true, render: { visible: false } };
      const ceiling = Bodies.rectangle( // x, y, width, height
        render.options.width / 2,
        0,
        render.options.width,
        2,
        wallOptions
      );

      const ground = Bodies.rectangle(
        render.options.width / 2,
        render.options.height,
        render.options.width,
        2,
        wallOptions
      );

      const leftWall = Bodies.rectangle(
        0,
        render.options.height / 2,
        2,
        render.options.height,
        wallOptions
      );

      const rightWall = Bodies.rectangle(
        render.options.width,
        render.options.height / 2,
        2,
        render.options.height,
        wallOptions
      );

      // Re-add walls to the world
      Composite.add(engine.world, [ceiling, ground, rightWall, leftWall]);
    };

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      window.removeEventListener('resize', handleResize);
      Render.stop(render) // Clear all bodies, constraints, and composites from the world
      Composite.clear(engine.world, true)
      Engine.clear(engine)
      render.canvas.remove()
      render.canvas = null // won't be needed when canvas is created with useEffect
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

// Open Issues:
  // Width of texture = width of body ✅
  // Bodies created by function can't be interacted with using the mouse
  // Impossible to scroll down
  // Resizing bodies when resizing the window
    // After resizing the window, the mouse is not working properly
  // Preloading textures - https://github.com/liabru/matter-js/issues/180



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
// Wellness Tech
// Neuroscience
