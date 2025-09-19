import { useState, useEffect, useRef } from 'react';

interface MousePosition {
  x: number;
  y: number;
}

export const useMousePosition = (): MousePosition => {
  const [position, setPosition] = useState<MousePosition>({ x: 0, y: 0 });
  const targetPos = useRef<MousePosition>({ x: 0, y: 0 });
  const currentPosRef = useRef<MousePosition>({ x: 0, y: 0 });
  const animationFrameId = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    const updatePosition = () => {
      const smoothingFactor = 0.05; // Subtle smoothing for parallax
      currentPosRef.current.x += (targetPos.current.x - currentPosRef.current.x) * smoothingFactor;
      currentPosRef.current.y += (targetPos.current.y - currentPosRef.current.y) * smoothingFactor;
      setPosition({ x: currentPosRef.current.x, y: currentPosRef.current.y });

      animationFrameId.current = requestAnimationFrame(updatePosition);
    };

    window.addEventListener('mousemove', handleMouseMove);
    animationFrameId.current = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, []); // No dependency on position

  return position;
};