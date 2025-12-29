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
  ChevronDown
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

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
    color: "bg-blue-600",
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
    <div className="min-h-screen bg-[#F8FAFC] font-sans selection:bg-[#30BEFF]/20 selection:text-[#161A4A]">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-[#161A4A]">
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-20 pointer-events-none">
          <img 
            src="https://images.unsplash.com/photo-1616118132261-3bc826950229?q=80&w=1200&auto=format&fit=crop" 
            alt="Water Texture" 
            className="w-full h-full object-cover mix-blend-overlay"
          />
        </div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#30BEFF] rounded-full blur-[120px] opacity-20" />
        
        <div className="container mx-auto px-4 relative z-10 py-20">
          <div className="max-w-3xl space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Badge className="bg-[#30BEFF] text-white hover:bg-[#30BEFF] border-none px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full">
                IMPERADOR DA ÁGUA | ASSINATURA COM ENTREGA GARANTIDA
              </Badge>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-8xl font-black text-white leading-[0.9] tracking-tighter"
            >
              Nunca mais fique sem <span className="text-[#30BEFF]">água</span> em casa.
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl md:text-2xl text-slate-300 max-w-xl font-medium leading-relaxed"
            >
              Receba seus galões todo mês, sem taxa de entrega e sem dor de cabeça.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
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
                  <span className="flex items-center gap-1">🚚 <strong>Entrega GRÁTIS</strong></span>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#161A4A] tracking-tight">Planos Mensais de Assinatura</h2>
            <p className="text-slate-500 text-lg">A hidratação da sua família com economia e conveniência.</p>
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
                <Card className={`relative flex flex-col w-full rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-2xl overflow-hidden border-2 ${plan.isFeatured ? 'border-[#30BEFF] scale-105 z-10 shadow-xl' : 'border-slate-100'}`}>
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
                    <div className="flex items-center gap-3">
                      <Check className={`w-5 h-5 ${plan.isFeatured ? 'text-[#30BEFF]' : 'text-blue-600'}`} />
                      <span className={`font-bold ${plan.isFeatured ? 'text-blue-100' : 'text-slate-700'}`}>{plan.gallons}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Check className={`w-5 h-5 ${plan.isFeatured ? 'text-[#30BEFF]' : 'text-blue-600'}`} />
                      <span className={`font-bold ${plan.isFeatured ? 'text-blue-100' : 'text-slate-700'}`}>{plan.desc}</span>
                    </div>
                    {plan.extra && (
                      <div className="flex items-center gap-3">
                        <Check className={`w-5 h-5 ${plan.isFeatured ? 'text-[#30BEFF]' : 'text-blue-600'}`} />
                        <span className={`font-bold ${plan.isFeatured ? 'text-blue-100' : 'text-slate-700'}`}>{plan.extra}</span>
                      </div>
                    )}
                  </div>

                  <div className={`mb-8 p-6 rounded-3xl ${plan.isFeatured ? 'bg-white/10 border border-white/20' : 'bg-slate-50 border border-slate-100'}`}>
                    <p className={`text-sm font-bold uppercase tracking-widest mb-1 ${plan.isFeatured ? 'text-blue-200' : 'text-slate-400'}`}>Valor Mensal</p>
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-black ${plan.isFeatured ? 'text-white' : 'text-[#161A4A]'}`}>{plan.price}</span>
                      <span className={`text-sm ${plan.isFeatured ? 'text-blue-200' : 'text-slate-500'}`}>/mês</span>
                    </div>
                    <p className={`text-sm mt-2 font-medium ${plan.isFeatured ? 'text-[#30BEFF]' : 'text-blue-600'}`}>💸 Apenas {plan.daily}</p>
                  </div>

                  <p className={`text-sm font-medium mb-8 leading-relaxed ${plan.isFeatured ? 'text-blue-100' : 'text-slate-500'}`}>
                    {plan.note}
                  </p>

                  <Button className={`w-full h-14 text-lg font-black rounded-2xl transition-all ${
                    plan.isFeatured 
                    ? 'bg-white text-[#161A4A] hover:bg-blue-50' 
                    : plan.title === "Plano Empresa"
                      ? 'bg-[#161A4A] text-white hover:bg-slate-800'
                      : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-200'
                  }`}>
                    Assinar agora
                  </Button>

                  {plan.isFeatured && (
                    <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-white/5 rounded-full pointer-events-none" />
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <Badge className="bg-white text-blue-600 border border-blue-100 px-4 py-1 rounded-full uppercase tracking-widest text-[10px] font-black">
              TIRE SUAS DÚVIDAS
            </Badge>
            <h2 className="text-4xl md:text-5xl font-black text-[#161A4A]">Perguntas Frequentes</h2>
            <p className="text-slate-500 text-lg">Confira as perguntas abaixo para esclarecer suas dúvidas.</p>
          </div>

          <div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-slate-100">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border-b border-slate-100 py-4 last:border-0">
                  <AccordionTrigger className="text-xl font-bold text-[#161A4A] hover:no-underline hover:text-blue-600 transition-colors text-left">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 text-lg leading-relaxed pt-4 font-medium">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            
            <div className="mt-12 p-8 bg-blue-50 rounded-2xl border border-blue-100 text-center">
              <p className="text-[#161A4A] font-bold text-lg mb-4">Ainda tem dúvidas?</p>
              <Button variant="link" className="text-blue-600 font-black text-lg p-0 hover:no-underline hover:text-blue-700">
                Clique aqui caso tenha mais dúvidas <ChevronDown className="ml-1 w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="#"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl flex items-center justify-center group"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl font-bold text-sm shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100">
          Precisa de ajuda?
        </span>
      </motion.a>
    </div>
  );
}
