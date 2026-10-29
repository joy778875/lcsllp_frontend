import React, { useEffect, useRef } from 'react';

/**
 * Moving8DCubesBackground
 * Renders interactive 3D/8D rotating wireframe hypercubes and geometric grid lines
 * using a high-performance HTML5 Canvas with perspective projection.
 */
export default function Moving8DCubesBackground({
  className = '',
  cubeCount = 6,
  accentColor = '#C9A96E', // Champagne Gold
  secondaryColor = '#60A5FA', // Subtle Cyan / Tech Blue
  opacity = 0.55
}) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || 400);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement?.offsetHeight || 400;
    };

    window.addEventListener('resize', handleResize);

    // Mouse parallax tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      targetMouseX = x * 0.4;
      targetMouseY = y * 0.4;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Standard 8 vertices for a 3D cube:
    const baseCubeVertices = [
      [-1, -1, -1],
      [1, -1, -1],
      [1, 1, -1],
      [-1, 1, -1],
      [-1, -1, 1],
      [1, -1, 1],
      [1, 1, 1],
      [-1, 1, 1],
    ];

    // 12 edges connecting the 8 vertices
    const cubeEdges = [
      [0, 1], [1, 2], [2, 3], [3, 0], // back face
      [4, 5], [5, 6], [6, 7], [7, 4], // front face
      [0, 4], [1, 5], [2, 6], [3, 7], // connecting edges
    ];

    // Inner tesseract / nested hypercube vertices (scaled 0.5x)
    const innerVertices = baseCubeVertices.map(([x, y, z]) => [x * 0.5, y * 0.5, z * 0.5]);

    // Cross-dimensional hypercube edges connecting outer cube to inner cube (8D / 4D tesseract look)
    const hyperEdges = [
      [0, 0], [1, 1], [2, 2], [3, 3],
      [4, 4], [5, 5], [6, 6], [7, 7]
    ];

    // Create multiple floating geometric cubes
    const cubes = Array.from({ length: cubeCount }, (_, i) => {
      return {
        x: (Math.random() - 0.5) * width * 0.85,
        y: (Math.random() - 0.5) * height * 0.75,
        z: Math.random() * 200 + 100,
        size: Math.random() * 32 + 28,
        rotX: Math.random() * Math.PI * 2,
        rotY: Math.random() * Math.PI * 2,
        rotZ: Math.random() * Math.PI * 2,
        speedX: (Math.random() - 0.5) * 0.008 + 0.004,
        speedY: (Math.random() - 0.5) * 0.01 + 0.006,
        speedZ: (Math.random() - 0.5) * 0.006 + 0.003,
        driftY: (Math.random() - 0.5) * 0.25,
        isHypercube: i % 2 === 0, // Alternate between single cube and 8D tesseract hypercube
      };
    });

    // Ambient floating particle dust
    const particles = Array.from({ length: 24 }, () => ({
      x: (Math.random() - 0.5) * width,
      y: (Math.random() - 0.5) * height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 0.3,
      speedY: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.2
    }));

    // 3D rotation math helpers
    function rotateX(p, angle) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [p[0], p[1] * cos - p[2] * sin, p[1] * sin + p[2] * cos];
    }

    function rotateY(p, angle) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [p[0] * cos + p[2] * sin, p[1], -p[0] * sin + p[2] * cos];
    }

    function rotateZ(p, angle) {
      const cos = Math.cos(angle);
      const sin = Math.sin(angle);
      return [p[0] * cos - p[1] * sin, p[0] * sin + p[1] * cos, p[2]];
    }

    // Perspective projection
    function project(p, cx, cy, fov = 350) {
      const z = p[2] + fov;
      if (z <= 0) return null;
      const scale = fov / z;
      return [p[0] * scale + cx, p[1] * scale + cy, scale];
    }

    let time = 0;

    const render = () => {
      time += 0.01;
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      // Draw subtle ambient particles
      ctx.fillStyle = accentColor;
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;
        if (p.x < -width / 2) p.x = width / 2;
        if (p.x > width / 2) p.x = -width / 2;
        if (p.y < -height / 2) p.y = height / 2;
        if (p.y > height / 2) p.y = -height / 2;

        ctx.globalAlpha = p.alpha * opacity * 0.6;
        ctx.beginPath();
        ctx.arc(p.x + cx, p.y + cy, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Render 3D / 8D Hypercubes
      cubes.forEach((cube, cIdx) => {
        cube.rotX += cube.speedX;
        cube.rotY += cube.speedY;
        cube.rotZ += cube.speedZ;
        cube.y += cube.driftY;

        // Wrap around bounds
        if (cube.y > height / 2 + 80) cube.y = -height / 2 - 80;
        if (cube.y < -height / 2 - 80) cube.y = height / 2 + 80;

        // Apply mouse parallax and subtle floating oscillation
        const posX = cube.x + mouseX * 80 + Math.sin(time + cIdx) * 12;
        const posY = cube.y + mouseY * 80 + Math.cos(time + cIdx) * 12;
        const posZ = cube.z;

        // Transform outer vertices
        const projectedOuter = baseCubeVertices.map((v) => {
          let p = [v[0] * cube.size, v[1] * cube.size, v[2] * cube.size];
          p = rotateX(p, cube.rotX);
          p = rotateY(p, cube.rotY);
          p = rotateZ(p, cube.rotZ);
          p[0] += posX;
          p[1] += posY;
          p[2] += posZ;
          return project(p, cx, cy);
        });

        // Draw outer cube edges
        ctx.strokeStyle = cIdx % 2 === 0 ? accentColor : secondaryColor;
        ctx.lineWidth = 1.2;
        ctx.globalAlpha = opacity * 0.75;

        cubeEdges.forEach(([i, j]) => {
          const p1 = projectedOuter[i];
          const p2 = projectedOuter[j];
          if (p1 && p2) {
            ctx.beginPath();
            ctx.moveTo(p1[0], p1[1]);
            ctx.lineTo(p2[0], p2[1]);
            ctx.stroke();
          }
        });

        // Draw vertices with subtle glowing dots
        ctx.fillStyle = '#FFFFFF';
        projectedOuter.forEach((p) => {
          if (p) {
            ctx.globalAlpha = opacity * 0.85;
            ctx.beginPath();
            ctx.arc(p[0], p[1], 1.8 * p[2], 0, Math.PI * 2);
            ctx.fill();
          }
        });

        // If 8D Hypercube (Tesseract mode), draw the inner cube and dimensional cross-edges!
        if (cube.isHypercube) {
          const projectedInner = innerVertices.map((v) => {
            let p = [v[0] * cube.size, v[1] * cube.size, v[2] * cube.size];
            // Counter-rotation for hyper-dimensional feel
            p = rotateX(p, cube.rotX * 1.25);
            p = rotateY(p, cube.rotY * 1.25);
            p = rotateZ(p, cube.rotZ * 1.25);
            p[0] += posX;
            p[1] += posY;
            p[2] += posZ;
            return project(p, cx, cy);
          });

          // Draw inner cube edges
          ctx.strokeStyle = secondaryColor;
          ctx.lineWidth = 0.9;
          ctx.globalAlpha = opacity * 0.55;

          cubeEdges.forEach(([i, j]) => {
            const p1 = projectedInner[i];
            const p2 = projectedInner[j];
            if (p1 && p2) {
              ctx.beginPath();
              ctx.moveTo(p1[0], p1[1]);
              ctx.lineTo(p2[0], p2[1]);
              ctx.stroke();
            }
          });

          // Draw hyper-connecting cross edges from outer cube to inner cube
          ctx.strokeStyle = accentColor;
          ctx.lineWidth = 0.75;
          ctx.globalAlpha = opacity * 0.45;

          hyperEdges.forEach(([outIdx, inIdx]) => {
            const pOut = projectedOuter[outIdx];
            const pIn = projectedInner[inIdx];
            if (pOut && pIn) {
              ctx.beginPath();
              ctx.moveTo(pOut[0], pOut[1]);
              ctx.lineTo(pIn[0], pIn[1]);
              ctx.stroke();
            }
          });
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [cubeCount, accentColor, secondaryColor, opacity]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    />
  );
}
