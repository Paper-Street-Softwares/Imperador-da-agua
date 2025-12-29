import { motion } from "framer-motion";
import { 
  Droplets, 
  Truck, 
  Check, 
  Plus, 
  Minus,
  MessageCircle,
  HelpCircle,
  Clock,
  ShieldCheck,
  Star,
  ChevronDown,
  ShoppingCart,
  MapPin,
  Instagram,
  Facebook,
  ChevronRight,
  FileText,
  Image as ImageIcon,
  Link as LinkIcon,
  Upload,
  Phone
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const products = [
  {
    id: 1,
    name: "Galão 20L (Retornável)",
    price: "R$ 15,00",
    description: "Água mineral puríssima em galão de 20 litros.",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=300&h=300&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Galão 10L (Retornável)",
    price: "R$ 10,00",
    description: "Ideal para famílias menores ou consumo moderado.",
    image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=300&h=300&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Pack 12 Garrafas 500ml",
    price: "R$ 18,00",
    description: "Perfeito para levar na bolsa ou para eventos.",
    image: "https://images.unsplash.com/photo-1523362628242-f5133cdf5470?q=80&w=300&h=300&auto=format&fit=crop"
  }
];

const plans = [
  {
    title: "Plano Essencial",
    icon: "🥉",
    gallons: "3 galões/mês",
    desc: "Ideal para consumo básico",
    price: "R$ 36,00",
    daily: "R$ 1,20 por dia",
    note: "Ideal pra quem consome pouco ou mora sozinho.",
    color: "bg-orange-50",
    textColor: "text-orange-700",
    borderColor: "border-orange-100"
  },
  {
    title: "Plano Família",
    icon: "🥇",
    tag: "Mais vendido",
    gallons: "6 galões/mês",
    desc: "Perfeito para famílias",
    extra: "Nunca fica sem água",
    price: "R$ 63,00",
    daily: "R$ 2,10 por dia",
    note: "O plano preferido de quem não quer se preocupar",
    color: "bg-[#30BEFF]",
    textColor: "text-white",
    borderColor: "border-blue-400",
    isFeatured: true
  },
  {
    title: "Plano Empresa",
    icon: "🏢",
    gallons: "10 galões/mês",
    desc: "Ideal para comércios e escritórios",
    extra: "Abastecimento garantido",
    price: "R$ 96,00",
    daily: "R$ 3,20 por dia",
    note: "Max economia + previsibilidade.",
    color: "bg-slate-900",
    textColor: "text-white",
    borderColor: "border-slate-700"
  }
];

const faqs = [
  {
    q: "Posso mudar de plano depois?",
    a: "Sim! Você pode ajustar seu plano conforme seu consumo."
  },
  {
    q: "Posso pausar a assinatura?",
    a: "Pode sim. É só avisar pelo WhatsApp."
  },
  {
    q: "E se eu não consumir toda a água do mês?",
    a: "Sem problema. Ajustamos a próxima entrega."
  },
  {
    q: "Tem fidelidade ou multa?",
    a: "Não. Aqui você fica porque é bom, não por obrigação."
  }
];

export default function WaterDelivery() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#30BEFF]/20">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#30BEFF] rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <Droplets className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-[#161A4A] font-heading uppercase">Pureza Express</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#produtos" className="hover:text-[#30BEFF] transition-colors">Produtos</a>
            <a href="#planos" className="hover:text-[#30BEFF] transition-colors">Assinaturas</a>
            <a href="#faq" className="hover:text-[#30BEFF] transition-colors">Dúvidas</a>
          </div>
          <Button className="bg-[#161A4A] hover:bg-[#1c2263] text-white rounded-full px-6 shadow-md transition-all">
            Pedir Agora
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#161A4A] pt-20">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1616118132261-3bc826950229?q=80&w=1200&auto=format&fit=crop" 
            alt="Water Texture" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#30BEFF] rounded-full blur-[120px] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge className="bg-[#30BEFF] text-white border-none px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full">
                ENTREGA EM ATÉ 30 MINUTOS ⚡
              </Badge>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter"
            >
              Nunca mais fique sem <span className="text-[#30BEFF]">água</span> em casa.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 max-w-xl font-medium leading-relaxed"
            >
              Receba seus galões todo mês, sem taxa de entrega e sem dor de cabeça.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button className="h-16 px-8 bg-[#30BEFF] hover:bg-[#25ace8] text-[#161A4A] font-black text-lg rounded-2xl shadow-xl shadow-[#30BEFF]/20 group transition-all">
                Pedir agora pelo WhatsApp 
                <MessageCircle className="ml-2 w-6 h-6 fill-[#161A4A]" />
              </Button>
              <Button variant="outline" className="h-16 px-8 border-2 border-white/20 text-white hover:bg-white hover:text-[#161A4A] font-black text-lg rounded-2xl transition-all">
                ASSINAR AGORA
              </Button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 pt-8 border-t border-white/10"
            >
              <div className="space-y-1">
                <p className="text-white font-bold flex items-center gap-2">
                  <Check className="w-5 h-5 text-[#30BEFF]" /> Simples, rápido e do seu jeito.
                </p>
                <p className="text-slate-400 text-sm flex items-center gap-4">
                  <span>💳 Pix • Dinheiro • Cartão</span>
                  <span className="flex items-center gap-1 text-[#30BEFF]">🚚 <strong>Entrega GRÁTIS</strong></span>
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden lg:block relative"
          >
             <img 
              src="https://images.unsplash.com/photo-1616118132261-3bc826950229?q=80&w=800&auto=format&fit=crop" 
              alt="Water Delivery" 
              className="rounded-3xl shadow-2xl border-8 border-white/10"
            />
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 text-blue-600 rounded-full">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Motorista à caminho</p>
                  <p className="font-black text-[#161A4A]">Chegada em 8 min</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Rapidez Recorde", desc: "Logística inteligente para entregas em tempo recorde na sua porta." },
              { icon: ShieldCheck, title: "Qualidade Garantida", desc: "Água mineral testada e aprovada pelos órgãos de saúde competentes." },
              { icon: Droplets, title: "Preço Justo", desc: "Os melhores valores da região com programa de fidelidade exclusivo." }
            ].map((feature, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-xl transition-all duration-300 p-8 rounded-3xl bg-white group">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-6 group-hover:bg-[#30BEFF] group-hover:text-white transition-colors">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#161A4A] font-heading">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-[#161A4A] tracking-tighter">Planos de Assinatura</h2>
            <p className="text-slate-500 text-lg">A hidratação da sua família com economia e conveniência total.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex"
              >
                <Card className={`relative flex flex-col w-full rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-2xl overflow-hidden border-2 ${plan.isFeatured ? 'bg-[#161A4A] border-[#30BEFF] scale-105 z-10 shadow-2xl' : 'bg-white border-slate-100 shadow-sm'}`}>
                  {plan.tag && (
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-yellow-400 text-[#161A4A] font-black uppercase tracking-wider border-none px-3 py-1">
                        ⭐ {plan.tag}
                      </Badge>
                    </div>
                  )}
                  
                  <div className="mb-8">
                    <span className="text-4xl mb-4 block">{plan.icon}</span>
                    <h3 className={`text-2xl font-black ${plan.isFeatured ? 'text-white' : 'text-[#161A4A]'}`}>{plan.title}</h3>
                  </div>

                  <div className="space-y-4 mb-10 flex-grow">
                    {[plan.gallons, plan.desc, plan.extra].filter(Boolean).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <Check className={`w-5 h-5 shrink-0 ${plan.isFeatured ? 'text-[#30BEFF]' : 'text-blue-600'}`} />
                        <span className={`font-bold ${plan.isFeatured ? 'text-blue-100' : 'text-slate-700'}`}>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className={`mb-8 p-6 rounded-3xl ${plan.isFeatured ? 'bg-white/10 border border-white/20' : 'bg-slate-50 border border-slate-100'}`}>
                    <p className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1 ${plan.isFeatured ? 'text-[#30BEFF]' : 'text-slate-400'}`}>Assinatura Mensal</p>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-black ${plan.isFeatured ? 'text-white' : 'text-[#161A4A]'}`}>{plan.price}</span>
                      <span className={`text-sm ${plan.isFeatured ? 'text-blue-200' : 'text-slate-500'}`}>/mês</span>
                    </div>
                    <p className={`text-sm mt-2 font-bold ${plan.isFeatured ? 'text-[#30BEFF]' : 'text-blue-600'}`}>💸 Apenas {plan.daily}</p>
                  </div>

                  <p className={`text-sm font-medium mb-8 leading-relaxed ${plan.isFeatured ? 'text-blue-100' : 'text-slate-500'}`}>
                    {plan.note}
                  </p>

                  <Button className={`w-full h-14 text-lg font-black rounded-2xl transition-all ${
                    plan.isFeatured 
                    ? 'bg-[#30BEFF] text-white hover:bg-[#25ace8] shadow-lg shadow-[#30BEFF]/30' 
                    : 'bg-slate-100 text-[#161A4A] hover:bg-slate-200'
                  }`}>
                    Assinar agora
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section id="produtos" className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-16">
            <div className="space-y-4">
              <Badge variant="outline" className="border-[#30BEFF] text-[#30BEFF] rounded-full px-4 font-bold">Catálogo Avulso</Badge>
              <h2 className="text-4xl md:text-5xl font-black text-[#161A4A] tracking-tighter">Produtos Unitários</h2>
            </div>
            <Button variant="ghost" className="text-[#30BEFF] font-black hover:bg-blue-50 rounded-full">
              Ver tudo <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div key={product.id} whileHover={{ y: -10 }} className="group">
                <div className="bg-slate-100 rounded-[2.5rem] overflow-hidden mb-6 aspect-square relative border-4 border-transparent group-hover:border-[#30BEFF]/20 transition-all">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute bottom-4 right-4">
                    <Button size="icon" className="w-12 h-12 rounded-2xl bg-white text-[#161A4A] hover:bg-[#161A4A] hover:text-white shadow-xl transition-all">
                      <ShoppingCart className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <div className="px-2">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-black text-[#161A4A]">{product.name}</h3>
                    <span className="text-xl font-black text-[#30BEFF]">{product.price}</span>
                  </div>
                  <p className="text-slate-500 text-sm font-medium">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-[#161A4A] tracking-tighter">Dúvidas Frequentes</h2>
            <p className="text-slate-500 text-lg">Tudo o que você precisa saber sobre nosso serviço.</p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-100 py-4 last:border-0">
                  <AccordionTrigger className="text-xl font-bold text-[#161A4A] hover:no-underline hover:text-[#30BEFF] transition-colors text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-lg leading-relaxed pt-4 font-medium">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-24 bg-[#161A4A] text-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 space-y-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#30BEFF] rounded-full flex items-center justify-center">
                  <Droplets className="w-6 h-6" />
                </div>
                <span className="font-black text-2xl uppercase tracking-tighter">Pureza Express</span>
              </div>
              <p className="text-slate-400 max-w-sm text-lg font-medium leading-relaxed">
                A melhor água da cidade, entregue com a agilidade que sua família merece.
              </p>
              <div className="flex gap-4">
                <Button variant="outline" size="icon" className="rounded-2xl border-white/10 bg-white/5 hover:bg-[#30BEFF] hover:border-[#30BEFF] transition-all">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon" className="rounded-2xl border-white/10 bg-white/5 hover:bg-[#30BEFF] hover:border-[#30BEFF] transition-all">
                  <Facebook className="w-5 h-5" />
                </Button>
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="font-black text-xl tracking-tight">Atendimento</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-[#30BEFF]" />
                  <span>Seg - Sáb: 08h às 20h</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-[#30BEFF]" />
                  <span>(11) 99999-9999</span>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-[#30BEFF]" />
                  <span>Atendemos toda a região</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6 text-center md:text-left">
               <h4 className="font-black text-xl tracking-tight">Precisa de água?</h4>
               <Button className="w-full h-14 bg-[#30BEFF] text-[#161A4A] font-black rounded-2xl hover:bg-white transition-all">
                 CHAMAR NO WHATSAPP
               </Button>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-sm font-bold">
            © 2025 Pureza Express. Imperador da Água. Todos os direitos reservados.
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl shadow-green-500/20 group"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl font-bold text-sm shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100">
          Pedir Água Agora!
        </span>
      </motion.a>
    </div>
  );
}
