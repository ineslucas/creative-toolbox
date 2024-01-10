import { useEffect, useRef, useState } from "react";

const CURSOR_SPEED = 0.08;

// Global variables to track mouse and cursor positions
let mouseX = 0;
let mouseY = 0;
let outlineX = 0;
let outlineY = 0;

export const Cursor = ({ isHoveringLeicaM6, isHoveringMicrophone, isHoveringKeyboard }) => {
  const cursorCircle = useRef();

  // Function to animate the cursor
  const animate = () => {
    // Calculating the distance from the current cursor position to the target position
    let distX = mouseX - outlineX;
    let distY = mouseY - outlineY;

    // Incrementally move the cursor position closer to the target position
    outlineX = outlineX + distX * CURSOR_SPEED;
    outlineY = outlineY + distY * CURSOR_SPEED;

    // Applying the new position to the cursor element
    cursorCircle.current.style.left = `${outlineX}px`;
    cursorCircle.current.style.top = `${outlineY}px`;
    requestAnimationFrame(animate);
  };

  useEffect(() => {
    // Event listener to update mouse position
    const mouseEventsListener = (event) => {
      mouseX = event.pageX;
      mouseY = event.pageY;
    };

    // Add mousemove event listener
    document.addEventListener("mousemove", mouseEventsListener);
    // Start the animation
    const animateEvent = requestAnimationFrame(animate);

    // Cleanup function to remove event listener and cancel animation frame
    return () => {
      document.removeEventListener("mousemove", mouseEventsListener);
      cancelAnimationFrame(animateEvent);
    };
  }, []);

  {/** Text displayed when hovering Leica M6 */}
  const leicaM6text = "view project view project ";
  const charArray = leicaM6text.split("");
  const totalChars = charArray.length;
  const rotationAngle = 360 / totalChars; // distribute characters evenly in a circle
  const leicaM6CursorText = charArray.map((char, index) => (
    <span
      key={index}
      style={{ transform: `rotate(${index * rotationAngle}deg) translate(0, 5px)` }} // 60px here defines the rotation of each letter
    >
      {char}
    </span>
  ));

  return <>
    <div
      className={`cursor-circle ${(isHoveringLeicaM6 || isHoveringMicrophone || isHoveringKeyboard) ? "hover-leica-m6" : ""}`}
      ref={cursorCircle}>
        { isHoveringLeicaM6 && <div className="hover-leica-m6-inner-text">{leicaM6CursorText}</div>}
        { isHoveringMicrophone && <div className="hover-leica-m6-inner-text">{leicaM6CursorText}</div>}
        { isHoveringKeyboard && <div className="hover-leica-m6-inner-text">{leicaM6CursorText}</div>}
    </div>
  </>
};
