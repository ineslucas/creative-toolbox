// Using Matter.js to create a 2D physics simulation.
// Collision filters are useless in this case because I want all the boxes to collide with each other.
// Bodies placed one at a time could be grabbed using mouse.

import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import PurpleAvatar from "/images/about/purple_avatar.png"
// import { texture } from 'three/examples/jsm/nodes/Nodes.js';

const SkillsTags = () => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);
  const containerHeight = window.innerHeight * 0.6;

  useEffect(() => {
    console.log("useEffect started");

    // Runner doesn't need to be created
    let Engine = Matter.Engine;
    let Render = Matter.Render;
    let Mouse = Matter.Mouse;
    let MouseConstraint = Matter.MouseConstraint;
    let Bodies = Matter.Bodies;
    let Composite = Matter.Composite; // previous Matter.World

    // Create Engine
    const engine = Engine.create();
    engine.gravity.x = 0.33;
    engine.gravity.y = -0.2;

    const containerWidth = window.innerWidth;

    if (canvasRef.current) {
      canvasRef.current.width = containerWidth;
      canvasRef.current.height = containerHeight;
    }

    // Collision Filtering
    const defaultCategory = 0x0001;
    const wallCategory = 0x0002;

    // RENDERER
    const render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        width: containerWidth,
        height: containerHeight,
        pixelRatio: window.devicePixelRatio,
        hasBounds: true, // displaying the part of the simulation that has bodies
        bounds: { // Define bounds explicitly
          min: { x: 0, y: 0 },
          max: { x: containerWidth, y: containerHeight }
        },
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
        stiffness: 0.2, // Lower value = Bodies will have softer connection to mouse pointer
        render: { visible: false } // Set to true for debugging
      }
    });

    // WALLS
    const wallOptions = {
      isStatic: true,
      collisionFilter: {
        category: wallCategory,
        mask: defaultCategory
      },
      render: { visible: false }
    };

    const ground = Bodies.rectangle( // x, y, width, height
      containerWidth / 2, // Divided by two because Matter JS uses the center of the canvas to place the object
      containerHeight, // Should be at the bottom (y: 0 is the ceiling level, full height is the very bottom)
      containerWidth,
      10,
      wallOptions
    );
    const ceiling = Bodies.rectangle(containerWidth / 2, 0, containerWidth, 10, wallOptions);
    const leftWall = Bodies.rectangle( 0, containerHeight / 2, 10, containerHeight, wallOptions);
    const rightWall = Bodies.rectangle( containerWidth, containerHeight / 2, 10, containerHeight, wallOptions);

    // PURPLE BOXES - 4 steps to create
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
      const loadedTextures = await Promise.all(
        textures.map(
          (src) =>
            new Promise((resolve, reject) =>{
              const img = new Image();
              img.src = src;
              img.onload = () => resolve({img, src});
              img.onerror = reject;
            })
        )
      );

      createLightPurpleBoxes(150, 15, 26, loadedTextures); // x, y, width, height, textures
        // original height is 36 but it's too big for the screen - fix when creating the boxes in a grid format
    };

    const createLightPurpleBoxes = (initialX, y, fixedHeight, loadedTextures) => {
      // Width will be determined by texture width
      loadedTextures.forEach(({img, src}, index) => {
        const scale = fixedHeight / img.height;
        const width = img.width * scale;

        const options = {
          chamfer: { radius: 20 },
          // restitution: 0.3,
          // friction: 0.2, // Decreased friction
          // frictionAir: 0.3, //
          collisionFilter: {
            category: defaultCategory,
            mask: wallCategory | defaultCategory // Allow boxes to collide with walls and other boxes
          },
          render: {
            sprite: {
              texture: src, // assigning each texture
              xScale: scale,
              yScale: scale,
            }
          }
        };

        // Incrementing X position for each box
        const x = initialX + index * 10;

        // Create the box with dynamic width and fixed height
        const box = Bodies.rectangle(x, y + index * ( fixedHeight + 7 ), width, fixedHeight, options); // Adjust the y position for each box to avoid overlap
        console.log(`Box ${index} created and width is ${width}`, box);
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
      ]);

      // Run the engine and runner
      Matter.Runner.run(engine);
      // Run the renderer
      Render.run(render);
    });

    // CIRCLES ON THE CLICK/MOUSEMOVE POSITION
    const maxCirclesBeforeClickingIsAllowed = 70;
    let circleCount = 0;

    const createCircle = (x, y) => {
      Composite.add(engine.world, Bodies.circle(x, y, 30, {...getCircleStyleOptions()}));
      circleCount++; // Increment the circle count
    };

    const handleEvent = (event) => {
      // At which position should the event happen - regardless of what it is?
      const rectangle = canvasRef.current.getBoundingClientRect(); // getBoundingClientRect() returns the size of an element and its position relative to the viewport
      const x = event.clientX - rectangle.left; // x position within the element
      const y = event.clientY - rectangle.top; // y position within the element

      // Switching from a mouse move to a click event
      if (circleCount < maxCirclesBeforeClickingIsAllowed) {
        createCircle(x, y);
      } else {
        boxRef.current.removeEventListener("mousemove", handleEvent);
        boxRef.current.addEventListener("click", handleEvent);
        createCircle(x, y);
      }
    };

    boxRef.current.addEventListener("mousemove", handleEvent);

    // ALTERNATING FILL STYLES FOR THE CIRCLES CREATED ON CLICK/MOUSEMOVE
    let clickTextureCount = 0;
    const fillStyles = [
      '#F3B3FF',
      '#A63382',
      '#3C154E' // dark purple
      // '#B38FBA', // light purple
      // '#F3CFFA'
    ];
    const texture = PurpleAvatar;

    const getCircleStyleOptions = () => {
      // Determine the fillStyle or texture based on click count
      let renderOptions = {};

      if (clickTextureCount % 4 === 3) {
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
          fillStyle: fillStyles[clickTextureCount % 3]
        };
      }

      // Increment the click count
      clickTextureCount++;

      // Reset if it reaches 4
      if (clickTextureCount >= 5) {
        clickTextureCount = 0;
      }

      // Return the render options
      return {
        restitution: 0.5,
        // friction: 0.7, // 0.1 is very slippery
        // frictionAir: 0.3, // air resistance - 0.01 is very low
        collisionFilter: {
          category: defaultCategory,
          mask: wallCategory | defaultCategory
        },
        render: renderOptions
      }
    }
      // Note: Created error: Uncaught TypeError: Cannot read properties of null (reading 'style') at _applyBackground + at Render.world

    const handleResize = () => {
      render.options.width = window.innerWidth; // Checking if it's the same as window.innerWidth
      render.options.height = containerHeight; // When the window is resized, the height remains the same as when the component was mounted.
      render.canvas.width = render.options.width;
      render.canvas.height = render.options.height;

      // Remove previous walls from the world
      Composite.remove(engine.world, [ground, ceiling, rightWall, leftWall]);

      // Create new walls with new dimensions
      const newCeiling = Bodies.rectangle( // x, y, width, height
        render.options.width / 2,
        0,
        render.options.width,
        10,
        wallOptions
      );

      const newGround = Bodies.rectangle(
        render.options.width / 2,
        render.options.height,
        render.options.width,
        10,
        wallOptions
      );

      const newLeftWall = Bodies.rectangle(
        0,
        render.options.height / 2,
        10,
        render.options.height,
        wallOptions
      );

      const newRightWall = Bodies.rectangle(
        render.options.width,
        render.options.height / 2,
        10,
        render.options.height,
        wallOptions
      );

      // Re-add walls to the world
      Composite.add(engine.world, [newCeiling, newGround, newRightWall, newLeftWall]);
    };

    // Event listener for window resize
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => {
      console.log("useEffect cleanup");

      // boxRef.current might be null during the cleanup phase if the component unmounts and the reference is cleared before the cleanup code runs, hence the need for a check.
      if (boxRef.current) {
        boxRef.current.removeEventListener("mousemove", handleEvent);
        boxRef.current.removeEventListener("click", handleEvent);
        // In JS, attempting to remove an event listener that does not exist does not cause any issues. TBC: avoid unnecessary function calls by adding an eventListenerRef.
      }

      window.removeEventListener('resize', handleResize);
      Render.stop(render); // Clear all bodies, constraints, and composites from the world
      Composite.clear(engine.world, true);
      Engine.clear(engine);
      if (render.canvas) {
        render.canvas.remove();
        render.canvas = null; // won't be needed when canvas is created with useEffect
        render.textures = {}; // TBC: Should we be clearing the object? How do we remove textures?
      }
      if (render.context) {
        render.context = null;
      }
      console.log("Component unmounted");
    };
  }, []);

  return <>
    {/* Anything placed at this level still won't allow scrolling because of Matter. */}
    <div ref={boxRef} style={{ backgroundColor: '#73003A' }}>
      <canvas ref={canvasRef} />
    </div>
  </>
};

