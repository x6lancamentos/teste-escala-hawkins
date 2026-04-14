"use client";

import { useEffect, useRef } from "react";
import { hawkinsScale, getUserLevel } from "@/lib/hawkins-scale";

interface FrequencyChartProps {
  userFrequency: number;
  userLevelName: string;
}

export default function FrequencyChart({
  userFrequency,
  userLevelName,
}: FrequencyChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const barHeight = height / hawkinsScale.length;

    // Clear
    ctx.clearRect(0, 0, width, height);

    // Find user level index
    const userLevel = getUserLevel(Math.round(userFrequency / 5));
    const userLevelIndex = hawkinsScale.findIndex(
      (l) => l.name === userLevel.name
    );

    // Draw bars
    hawkinsScale.forEach((level, index) => {
      const y = index * barHeight;
      const isUserLevel = index === userLevelIndex;
      const isAboveUser = index > userLevelIndex;
      const isBelowUser = index < userLevelIndex;

      // Background bar
      if (isUserLevel) {
        ctx.fillStyle = "rgba(212, 175, 55, 0.3)";
        ctx.fillRect(0, y, width, barHeight - 2);
        
        // Highlight border
        ctx.strokeStyle = "#D4AF37";
        ctx.lineWidth = 2;
        ctx.strokeRect(0, y, width, barHeight - 2);
      } else if (isAboveUser) {
        ctx.fillStyle = "rgba(26, 26, 26, 0.6)";
        ctx.fillRect(0, y, width, barHeight - 2);
      } else {
        ctx.fillStyle = "rgba(42, 42, 42, 0.8)";
        ctx.fillRect(0, y, width, barHeight - 2);
      }

      // Level name
      ctx.font = isUserLevel ? "bold 12px Montserrat, sans-serif" : "11px Inter, sans-serif";
      ctx.fillStyle = isUserLevel ? "#D4AF37" : isAboveUser ? "#666" : "#999";
      ctx.textBaseline = "middle";
      ctx.fillText(
        `${level.name} (${level.frequency} Hz)`,
        12,
        y + barHeight / 2 - 1
      );

      // Arrow indicator for user level
      if (isUserLevel) {
        ctx.fillStyle = "#D4AF37";
        ctx.beginPath();
        ctx.moveTo(width - 20, y + barHeight / 2 - 6);
        ctx.lineTo(width - 8, y + barHeight / 2);
        ctx.lineTo(width - 20, y + barHeight / 2 + 6);
        ctx.closePath();
        ctx.fill();
      }
    });
  }, [userFrequency, userLevelName]);

  return (
    <canvas
      ref={canvasRef}
      className="w-full rounded-lg border border-dark-700"
      style={{ height: `${hawkinsScale.length * 32}px` }}
    />
  );
}
