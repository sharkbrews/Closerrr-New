import React, { useRef, useEffect } from "react";

const HeartTechCanvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const nodes = [];
    const nodeCount = 350; // more nodes → fuller heart

    let centerX = 0;
    let centerY = 0;
    let scale = 20; // desktop baseline
    let rafId;

    // Compute DPR-aware canvas sizing and responsive heart scale
    const setupCanvasAndTargets = () => {
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1));
      const width = window.innerWidth;
      const height = window.innerHeight;

      // Set CSS size
      canvas.style.width = "100%";
      canvas.style.height = "100%";

      // Set internal pixel size
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0); // draw in CSS pixels

      centerX = width / 2;
      centerY = height / 2;

      // Keep desktop layout constant, but make mobile a bit larger
      const desktopBreakpoint = 1024;
      scale = width >= desktopBreakpoint
        ? 20
        : Math.min(11.5, Math.max(14, (22 * width) / desktopBreakpoint));

      // Recompute heart targets for all nodes
      const heartPoint = (t) => {
        const x = 16 * Math.pow(Math.sin(t), 3);
        const y =
          13 * Math.cos(t) -
          5 * Math.cos(2 * t) -
          2 * Math.cos(3 * t) -
          Math.cos(4 * t);
        return { x: centerX + x * scale, y: centerY - y * scale };
      };

      for (let i = 0; i < nodeCount; i++) {
        const t = Math.PI - (2 * Math.PI * i) / nodeCount;
        const target = heartPoint(t);
        if (!nodes[i]) {
          nodes[i] = {
            x: Math.random() * width,
            y: Math.random() * height,
            initX: Math.random() * width,
            initY: Math.random() * height,
            targetX: target.x,
            targetY: target.y,
          };
        } else {
          // Update targets and keep current positions
          nodes[i].targetX = target.x;
          nodes[i].targetY = target.y;
          // Keep scatter origins within new bounds
          nodes[i].initX = Math.random() * width;
          nodes[i].initY = Math.random() * height;
        }
      }
    };

    // Animation state
    let phase = "scatter";
    let phaseFrames = 0;
    const moveSpeed = 0.08;

    const animate = () => {
      // Clear using CSS pixel dims
      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);

      nodes.forEach((node) => {
        if (phase === "scatter") {
          node.x += (node.initX - node.x) * moveSpeed;
          node.y += (node.initY - node.y) * moveSpeed;
        } else if (phase === "formHeart") {
          node.x += (node.targetX - node.x) * moveSpeed;
          node.y += (node.targetY - node.y) * moveSpeed;
        } else if (phase === "vanish") {
          node.x += (node.initX - node.x) * moveSpeed;
          node.y += (node.initY - node.y) * moveSpeed;
        }

        ctx.beginPath();
        ctx.arc(node.x, node.y, 3, 0, Math.PI * 2);
        ctx.fillStyle = "#F1E1FE";
        ctx.fill();
      });

      // Phase transitions
      phaseFrames++;
      if (phase === "scatter" && phaseFrames > 100) {
        phase = "formHeart";
        phaseFrames = 0;
      } else if (phase === "formHeart" && phaseFrames > 200) {
        phase = "vanish";
        phaseFrames = 0;
      } else if (phase === "vanish" && phaseFrames > 150) {
        nodes.forEach((node) => {
          node.initX = Math.random() * width;
          node.initY = Math.random() * height;
        });
        phase = "scatter";
        phaseFrames = 0;
      }

      rafId = requestAnimationFrame(animate);
    };

    setupCanvasAndTargets();
    animate();

    const handleResize = () => {
      setupCanvasAndTargets();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />;
};

export default HeartTechCanvas;
