"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles = [];
    const particleCount = 80;

    function random(min, max) {
      return Math.random() * (max - min) + min;
    }

    class Particle {
      constructor() {
        this.reset();
      }
      reset() {
        this.x = random(0, width);
        this.y = random(0, height);
        this.z = random(0.1, 1);
        this.size = this.z * 3;
        this.speed = this.z * 0.5;
      }
      update() {
        this.y -= this.speed;
        if (this.y < 0) this.reset();
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(236,72,153, ${this.z})`;
        ctx.fill();
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    function animate() {
      ctx.clearRect(0, 0, width, height);
      for (let particle of particles) {
        particle.update();
        particle.draw();
      }
      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#0a0a23] to-[#111132] text-white text-center px-6 overflow-hidden"
    >
      {/* 3D Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full z-0"
      ></canvas>

      <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold mb-4">
        Hi, I am <span className="text-purple-400">Harsh Mishra</span>
      </h1>

      <h2 className="relative z-10 text-2xl md:text-3xl font-bold tracking-wide mb-8">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 animate-gradientShimmer drop-shadow-[0_0_12px_rgba(236,72,153,0.7)]">
          
        </span>
      </h2>

      <a
        href="/Harsh.pdf"
        download="Harsh_Mishra_CV.pdf"
        className="relative z-10 px-6 py-3 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 font-semibold shadow-lg hover:scale-105 hover:shadow-purple-500/40 transform transition-all duration-300"
      >
        📄 Download CV
      </a>

      <style jsx>{`
        @keyframes gradientShimmer {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradientShimmer {
          background-size: 200% 200%;
          animation: gradientShimmer 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
