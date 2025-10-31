'use client';

import { useEffect, useRef } from 'react';

interface SquaresBackgroundProps {
  squareSize?: number;
  speed?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'diagonal';
  borderColor?: string;
  hoverColor?: string[];
}

export default function SquaresBackground({
  squareSize = 40,
  speed = 0.5,
  direction = 'down',
  borderColor = 'rgba(0, 229, 255, 0.2)',
  hoverColor = [
    'rgba(0, 229, 255, 0.8)',
    'rgba(255, 16, 240, 0.8)',
    'rgba(168, 85, 247, 0.8)',
    'rgba(16, 240, 160, 0.8)',
  ],
}: SquaresBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;
    let squares: Array<{
      col: number;
      row: number;
      hoverColor: string | null;
      hoverOpacity: number;
    }> = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initSquares();
    };

    const initSquares = () => {
      squares = [];
      const cols = Math.ceil(canvas.width / squareSize) + 1;
      const rows = Math.ceil(canvas.height / squareSize) + 2; // Extra row for smooth loop

      for (let i = 0; i < cols; i++) {
        for (let j = -1; j < rows; j++) {
          squares.push({
            col: i,
            row: j,
            hoverColor: null,
            hoverOpacity: 0,
          });
        }
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update offset for continuous movement
      offset += speed;
      if (offset >= squareSize) {
        offset = 0;
      }

      squares.forEach((square) => {
        let x = square.col * squareSize;
        let y = square.row * squareSize;

        // Apply direction offset
        switch (direction) {
          case 'down':
            y += offset;
            break;
          case 'up':
            y -= offset;
            break;
          case 'left':
            x -= offset;
            break;
          case 'right':
            x += offset;
            break;
          case 'diagonal':
            x += offset;
            y += offset;
            break;
        }

        // Draw border
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = 1;
        ctx.strokeRect(x, y, squareSize, squareSize);

        // Draw hover effect
        if (square.hoverOpacity > 0) {
          ctx.fillStyle = square.hoverColor || hoverColor[0];
          ctx.globalAlpha = square.hoverOpacity;
          ctx.fillRect(x + 1, y + 1, squareSize - 2, squareSize - 2);
          ctx.globalAlpha = 1;
          
          // Fade out
          square.hoverOpacity -= 0.02;
          if (square.hoverOpacity < 0) {
            square.hoverOpacity = 0;
            square.hoverColor = null;
          }
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      squares.forEach((square) => {
        let x = square.col * squareSize;
        let y = square.row * squareSize;

        // Apply current offset
        switch (direction) {
          case 'down':
            y += offset;
            break;
          case 'up':
            y -= offset;
            break;
          case 'left':
            x -= offset;
            break;
          case 'right':
            x += offset;
            break;
          case 'diagonal':
            x += offset;
            y += offset;
            break;
        }

        // Check if mouse is over this square (with exact boundaries)
        if (
          mouseX >= x &&
          mouseX < x + squareSize &&
          mouseY >= y &&
          mouseY < y + squareSize
        ) {
          // Assign random color if not already assigned
          if (square.hoverOpacity === 0) {
            square.hoverColor = hoverColor[Math.floor(Math.random() * hoverColor.length)];
          }
          square.hoverOpacity = 1;
        }
      });
    };

    resize();
    window.addEventListener('resize', resize);
    canvas.addEventListener('mousemove', handleMouseMove);
    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener('resize', resize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [squareSize, speed, direction, borderColor, hoverColor]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-auto blur-[2px]"
      style={{ zIndex: 1 }}
    />
  );
}