export default SkillsTags;




// Working notes - Open Issues:
  // Bodies created by function can't be interacted with using the mouse
  // Impossible to scroll down - https://github.com/liabru/matter-js/issues/868
  // Resizing bodies when resizing the window
    // After resizing the window, the mouse is not working properly
  // Preloading textures - https://github.com/liabru/matter-js/issues/180

  // Solutions to scrolling issue:
    // Could add custom scroll controls outside of the canvas area.



// TO DO: some skills float around in a cluster and the rest stay down with gravity. ⭐️

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

  // IoT, Accessibility, Interactive Furniture, Data Visualization



// (Work in Progress) Doesn't work
  // Matter.Events.on(mouseConstraint, 'startdrag', () => {
  //   // Disable scrolling when dragging starts
  //   render.canvas.style.pointerEvents = 'auto';
  // });

  // Matter.Events.on(mouseConstraint, 'enddrag', () => {
  //   // Re-enable scrolling when dragging ends
  //   render.canvas.style.pointerEvents = 'none'; // Preventing the canvas from capturing the mouse events = now I can scroll but still can't click on the canvas
    // Could work if we only have mouse move events to create circles
  // });



// var yellow = "#EDDC8C"
// var lightPurple = "#c4c3fa"
// var darkPurple = "#671069"
