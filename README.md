# Teste de Nível Vibracional — Escala de Hawkins

Aplicação web para teste de frequência vibracional baseada na Escala de Consciência de Dr. David R. Hawkins, com página de devolutiva em formato advertorial focada na conversão para o produto **Frequência da Abundância** — Keuller Lima.

## 🚀 Tecnologias

- **Next.js 15** com App Router
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** (animações)
- **Canvas API** (gráfico da escala)

## 📦 Instalação Local

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build de produção
npm run build

# Rodar em produção
npm start
```

A aplicação estará disponível em `http://localhost:3000`.

## 🌐 Deploy na Vercel

### Opção 1: Via GitHub (Recomendado)

1. **Crie um repositório no GitHub** com este projeto:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/SEU-USUARIO/SEU-REPO.git
   git push -u origin main
   ```

2. **Acesse [vercel.com](https://vercel.com)** e faça login com GitHub

3. **Clique em "New Project"** e importe o repositório

4. **Configurações de build** (já configuradas automaticamente via `vercel.json`):
   - Framework Preset: Next.js
   - Build Command: `next build`
   - Output Directory: `.next`

5. **Clique em Deploy** — pronto! 🎉

### Opção 2: Via Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Fazer login
vercel login

# Deploy
vercel
```

### Opção 3: Via Dashboard Vercel

1. Acesse [vercel.com/new](https://vercel.com/new)
2. Arraste a pasta do projeto para a área indicada
3. Confirme as configurações e faça deploy

## 📁 Estrutura do Projeto

```
app/
├── layout.tsx           # Layout raiz com fonts e providers
├── page.tsx             # Landing page do teste
├── globals.css          # Estilos globais
├── teste/
│   └── page.tsx         # Página do teste (20 perguntas)
├── captura/
│   └── page.tsx         # Captura de dados (nome, email, WhatsApp)
├── loading/
│   └── page.tsx         # Loading animado (análise de frequência)
└── resultado/
    └── page.tsx         # Página de devolutiva (advertorial + CTA)

components/
└── FrequencyChart.tsx   # Gráfico da Escala de Hawkins

context/
├── TestContext.tsx      # Contexto global do teste
└── ThemeContext.tsx     # Contexto de tema

lib/
├── questions.ts         # 20 perguntas do teste
├── hawkins-scale.ts     # Escala de Hawkins e cálculos
└── result-copy.ts       // Copy dinâmica por faixa de nível
```

## 🔧 Configuração do Produto

### Link de CTA

Para alterar o link de compra do produto, edite o arquivo:

```
app/resultado/page.tsx
```

Procure pela variável `ctaUrl` e substitua pelo seu link:

```typescript
const ctaUrl = "https://pay.hotmart.com/SEU-LINK-AQUI";
```

### Integração com E-mail Marketing

Para integrar com seu serviço de e-mail (ActiveCampaign, Mailchimp, etc.), edite o handler no arquivo:

```
app/captura/page.tsx
```

Substitua o `localStorage.setItem` pela chamada à sua API.

### Pixel do Meta / Google Analytics

Adicione os scripts de tracking no arquivo:

```
app/layout.tsx
```

## 📊 Fluxo do Usuário

```
Landing Page → Teste (20 perguntas) → Captura de Dados → Loading → Devolutiva (Advertorial) → CTA → Checkout
```

## 🎨 Design System

| Elemento | Cor | Hex |
|----------|-----|-----|
| Fundo principal | Preto | `#0A0A0A` |
| Fundo secundário | Cinza escuro | `#1A1A1A` |
| Texto principal | Branco | `#FFFFFF` |
| Destaque/CTA | Dourado | `#D4AF37` |
| Alertas | Vermelho escuro | `#8B0000` |
| Confirmação | Verde esmeralda | `#50C878` |

## 📝 PRD Completo

O Product Requirements Document completo está em [PRD-Teste-Escala-Hawkins.md](./PRD-Teste-Escala-Hawkins.md).

## 📄 Licença

© 2026 Keuller Lima — Frequência da Abundância. Todos os direitos reservados.
