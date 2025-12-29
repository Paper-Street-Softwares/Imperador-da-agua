import { motion } from 'framer-motion'
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
  Phone,
  X,
  Menu,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import imgHero from '../../../attached_assets/Hero/imageHero.webp'
import ButtonReflexo from '../../../client/src/components/ui/ButtonReflexo.jsx'
import Logo from '../../../attached_assets/logo/imgLogo.webp'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const products = [
  {
    id: 1,
    name: 'Galão 20L (Retornável)',
    price: 'R$ 15,00',
    description: 'Água mineral puríssima em galão de 20 litros.',
    image:
      'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=300&h=300&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Galão 10L (Retornável)',
    price: 'R$ 10,00',
    description: 'Ideal para famílias menores ou consumo moderado.',
    image:
      'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=300&h=300&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Pack 12 Garrafas 500ml',
    price: 'R$ 18,00',
    description: 'Perfeito para levar na bolsa ou para eventos.',
    image:
      'https://images.unsplash.com/photo-1523362628242-f5133cdf5470?q=80&w=300&h=300&auto=format&fit=crop',
  },
]

const plans = [
  {
    title: 'Plano Essencial',
    icon: '🥉',
    gallons: '3 galões/mês',
    desc: 'Ideal para consumo básico',
    price: 'R$ 36,00',
    daily: 'R$ 1,20 por dia',
    note: 'Ideal pra quem consome pouco ou mora sozinho.',
    color: 'bg-orange-50',
    textColor: 'text-orange-700',
    borderColor: 'border-orange-100',
  },
  {
    title: 'Plano Família',
    icon: '🥇',
    tag: 'Mais vendido',
    gallons: '6 galões/mês',
    desc: 'Perfeito para famílias',
    extra: 'Nunca fica sem água',
    price: 'R$ 63,00',
    daily: 'R$ 2,10 por dia',
    note: 'O plano preferido de quem não quer se preocupar',
    color: 'bg-[#30BEFF]',
    textColor: 'text-white',
    borderColor: 'border-blue-400',
    isFeatured: true,
  },
  {
    title: 'Plano Empresa',
    icon: '🏢',
    gallons: '10 galões/mês',
    desc: 'Ideal para comércios e escritórios',
    extra: 'Abastecimento garantido',
    price: 'R$ 96,00',
    daily: 'R$ 3,20 por dia',
    note: 'Max economia + previsibilidade.',
    color: 'bg-slate-900',
    textColor: 'text-white',
    borderColor: 'border-slate-700',
  },
]

const faqs = [
  {
    q: 'Posso mudar de plano depois?',
    a: 'Sim! Você pode ajustar seu plano conforme seu consumo.',
  },
  {
    q: 'Posso pausar a assinatura?',
    a: 'Pode sim. É só avisar pelo WhatsApp.',
  },
  {
    q: 'E se eu não consumir toda a água do mês?',
    a: 'Sem problema. Ajustamos a próxima entrega.',
  },
  {
    q: 'Tem fidelidade ou multa?',
    a: 'Não. Aqui você fica porque é bom, não por obrigação.',
  },
]

const ctaWhatsApp =
  'https://wa.me/+55991512007?text= Olá! Vim através do site de vocês e gostaria de tirar umas dúvidas.'

