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
  IdCardIcon,
  CreditCard,
  Car,
  Zap,
  MessageCircleHeart,
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
import WhatsappAnimated from '../../../client/src/components/ui/WhatsAppAnimated.jsx'
import imgCta from '../../../attached_assets/Cta/imgCta.webp'

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

const waterPlans = {
  3: {
    title: 'Plano 3 Águas',
    price: 'R$ 36/mês',
    unit: 'R$ 12,00 por unidade',
    daily: 'R$ 1,20 por dia',
    note: 'Ideal pra quem consome pouco ou mora sozinho.',
  },
  4: {
    title: 'Plano 4 Águas',
    price: 'R$ 44/mês',
    unit: 'R$ 11,00 por unidade',
    daily: 'R$ 1,46 por dia',
    note: 'Plano perfeito para quem quer segurança, reserva e economia.',
  },
  5: {
    title: 'Plano 5 Águas',
    price: 'R$ 54/mês',
    unit: 'R$ 10,80 por unidade',
    daily: 'R$ 1,80 por dia',
    note: 'Excelente para casas pequenas e famílias que consomem mais.',
  },
  6: {
    title: 'Plano 6 Águas',
    price: 'R$ 63/mês',
    unit: 'R$ 10,50 por unidade',
    daily: 'R$ 2,10 por dia',
    note: 'Custo-benefício forte para quem usa bastante água.',
  },
  7: {
    title: 'Plano 7 Águas',
    price: 'R$ 72/mês',
    unit: 'R$ 10,28 por unidade',
    daily: 'R$ 2,40 por dia',
    note: 'Ideal para famílias grandes ou uso intenso.',
  },
  8: {
    title: 'Plano 8 Águas',
    price: 'R$ 80/mês',
    unit: 'R$ 10,00 por unidade',
    daily: 'R$ 2,66 por dia',
    note: 'Plano premium com preço psicológico perfeito.',
  },
  9: {
    title: 'Plano 9 Águas',
    price: 'R$ 88/mês',
    unit: 'R$ 9,77 por unidade',
    daily: 'R$ 2,93 por dia',
    note: 'Bom para estabelecimentos ou famílias com consumo alto.',
  },
  10: {
    title: 'Plano 10 Águas',
    price: 'R$ 96/mês',
    unit: 'R$ 9,60 por unidade',
    daily: 'R$ 3,20 por dia',
    note: 'Máxima economia + previsibilidade.',
  },
}

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
  'https://wa.me/+5571991512007?text= Olá! Vim através do site e tenho interesse na assinatura de água mineral. Pode me explicar?'

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

  const currentYear = new Date().getFullYear()

  const [gallons, setGallons] = useState(6)
  const plan = waterPlans[gallons]

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
              <div className="flex flex-col gap-6 bg-[#161A4A] max-w-[500px] py-6 text-center items-center text-lg mx-auto font-secondFont font-medium border-l border-r border-b border-primary/20 rounded-md">
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
              className="text-4xl md:text-8xl lg:text-6xl w-[90%] font-black text-white leading-[0.9] tracking-tighter"
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
                label="Assinar agora"
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
              <div className="flex flex-col gap-3 mx-auto justify-between items-center sm:items-start w-full">
                <p className="text-white font-bold flex items-center gap-2 sm:text-sm">
                  <Check className="w-5 h-5 text-[#30BEFF]" /> Simples, rápido e
                  do seu jeito.
                </p>

                <p className="text-slate-400 text-sm flex flex-col ">
                  <span className="inline-flex items-center gap-2">
                    <span>
                      <CreditCard className="w-5 h-5 text-[#30BEFF]" />
                    </span>{' '}
                    Pix • Dinheiro • Cartão
                  </span>
                </p>
                <span className="flex items-center gap-2 text-[#30BEFF]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-van-icon lucide-van"
                  >
                    <path d="M13 6v5a1 1 0 0 0 1 1h6.102a1 1 0 0 1 .712.298l.898.91a1 1 0 0 1 .288.702V17a1 1 0 0 1-1 1h-3" />
                    <path d="M5 18H3a1 1 0 0 1-1-1V8a2 2 0 0 1 2-2h12c1.1 0 2.1.8 2.4 1.8l1.176 4.2" />
                    <path d="M9 18h5" />
                    <circle cx="16" cy="18" r="2" />
                    <circle cx="7" cy="18" r="2" />
                  </svg>{' '}
                  <strong>Entrega GRÁTIS</strong>
                </span>
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
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-[#161A4A] tracking-tighter">
            É simples assim
          </h2>
          {/* <p className="text-slate-500 text-lg">
            A hidratação da sua família com economia e conveniência total.
          </p> */}
        </div>
        <div className="container mx-auto  max-w-[1215px] w-[90%]">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Clock,
                title: 'Escolha o plano ideal',
                desc: 'Para o consumo real da sua casa ou empresa.',
              },
              {
                icon: ShieldCheck,
                title: 'Assine online em minutos',
                desc: 'Tudo rápido, direto pelo WhatsApp.',
              },
              {
                icon: Droplets,
                title: 'Receba em casa, no dia certo',
                desc: 'Entrega programada, sem taxa e sem preocupação.',
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
          <ButtonReflexo
            link={ctaWhatsApp}
            label="Assinar agora"
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
            className="bg-[#30BEFF] w-fit mx-auto mt-8 font-black text-lg rounded-2xl shadow-xl shadow-[#30BEFF]/20 group duration-700 transition-all"
          />
        </div>
      </section>
      {/* Why Subscribe Section */}
      <section className="pb-24 bg-slate-50">
        <div className="container mx-auto max-w-[1215px] w-[90%]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl border-8 border-slate-50">
                <img
                  src={imgCta}
                  alt="Estoque Imperador da Água"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-3 bg-[#30BEFF] text-white p-8 rounded-[2rem] shadow-xl">
                <p className="text-4xl font-black italic">100%</p>
                <p className="text-xs font-bold uppercase tracking-widest">
                  Disponibilidade
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-10"
            >
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-black text-[#161A4A] tracking-tighter leading-tight">
                  Por que assinar com o{' '}
                  <span className="text-[#30BEFF]">Imperador da Água?</span>
                </h2>
              </div>

              <div className="space-y-8">
                {[
                  {
                    title: 'Entrega programada',
                    desc: 'Chega antes da água acabar.',
                    icon: Clock,
                  },
                  {
                    title: 'Reserva garantida',
                    desc: 'Mesmo em alta demanda, sua água está garantida.',
                    icon: ShieldCheck,
                  },
                  {
                    title: 'Preço travado',
                    desc: 'Nada de sustos com aumento inesperado.',
                    icon: Zap,
                  },
                  {
                    title: 'Zero preocupação',
                    desc: 'Nunca mais fique sem água em casa ou no trabalho.',
                    icon: Droplets,
                  },
                  {
                    title: 'Entrega grátis',
                    desc: 'Você não paga nada a mais por isso.',
                    icon: Truck,
                  },
                ].map((item, i) => (
                  <div key={i} className="flex gap-5 group sm:items-center">
                    <div className="flex-shrink-0 w-12 h-12 bg-blue-50 text-[#30BEFF] rounded-2xl flex items-center justify-center group-hover:bg-[#30BEFF] group-hover:text-white transition-all duration-300">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-xl font-black text-[#161A4A] flex items-center gap-2">
                        <Check className="w-5 h-5 text-[#30BEFF]" />{' '}
                        {item.title}
                      </h4>
                      <p className="text-slate-500 font-medium">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* <div className="flex justify-center sm:justify-start mt-8 ">
                <ButtonReflexo
                  link={ctaWhatsApp}
                  label="Assinar agora"
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
                  className="bg-[#30BEFF] w-fit font-black text-lg rounded-2xl shadow-xl shadow-[#30BEFF]/20 group duration-700 transition-all"
                />
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      {/* <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4">
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
      </section> */}

      {/* Pricing Section */}
      <section id="planos" className="py-24 bg-white relative">
        <div className="container mx-auto  max-w-[1215px] w-[90%]">
          <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-[#161A4A] tracking-tighter">
              Planos Mensais de Assinatura{' '}
            </h2>
            <p className="text-slate-500 text-lg">
              A hidratação da sua família com economia e conveniência total.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-18 md:gap-8 items-stretch">
            <Card className="relative flex flex-col w-full md:w-[45%] rounded-[2.5rem] p-10 transition-all duration-500 hover:shadow-2xl overflow-hidden border-2 bg-[#161A4A] border-[#30BEFF] scale-105 z-10 shadow-2xl">
              {/* Badge */}
              <div className="absolute top-10 right-10">
                <Badge className="bg-yellow-400 text-[#161A4A] font-black uppercase tracking-wider border-none px-3 py-1">
                  ⭐ Mais vendido
                </Badge>
              </div>

              {/* Header */}
              <div className="mb-8">
                <span className="text-4xl mb-4 block">🥇</span>
                <h3 className="text-2xl font-black text-white">
                  Escolha seu plano
                </h3>
              </div>

              {/* Benefícios */}
              <div className="space-y-4 mb-10 flex-grow">
                {[
                  'Garrafões em comodato',
                  'Reservas cheias no local',
                  'Preço travado',
                  'Entrega programada',
                  'Atendimento preferencial',
                  'Pagamento via Pix',
                  'Sem taxa de instalação',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <Check className="w-5 h-5 shrink-0 text-[#30BEFF]" />
                    <span className="font-bold text-blue-100">{item}</span>
                  </div>
                ))}
              </div>

              {/* Selector */}
              <p className="font-black text-[#30BEFF] mb-3">
                Quantas águas você quer?
              </p>

              <div className="grid grid-cols-4 gap-3 mb-8">
                {Object.keys(waterPlans).map((q) => (
                  <button
                    key={q}
                    onClick={() => setGallons(Number(q))}
                    className={`rounded-xl py-2 font-black transition-all cursor-pointer
          ${
            gallons === Number(q)
              ? 'bg-[#30BEFF] text-[#161A4A]'
              : 'bg-white/10 text-white hover:bg-white/20'
          }`}
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* Preço — mesmo bloco do original */}
              <div className="mb-8 p-6 rounded-3xl bg-white/10 border border-white/20">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1 text-[#30BEFF]">
                  Assinatura Mensal
                </p>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-4xl lg:text-2xl 2xl:text-4xl font-black text-white">
                    {plan.price}
                  </span>
                  <span className="text-sm text-blue-200">/mês</span>
                </div>
                <p className="text-sm mt-2 font-bold text-[#30BEFF]">
                  💸 Apenas {plan.daily}
                </p>
              </div>

              {/* Nota */}
              <p className="text-sm font-medium mb-8 leading-relaxed text-blue-100">
                {plan.note}
              </p>

              {/* CTA */}
              <ButtonReflexo
                link={`https://wa.me/5571991512007?text=Olá! Vim através do site e tenho interesse no ${plan.title} com ${gallons} galões/mês. Pode me ajudar?`}
                label={`Assinar ${plan.title}`}
                className="bg-[#30BEFF] font-black text-lg rounded-2xl shadow-xl shadow-[#30BEFF]/20"
              />
            </Card>
            <Card className="flex flex-col p-10 rounded-[2.5rem] md:w-[45%] h-fit bg-white border-2 border-slate-100">
              <h3 className="text-3xl font-black text-[#161A4A] mb-4">
                Plano Personalizado
              </h3>

              <p className="text-slate-600 font-bold mb-6">
                Feito sob medida pra você.
                <br />
                Ideal para comércios e escritórios.
              </p>

              <ul className="space-y-2 text-slate-600 font-medium mb-10">
                <li>✔ Valor adequado ao consumo</li>
                <li>✔ Máxima economia</li>
                <li>✔ Previsibilidade mensal</li>
              </ul>

              <ButtonReflexo
                link="https://wa.me/5571991512007?text=Olá! Vim através do site e tenho interesse em montar meu plano personalizado. Pode me ajudar?"
                label="Montar Plano Personalizado"
                className="bg-[#161A4A] text-white font-black rounded-2xl"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-[#F8FAFC]">
        <div className="container mx-auto  max-w-[1215px] w-[90%] cursor-pointer">
          <div className="text-center mb-16 space-y-4">
            <Badge className="text-white border-none px-4 py-1.5 text-xs font-bold tracking-widest uppercase rounded-full">
              TIRE SUAS DÚVIDAS
            </Badge>
            <h2 className="text-4xl md:text-6xl font-black text-[#161A4A] tracking-tighter">
              Perguntas Frequentes
            </h2>
            <p className="text-slate-500 text-lg">
              Confira as perguntas abaixo para esclarecer suas dúvidas.
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
                  <AccordionTrigger className="text-xl font-bold text-[#161A4A] hover:no-underline hover:text-[#30BEFF] transition-colors text-left cursor-pointer">
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
        <div className="m-auto max-w-[1215px] w-[90%]">
          <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-0 mb-16 ">
            <div className="flex flex-col items-start gap-2 ">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full flex items-center justify-center bg-white text-white">
                  <img src={Logo} alt="Logomarca" className="w-[40%]" />
                </div>
                <span className="font-bold text-xl tracking-tight text-white font-heading uppercase">
                  Imperador da Água
                </span>
              </div>
              <p className="text-slate-400 max-w-sm text-lg font-medium leading-relaxed">
                Assinatura mensal de água com entrega garantida
              </p>
            </div>{' '}
            <div className="space-y-6 text-start  ">
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
                className="bg-[#30BEFF] px-[18px] w-fit font-black text-lg rounded-2xl shadow-xl shadow-[#30BEFF]/20 group transition-all duration-700"
              />
            </div>
            <div className="space-y-6 ">
              <h4 className="font-black text-xl tracking-tight">Atendimento</h4>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li className="flex items-center gap-3 text-sm">
                  <span>
                    {' '}
                    <Clock className="w-5 h-5 text-[#30BEFF]" />
                  </span>
                  <span>Atendimento online</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span>
                    {' '}
                    <Phone className="w-5 h-5 text-[#30BEFF]" />
                  </span>
                  <span>(71) 99151-2007</span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <span>
                    {' '}
                    <MapPin className="w-5 h-5 text-[#30BEFF]" />
                  </span>
                  <span>Salvador - BA</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 text-center text-slate-500 text-sm font-bold">
            <div className="text-center w-full phone2:w-[90%] mx-auto max-w-[1110px] flex flex-col">
              <p className="w-full opacity-75">
                {`© ${currentYear} - Imperador da Água - Todos os direitos reservados`}
              </p>
              <p>
                <a
                  className="transition hover:underline"
                  target="_blank"
                  href="https://www.paperstreet.com.br"
                >
                  Desenvolvido por Paper Street
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp */}
      {/* <motion.a
        href="#"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-2xl shadow-green-500/20 group"
      >
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl font-bold text-sm shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100">
          Pedir Água Agora!
        </span>
      </motion.a> */}
      <WhatsappAnimated />
    </div>
  )
}
