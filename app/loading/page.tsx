"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function LoadingPage() {
  const router = useRouter();
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState("Iniciando análise...");

  const loadingMessages = [
    { at: 10, text: "Mapeando seu perfil vibracional..." },
    { at: 25, text: "Analisando suas respostas..." },
    { at: 40, text: "Calculando sua frequência na Escala de Hawkins..." },
    { at: 55, text: "Identificando padrões de abundância..." },
    { at: 70, text: "Gerando seu relatório personalizado..." },
    { at: 85, text: "Preparando sua devolutiva..." },
    { at: 95, text: "Finalizando..." },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            router.push("/resultado");
          }, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 70); // ~7 seconds total

    return () => clearInterval(interval);
  }, [router]);

  useEffect(() => {
    const currentMessage = [...loadingMessages].reverse().find((m) => progress >= m.at);
    if (currentMessage) {
      setStatusText(currentMessage.text);
    }
  }, [progress]);

  return (
    <main className="min-h-screen bg-dark-900 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center max-w-md mx-auto"
      >
        {/* Animated Circle */}
        <div className="relative w-48 h-48 mx-auto mb-8">
          {/* Outer rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-gold-500/20"
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          
          {/* Inner rotating ring (opposite direction) */}
          <motion.div
            className="absolute inset-4 rounded-full border border-gold-500/30"
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          />

          {/* Pulse circle */}
          <motion.div
            className="absolute inset-8 rounded-full bg-gold-500/10"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Center text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl font-black text-gold-gradient">
              {progress}%
            </span>
          </div>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-dark-700 rounded-full h-1.5 mb-4 overflow-hidden">
          <motion.div
            className="h-full bg-gold-gradient rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Status text */}
        <motion.p
          key={statusText}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-gold-400 font-medium"
        >
          {statusText}
        </motion.p>

        <p className="text-gray-500 text-sm mt-4">
          Seu relatório personalizado está sendo preparado com base nas suas
          respostas.
        </p>
      </motion.div>
    </main>
  );
}
