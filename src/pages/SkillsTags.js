// Using Matter.js to create a 2D physics simulation.
// Collision filters are useless in this case because I want all the boxes to collide with each other.

import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';
import PurpleAvatar from "/images/about/purple_avatar.png"
// import AdobeTexture from "/images/skillsTags/codingSkills/Adobe Creative Suite.png"
// import ArrowUp from "/images/icons/arrow-up-solid.svg"
// import { texture } from 'three/examples/jsm/nodes/Nodes.js';

const SkillsTags = ({ scrollToIntroduction }) => {
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
    engine.gravity.x = 0.33;
    engine.gravity.y = -0.2;

    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight * 0.6

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
        stiffness: 0.1, // lower value: bodies will have softer connection to mouse pointer
        render: { visible: true } // Set to true for debugging
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

    const ceiling = Bodies.rectangle( // x, y, width, height
      containerWidth / 2,
      0,
      containerWidth,
      10,
      wallOptions
    );

    const ground = Bodies.rectangle(
      containerWidth / 2, // Divided by two because Matter JS uses the center of the canvas to place the object
      containerHeight, // Should be at the bottom (y: 0 is the ceiling level, full height is the very bottom)
      containerWidth,
      10,
      wallOptions
    );

    const leftWall = Bodies.rectangle(
      0,
      containerHeight / 2,
      10,
      containerHeight,
      wallOptions
    );

    const rightWall = Bodies.rectangle(
      containerWidth,
      containerHeight / 2,
      10,
      containerHeight,
      wallOptions
    );

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
      const loadedTextures = await Promise.all(textures.map(src => new Promise((resolve, reject) =>{
        const img = new Image();
        img.src = src;
        img.onload = () => resolve({img, src});
        img.onerror = reject;
      })));

      createLightPurpleBoxes(150, 15, 26, loadedTextures); // x, y, width, height, textures
        // original height is 36 but it's too big for the screen
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

    // Moved inside useEffect to ensure it has access to engine
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
        avatarCircle,

        // Adobe,
        // boxB,
      ]);

      // Run the engine and runner
      Matter.Runner.run(engine);
      // Run the renderer
      Render.run(render);
    });

    // INITIAL CIRCLE
    const avatarCircle = Bodies.circle(350, 200, 30, {
      restitution: 0.5, // bounciness - 0.9 is very bouncy
      friction: 0.5, // 0.1 is very slippery
      frictionAir: 0.01, // air resistance - 0.01 is very low

      collisionFilter: {
        category: defaultCategory,
        mask: wallCategory | defaultCategory
      },
      render: {
        sprite: {
          texture: PurpleAvatar,
          xScale: 0.027,
          yScale: 0.027,
        }
      }
    });

    // CIRCLES ON THE CLICK POSITION
    boxRef.current.addEventListener("click", (event) => {
      const rectangle = canvasRef.current.getBoundingClientRect(); // getBoundingClientRect() returns the size of an element and its position relative to the viewport
      const x = event.clientX - rectangle.left; // x position within the element
      const y = event.clientY - rectangle.top; // y position within the element

      Composite.add(engine.world, Bodies.circle(x, y, 30, {...getCircleStyleOptions()}));
    })

    // ALTERNATING FILL STYLES FOR THE CIRCLES CREATED ON CLICK
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
        restitution: 0.9,
        friction: 0.1, // 0.1 is very slippery
        frictionAir: 0.01, // air resistance - 0.01 is very low
        collisionFilter: {
          category: defaultCategory,
          mask: wallCategory | defaultCategory
        },
        render: renderOptions
      }
    }
      // Note: Created error: Uncaught TypeError: Cannot read properties of null (reading 'style') at _applyBackground + at Render.world

    const handleResize = () => {
      render.options.width = window.innerWidth; // checking if it's the same as window.innerWidth
      render.options.height = window.innerHeight * 0.6;
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
    {/* Anything placed at this level still won't allow scrolling because of Matter. */}
    <div ref={boxRef} style={{ backgroundColor: '#73003A' }}>
     {/* position: 'relative' - for the divs placed in relation to it */}
      <canvas ref={canvasRef} />
      {/* <div onClick={scrollToIntroduction} style={{ position: 'absolute', top: '4vw', right: '2.5vw', zIndex: 100 }}>
        <img src={ArrowUp} alt="Arrow to scroll up" style={{ width: '100px', height: '100px' }} />
      </div> */}
    </div>
  </>
};

export default SkillsTags;

// Open Issues:
  // Bodies created by function can't be interacted with using the mouse
  // Impossible to scroll down - https://github.com/liabru/matter-js/issues/868
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
