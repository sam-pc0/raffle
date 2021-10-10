import React, { useRef, useEffect } from 'react';

import './Snow.scss';

const Snow = () => {
  let canvas = useRef(null);
  let flakes = [];
  let ctx = useRef(null);
  let flakeCount = 400;
  let mX = -100;
  let mY = -100;
  let requestAnimationFrame = useRef(null);

  const snow = () => {
    if (!canvas.current) {
      return;
    }

    ctx.current.clearRect(0, 0, canvas.current.width, canvas.current.height);

    for (let i = 0; i < flakeCount; i++) {
      let flake = flakes[i],
        x = mX,
        y = mY,
        minDist = 150,
        x2 = flake.x,
        y2 = flake.y;

      let dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y));
      // dx = x2 - x,
      // dy = y2 - y;

      if (dist < minDist) {
        let force = minDist / (dist * dist),
          xcomp = (x - x2) / dist,
          ycomp = (y - y2) / dist,
          deltaV = force / 2;

        flake.velX -= deltaV * xcomp;
        flake.velY -= deltaV * ycomp;
      } else {
        flake.velX *= 0.98;
        if (flake.velY <= flake.speed) {
          flake.velY = flake.speed;
        }
        flake.velX += Math.cos((flake.step += 0.05)) * flake.stepSize;
      }

      ctx.current.fillStyle = 'rgba(255,255,255,' + flake.opacity + ')';
      flake.y += flake.velY;
      flake.x += flake.velX;

      if (flake.y >= canvas.current.height || flake.y <= 0) {
        reset(flake);
      }

      if (flake.x >= canvas.current.width || flake.x <= 0) {
        reset(flake);
      }

      ctx.current.beginPath();
      ctx.current.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
      ctx.current.fill();
    }

    window.requestAnimationFrame(snow);
  };

  const reset = (flake) => {
    flake.x = Math.floor(Math.random() * canvas.current.width);
    flake.y = 0;
    flake.size = Math.random() * 3 + 2;
    flake.speed = Math.random() * 1 + 0.5;
    flake.velY = flake.speed;
    flake.velX = 0;
    flake.opacity = Math.random() * 0.5 + 0.3;
  };

  const init = () => {
    for (let i = 0; i < flakeCount; i++) {
      let x = Math.floor(Math.random() * canvas.current.width),
        y = Math.floor(Math.random() * canvas.current.height),
        size = Math.random() * 3 + 2,
        speed = Math.random() * 1 + 0.5,
        opacity = Math.random() * 0.5 + 0.3;

      flakes.push({
        speed: speed,
        velY: speed,
        velX: 0,
        x: x,
        y: y,
        size: size,
        stepSize: Math.random() / 30,
        step: 0,
        opacity: opacity,
      });
    }
    snow();
  };

  const handleMouseMove = (e) => {
    mX = e.offsetX;
    mY = e.offsetY;
  };

  const setCanvasDimensions = () => {
    if (!canvas.current) {
      return;
    }
    let parentElement = canvas.current.parentElement;
    if (parentElement.clientWidth !== 0 || parentElement.clientHeight !== 0) {
      canvas.current.width = parentElement.clientWidth;
      canvas.current.height = parentElement.clientHeight;
    } else {
      canvas.current.width = parentElement.parentElement.clientWidth;
      canvas.current.height = parentElement.parentElement.parentElement.clientHeight;
    }
  };

  useEffect(() => {
    requestAnimationFrame.current =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (callback) {
        window.setTimeout(callback, 1000 / 60);
      };
    window.requestAnimationFrame = requestAnimationFrame.current;

    ctx.current = canvas.current.getContext('2d');

    setCanvasDimensions();
    window.addEventListener('resize', setCanvasDimensions);
    init();

    return () => window.removeEventListener('resize', setCanvasDimensions);
  }, []);

  return (
    <div className="snow-panel">
      <canvas
        onMouseMove={handleMouseMove}
        ref={canvas}
        className="snow-canvas"
      ></canvas>
    </div>
  );
};

// Snow.defaultProps = {};

export default Snow;
