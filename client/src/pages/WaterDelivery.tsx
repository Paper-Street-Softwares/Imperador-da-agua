import { motion } from "framer-motion";
import { 
  Droplets, 
  Truck, 
  Clock, 
  ShieldCheck, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook,
  ChevronRight,
  ShoppingCart,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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

export default function WaterDelivery() {
  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-200">
              <Droplets className="w-6 h-6" />
            </div>
            <span className="font-bold text-xl tracking-tight text-blue-900 font-heading uppercase">Pureza Express</span>
          </div>
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#produtos" className="hover:text-blue-600 transition-colors">Produtos</a>
            <a href="#vantagens" className="hover:text-blue-600 transition-colors">Vantagens</a>
            <a href="#contato" className="hover:text-blue-600 transition-colors">Contato</a>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6 shadow-md">
            Pedir Agora
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 overflow-hidden bg-gradient-to-b from-blue-50/50 to-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <Badge className="bg-blue-100 text-blue-700 border-none px-4 py-1 text-sm rounded-full">
              Entrega em até 30 minutos ⚡
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold font-heading text-blue-950 leading-tight">
              Água mineral <br />
              <span className="text-blue-600 italic">fresca e pura</span> <br />
              na sua porta.
            </h1>
            <p className="text-xl text-slate-600 max-w-lg leading-relaxed">
              O serviço de entrega de água mais rápido e confiável da região. Peça agora pelo WhatsApp e receba em minutos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="h-16 px-10 text-lg rounded-full bg-blue-600 shadow-xl shadow-blue-200">
                Pedir pelo WhatsApp
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-10 text-lg rounded-full border-2 border-blue-600 text-blue-600">
                Ver Produtos
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-200 overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <div className="flex text-yellow-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <p className="font-semibold text-slate-900">+500 clientes satisfeitos</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-blue-200/50 rounded-full blur-3xl -z-10" />
            <img 
              src="https://images.unsplash.com/photo-1616118132261-3bc826950229?q=80&w=800&auto=format&fit=crop" 
              alt="Water Delivery" 
              className="rounded-3xl shadow-2xl border-8 border-white"
            />
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-green-100 text-green-600 rounded-full">
                  <Truck className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-sm text-slate-500 font-medium uppercase tracking-wider">Motorista à caminho</p>
                  <p className="font-bold text-slate-900">Chegada em 8 min</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="vantagens" className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl font-bold font-heading text-blue-950">Por que escolher a Pureza Express?</h2>
            <p className="text-lg text-slate-600">Combinamos tecnologia com logística eficiente para garantir que você nunca fique sem água.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Clock, title: "Rapidez Recorde", desc: "Logística inteligente para entregas em tempo recorde na sua porta." },
              { icon: ShieldCheck, title: "Qualidade Garantida", desc: "Água mineral testada e aprovada pelos órgãos de saúde competentes." },
              { icon: Droplets, title: "Preço Justo", desc: "Os melhores valores da região com programa de fidelidade exclusivo." }
            ].map((feature, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-xl transition-all duration-300 p-8 rounded-3xl bg-white group">
                <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-blue-950 font-heading">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section id="produtos" className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-16">
            <div className="space-y-4">
              <Badge variant="outline" className="border-blue-600 text-blue-600 rounded-full">Nossos Produtos</Badge>
              <h2 className="text-4xl font-bold font-heading text-blue-950">Selecione seu pedido</h2>
            </div>
            <Button variant="ghost" className="text-blue-600 font-bold hover:bg-blue-50 rounded-full">
              Ver catálogo completo <ChevronRight className="ml-2 w-4 h-4" />
            </Button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div 
                key={product.id}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="bg-slate-100 rounded-[2.5rem] overflow-hidden mb-6 aspect-square relative">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 right-4">
                    <Button size="icon" className="rounded-full bg-white/90 backdrop-blur text-blue-600 hover:bg-blue-600 hover:text-white shadow-lg transition-all">
                      <ShoppingCart className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
                <div className="space-y-2 px-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-blue-950 font-heading">{product.name}</h3>
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                  </div>
                  <p className="text-slate-500">{product.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 container mx-auto px-4">
        <div className="bg-blue-600 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
          
          <div className="relative z-10 max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold font-heading leading-tight">Sua água acabou? <br /> Resolvemos agora.</h2>
            <p className="text-xl text-blue-100">Clique no botão abaixo e seja atendido imediatamente por nossa equipe de logística.</p>
            <Button size="lg" className="h-16 px-12 text-lg rounded-full bg-white text-blue-600 hover:bg-blue-50 font-bold shadow-xl">
              Fazer Pedido via WhatsApp
            </Button>
            <div className="flex items-center justify-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="font-medium">(11) 99999-9999</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="font-medium">Atendemos toda a cidade</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-slate-100">
        <div className="container mx-auto px-4 grid md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
                <Droplets className="w-5 h-5" />
              </div>
              <span className="font-bold text-xl tracking-tight text-blue-900 font-heading">Pureza Express</span>
            </div>
            <p className="text-slate-500 max-w-sm leading-relaxed">
              Levar saúde e hidratação para sua casa com agilidade e qualidade é o nosso compromisso diário.
            </p>
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="rounded-full border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-600">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="rounded-full border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-600">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-bold text-blue-950 font-heading">Links Rápidos</h4>
            <ul className="space-y-4 text-slate-500">
              <li><a href="#" className="hover:text-blue-600">Início</a></li>
              <li><a href="#" className="hover:text-blue-600">Produtos</a></li>
              <li><a href="#" className="hover:text-blue-600">Vantagens</a></li>
              <li><a href="#" className="hover:text-blue-600">Política de Entrega</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold text-blue-950 font-heading">Atendimento</h4>
            <ul className="space-y-4 text-slate-500">
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Seg - Sáb: 08h às 20h</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Dom: 08h às 14h</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-4 pt-16 mt-16 border-t border-slate-50 text-center text-slate-400 text-sm">
          <p>© 2025 Pureza Express. Todos os direitos reservados. Design por Studio.</p>
        </div>
      </footer>
    </div>
  );
}
