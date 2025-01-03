'use client';

import React, { useEffect, useRef } from 'react';

const CanvasAnimation = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    
    const maxx = document.body.clientWidth;
    const maxy = document.body.clientHeight;
    const halfx = maxx / 2;
    const halfy = maxy / 2;
    canvas.width = maxx;
    canvas.height = maxy;
    
    const dotCount = 200;
    const dots = [];

    // Dot constructor
    function Dot() {
      this.rad_x = 2 * Math.random() * halfx + 1;
      this.rad_y = 1.2 * Math.random() * halfy + 1;
      this.alpha = Math.random() * 360 + 1;
      this.speed = Math.random() * 100 < 50 ? 1 : -1;
      this.speed *= 0.1;
      this.size = Math.random() * 5 + 1;
      this.color = Math.floor(Math.random() * 256);
    }

    // Drawing the dot
    Dot.prototype.draw = function() {
      const dx = halfx + this.rad_x * Math.cos(this.alpha / 180 * Math.PI);
      const dy = halfy + this.rad_y * Math.sin(this.alpha / 180 * Math.PI);
      context.fillStyle = `rgb(${this.color},${this.color},${this.color})`;
      context.fillRect(dx, dy, this.size, this.size);
    };

    // Moving the dot
    Dot.prototype.move = function() {
      this.alpha += this.speed;
      if (Math.random() * 100 < 50) {
        this.color += 1;
      } else {
        this.color -= 1;
      }
    };

    // Create dots
    for (let i = 0; i < dotCount; i++) {
      dots.push(new Dot());
    }

    // Animation function
    function render() {
      context.fillStyle = "#000000";
      context.fillRect(0, 0, maxx, maxy);
      dots.forEach(dot => {
        dot.draw();
        dot.move();
      });
      requestAnimationFrame(render);
    }

    // Start animation
    render();
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        margin: '0',
        padding: '0',
      }}
    />
  );
};

export default CanvasAnimation;
