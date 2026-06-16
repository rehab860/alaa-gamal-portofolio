import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Logo } from "../layout/Navbar";

export const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [textIndex, setTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  
  const titles = [
    "Data Analyst",
    "Power BI Developer",
    "Python Enthusiast",
    "ETL Engineer"
  ];

  // Typing effect
  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const currentTitle = titles[textIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1500);
        return;
      }
      
      if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % titles.length);
        return;
      }
      
      const nextText = isDeleting 
        ? currentTitle.substring(0, currentText.length - 1)
        : currentTitle.substring(0, currentText.length + 1);
        
      setCurrentText(nextText);
    }, typingSpeed);
    
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, textIndex, titles]);

  // Network graph background
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    let width = canvas.width = window.innerWidth;
    let height = canvas.height = window.innerHeight;
    
    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    
    window.addEventListener("resize", handleResize);
    
    const isDark = document.documentElement.classList.contains("dark");
    const dotColor = isDark ? "rgba(179, 163, 186, 0.4)" : "rgba(104, 80, 123, 0.5)";
    const lineColor = isDark ? "rgba(70, 49, 92, 0.5)" : "rgba(104, 80, 123, 0.25)";
    
    class Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2 + 1;
      }
      
      update() {
        this.x += this.vx;
        this.y += this.vy;
        
        if (this.x < 0 || this.x > width) this.vx = -this.vx;
        if (this.y < 0 || this.y > height) this.vy = -this.vy;
      }
      
      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      }
    }
    
    const particles = Array.from({ length: 80 }, () => new Particle());
    
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      
      particles.forEach(p => p.update());
      
      // Draw lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(70, 49, 92, ${0.6 * (1 - dist/150)})`;
            ctx.stroke();
          }
        }
        particles[i].draw();
      }
      
      requestAnimationFrame(animate);
    };
    
    animate();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 pointer-events-none opacity-50"
      />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Logo className="scale-150" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
        >
          Alaa Gamal Abou Elhassan
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-3xl text-primary font-medium h-10 mb-6 flex items-center"
        >
          <span>{currentText}</span>
          <span className="w-1 h-8 bg-primary ml-1 animate-pulse" />
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10"
        >
          Turning raw data into actionable insights
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button 
            size="lg" 
            className="rounded-full px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
            onClick={() => {
              document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" });
            }}
            data-testid="button-view-work"
          >
            View My Work
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="rounded-full px-8 font-medium border-border hover:bg-muted"
            onClick={() => window.open("#", "_blank")}
            data-testid="button-download-cv"
          >
            Download CV
          </Button>
        </motion.div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-muted-foreground uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};
