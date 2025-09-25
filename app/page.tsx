"use client";

import CNPJConsulta from "../components/CNPJConsulta";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Calendar,
  Clock,
  Users,
  FileText,
  Heart,
  Phone,
  Mail,
  MapPin,
  Star,
  ArrowRight,
  CheckCircle,
  BookOpen,
  Activity,
  Shield,
  Sparkles,
  Menu,
  X,
  Plus,
  Search,
  Bell,
  Settings,
  BarChart3,
  Video,
  MessageCircle,
  Brain,
} from "lucide-react";
import Link from "next/link";

export default function LaraMovioTherapyApp() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollY, setScrollY] = useState(0);
  const [clickedButton, setClickedButton] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Instant navigation - no animation delay
  const scrollToSection = (sectionId: string) => {
    // Immediate visual feedback
    setClickedButton(sectionId)
    setActiveSection(sectionId)
    
    // Reset clicked state immediately
    setTimeout(() => setClickedButton(null), 100)
    
    const element = document.getElementById(sectionId)
    if (!element) return

    // Instant scroll - no animation with better offset for section boundaries
    const offsetTop = element.offsetTop - 100 // Account for fixed header + extra space
    window.scrollTo(0, offsetTop)
  }

  // Intersection Observer for section highlighting and animations
  useEffect(() => {
    const sections = ['home', 'services', 'about', 'contact']
    const observers = sections.map(sectionId => {
      const element = document.getElementById(sectionId)
      if (!element) return null

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(sectionId)
          }
        },
        {
          threshold: 0.2,
          rootMargin: '-100px 0px -60% 0px'
        }
      )

      observer.observe(element)
      return observer
    })

    // Scroll reveal animations
    const revealElements = document.querySelectorAll('.animate-scroll-reveal, .animate-scroll-reveal-delayed')
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    revealElements.forEach(el => revealObserver.observe(el))

    return () => {
      observers.forEach(observer => observer?.disconnect())
      revealObserver.disconnect()
    }
  }, [])

  const features = [
    {
      icon: Calendar,
      title: "Agendamento Inteligente",
      description:
        "Sistema avançado de marcação de atendimentos com lembretes automáticos",
    },
    {
      icon: FileText,
      title: "Prontuário Digital",
      description: "Registro completo e seguro do histórico de cada paciente",
    },
    {
      icon: Brain,
      title: "Acompanhamento Personalizado",
      description: "Terapia individualizada para cada necessidade específica",
    },
    {
      icon: Shield,
      title: "Confidencialidade Total",
      description: "Proteção máxima de dados pessoais e médicos",
    },
  ];

  const services = [
    {
      title: "Terapia Individual",
      description:
        "Sessões personalizadas focadas em suas necessidades específicas",
      duration: "50 min",
      price: "R$ -",
      image: "/terapia_individual.svg",
    },
    {
      title: "Terapia de Casal",
      description:
        "Fortalecimento de relacionamentos através de diálogo e compreensão",
      duration: "60 min",
      price: "R$ -",
      image: "/terapia_casal.svg",
    },
    {
      title: "Terapia Familiar",
      description:
        "Harmonização familiar e resolução de conflitos interpessoais",
      duration: "60 min",
      price: "R$ -",
      image: "/terapia_familiar.svg",
    },
    {
      title: "Orientação Vocacional",
      description: "Descoberta de aptidões e direcionamento profissional",
      duration: "45 min",
      price: "R$ -",
      image: "/orientacao_vocacional.svg",
    },
  ];

  const testimonials = [
    {
      name: "Maria Silva",
      text: "A Lara me ajudou a superar um momento muito difícil. Sua abordagem empática e profissional fez toda a diferença.",
      rating: 5,
      date: "Há 2 semanas",
    },
    {
      name: "João Santos",
      text: "Excelente profissional! As sessões são sempre produtivas e me sinto realmente ouvido e compreendido.",
      rating: 5,
      date: "Há 1 mês",
    },
    {
      name: "Ana Costa",
      text: "Recomendo de olhos fechados. A Lara tem uma sensibilidade única para lidar com questões familiares.",
      rating: 5,
      date: "Há 3 semanas",
    },
  ];

  const stats = [
    { number: "500+", label: "Pacientes Atendidos" },
    { number: "98%", label: "Satisfação" },
    { number: "...", label: "Anos de Experiência" },
    { number: "24h", label: "Suporte Disponível" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Parallax Background */}
      <div
        className="parallax-bg opacity-60"
        style={{ transform: `translateY(${scrollY * 0.5}px)` }}
      />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect animate-fade-in">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-blue rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="lara-signature">Lara Movió</h1>
                <p className="text-xs text-blue-600">Psicóloga Clínica</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-2">
              <div className="bg-white text-center space-x-8 px-4 py-1.5 rounded-md">
                <button
                  onClick={() => scrollToSection('home')}
                  className={`relative text-blue-900 hover:text-blue-600 transition-all duration-200 transform ${
                    activeSection === 'home' ? 'font-semibold text-blue-600' : ''
                  } ${
                    clickedButton === 'home' ? 'scale-95 bg-blue-100 rounded px-2 py-1' : 'hover:scale-105'
                  }`}
                >
                  Início
                </button>

                <button
                  onClick={() => scrollToSection('services')}
                  className={`relative text-blue-900 hover:text-blue-600 transition-all duration-200 transform ${
                    activeSection === 'services' ? 'font-semibold text-blue-600' : ''
                  } ${
                    clickedButton === 'services' ? 'scale-95 bg-blue-100 rounded px-2 py-1' : 'hover:scale-105'
                  }`}
                >
                  Serviços
                </button>
                <button
                  onClick={() => scrollToSection('about')}
                  className={`relative text-blue-900 hover:text-blue-600 transition-all duration-200 transform ${
                    activeSection === 'about' ? 'font-semibold text-blue-600' : ''
                  } ${
                    clickedButton === 'about' ? 'scale-95 bg-blue-100 rounded px-2 py-1' : 'hover:scale-105'
                  }`}
                >
                  Sobre
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className={`relative text-blue-900 hover:text-blue-600 transition-all duration-200 transform ${
                    activeSection === 'contact' ? 'font-semibold text-blue-600' : ''
                  } ${
                    clickedButton === 'contact' ? 'scale-95 bg-blue-100 rounded px-2 py-1' : 'hover:scale-105'
                  }`}
                >
                  Contato
                </button>
              </div>
              <Link href="/agendamento">
                <Button className="bg-gradient-blue hover:bg-blue-700 text-white">
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Atendimento
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-blue-100 text-blue-900"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden h-dvh py-4 space-y-4 animate-slide-up">
              <button
                onClick={() => {
                  scrollToSection('home')
                  setIsMenuOpen(false)
                }}
                className={`relative block w-full text-left p-3 rounded-lg text-blue-900 hover:text-blue-600 transition-all duration-200 transform ${
                  activeSection === 'home' ? 'font-semibold text-blue-600 bg-blue-50' : 'hover:bg-blue-50'
                } ${
                  clickedButton === 'home' ? 'scale-95 bg-blue-100' : 'hover:scale-105'
                }`}
              >
                Início
              </button>
              <button
                onClick={() => {
                  scrollToSection('services')
                  setIsMenuOpen(false)
                }}
                className={`relative block w-full text-left p-3 rounded-lg text-blue-900 hover:text-blue-600 transition-all duration-200 transform ${
                  activeSection === 'services' ? 'font-semibold text-blue-600 bg-blue-50' : 'hover:bg-blue-50'
                } ${
                  clickedButton === 'services' ? 'scale-95 bg-blue-100' : 'hover:scale-105'
                }`}
              >
                Serviços
              </button>
              <button
                onClick={() => {
                  scrollToSection('about')
                  setIsMenuOpen(false)
                }}
                className={`relative block w-full text-left p-3 rounded-lg text-blue-900 hover:text-blue-600 transition-all duration-200 transform ${
                  activeSection === 'about' ? 'font-semibold text-blue-600 bg-blue-50' : 'hover:bg-blue-50'
                } ${
                  clickedButton === 'about' ? 'scale-95 bg-blue-100' : 'hover:scale-105'
                }`}
              >
                Sobre
              </button>
              <button
                onClick={() => {
                  scrollToSection('contact')
                  setIsMenuOpen(false)
                }}
                className={`relative block w-full text-left p-3 rounded-lg text-blue-900 hover:text-blue-600 transition-all duration-200 transform ${
                  activeSection === 'contact' ? 'font-semibold text-blue-600 bg-blue-50' : 'hover:bg-blue-50'
                } ${
                  clickedButton === 'contact' ? 'scale-95 bg-blue-100' : 'hover:scale-105'
                }`}
              >
                Contato
              </button>
              <Link href="/agendamento" className="w-full">
                <Button className="w-full bg-gradient-blue hover:bg-blue-700 text-white">
                  <Calendar className="w-4 h-4 mr-2" />
                  Agendar Atendimento
                </Button>
              </Link>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <div className="mb-6">
                <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-200">
                  <Sparkles className="w-4 h-4 mr-2" />
                  Psicóloga Especializada
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-blue-900 leading-tight">
                  Transforme sua vida
                </h1>
                <p className="text-xl text-blue-700 mb-8 leading-relaxed text-justify">
                  com a terapia personalizada e acolhimento profissional para
                  todas as fases da vida. Juntos, vamos encontrar o caminho para
                  seu bem-estar emocional.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/agendamento">
                  <Button
                    size="lg"
                    className="bg-gradient-blue hover:bg-blue-700 text-white w-full sm:w-auto transform transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95"
                  >
                    <Calendar className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:rotate-12" />
                    Agendar Primeira Atendimento
                  </Button>
                </Link>
                <Link href="/agendamento">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-blue-300 text-blue-700 hover:bg-blue-50 w-full sm:w-auto transform transition-all duration-200 hover:scale-105 hover:shadow-md active:scale-95"
                  >
                    <Video className="w-5 h-5 mr-2 transition-transform duration-200 group-hover:scale-110" />
                    Atendimento Online
                  </Button>
                </Link>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
                {stats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="text-2xl font-bold text-blue-800">
                      {stat.number}
                    </div>
                    <div className="text-sm text-blue-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative animate-float">
              <div className="absolute inset-0 bg-gradient-blue rounded-3xl transform rotate-6 opacity-20"></div>
              <Card className="relative bg-white/90 backdrop-blur-sm border-0 shadow-2xl rounded-3xl overflow-hidden">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <Avatar className="w-32 h-32 mx-auto mb-4 ring-4 ring-blue-200">
                      <AvatarImage src="/lara.svg" />
                      <AvatarFallback className="bg-gradient-blue text-white text-2xl">
                        LM
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="lara-signature text-3xl">Lara Movió</h3>
                    <p className="text-blue-600 mb-4">
                      Psicóloga Clínica • CRP 06/215857
                    </p>
                    <div className="flex justify-center items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                      <span className="ml-2 text-blue-700 font-medium">
                        5.0
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center text-blue-700">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                      <span>Graduação em Psicologia</span>
                    </div>
                    <div className="flex items-center text-blue-700">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                      <span>Especialização em Psicologia Hospitalar</span>
                    </div>
                    <div className="flex items-center text-blue-700">
                      <CheckCircle className="w-5 h-5 mr-3 text-green-500" />
                      <span>... anos de experiência</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/70">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-scroll-reveal">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Por que escolher nossos serviços?
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Oferecemos uma abordagem moderna e humanizada para o cuidado da
              saúde mental
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm animate-scroll-reveal-delayed"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-blue-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-blue-700">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

      {/* Services Section */}
      <section id="services" className="pt-24 pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-scroll-reveal">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Atendimento especializado para diferentes necessidades e fases da
              vida
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm overflow-hidden animate-scroll-reveal-delayed transform hover:scale-105 active:scale-100"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative h-48">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-blue-900">
                      {service.title}
                    </h3>
                    <Badge className="bg-blue-100 text-blue-800">
                      {service.duration}
                    </Badge>
                  </div>
                  <p className="text-blue-700 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

      {/* About Section */}
      <section id="about" className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 bg-white/70">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-scroll-reveal">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Sobre Mim
              </h2>
              <div className="space-y-3 text-blue-700 text-lg leading-relaxed text-justify">
                <p>
                  Como psicóloga clínica, atuo em atendimentos online orientados
                  pela fenomenologia, que compreende o ser humano em sua
                  totalidade vivente, em sua abertura ao mundo e aos sentidos da
                  existência. Cada encontro é uma possibilidade de escuta
                  profunda, um espaço onde as certezas são suspensas e a
                  experiência é acolhida tal como se manifesta, sem rótulos,
                  diagnósticos apressados ou explicações reducionistas.
                </p>
                <p>
                  Em vez de interpretar o outro, caminho ao seu lado na
                  exploração de suas vivências, angústias, dores e
                  possibilidades. O setting clínico torna-se, assim, um espaço
                  ético e humano de presença autêntica, onde a singularidade do
                  existir pode se revelar com verdade, e onde o sofrimento pode
                  ser compreendido em sua dimensão existencial. Nesse processo,
                  a escuta torna-se também um gesto de cuidado e liberdade.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="flex items-start">
                  <BookOpen className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <div className="font-bold text-blue-900">Formação</div>
                    <div className="text-blue-700">
                      Psicologia (local - Opcional)
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <Activity className="w-6 h-6 text-blue-600 mr-3" />
                  <div>
                    <div className="font-bold text-blue-900">
                      Especialização
                    </div>
                    <div className="text-blue-700">
                      Pós-Graduada em Psicologia Hospitalar
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative animate-scroll-reveal-delayed">
              <div className="absolute inset-0 bg-gradient-blue rounded-3xl transform -rotate-6 opacity-20"></div>
              <img
                src="/lara02.svg"
                alt="Lara Movió em seu consultório"
                className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-scroll-reveal">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              O que nossos pacientes dizem
            </h2>
            <p className="text-xl text-blue-700">
              Depoimentos reais de quem já transformou sua vida
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/90 backdrop-blur-sm animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-blue-700 mb-4 italic">
                    "{testimonial.text}"
                  </p>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="font-bold text-blue-900">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-blue-600">
                        {testimonial.date}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section Divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>

      {/* Contact Section */}
      <section id="contact" className="pt-24 pb-24 px-4 sm:px-6 lg:px-8 bg-white/70">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="animate-slide-up">
              <h2 className="text-4xl font-bold text-blue-900 mb-6">
                Entre em Contato
              </h2>
              <p className="text-xl text-blue-700 mb-8">
                Pronto para começar sua jornada de transformação? Agende seu
                atendimento hoje mesmo.
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-blue rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-blue-900">Telefone</div>
                    <div className="text-blue-700">(18) 99794-4434</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-blue rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-blue-900">E-mail</div>
                    <div className="text-blue-700">
                      psic.laramovio@gmail.com
                    </div>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-blue rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-blue-900">Endereço</div>
                    <div className="text-blue-700">
                      Rua Engenheiro Loschi, 231 - Vila Affine
                      <br />
                      Paraguaçu Paulista, SP
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col justify-center items-center text-center space-y-4">
              <div className="flex flex-col items-center space-x-3 mb-2">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                  <Brain className="w-8 h-8 text-blue-900" />
                </div>
                <div>
                  <h3 className="lara-signature-white text-white">
                    Lara Movió
                  </h3>
                  <p className="text-blue-300 text-sm">Psicóloga Clínica</p>
                </div>
              </div>
              <p className="text-blue-300">
                Transformando vidas através da terapia humanizada e
                personalizada.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h4 className="text-lg font-bold mb-4">Serviços</h4>
              <ul className="space-y-2 text-blue-300 text-center">
                <li>Terapia Individual</li>
                <li>Terapia de Casal</li>
                <li>Terapia Familiar</li>
                <li>Orientação Vocacional</li>
              </ul>
            </div>

            <div className="flex flex-col justify-center items-center">
              <h4 className="text-lg font-bold mb-4">Horários</h4>
              <ul className="space-y-2 text-blue-300 text-center">
                <li>Segunda a Sexta: 8h às 18h</li>
                <li>Sábado: 8h às 12h</li>
                <li>Domingo: Fechado</li>
                <li>Emergências: 24h</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-blue-800 mt-8 pt-8 text-center text-blue-300">
            <p>
              <span>Lara Movió </span>
              &copy; 2025 - Psicologia Clínica. Todos os direitos reservados.
            </p>{" "}
            <CNPJConsulta />
          </div>
        </div>
      </footer>

      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="rounded-full w-16 h-16 bg-gradient-blue hover:bg-blue-700 text-white shadow-2xl hover:scale-110 transition-all animate-bounce"
          style={{ animationDuration: "2s" }}
        >
          <MessageCircle className="w-8 h-8" />
        </Button>
      </div>
    </div>
  );
}
