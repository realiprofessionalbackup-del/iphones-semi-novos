/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Smartphone, 
  ShieldCheck, 
  Store, 
  Truck, 
  Battery, 
  CheckCircle2, 
  MessageCircle, 
  Star,
  Clock,
  Award,
  ChevronRight
} from "lucide-react";

const WHATSAPP_NUMBER = "5573999999999"; // Exemplo
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Olá, quero garantir meu iPhone seminovo premium.`;

const products = [
  {
    id: 1,
    name: "iPhone 15 128GB",
    cashPrice: "R$ 3.300,00",
    cardPrice: "R$ 3.849,00",
    installments: "10x de R$ 384,90",
    specs: ["128GB", "Câmera 48MP", "Dynamic Island", "Bateria 100%", "Face ID"],
    image: "https://i.ibb.co/VWTmhnnD/Whats-App-Image-2026-03-01-at-19-43-40.jpg",
    tag: "Lançamento"
  },
  {
    id: 2,
    name: "iPhone 14 128GB",
    cashPrice: "R$ 2.700,00",
    cardPrice: "R$ 3.400,00",
    installments: "10x de R$ 340,00",
    specs: ["128GB", "Câmera Pro", "5G", "Bateria 95%+", "A15 Bionic"],
    image: "https://i.ibb.co/Fkt7LLK7/Whats-App-Image-2026-03-01-at-19-37-56.jpg",
    tag: "Mais Vendido"
  },
  {
    id: 3,
    name: "iPhone 13 128GB",
    cashPrice: "R$ 2.500,00",
    cardPrice: "R$ 3.100,00",
    installments: "10x de R$ 310,00",
    specs: ["128GB", "Face ID", "Tela OLED", "Bateria 96%+", "Dual Camera"],
    image: "https://i.ibb.co/tTFYQn17/Whats-App-Image-2026-03-01-at-19-37-55.jpg",
    tag: "Promoção"
  }
];

const faqs = [
  {
    question: "Qual a garantia dos aparelhos?",
    answer: "Todos os nossos iPhones seminovos passam por uma revisão técnica rigorosa e possuem garantia de procedência e funcionamento pela nossa loja física."
  },
  {
    question: "Como funciona o envio?",
    answer: "Temos frete fixo de R$ 29,90 para todo o Nordeste. O envio é feito com seguro total e código de rastreio imediato."
  },
  {
    question: "A bateria está em qual estado?",
    answer: "Trabalhamos apenas com aparelhos premium. Nossas baterias variam entre 95% e 100%, garantindo performance de um novo."
  },
  {
    question: "Posso retirar na loja física?",
    answer: "Sim! Estamos localizados no centro de Eunápolis há mais de 10 anos. Você pode comprar online e retirar pessoalmente."
  }
];

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function App() {
  return (
    <div className="min-h-screen bg-matte-black selection:bg-gold/30">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/5 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
            <Smartphone className="text-matte-black w-5 h-5" />
          </div>
          <span className="font-bold tracking-tighter text-2xl uppercase italic">Telecel Claro</span>
        </div>
        <a 
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-2 text-base font-medium hover:text-gold transition-colors"
        >
          <MessageCircle className="w-4 h-4" />
          Falar com Atendente
        </a>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm font-semibold tracking-widest uppercase mb-6 text-silver">
              Status Acessível
            </span>
            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-6 tracking-tighter">
              IPHONES <br />
              <span className="text-gradient-gold">PREMIUM</span> <br />
              SEMINOVOS
            </h1>
            <p className="text-xl text-white/60 mb-8 max-w-lg font-light leading-relaxed">
              Luxo, Status e Performance por um preço inteligente. Sinta o poder da Apple nas suas mãos com procedência garantida.
            </p>
            
            <div className="flex flex-wrap gap-6 mb-10">
              <div className="flex items-center gap-2 text-base text-white/80">
                <Battery className="w-5 h-5 text-gold" />
                <span>Bateria 95% a 100%</span>
              </div>
              <div className="flex items-center gap-2 text-base text-white/80">
                <ShieldCheck className="w-5 h-5 text-gold" />
                <span>Procedência Garantida</span>
              </div>
              <div className="flex items-center gap-2 text-base text-white/80">
                <Truck className="w-5 h-5 text-gold" />
                <span>Frete Fixo Nordeste R$29,90</span>
              </div>
            </div>

            <a 
              href="#modelos"
              className="inline-flex items-center gap-3 bg-white text-matte-black px-8 py-4 rounded-full font-bold hover:bg-gold hover:text-white transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-white/5"
            >
              VER MODELOS DISPONÍVEIS
              <ChevronRight className="w-5 h-5" />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gold/10 blur-[120px] rounded-full"></div>
            <img 
              src="https://images.unsplash.com/photo-1616348436168-de43ad0db179?q=80&w=1000&auto=format&fit=crop" 
              alt="iPhone Premium" 
              className="relative z-10 w-full max-w-md mx-auto drop-shadow-[0_35px_35px_rgba(255,255,255,0.1)]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-white/5 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Store, label: "Loja Física", sub: "Há mais de 10 anos" },
              { icon: Award, label: "Testados", sub: "Revisão rigorosa" },
              { icon: CheckCircle2, label: "Nota Fiscal", sub: "Garantia real" },
              { icon: Clock, label: "Atendimento", sub: "Humano e imediato" }
            ].map((item, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <item.icon className="w-10 h-10 text-gold mx-auto mb-4" />
                <h3 className="font-bold text-xl">{item.label}</h3>
                <p className="text-base text-white/40">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emotional Hook */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2 {...fadeIn} className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
            SINTA O PODER NAS SUAS MÃOS
          </motion.h2>
          <motion.p {...fadeIn} className="text-2xl text-white/60 font-light leading-relaxed mb-12">
            Você não está comprando apenas um celular. Você está adquirindo um símbolo de performance, criatividade e reconhecimento instantâneo.
          </motion.p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Performance", desc: "Processadores que não travam." },
              { title: "Câmera Pro", desc: "Fotos de cinema no seu bolso." },
              { title: "Design", desc: "Minimalismo que impõe respeito." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.2 }}
                className="p-10 glass-card rounded-3xl border border-white/10"
              >
                <h4 className="text-gold font-bold text-xl mb-3">{feature.title}</h4>
                <p className="text-base text-white/50">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Catalog */}
      <section id="modelos" className="py-24 px-6 md:px-12 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-gold font-bold tracking-widest text-sm uppercase mb-2 block">Catálogo Exclusivo</span>
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight">MODELOS DISPONÍVEIS</h2>
            </div>
            <p className="text-white/40 text-base max-w-xs text-right italic">
              ⚠ Estoque rotativo. Quando acaba, acaba.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div 
                key={product.id}
                {...fadeIn}
                className="group relative glass-card rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-gold/30 transition-all duration-500"
              >
                <div className="absolute top-6 left-6 z-20">
                  <span className="bg-gold text-matte-black text-xs font-black uppercase px-4 py-1.5 rounded-full">
                    {product.tag}
                  </span>
                </div>
                <div className="aspect-[4/5] overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-bold mb-1">{product.name}</h3>
                  <div className="mb-6">
                    <p className="text-sm text-white/40 mb-1">em até 10x no cartão</p>
                    <p className="text-4xl font-black text-white mb-1">{product.installments}</p>
                    <p className="text-sm text-white/60">Total: {product.cardPrice}</p>
                  </div>
                  
                  <div className="glass-card p-4 rounded-2xl mb-8 border border-gold/20 bg-gold/5">
                    <p className="text-xs text-gold font-bold uppercase tracking-widest mb-1">Oferta à Vista</p>
                    <p className="text-2xl font-bold text-white">{product.cashPrice}</p>
                  </div>
                  
                  <div className="space-y-3 mb-8">
                    {product.specs.map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 text-base text-white/50">
                        <CheckCircle2 className="w-4 h-4 text-gold/50" />
                        {spec}
                      </div>
                    ))}
                  </div>

                  <a 
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-white text-matte-black text-center py-5 rounded-2xl font-bold text-xl hover:bg-gold hover:text-white transition-all active:scale-95 shadow-lg shadow-white/5"
                  >
                    GARANTIR PELO WHATSAPP
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div {...fadeIn}>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">
              POR QUE UM <br />
              <span className="text-gradient-silver">IPHONE SEMINOVO?</span>
            </h2>
            <div className="space-y-10">
              {[
                { title: "Compra Inteligente", desc: "Você paga menos e recebe praticamente o mesmo desempenho de um novo." },
                { title: "Status Sem Dívidas", desc: "Você não precisa gastar R$ 7.000 para ter o reconhecimento que merece." },
                { title: "Sustentabilidade", desc: "Dar uma nova vida a um aparelho premium é uma escolha consciente." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center shrink-0">
                    <Star className="text-gold w-7 h-7" />
                  </div>
                  <div>
                    <h4 className="font-bold text-xl mb-2">{item.title}</h4>
                    <p className="text-white/50 text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            {...fadeIn}
            className="relative rounded-[3rem] overflow-hidden aspect-square"
          >
            <img 
              src="https://images.unsplash.com/photo-1510557880182-3d4d3cba3f21?q=80&w=1000&auto=format&fit=crop" 
              alt="Lifestyle iPhone" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-matte-black via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <div className="glass-card p-8 rounded-3xl border border-white/10">
                <p className="text-xl italic font-serif">"A melhor decisão que tomei. O aparelho veio impecável, bateria 97% e o atendimento da Telecel é nota 10."</p>
                <p className="mt-4 text-gold font-bold text-xl">— Mariana S., Eunápolis</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Store Section */}
      <section className="py-24 px-6 md:px-12 bg-white/[0.02]">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div {...fadeIn}>
            <span className="text-gold font-bold tracking-widest text-sm uppercase mb-4 block">Nossa História</span>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-tight">CONHEÇA NOSSA LOJA</h2>
            <p className="text-white/60 mb-12 font-light text-xl">
              Telecel Claro: Centro de Eunápolis. Mais de 10 anos entregando confiança e os melhores aparelhos da região.
            </p>
            <div className="aspect-video rounded-[3rem] overflow-hidden bg-white/5 border border-white/10 relative group cursor-pointer">
              <img 
                src="https://images.unsplash.com/photo-1556740734-7f9589451ab8?q=80&w=1200&auto=format&fit=crop" 
                alt="Loja Telecel" 
                className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[18px] border-l-matte-black border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 px-6 md:px-12 bg-white/[0.01]">
        <div className="max-w-5xl mx-auto">
          <motion.div {...fadeIn} className="text-center mb-20">
            <span className="text-gold font-bold tracking-widest text-sm uppercase mb-4 block">Suporte e Confiança</span>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tight">DÚVIDAS FREQUENTES</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-10 rounded-[2.5rem] border border-white/5 hover:border-gold/20 transition-colors"
              >
                <h4 className="text-2xl font-bold mb-4 text-white flex items-start gap-3">
                  <span className="text-gold">Q.</span>
                  {faq.question}
                </h4>
                <p className="text-white/50 leading-relaxed text-lg pl-9">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"></div>
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.div {...fadeIn}>
            <h2 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter">
              VOCÊ <span className="text-gradient-gold">MERECE</span> <br />
              ESSE STATUS.
            </h2>
            <p className="text-2xl text-white/50 mb-12 font-light">
              Não deixe para amanhã o iPhone que pode ser seu hoje. <br />
              Estoque limitado e rotativo.
            </p>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-matte-black px-12 py-6 rounded-full font-bold text-xl hover:bg-gold hover:text-white transition-all shadow-2xl shadow-white/10"
              >
                GARANTIR MEU IPHONE AGORA
              </a>
              <a 
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card text-white px-12 py-6 rounded-full font-bold text-xl hover:bg-white/10 transition-all border border-white/10"
              >
                FALAR COM ATENDENTE
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Background Accents */}
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-gold/5 blur-[120px] rounded-full"></div>
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-silver/5 blur-[120px] rounded-full"></div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-12 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
            <div className="flex items-center gap-2">
              <Smartphone className="text-gold w-5 h-5" />
              <span className="font-bold tracking-tighter uppercase italic">Telecel Claro</span>
            </div>
            <div className="flex gap-8 text-sm text-white/40 uppercase tracking-widest">
              <a href="#" className="hover:text-gold transition-colors">Instagram</a>
              <a href="#" className="hover:text-gold transition-colors">Facebook</a>
              <a href="#" className="hover:text-gold transition-colors">Localização</a>
            </div>
          </div>
          <p className="text-xs text-white/20 uppercase tracking-[0.2em]">
            © 2024 Telecel Claro Eunápolis. Todos os direitos reservados. <br />
            Aparelhos seminovos com garantia e procedência.
          </p>
        </div>
      </footer>
    </div>
  );
}
