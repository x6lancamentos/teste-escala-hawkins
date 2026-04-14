"use client";

import { useRouter } from "next/navigation";
import { useState, Suspense, useEffect } from "react";
import { motion } from "framer-motion";
import { useTest } from "@/context/TestContext";
import FrequencyChart from "@/components/FrequencyChart";
import { resultCopy, faqData, testimonials } from "@/lib/result-copy";

function ResultadoContent() {
  const router = useRouter();
  const { userResult } = useTest();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [countdown, setCountdown] = useState({ hours: 23, minutes: 59, seconds: 59 });

  // Redirect if no result
  useEffect(() => {
    if (!userResult) {
      router.push("/");
    }
  }, [userResult, router]);

  if (!userResult) return null;

  const { name, levelName, frequency, category } = userResult;
  const copy = resultCopy[category as keyof typeof resultCopy];

  // CTA URL - replace with actual product URL
  const ctaUrl = "https://pay.hotmart.com/SEU-LINK-AQUI";

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          minutes = 59;
          seconds = 59;
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen bg-dark-900">
      {/* SEÇÃO 1 - Hero/Resultado */}
      <section className="relative py-16 px-4 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gold-500/10 rounded-full blur-[100px]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="relative z-10 max-w-4xl mx-auto text-center"
        >
          <div className="mb-4">
            <span className="inline-block px-4 py-2 border border-gold-500/30 rounded-full text-gold-400 text-sm font-medium">
              ✦ SEU RESULTADO PERSONALIZADO ✦
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight">
            {copy.headline(name, levelName, frequency)}
          </h1>

          <p className="text-xl md:text-2xl text-gold-400 font-medium mb-8">
            {copy.subheadline(levelName)}
          </p>

          {/* Frequency Chart */}
          <div className="max-w-2xl mx-auto mb-8">
            <FrequencyChart
              userFrequency={frequency}
              userLevelName={levelName}
            />
            <p className="text-gray-500 text-sm mt-2">
              ▲ Sua posição na Escala de Hawkins
            </p>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 2 - Diagnóstico */}
      <section className="py-16 px-4 bg-dark-800">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-dark-900 rounded-xl p-6 md:p-10 border border-dark-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🔍</span>
              <h2 className="text-2xl font-bold text-white">
                O Que Seu Resultado Revela
              </h2>
            </div>

            <div className="text-gray-300 leading-relaxed space-y-4 whitespace-pre-line">
              {copy.diagnosis(name, levelName)}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 3 - Explicação Científica */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
            O que a{" "}
            <span className="text-gold-gradient">ciência e a espiritualidade</span>{" "}
            dizem sobre sua frequência
          </h2>

          <div className="bg-dark-800 rounded-xl p-6 md:p-8 border border-dark-700 space-y-4 text-gray-300 leading-relaxed">
            <p>
              Em 1995, o Dr. David R. Hawkins, psiquiatra e pesquisador, publicou{" "}
              <strong className="text-white">"Poder vs. Força"</strong> — um livro que
              apresentava ao mundo a Escala de Consciência.
            </p>
            <p>
              Aplicando cinesiologia aplicada, Hawkins mapeou que emoções e estados
              de consciência emitem <strong className="text-white">frequências mensuráveis</strong> —
              de 20 (vergonha) a 1000 (iluminação).
            </p>
            <p>
              A descoberta que mudou tudo:{" "}
              <strong className="text-gold-400">
                sua frequência não é apenas um reflexo do que você sente. Ela é o
                campo que determina o que você atrai, manifesta e se torna.
              </strong>
            </p>

            <div className="border-l-4 border-gold-500 pl-4 py-3 my-6 bg-gold-500/5 rounded-r-lg">
              <p className="text-white font-medium">
                Em outras palavras:
              </p>
              <ul className="mt-2 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-alert">✕</span>
                  <span>Pessoas em frequências baixas atraem escassez, conflitos e estagnação</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-success">✓</span>
                  <span>Pessoas em frequências altas atraem oportunidades, prosperidade e sincronicidade</span>
                </li>
              </ul>
            </div>

            <p>
              Seu resultado em <strong className="text-gold-400">{levelName} com {frequency} Hz</strong> confirma
              que existe um enorme espaço para elevar sua frequência — e com isso,
              transformar completamente sua realidade.
            </p>
            <p className="text-white font-bold text-lg">
              Mas existe um caminho para elevar essa frequência — de forma acelerada e permanente.
            </p>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 4 - Transição para Solução */}
      <section className="py-16 px-4 bg-dark-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-dark-900 rounded-xl p-6 md:p-10 border border-gold-500/30">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 text-center">
              Existe um método para elevar sua frequência —{" "}
              <span className="text-gold-gradient">e não é o que você pensa</span>
            </h2>

            <div className="text-gray-300 leading-relaxed space-y-4 whitespace-pre-line">
              {copy.transition}
            </div>

            <div className="mt-8 p-6 bg-gold-500/10 rounded-lg border border-gold-500/30">
              <p className="text-white text-lg font-bold text-center">
                O Frequência da Abundância, desenvolvido por Keuller Lima,
                é exatamente isso: uma recalibração na sua estrutura vibracional.
              </p>
              <p className="text-gold-400 text-center mt-3 font-medium">
                Não é mais um curso. Não é mais uma técnica.
                <br />
                É uma imersão frequencial que trabalha no nível em que os padrões
                de escassez foram instalados — para desinstalá-los de verdade.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 5 - Prova Social */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 text-center">
              Quem já elevou sua frequência com o método
            </h2>
            <p className="text-gray-400 text-center mb-10">
              Resultados reais de pessoas que decidiram agir
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-dark-800 rounded-xl p-6 border border-dark-700"
                >
                  <div className="flex gap-1 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-gold-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4 italic">
                    "{t.text}"
                  </p>
                  <div>
                    <p className="text-white font-bold">{t.name}</p>
                    <p className="text-gold-400 text-sm">{t.role}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEÇÃO 5b - Sobre Keuller Lima */}
      <section className="py-16 px-4 bg-dark-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gold-500/20 border-2 border-gold-500 flex items-center justify-center">
            <span className="text-5xl text-gold-400">KL</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Quem é Keuller Lima
          </h2>
          <div className="bg-dark-900 rounded-xl p-6 md:p-8 border border-dark-700 text-gray-300 leading-relaxed space-y-4">
            <p>
              Keuller Lima é mentor de alta frequência e desenvolvedor do método
              <strong className="text-gold-400"> Frequência da Abundância</strong> —
              uma abordagem única que une ciência da consciência, espiritualidade
              prática e técnicas de recalibração vibracional.
            </p>
            <p>
              Após anos estudando a Escala de Hawkins e aplicando seus princípios
              na prática, Keuller desenvolveu um método que já ajudou centenas de
              pessoas a elevarem sua frequência e transformarem sua relação com
              dinheiro, oportunidades e prosperidade.
            </p>
            <p className="text-white font-bold">
              "Minha missão não é te ensinar a pensar positivo. É te ensinar a
              vibrar diferente — porque é na frequência que a abundância realmente
              acontece."
            </p>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 6 - O Produto */}
      <section className="py-16 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-gradient-to-b from-gold-500/10 to-dark-900 rounded-xl p-6 md:p-10 border-2 border-gold-500/50">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-black text-gold-gradient mb-2">
                Frequência da Abundância
              </h2>
              <p className="text-gray-400">
                A imersão que recalibra sua estrutura vibracional para prosperidade
              </p>
            </div>

            <div className="space-y-4 mb-8">
              {[
                "Recalibração do seu campo frequencial para abundância",
                "Eliminação de padrões de escassez enraizados",
                "Ativação do seu magnetismo natural de prosperidade",
                "Técnicas para manter e elevar sua frequência diariamente",
                "Comunidade exclusiva de pessoas em alta frequência",
              ].map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-success/20 flex items-center justify-center text-success text-sm">
                    ✓
                  </span>
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8 text-sm">
              <div className="p-4 bg-dark-800 rounded-lg">
                <p className="text-success font-bold mb-1">✓ Para quem é:</p>
                <p className="text-gray-400">
                  Pessoas que sentem que estão abaixo do seu potencial de
                  prosperidade e estão prontas para fazer algo REAL sobre isso.
                </p>
              </div>
              <div className="p-4 bg-dark-800 rounded-lg">
                <p className="text-alert font-bold mb-1">✕ Para quem NÃO é:</p>
                <p className="text-gray-400">
                  Quem acredita que "dinheiro não traz felicidade" e prefere
                  continuar na zona de conforto da escassez confortável.
                </p>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-5 bg-gold-gradient text-dark-900 font-black text-lg rounded-lg 
                           hover:shadow-[0_0_50px_rgba(212,175,55,0.5)] transition-all duration-300 
                           transform hover:scale-105 animate-pulse"
              >
                QUERO ELEVAR MINHA FREQUÊNCIA AGORA
              </a>
              <div className="mt-4 space-y-1 text-sm text-gray-400">
                <p>→ Acesso imediato ao Frequência da Abundância</p>
                <p>→ Garantia de 7 dias ou seu dinheiro de volta</p>
                <p>→ Vagas limitadas — não perca esta oportunidade</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 7 - Urgência + Escassez */}
      <section className="py-12 px-4 bg-alert/10 border-y border-alert/30">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            ⚠️ Importante ler antes de decidir
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p>
              O Frequência da Abundância <strong className="text-white">não está aberto o ano todo</strong>.
            </p>
            <p>
              Keuller Lima trabalha com turmas limitadas para garantir que cada
              pessoa receba a atenção e a profundidade que uma transformação
              frequencial exige.
            </p>
            <p className="text-gold-400 font-bold text-lg">
              Neste momento, as inscrições estão abertas — mas por tempo
              indeterminado. Não sabemos por quanto tempo.
            </p>
            <p>
              Já vi pessoas perderem a oportunidade e se arrependerem profundamente.
            </p>
            <p className="text-white font-bold text-lg">
              Se algo dentro de você se identificou com tudo que leu até aqui —
              não ignore esse sinal.
            </p>
          </div>

          {/* Countdown */}
          <div className="mt-8 flex justify-center gap-4">
            {[
              { label: "horas", value: countdown.hours },
              { label: "minutos", value: countdown.minutes },
              { label: "segundos", value: countdown.seconds },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-20 h-20 bg-dark-900 rounded-lg border border-gold-500/50 flex items-center justify-center">
                  <span className="text-3xl font-black text-gold-400">
                    {String(item.value).padStart(2, "0")}
                  </span>
                </div>
                <span className="text-xs text-gray-400 mt-1 block">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm mt-3">
            Tempo restante para decisão — não espere até o último minuto
          </p>
        </motion.div>
      </section>

      {/* SEÇÃO 8 - CTA Final */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Sua frequência atual te trouxe até aqui.
            <br />
            <span className="text-gold-gradient">
              A decisão que você toma agora define para onde vai a partir daqui.
            </span>
          </h2>

          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-16 py-6 bg-gold-gradient text-dark-900 font-black text-xl rounded-lg 
                       hover:shadow-[0_0_60px_rgba(212,175,55,0.5)] transition-all duration-300 
                       transform hover:scale-105 mt-8"
          >
            QUERO ELEVAR MINHA FREQUÊNCIA AGORA →
          </a>

          {/* Trust Badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-success">🔒</span>
              <span>Compra Segura</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-success">↩️</span>
              <span>7 Dias de Garantia</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-success">⚡</span>
              <span>Acesso Imediato</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* SEÇÃO 9 - FAQ */}
      <section className="py-16 px-4 bg-dark-800">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
              Perguntas Frequentes
            </h2>

            <div className="space-y-3">
              {faqData.map((faq, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-dark-900 rounded-lg border border-dark-700 overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                    className="w-full p-5 text-left flex justify-between items-center hover:bg-dark-700/50 transition-colors"
                  >
                    <span className="text-white font-medium pr-4">{faq.question}</span>
                    <span
                      className={`text-gold-400 text-xl flex-shrink-0 transition-transform duration-200 ${
                        expandedFaq === i ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>
                  {expandedFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="px-5 pb-5 text-gray-400 leading-relaxed border-t border-dark-700 pt-4"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-dark-700">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm mb-2">
            © 2026 Keuller Lima — Frequência da Abundância. Todos os direitos reservados.
          </p>
          <p className="text-gray-600 text-xs">
            Este produto não substitui acompanhamento médico ou psicológico profissional.
          </p>
        </div>
      </footer>
    </main>
  );
}

export default function ResultadoPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-dark-900 flex items-center justify-center">
          <div className="text-gold-400">Carregando seu resultado...</div>
        </div>
      }
    >
      <ResultadoContent />
    </Suspense>
  );
}
