import React, { useEffect, useRef } from 'react';

/**
 * A component that creates a custom cursor effect: a single white circle that smoothly follows the mouse.
 * It is hidden on mobile devices and uses `requestAnimationFrame` for smooth, performant animation.
 */
const CursorFollower: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  
  // Stores the target mouse position from the event listener.
  const targetPos = useRef({ x: -100, y: -100 });
  // Stores the current animated position of the cursor element.
  const currentPos = useRef({ x: -100, y: -100 });
  
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    // Animation loop to update the cursor element's position.
    const updateCursor = () => {
      // Use linear interpolation (lerp) for a smooth, trailing effect.
      // A lower factor (e.g., 0.1) results in a smoother, more delayed trail.
      const smoothingFactor = 0.2;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * smoothingFactor;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * smoothingFactor;

      // Apply the new position to the DOM element.
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`;
      }
      
      animationFrameId.current = requestAnimationFrame(updateCursor);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId.current = requestAnimationFrame(updateCursor);

    // Cleanup function to remove listeners and cancel the animation frame.
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []);

  return (
    <div className="hidden md:block" aria-hidden="true">
      {/* The custom cursor element */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 w-6 h-6 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full mix-blend-difference z-[100]"
      />
    </div>
  );
};

export default CursorFollower;