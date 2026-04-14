"use client";

import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { questions } from "@/lib/questions";
import { useTest } from "@/context/TestContext";

export default function TestPage() {
  const router = useRouter();
  const { answers, setAnswer, currentQuestion, setCurrentQuestion } = useTest();
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const totalQuestions = questions.length;
  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleOptionSelect = (value: number) => {
    setSelectedOption(value);
  };

  const handleNext = () => {
    if (selectedOption !== null) {
      setAnswer(currentQ.id, selectedOption);
      setSelectedOption(null);

      if (currentQuestion < totalQuestions - 1) {
        setCurrentQuestion(currentQuestion + 1);
      } else {
        // Last question - calculate result and redirect
        const totalScore = Object.values(answers).reduce(
          (sum, val) => sum + val,
          selectedOption
        );
        router.push(`/captura?score=${totalScore}`);
      }
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(answers[questions[currentQuestion - 1].id] || null);
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -50 },
  };

  return (
    <main className="min-h-screen bg-dark-900 py-8 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gold-400 font-medium text-sm">
              Pergunta {currentQuestion + 1} de {totalQuestions}
            </span>
            <span className="text-gray-400 text-sm">
              {currentQ.dimension}
            </span>
          </div>
          <div className="w-full bg-dark-700 rounded-full h-2">
            <motion.div
              className="bg-gold-gradient h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
            className="bg-dark-800 rounded-xl p-6 md:p-8 border border-dark-700"
          >
            <h2 className="text-xl md:text-2xl font-bold text-white mb-8 leading-relaxed">
              {currentQ.text}
            </h2>

            <div className="space-y-3">
              {currentQ.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionSelect(option.value)}
                  className={`w-full p-4 rounded-lg text-left transition-all duration-200 border-2 ${
                    selectedOption === option.value
                      ? "border-gold-500 bg-gold-500/10 text-white"
                      : "border-dark-700 bg-dark-900 text-gray-300 hover:border-gray-600 hover:bg-dark-700"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span
                      className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center text-sm font-bold ${
                        selectedOption === option.value
                          ? "border-gold-500 bg-gold-500 text-dark-900"
                          : "border-gray-600 text-gray-400"
                      }`}
                    >
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="pt-1">{option.text}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex justify-between mt-8 pt-6 border-t border-dark-700">
              <button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  currentQuestion === 0
                    ? "text-gray-600 cursor-not-allowed"
                    : "text-gray-300 hover:text-white hover:bg-dark-700"
                }`}
              >
                ← Anterior
              </button>

              <button
                onClick={handleNext}
                disabled={selectedOption === null}
                className={`px-8 py-3 rounded-lg font-bold transition-all ${
                  selectedOption === null
                    ? "bg-dark-700 text-gray-600 cursor-not-allowed"
                    : "bg-gold-gradient text-dark-900 hover:shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                }`}
              >
                {currentQuestion === totalQuestions - 1
                  ? "Ver Resultado →"
                  : "Próxima →"}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
