import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  targetOpacity: number;
  life: number;
  maxLife: number;
}

interface ParticlesBackgroundProps {
  className?: string;
}

export default function ParticlesBackground({ className = "" }: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.min(160, Math.floor((canvas.width * canvas.height) / 8000));

      for (let i = 0; i < particleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 2.5 + 0.5,
          opacity: Math.random() * 0.7 + 0.3,
          targetOpacity: Math.random() * 0.7 + 0.3,
          life: Math.random() * 200,
          maxLife: 200 + Math.random() * 300
        });
      }
    };

    initParticles();

    // Mouse move handler
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    // Mouse click handler for repulse effect
    const handleClick = (e: MouseEvent) => {
      const clickX = e.clientX;
      const clickY = e.clientY;
      
      particlesRef.current.forEach(particle => {
        const dx = particle.x - clickX;
        const dy = particle.y - clickY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 400) {
          const force = (400 - distance) / 400;
          particle.vx += (dx / distance) * force * 8;
          particle.vy += (dy / distance) * force * 8;
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle, index) => {
        // Update particle life
        particle.life++;
        
        // Reset particle if it dies
        if (particle.life > particle.maxLife) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
          particle.vx = (Math.random() - 0.5) * 2;
          particle.vy = (Math.random() - 0.5) * 2;
          particle.life = 0;
          particle.maxLife = 100 + Math.random() * 100;
          particle.targetOpacity = Math.random() * 0.8 + 0.2;
        }

        // Update position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Apply friction
        particle.vx *= 0.99;
        particle.vy *= 0.99;

        // Boundary checks
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.vx *= -0.5;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.vy *= -0.5;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Mouse interaction (bubble effect)
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 250) {
          const force = (250 - distance) / 250;
          particle.targetOpacity = Math.min(1, 0.6 + force * 0.4);
          const targetSize = 2.5 + force * 4;
          particle.size += (targetSize - particle.size) * 0.1;

          // Add subtle attraction
          particle.vx += (dx / distance) * force * 0.3;
          particle.vy += (dy / distance) * force * 0.3;
        } else {
          particle.targetOpacity = Math.random() * 0.7 + 0.3;
          const baseSize = Math.random() * 2.5 + 0.5;
          particle.size += (baseSize - particle.size) * 0.05;
        }

        // Smooth opacity transition
        particle.opacity += (particle.targetOpacity - particle.opacity) * 0.1;

        // Draw particle
        if (particle.size > 0 && particle.opacity > 0) {
          ctx.save();
          ctx.globalAlpha = Math.min(1, particle.opacity);

          // Theme-aware particle color
          const isDark = document.documentElement.classList.contains('dark');
          ctx.fillStyle = isDark ? '#22c55e' : '#ffffff';

          // Add glow effect for larger particles
          if (particle.size > 2) {
            ctx.shadowColor = isDark ? '#22c55e' : '#ffffff';
            ctx.shadowBlur = particle.size * 2;
          }

          ctx.beginPath();
          ctx.arc(particle.x, particle.y, Math.max(0.1, particle.size), 0, Math.PI * 2);
          ctx.fill();
          ctx.restore();
        }
      });


      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-auto ${className}`}
      style={{ zIndex: 1 }}
    />
  );
}
