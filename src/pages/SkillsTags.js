// using Matter.js to create a 2D physics simulation
import React, { useEffect, useRef } from 'react';
import Matter, { use } from 'matter-js';
import AdobeTexture from "/images/skillsTags/codingSkills/Adobe Creative Suite.png"
import BlenderTexture from "/images/skillsTags/codingSkills/Blender.png"
import PurpleAvatar from "/images/about/purple_avatar.png"
import { texture } from 'three/examples/jsm/nodes/Nodes.js';

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

    // RENDERER
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
        background: 'transparent',
        showPerformance: false,
        showDebug: false,
      },
    });

    // MOUSE
    const mouse = Mouse.create(boxRef.current || render.canvas); // to avoid error when canvas is not created yet
    const mouseConstraint = MouseConstraint.create(engine, {
      mouse: mouse,
      constraint: {
        stiffness: 0.2,
        render: { visible: true } // Set to true for debugging
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

    // Preload textures + Create boxes
    const preloadTexturesAndCreateBoxes = async () => {
      const loadedTextures = await Promise.all(textures.map(src => new Promise((resolve, reject) =>{
        const img = new Image();
        img.src = src;
        img.onload = () => resolve({img, src});
        img.onerror = reject;
      })));

      createLightPurpleBoxes(200, 200, 36, loadedTextures); // x, y, width, height, textures
    };

    // can be grabbed!
    // const Adobe = Bodies.rectangle(400, 200, 86, 40, { // x, y, width, height
    //   chamfer: { radius: 20 },
    //   render: {
    //     // fillStyle: lightPurple,
    //     sprite: {
    //       texture: AdobeTexture,
    //       yScale: 0.3,
    //       xScale: 0.3,
    //     }
    //   }
    // });

    // const boxB = Bodies.rectangle(50, 380, 86, 40, {
    //   chamfer: { radius: 20 },
    //   render: {
    //     sprite: {
    //       texture: 'https://i.imgur.com/tc3MsJP.png',
    //       xScale: 0.5,
    //       yScale: 0.5
    //     }
    //   }
    // })

    // const Blender = Bodies.rectangle(50, 380, 80, 40, {
    //   chamfer: { radius: 20 },
    //   render: {
    //     sprite: {
    //       // texture: '/images/skillsTags/codingSkills/Blender.png',
    //       texture: BlenderTexture,
    //       xScale: 0.3,
    //       yScale: 0.3
    //     }
    //   }
    // })

    // Moved inside useEffect to ensure it has access to engine
    const createLightPurpleBoxes = (x, y, fixedHeight, loadedTextures) => {
      // Width will be determined by texture width
      loadedTextures.forEach(({img, src}, index) => {
        const scale = fixedHeight / img.height;
        const width = img.width * scale;

        const options = {
          chamfer: { radius: 20 },
          render: {
            sprite: {
              texture: src, // assigning each texture
              xScale: scale,
              yScale: scale,
            }
          }
        };

        // Create the box with dynamic width and fixed height
        const box = Bodies.rectangle(x, y + index * ( fixedHeight + 20 ), width, fixedHeight, options); // Adjust the y position for each box to avoid overlap
        console.log(`Box ${index} created`, box);
        console.log(`Box ${index} created and width is ${width}`);
        Composite.add(engine.world, box);
      });
    };

    preloadTexturesAndCreateBoxes().then(() => {
      Composite.add(engine.world, [
        // ...boxes are added in the createLightPurpleBoxes function
        mouseConstraint,
        ceiling,
        ground,
        rightWall,
        leftWall,

        // Adobe,
        // Blender,
        // boxB,
      ]);

      // Run the engine and runner
      Matter.Runner.run(engine);
      // Run the renderer
      Render.run(render);
    });

    // const boxes = createLightPurpleBoxes(200, 200, 36, textures); // x, y, width, height, textures

    // CIRCLES ON THE CLICK POSITION
    boxRef.current.addEventListener("click", (event) => {
      Composite.add(engine.world, Bodies.circle(event.clientX, event.clientY, 30, {...getCircleStyleOptions()}));
    })

    let clickCount = 0;
    const fillStyles = [
      // '#F3CFFA',
      '#F3B3FF',
      // '#B38FBA', // light purple
      '#A63382',
      '#3C154E' // dark purple
    ];
    const texture = PurpleAvatar;

    const getCircleStyleOptions = () => {
      // Determine the fillStyle or texture based on click count
      let renderOptions = {};

      if (clickCount % 4 === 3) {
        // Apply texture every 4th click
        renderOptions = {
          sprite: {
            texture: texture,
            xScale: 0.027,
            yScale: 0.027,
          }
        };
      } else {
        // Use fillStyle for other clicks, creating new renderOptions object
        renderOptions = {
          fillStyle: fillStyles[clickCount % 3]
        };
      }

      // Increment the click count
      clickCount++;

      // Reset if it reaches 4
      if (clickCount >= 5) {
        clickCount = 0;
      }

      // Return the render options
      return {
        restitution: 0.7,
        render: renderOptions
      }
    }

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
      Render.stop(render); // Clear all bodies, constraints, and composites from the world
      Composite.clear(engine.world, true);
      Engine.clear(engine);
      if (render.canvas) {
        render.canvas.remove();
        render.canvas = null; // won't be needed when canvas is created with useEffect
        render.context = null;
        render.textures = {}; // Should it be added? How do we remove textures?
      }
      console.log("Component unmounted");
    };
  }, []);

  return <>
    <div ref={boxRef} style={{ backgroundColor: '#73003A' }}>
      <canvas ref={canvasRef} />
    </div>
  </>
};

export default SkillsTags;

// Open Issues:
  // Bodies created by function can't be interacted with using the mouse
  // Impossible to scroll down - https://github.com/liabru/matter-js/issues/868
  // Objects are being created 2x
  // Resizing bodies when resizing the window
    // After resizing the window, the mouse is not working properly
  // Preloading textures - https://github.com/liabru/matter-js/issues/180

  // Solutions to scrolling issue:
  // Could add custom scroll controls outside of the canvas area.



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



// Doesn't work
  // Matter.Events.on(mouseConstraint, 'startdrag', () => {
  //   // Disable scrolling when dragging starts
  //   render.canvas.style.pointerEvents = 'auto';
  // });

  // Matter.Events.on(mouseConstraint, 'enddrag', () => {
  //   // Re-enable scrolling when dragging ends
  //   render.canvas.style.pointerEvents = 'none'; // Preventing the canvas from capturing the mouse events = now I can scroll but still can't click on the canvas
  // });


// var yellow = "#EDDC8C"
// var lightPurple = "#c4c3fa"
// var darkPurple = "#671069"
