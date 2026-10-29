import React, { useEffect, useRef } from 'react';

/**
 * AerospaceTacticalBackground
 * A high-octane military aerospace background featuring:
 * - Rotating Tactical Military Radar Sweep with concentric range rings & target blips
 * - Supersonic Fighter Jets with glowing afterburners and contrail trails
 * - High-speed Tactical Guided Missiles with rocket exhaust flames
 * - Mach-speed Military Tracer Bullets streaking straight across the night sky
 */
export default function AerospaceTacticalBackground({
  className = '',
  opacity = 0.55,
  accentColor = '#C9A96E', // Champagne gold
  secondaryColor = '#38BDF8', // Tactical aerospace cyan
  showRadar = true
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

    // 1. Tactical Radar Sweeper & Crosshairs
    let radarAngle = 0;
    let radarPulseRadius = 0;
    const radarCenterX = width * 0.85;
    const radarCenterY = height * 0.5;
    const radarMaxRadius = Math.min(width, height) * 0.45;

    // Tactical Target Waypoints
    const blips = [
      { x: radarCenterX - 65, y: radarCenterY - 45, label: 'IAF-SU30', alpha: 0 },
      { x: radarCenterX + 75, y: radarCenterY + 35, label: 'DAP-2020', alpha: 0 },
      { x: radarCenterX - 35, y: radarCenterY + 75, label: 'MRO-TG', alpha: 0 }
    ];

    // 2. Supersonic Fighter Jets (Prominent tactical sorties moving across background)
    const jets = [
      {
        x: -120,
        y: height * 0.2,
        speed: 3.8,
        size: 38,
        angle: 0.04,
        color: '#E2E8F0',
        flameColor: '#FF5722',
        contrailLen: 240,
        alpha: 0.95
      },
      {
        x: -360,
        y: height * 0.28,
        speed: 3.8,
        size: 34,
        angle: 0.04,
        color: '#CBD5E1',
        flameColor: '#FF9100',
        contrailLen: 200,
        alpha: 0.85
      },
      {
        x: -540,
        y: height * 0.62,
        speed: 4.6,
        size: 44,
        angle: -0.03,
        color: '#F8FAFC',
        flameColor: '#FF3D00',
        contrailLen: 300,
        alpha: 1.0
      },
      {
        x: -850,
        y: height * 0.78,
        speed: 4.2,
        size: 36,
        angle: 0.02,
        color: '#94A3B8',
        flameColor: '#FFAB00',
        contrailLen: 220,
        alpha: 0.85
      }
    ];

    // 3. Tactical Guided Missiles (Needle-sharp with fiery exhaust)
    const missiles = [
      {
        x: -180,
        y: height * 0.44,
        speed: 6.8,
        size: 32,
        angle: 0.02,
        color: '#FFFFFF',
        flameLen: 42,
        alpha: 0.95
      },
      {
        x: -480,
        y: height * 0.12,
        speed: 7.4,
        size: 28,
        angle: -0.02,
        color: '#E2E8F0',
        flameLen: 36,
        alpha: 0.9
      },
      {
        x: -760,
        y: height * 0.74,
        speed: 7.0,
        size: 34,
        angle: 0.03,
        color: '#F8FAFC',
        flameLen: 45,
        alpha: 0.95
      }
    ];

    // 4. Supersonic Tracer Bullets (Straight, razor-sharp military rounds)
    const bullets = Array.from({ length: 16 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      speed: Math.random() * 8 + 9, // High supersonic speed
      length: Math.random() * 55 + 35,
      angle: (Math.random() - 0.5) * 0.06, // Straight trajectory
      color: Math.random() > 0.4 ? '#FFD700' : '#38BDF8', // Amber tracer or Cyan tracer
      alpha: Math.random() * 0.5 + 0.4
    }));

    // Draw a detailed military delta-wing Fighter Jet silhouette with twin afterburners
    function drawFighterJet(p) {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);
      ctx.globalAlpha = p.alpha * opacity;

      // Dual Supersonic Contrail Smoke Lines
      const contrailGrad = ctx.createLinearGradient(-p.contrailLen, 0, -p.size * 0.7, 0);
      contrailGrad.addColorStop(0, 'rgba(255,255,255,0)');
      contrailGrad.addColorStop(0.6, 'rgba(201,169,110,0.3)');
      contrailGrad.addColorStop(1, 'rgba(255,255,255,0.8)');
      ctx.strokeStyle = contrailGrad;
      ctx.lineWidth = 1.5;

      // Port engine contrail
      ctx.beginPath();
      ctx.moveTo(-p.contrailLen, -3.5);
      ctx.lineTo(-p.size * 0.7, -3.5);
      ctx.stroke();

      // Starboard engine contrail
      ctx.beginPath();
      ctx.moveTo(-p.contrailLen, 3.5);
      ctx.lineTo(-p.size * 0.7, 3.5);
      ctx.stroke();

      // Twin Glowing Afterburner Flames
      const flameLen = Math.random() * 12 + 24;
      const flameGrad = ctx.createLinearGradient(-p.size * 0.65 - flameLen, 0, -p.size * 0.6, 0);
      flameGrad.addColorStop(0, 'rgba(255,69,0,0)');
      flameGrad.addColorStop(0.35, p.flameColor);
      flameGrad.addColorStop(0.85, '#FFF700');
      flameGrad.addColorStop(1, '#FFFFFF');

      // Left Engine Plume
      ctx.fillStyle = flameGrad;
      ctx.beginPath();
      ctx.moveTo(-p.size * 0.6, -5);
      ctx.lineTo(-p.size * 0.6 - flameLen, -3.5);
      ctx.lineTo(-p.size * 0.6, -2);
      ctx.fill();

      // Right Engine Plume
      ctx.beginPath();
      ctx.moveTo(-p.size * 0.6, 2);
      ctx.lineTo(-p.size * 0.6 - flameLen, 3.5);
      ctx.lineTo(-p.size * 0.6, 5);
      ctx.fill();

      // Jet Airframe Silhouette
      ctx.fillStyle = p.color;
      ctx.beginPath();
      // Sharp Radome Nosecone
      ctx.moveTo(p.size, 0);
      // Right fuselage
      ctx.lineTo(p.size * 0.45, 4);
      // Right Delta Wing
      ctx.lineTo(-p.size * 0.2, p.size * 0.75);
      ctx.lineTo(-p.size * 0.5, p.size * 0.7);
      ctx.lineTo(-p.size * 0.35, 6);
      // Right Twin Tail Fin
      ctx.lineTo(-p.size * 0.7, 6);
      ctx.lineTo(-p.size * 0.6, 0);
      // Left Twin Tail Fin
      ctx.lineTo(-p.size * 0.7, -6);
      ctx.lineTo(-p.size * 0.35, -6);
      // Left Delta Wing
      ctx.lineTo(-p.size * 0.5, -p.size * 0.7);
      ctx.lineTo(-p.size * 0.2, -p.size * 0.75);
      // Left fuselage
      ctx.lineTo(p.size * 0.45, -4);
      ctx.closePath();
      ctx.fill();

      // IAF Tricolor Roundel on Port Wing
      ctx.fillStyle = '#FF9933';
      ctx.beginPath();
      ctx.arc(-p.size * 0.2, -p.size * 0.4, 3.2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(-p.size * 0.2, -p.size * 0.4, 2, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = '#138808';
      ctx.beginPath();
      ctx.arc(-p.size * 0.2, -p.size * 0.4, 1, 0, Math.PI * 2);
      ctx.fill();

      // Cockpit Canopy Glass (Gold tint)
      ctx.fillStyle = accentColor;
      ctx.beginPath();
      ctx.ellipse(p.size * 0.4, 0, p.size * 0.2, 2.5, 0, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    // Draw a sleek Tactical Guided Missile with fiery thrust
    function drawMissile(m) {
      ctx.save();
      ctx.translate(m.x, m.y);
      ctx.rotate(m.angle);
      ctx.globalAlpha = m.alpha * opacity;

      // Rocket Smoke / Vapor Trail
      const smokeGrad = ctx.createLinearGradient(-m.size * 0.6 - m.flameLen * 1.8, 0, -m.size * 0.5, 0);
      smokeGrad.addColorStop(0, 'rgba(255,255,255,0)');
      smokeGrad.addColorStop(0.5, 'rgba(255,87,34,0.3)');
      smokeGrad.addColorStop(1, 'rgba(255,235,59,0.7)');
      ctx.strokeStyle = smokeGrad;
      ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(-m.size * 0.6 - m.flameLen * 1.8, 0);
      ctx.lineTo(-m.size * 0.5, 0);
      ctx.stroke();

      // Rocket Fire Exhaust Plume
      const flameGrad = ctx.createLinearGradient(-m.size * 0.5 - m.flameLen, 0, -m.size * 0.45, 0);
      flameGrad.addColorStop(0, 'rgba(255,60,0,0)');
      flameGrad.addColorStop(0.4, '#FF3D00');
      flameGrad.addColorStop(0.85, '#FFD600');
      flameGrad.addColorStop(1, '#FFFFFF');

      ctx.fillStyle = flameGrad;
      ctx.beginPath();
      ctx.moveTo(-m.size * 0.45, -3);
      ctx.lineTo(-m.size * 0.45 - m.flameLen, 0);
      ctx.lineTo(-m.size * 0.45, 3);
      ctx.closePath();
      ctx.fill();

      // Slender Missile Body
      ctx.fillStyle = m.color;
      ctx.beginPath();
      // Pointed Warhead
      ctx.moveTo(m.size, 0);
      ctx.lineTo(m.size * 0.65, 2.5);
      // Body
      ctx.lineTo(-m.size * 0.45, 2.5);
      ctx.lineTo(-m.size * 0.45, -2.5);
      ctx.lineTo(m.size * 0.65, -2.5);
      ctx.closePath();
      ctx.fill();

      // Warhead Yellow Ring (Military Spec Ordnance)
      ctx.fillStyle = '#FFC107';
      ctx.fillRect(m.size * 0.6, -2.5, 3, 5);

      // Forward Control Canards
      ctx.strokeStyle = '#64748B';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(m.size * 0.4, -5.5);
      ctx.lineTo(m.size * 0.4, 5.5);
      ctx.stroke();

      // Rear Guidance Fins
      ctx.beginPath();
      ctx.moveTo(-m.size * 0.4, -6.5);
      ctx.lineTo(-m.size * 0.15, 0);
      ctx.lineTo(-m.size * 0.4, 6.5);
      ctx.stroke();

      ctx.restore();
    }

    // Draw a supersonic military tracer bullet
    function drawBullet(b) {
      ctx.save();
      ctx.globalAlpha = b.alpha * opacity;

      const cosA = Math.cos(b.angle);
      const sinA = Math.sin(b.angle);

      const startX = b.x - cosA * b.length;
      const startY = b.y - sinA * b.length;

      // Fading Tracer Glow
      const grad = ctx.createLinearGradient(startX, startY, b.x, b.y);
      grad.addColorStop(0, 'rgba(255,255,255,0)');
      grad.addColorStop(0.6, `${b.color}88`);
      grad.addColorStop(1, '#FFFFFF');

      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();

      // Razor-sharp bullet tip
      ctx.fillStyle = '#FFFFFF';
      ctx.beginPath();
      ctx.arc(b.x, b.y, 1.4, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    const render = () => {
      radarAngle += 0.025;
      radarPulseRadius = (radarPulseRadius + 1) % (radarMaxRadius || 150);

      ctx.clearRect(0, 0, width, height);

      // ==========================================
      // A. TACTICAL RADAR SYSTEM (PRESERVED & PERFECT)
      // ==========================================
      if (showRadar && width > 600) {
        ctx.save();
        ctx.strokeStyle = accentColor;
        ctx.lineWidth = 0.5;
        ctx.globalAlpha = opacity * 0.22;

        // Concentric Range Rings
        for (let r = 50; r <= radarMaxRadius; r += 50) {
          ctx.beginPath();
          ctx.arc(radarCenterX, radarCenterY, r, 0, Math.PI * 2);
          ctx.stroke();
        }

        // Radar Crosshairs
        ctx.beginPath();
        ctx.moveTo(radarCenterX - radarMaxRadius, radarCenterY);
        ctx.lineTo(radarCenterX + radarMaxRadius, radarCenterY);
        ctx.moveTo(radarCenterX, radarCenterY - radarMaxRadius);
        ctx.lineTo(radarCenterX, radarCenterY + radarMaxRadius);
        ctx.stroke();

        // Expanding Sonar Ping Ring
        ctx.beginPath();
        ctx.arc(radarCenterX, radarCenterY, radarPulseRadius, 0, Math.PI * 2);
        ctx.strokeStyle = secondaryColor;
        ctx.lineWidth = 1;
        ctx.globalAlpha = (1 - radarPulseRadius / radarMaxRadius) * opacity * 0.4;
        ctx.stroke();

        // Rotating Sweeping Radar Sector Beam
        const sweepGradient = ctx.createRadialGradient(
          radarCenterX, radarCenterY, 0,
          radarCenterX, radarCenterY, radarMaxRadius
        );
        sweepGradient.addColorStop(0, `${accentColor}33`);
        sweepGradient.addColorStop(1, `${accentColor}00`);

        ctx.beginPath();
        ctx.moveTo(radarCenterX, radarCenterY);
        ctx.arc(radarCenterX, radarCenterY, radarMaxRadius, radarAngle - 0.35, radarAngle);
        ctx.closePath();
        ctx.fillStyle = sweepGradient;
        ctx.globalAlpha = opacity * 0.45;
        ctx.fill();

        // Blinking Tactical Target Blips
        blips.forEach((b) => {
          const dx = b.x - radarCenterX;
          const dy = b.y - radarCenterY;
          let blipAngle = Math.atan2(dy, dx);
          if (blipAngle < 0) blipAngle += Math.PI * 2;
          const currentRad = radarAngle % (Math.PI * 2);

          if (Math.abs(blipAngle - currentRad) < 0.1) {
            b.alpha = 1.0;
          } else {
            b.alpha = Math.max(0.15, b.alpha - 0.015);
          }

          ctx.fillStyle = secondaryColor;
          ctx.globalAlpha = b.alpha * opacity;
          ctx.beginPath();
          ctx.arc(b.x, b.y, 2.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = secondaryColor;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.arc(b.x, b.y, 6, 0, Math.PI * 2);
          ctx.stroke();

          ctx.font = '8px monospace';
          ctx.fillStyle = '#FFFFFF';
          ctx.fillText(b.label, b.x + 8, b.y - 4);
        });

        ctx.restore();
      }

      // ==========================================
      // B. BULLETS / TRACERS (STRAIGHT SUPERSONIC ROUNDS)
      // ==========================================
      bullets.forEach((b) => {
        b.x += Math.cos(b.angle) * b.speed;
        b.y += Math.sin(b.angle) * b.speed;

        if (b.x - b.length > width) {
          b.x = -b.length - Math.random() * 50;
          b.y = Math.random() * height;
        }

        drawBullet(b);
      });

      // ==========================================
      // C. TACTICAL GUIDED MISSILES (HIGH SPEED)
      // ==========================================
      missiles.forEach((m) => {
        m.x += Math.cos(m.angle) * m.speed;
        m.y += Math.sin(m.angle) * m.speed;

        if (m.x - m.size - m.flameLen > width) {
          m.x = -m.size - m.flameLen - Math.random() * 150;
          m.y = Math.random() * height;
        }

        drawMissile(m);
      });

      // ==========================================
      // D. FIGHTER JETS (TACTICAL SORTIES)
      // ==========================================
      jets.forEach((j) => {
        j.x += Math.cos(j.angle) * j.speed;
        j.y += Math.sin(j.angle) * j.speed;

        if (j.x - j.size - j.contrailLen > width) {
          j.x = -j.size - j.contrailLen - Math.random() * 200;
          j.y = Math.random() * height;
        }

        drawFighterJet(j);
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [opacity, accentColor, secondaryColor, showRadar]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  );
}
