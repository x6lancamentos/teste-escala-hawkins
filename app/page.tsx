"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } },
  };

  return (
    <main className="min-h-screen bg-dark-900">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
        {/* Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-gold-500/5 via-transparent to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/10 rounded-full blur-[120px]" />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center"
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <span className="inline-block px-4 py-2 border border-gold-500/30 rounded-full text-gold-400 text-sm font-medium tracking-wide">
              ✦ BASEADO NA ESCALA DE CONSCIÊNCIA DE DR. HAWKINS ✦
            </span>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6"
          >
            Descubra Seu{" "}
            <span className="text-gold-gradient">Nível Vibracional</span>
          </motion.h1>

          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Sua frequência atual determina tudo que você atrai — dinheiro,
            oportunidades, relacionamentos.{" "}
            <strong className="text-white">
              Você está vibrando na abundância ou na escassez?
            </strong>
          </motion.p>

          <motion.div variants={fadeInUp}>
            <button
              onClick={() => router.push("/teste")}
              className="group relative px-12 py-5 bg-gold-gradient text-dark-900 font-bold text-lg rounded-lg 
                         hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-300 
                         transform hover:scale-105"
            >
              FAZER O TESTE GRATUITO
              <span className="block text-sm font-normal mt-1 opacity-80">
                20 perguntas • 3 minutos
              </span>
            </button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-12 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-400">16</div>
              <div className="text-sm text-gray-400 mt-1">Níveis de Frequência</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-400">5</div>
              <div className="text-sm text-gray-400 mt-1">Dimensões Avaliadas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold-400">100%</div>
              <div className="text-sm text-gray-400 mt-1">Personalizado</div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* What is Section */}
      <section className="py-20 px-4 bg-dark-800">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              O que é a{" "}
              <span className="text-gold-gradient">Escala de Hawkins?</span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Em 1995, o Dr. David R. Hawkins mapeou que emoções e estados de
              consciência emitem frequências mensuráveis — de 20 (vergonha) a
              1000 (iluminação). Sua frequência determina o que você atrai.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Frequências Baixas (20-100)",
                desc: "Vergonha, culpa, medo, tristeza — atraem escassez, conflitos e estagnação",
                icon: "↓",
                color: "border-alert/50",
              },
              {
                title: "Frequências Médias (125-175)",
                desc: "Desejo, raiva, orgulho — zona do 'quase', esforço constante sem fluidez",
                icon: "→",
                color: "border-yellow-500/50",
              },
              {
                title: "Frequências Altas (200-350)",
                desc: "Coragem, aceitação, razão — conquistas pelo mérito, mas com desgaste",
                icon: "↑",
                color: "border-blue-500/50",
              },
              {
                title: "Frequências Superiores (400+)",
                desc: "Amor, alegria, paz — atração natural de abundância e sincronocidade",
                icon: "✦",
                color: "border-gold-500/50",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-6 bg-dark-900 rounded-lg border-l-4 ${item.color}`}
              >
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="text-white font-bold text-lg mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sua frequência atual explica{" "}
            <span className="text-gold-gradient">tudo.</span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            Por que algumas coisas simplesmente não fluem na sua vida? Por que
            você sente que pode mais, mas algo invisível te trava? A resposta
            está na sua frequência.
          </p>
          <button
            onClick={() => router.push("/teste")}
            className="px-12 py-5 bg-gold-gradient text-dark-900 font-bold text-lg rounded-lg 
                       hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-300 
                       transform hover:scale-105"
          >
            DESCUBRAR SUA FREQUÊNCIA AGORA
          </button>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-dark-700">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          <p>© 2026 Keuller Lima — Frequência da Abundância. Todos os direitos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
