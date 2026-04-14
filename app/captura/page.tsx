"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";
import { motion } from "framer-motion";
import { getUserLevel, getFrequencyFromScore } from "@/lib/hawkins-scale";
import { useTest } from "@/context/TestContext";

function CapturaContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setUserResult } = useTest();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");

  const score = parseInt(searchParams.get("score") || "0");

  const handleFormatWhatsApp = (value: string) => {
    const numbers = value.replace(/\D/g, "").slice(0, 11);
    if (numbers.length <= 2) return numbers;
    if (numbers.length <= 7)
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWhatsapp(handleFormatWhatsApp(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim()) {
      setError("Por favor, preencha seu nome.");
      return;
    }
    if (!email.trim() || !email.includes("@")) {
      setError("Por favor, preencha um e-mail válido.");
      return;
    }
    if (!whatsapp.trim() || whatsapp.replace(/\D/g, "").length < 10) {
      setError("Por favor, preencha um WhatsApp válido com DDD.");
      return;
    }
    if (!consent) {
      setError("Você precisa concordar com a Política de Privacidade.");
      return;
    }

    const userLevel = getUserLevel(score);
    const frequency = getFrequencyFromScore(score);

    setUserResult({
      name: name.trim(),
      email: email.trim(),
      whatsapp: whatsapp.trim(),
      totalScore: score,
      levelName: userLevel.name,
      frequency,
      category: userLevel.category,
    });

    // Save to localStorage for demo (in production, send to API)
    localStorage.setItem(
      "hawkins_user",
      JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        whatsapp: whatsapp.trim(),
        score,
        levelName: userLevel.name,
        frequency,
        category: userLevel.category,
        timestamp: new Date().toISOString(),
      })
    );

    router.push("/loading");
  };

  return (
    <main className="min-h-screen bg-dark-900 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 border border-gold-500/30 rounded-full text-gold-400 text-sm font-medium mb-4">
            ✓ Teste Concluído
          </span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Quase lá!
          </h1>
          <p className="text-gray-300">
            Preencha seus dados para receber seu relatório personalizado de
            frequência vibracional.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-dark-800 rounded-xl p-6 md:p-8 border border-dark-700 space-y-5"
        >
          <div>
            <label className="block text-white font-medium mb-2">Nome</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Seu nome completo"
              className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
              className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors"
            />
          </div>

          <div>
            <label className="block text-white font-medium mb-2">WhatsApp</label>
            <input
              type="tel"
              value={whatsapp}
              onChange={handleWhatsAppChange}
              placeholder="(11) 99999-9999"
              className="w-full px-4 py-3 bg-dark-900 border border-dark-700 rounded-lg text-white placeholder-gray-500 focus:border-gold-500 focus:outline-none transition-colors"
            />
          </div>

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 w-5 h-5 rounded border-dark-700 text-gold-500 focus:ring-gold-500 bg-dark-900"
            />
            <label className="text-sm text-gray-400">
              Concordo em receber conteúdos sobre frequência vibracional e
              concordo com a{" "}
              <a href="#" className="text-gold-400 hover:underline">
                Política de Privacidade
              </a>
            </label>
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="p-3 bg-alert/20 border border-alert/50 rounded-lg text-red-300 text-sm"
            >
              {error}
            </motion.div>
          )}

          <button
            type="submit"
            className="w-full py-4 bg-gold-gradient text-dark-900 font-bold text-lg rounded-lg 
                       hover:shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all duration-300"
          >
            RECEBER MEU RELATÓRIO GRATUITO →
          </button>

          <p className="text-center text-gray-500 text-xs">
            🔒 Seus dados estão seguros e não serão compartilhados.
          </p>
        </form>
      </motion.div>
    </main>
  );
}

export default function CapturaPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-dark-900 flex items-center justify-center">
          <div className="text-gold-400">Carregando...</div>
        </div>
      }
    >
      <CapturaContent />
    </Suspense>
  );
}