export default function WaterDelivery() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [active, setActive] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const labels = ['Início', 'Benefícios', 'Planos', 'Dúvidas']
  const ids = ['home', 'services', 'planos', 'faq']

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 selection:bg-[#30BEFF]/20">
      {/* Navbar */}
      <nav
        className={`fixed top-0 z-50 w-full ${
          isScrolled
            ? 'bg-[#161A4A] text-white py-1 shadow-sm border-b-[1px] border-white h-auto transition-all duration-700'
            : 'bg-transparent border-border/40 py-3 phone2:h-auto text-white transition-all duration-700'
        }`}
      >
        <div className=" h-20 flex items-center justify-between max-w-[1215px] w-[90%] mx-auto">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-white">
              <img src={Logo} alt="Logomarca" className="w-[40%]" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white font-heading uppercase">
              Imperador da Água
            </span>
          </div>{' '}
          <div className="hidden md:flex items-center gap-8 font-medium">
            {labels.map((item, index) => (
              <Link
                to={ids[index]}
                aria-label={`Link para ${item}`}
                smooth={true}
                duration={500}
                offset={-90}
                spy={true}
                hashSpy={true}
                tag="a"
                href={`#${ids[index]}`}
                className="cursor-pointer bg-gradient-to-r from-primary to-primary bg-[length:0%_2px] bg-no-repeat bg-left-bottom transition-[background-size] duration-300 hover:bg-[length:100%_2px]"
              >
                {item}
              </Link>
            ))}
          </div>
          <ButtonReflexo
            link={ctaWhatsApp}
            label="Contato"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={18}
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
              </svg>
            }
            className="bg-[#30BEFF] hidden lg:flex font-black text-lg rounded-2xl shadow-xl shadow-[#30BEFF]/20 group transition-all duration-700 "
          />
          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 z-50 relative text-foreground "
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X
                aria-label="Botão de fechar a Sidebar"
                className="text-primary"
              />
            ) : (
              <Menu
                aria-label="botão Meu da Sidebar"
                width={30}
                height={30}
                className="text-white"
              />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed inset-0 pt-24 px-6 lg:hidden z-40 w-full">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed inset-0 pt-24 px-6 lg:hidden z-40 w-full"
            >
              <div className="flex flex-col gap-6 bg-[#161A4A] max-w-[500px] text-center items-center text-lg mx-auto font-secondFont font-medium border-l border-r border-b border-primary/20 rounded-md">
                {labels.map((item, index) => (
                  <Link
                    to={ids[index]}
                    aria-label={`Link para ${item}`}
                    smooth={true}
                    duration={500}
                    offset={-90}
                    spy={true}
                    hashSpy={true}
                    tag="a"
                    href={`#${ids[index]}`}
                    className={`cursor-pointer transition-all w-full ${
                      active === index ? 'text-[#161A4A]' : 'text-white'
                    }`}
                  >
                    {item}
                  </Link>
                ))}
                <ButtonReflexo
                  link={ctaWhatsApp}
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                    </svg>
                  }
                  label="Contato"
                  colorMode="dark"
                  className="w-fit border-[1px]"
                />
              </div>
            </motion.div>
            <div className="absolute z-0 inset-0 bg-white/70 h-screen"></div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-auto flex items-center overflow-hidden bg-[#161A4A] pt-20"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none">
          {' '}
        </div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#30BEFF] rounded-full blur-[120px] opacity-20" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-[#30BEFF] rounded-full blur-[120px] opacity-20" />
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#30BEFF] rounded-full blur-[120px] opacity-20" />
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#30BEFF] rounded-full blur-[120px] opacity-20" />

        <div className="container mx-auto max-w-[1215px] justify-between w-[90%] relative z-10 grid lg:grid-cols-2 gap-12 items-center py-12 lg:py-36">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Badge className="text-white border-none px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full">
                ÁGUA MINERAL POR ASSINATURA
              </Badge>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-8xl w-[90%] font-black text-white leading-[0.9] tracking-tighter"
            >
              Nunca mais fique sem{' '}
              <i>
                <span className="text-[#30BEFF]">água</span>
              </i>{' '}
              em casa!
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl w-full text-slate-300 font-medium leading-relaxed"
            >
              Receba seus galões todo mês, sem taxa de entrega e sem dor de
              cabeça.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <ButtonReflexo
                link={ctaWhatsApp}
                label="ASSINAR AGORA"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                  </svg>
                }
                className="bg-[#30BEFF] font-black text-lg rounded-2xl shadow-xl shadow-[#30BEFF]/20 group duration-700 transition-all"
              />

              {/* <ButtonReflexo
                link={ctaWhatsApp}
                label="Pedir agora pelo WhatsApp"
                colorMode="dark"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                  </svg>
                }
                className="bg-[#161A4A] font-black text-lg rounded-2xl shadow-xl shadow-[#30BEFF]/20 group transition-all duration-700 border border-white/50"
              /> */}
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 pt-8 border-t border-white/10"
            >
              <div className="flex flex-col sm:flex-row space-y-4 mx-auto m- justify-between">
                <p className="text-white font-bold flex items-center gap-2 sm:text-sm">
                  <Check className="w-5 h-5 text-[#30BEFF]" /> Simples, rápido e
                  do seu jeito.
                </p>
                <p className="text-slate-400 text-sm flex flex-col items-center gap-4">
                  <span>💳 Pix • Dinheiro • Cartão</span>
                  <span className="flex items-center gap-1 text-[#30BEFF]">
                    🚚 <strong>Entrega GRÁTIS</strong>
                  </span>
                </p>
              </div>
            </motion.div>
          </div>

          <div className="w-[90%] flex m-auto lg:ml-auto ">
            <img src={imgHero} alt="Imagem ilustrativa de água" />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="services" className="py-24 bg-slate-50">
        <div className="container mx-auto  max-w-[1215px] w-[90%]">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Rapidez Recorde',
                desc: 'Logística inteligente para entregas em tempo recorde na sua porta.',
              },
              {
                icon: ShieldCheck,
                title: 'Qualidade Garantida',
                desc: 'Água mineral testada e aprovada pelos órgãos de saúde competentes.',
              },
              {
                icon: Droplets,
                title: 'Preço Justo',
                desc: 'Os melhores valores da região com programa de fidelidade exclusivo.',
              },
            ].map((feature, i) => (
              <Card
                key={i}
                className="border-none shadow-sm hover:shadow-xl transition-all duration-300 p-8 rounded-3xl bg-white group"
              >
                <div className="p-4 bg-blue-50 text-blue-600 rounded-2xl w-fit mb-6 group-hover:bg-[#30BEFF] group-hover:text-white transition-colors">
                  <feature.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-[#161A4A] font-heading">
                  {feature.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="planos" className="py-24 bg-white relative">
        <div className="container mx-auto  max-w-[1215px] w-[90%]">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-[#161A4A] tracking-tighter">
              Planos de Assinatura
            </h2>
            <p className="text-slate-500 text-lg">
              A hidratação da sua família com economia e conveniência total.
            </p>
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
                <Card
                  className={`relative flex flex-col w-full rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-2xl overflow-hidden border-2 ${
                    plan.isFeatured
                      ? 'bg-[#161A4A] border-[#30BEFF] scale-105 z-10 shadow-2xl'
                      : 'bg-white border-slate-100 shadow-sm'
                  }`}
                >
                  {plan.tag && (
                    <div className="absolute top-6 right-6">
                      <Badge className="bg-yellow-400 text-[#161A4A] font-black uppercase tracking-wider border-none px-3 py-1">
                        ⭐ {plan.tag}
                      </Badge>
                    </div>
                  )}

                  <div className="mb-8">
                    <span className="text-4xl mb-4 block">{plan.icon}</span>
                    <h3
                      className={`text-2xl font-black ${
                        plan.isFeatured ? 'text-white' : 'text-[#161A4A]'
                      }`}
                    >
                      {plan.title}
                    </h3>
                  </div>

                  <div className="space-y-4 mb-10 flex-grow">
                    {[plan.gallons, plan.desc, plan.extra]
                      .filter(Boolean)
                      .map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <Check
                            className={`w-5 h-5 shrink-0 ${
                              plan.isFeatured
                                ? 'text-[#30BEFF]'
                                : 'text-blue-600'
                            }`}
                          />
                          <span
                            className={`font-bold ${
                              plan.isFeatured
                                ? 'text-blue-100'
                                : 'text-slate-700'
                            }`}
                          >
                            {item}
                          </span>
                        </div>
                      ))}
                  </div>

                  <div
                    className={`mb-8 p-6 rounded-3xl ${
                      plan.isFeatured
                        ? 'bg-white/10 border border-white/20'
                        : 'bg-slate-50 border border-slate-100'
                    }`}
                  >
                    <p
                      className={`text-[10px] font-black uppercase tracking-[0.2em] mb-1 ${
                        plan.isFeatured ? 'text-[#30BEFF]' : 'text-slate-400'
                      }`}
                    >
                      Assinatura Mensal
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-4xl font-black ${
                          plan.isFeatured ? 'text-white' : 'text-[#161A4A]'
                        }`}
                      >
                        {plan.price}
                      </span>
                      <span
                        className={`text-sm ${
                          plan.isFeatured ? 'text-blue-200' : 'text-slate-500'
                        }`}
                      >
                        /mês
                      </span>
                    </div>
                    <p
                      className={`text-sm mt-2 font-bold ${
                        plan.isFeatured ? 'text-[#30BEFF]' : 'text-blue-600'
                      }`}
                    >
                      💸 Apenas {plan.daily}
                    </p>
                  </div>

                  <p
                    className={`text-sm font-medium mb-8 leading-relaxed ${
                      plan.isFeatured ? 'text-blue-100' : 'text-slate-500'
                    }`}
                  >
                    {plan.note}
                  </p>

                  <ButtonReflexo
                    link={ctaWhatsApp}
                    label="Contato"
                    icon={
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={18}
                        height={18}
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                      </svg>
                    }
                    className={`bg-[#30BEFF]  font-black text-lg rounded-2xl shadow-xl shadow-[#30BEFF]/20 group transition-all ${
                      plan.isFeatured
                        ? 'bg-[#30BEFF]  shadow-lg shadow-[#30BEFF]/30 transition-all duration-700'
                        : 'bg-[#161A4A] text-white transition-all duration-700'
                    } `}
                  />
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto  max-w-[1215px] w-[90%]">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-[#161A4A] tracking-tighter">
              Dúvidas Frequentes
            </h2>
            <p className="text-slate-500 text-lg">
              Tudo o que você precisa saber sobre nosso serviço.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 md:p-12 shadow-sm border border-slate-100">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="border-b border-slate-100 py-4 last:border-0 cursor-pointer"
                >
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
        <div className="container m-auto max-w-[1215px] w-[90%]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-2 space-y-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-[#30BEFF] rounded-full flex items-center justify-center">
                  <Droplets className="w-6 h-6" />
                </div>
                <span className="font-black text-2xl uppercase tracking-tighter">
                  Pureza Express
                </span>
              </div>
              <p className="text-slate-400 max-w-sm text-lg font-medium leading-relaxed">
                A melhor água da cidade, entregue com a agilidade que sua
                família merece.
              </p>
              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-2xl border-white/10 bg-white/5 hover:bg-[#30BEFF] hover:border-[#30BEFF] transition-all"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="rounded-2xl border-white/10 bg-white/5 hover:bg-[#30BEFF] hover:border-[#30BEFF] transition-all"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
              </div>
            </div>

            <div className="space-y-6 min-w-[150px] w-full">
              <h4 className="font-black text-xl tracking-tight">Atendimento</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li className="flex items-center gap-3 text-sm">
                  <span>
                    {' '}
                    <Clock className="w-5 h-5 text-[#30BEFF]" />
                  </span>
                  <span>Seg - Sáb: 08h às 20h</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span>
                    {' '}
                    <Phone className="w-5 h-5 text-[#30BEFF]" />
                  </span>
                  <span>(11) 99999-9999</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span>
                    {' '}
                    <MapPin className="w-5 h-5 text-[#30BEFF]" />
                  </span>
                  <span>Atendemos toda a região</span>
                </li>
              </ul>
            </div>

            <div className="space-y-6 text-center md:text-left">
              <h4 className="font-black text-xl tracking-tight">
                Precisa de água?
              </h4>
              <ButtonReflexo
                link={ctaWhatsApp}
                label="Contato"
                icon={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={18}
                    height={18}
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.197.297-.768.966-.94 1.164-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.007-.372-.009-.571-.009-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.226 1.36.194 1.872.118.571-.085 1.758-.718 2.006-1.412.248-.694.248-1.288.173-1.412-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.896a9.825 9.825 0 012.893 6.994c-.002 5.45-4.436 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.158 11.892c0 2.096.547 4.142 1.588 5.94L0 24l6.305-1.654a11.882 11.882 0 005.732 1.463h.005c6.554 0 11.89-5.335 11.892-11.892a11.821 11.821 0 00-3.466-8.413" />
                  </svg>
                }
                className="bg-[#30BEFF] font-black text-lg rounded-2xl shadow-xl shadow-[#30BEFF]/20 group transition-all duration-700"
              />
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-sm font-bold">
            © 2025 Pureza Express. Imperador da Água. Todos os direitos
            reservados.
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
  )
}
