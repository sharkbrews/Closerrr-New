import { useEffect, useRef } from "react";

const HeartCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Resize canvas dynamically
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const drawHeart = (x, y, size, color, opacity = 1) => {
      ctx.save();
      ctx.globalAlpha = opacity;
      ctx.fillStyle = color;
      ctx.beginPath();

      ctx.moveTo(x, y + size / 4);
      ctx.bezierCurveTo(x, y, x - size / 2, y, x - size / 2, y + size / 4);
      ctx.bezierCurveTo(x - size / 2, y + size / 2, x, y + size, x, y + size);
      ctx.bezierCurveTo(x, y + size, x + size / 2, y + size / 2, x + size / 2, y + size / 4);
      ctx.bezierCurveTo(x + size / 2, y, x, y, x, y + size / 4);

      ctx.fill();
      ctx.restore();
    };

    const drawFloatingHearts = (side, time) => {
      const elements = 5; // number of hearts
      const offsetX = canvas.width * 0.1; // 10% padding from edges
      const maxY = canvas.height - 50;

      for (let i = 0; i < elements; i++) {
        const yPos = (maxY / elements) * i + Math.sin(time + i) * 50 + 50;
        const xOffset = Math.sin(time * 1.2 + i) * 50;

        const x = side === "left" ? offsetX + xOffset : canvas.width - offsetX + xOffset;
        const size = Math.min(24 + Math.sin(time * 1.5 + i) * 8, canvas.width * 0.04);

        drawHeart(x, yPos, size, "#FF1493", 0.5 + Math.sin(time * 2 + i) * 0.2);
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Optional: white background
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const time = Date.now() * 0.001;

      drawFloatingHearts("left", time);
      drawFloatingHearts("right", time);

      requestAnimationFrame(animate);
    };

    // Initial resize
    resizeCanvas();
    animate();

    // Update canvas size on resize
    window.addEventListener("resize", resizeCanvas);
    return () => window.removeEventListener("resize", resizeCanvas);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: -1 }}
    />
  );
};

export default HeartCanvas;
