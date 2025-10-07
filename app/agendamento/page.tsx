"use client";

import { useState } from "react";
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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  ArrowLeft,
  Video,
  Heart,
  AlertCircle,
  Star,
  Brain,
} from "lucide-react";
import Link from "next/link";

export default function AgendamentoPage() {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    nascimento: "",
    genero: "",
    endereco: "",
    motivoAtendimento: "",
    primeiraVez: "",
    modalidade: "",
  });

  const services = [
    {
      id: "individual",
      title: "Terapia Individual",
      description:
        "Sessões personalizadas focadas em suas necessidades específicas",
      duration: "50 min",
      price: "R$ -",
      image: "/terapia_individual.svg",
    },
    {
      id: "casal",
      title: "Terapia de Casal",
      description:
        "Fortalecimento de relacionamentos através de diálogo e compreensão",
      duration: "60 min",
      price: "R$ -",
      image: "/terapia_casal.svg",
    },
    {
      id: "familiar",
      title: "Terapia Familiar",
      description:
        "Harmonização familiar e resolução de conflitos interpessoais",
      duration: "60 min",
      price: "R$ -",
      image: "/terapia_familiar.svg",
    },
    {
      id: "vocacional",
      title: "Orientação Vocacional",
      description: "Descoberta de aptidões e direcionamento profissional",
      duration: "45 min",
      price: "R$ -",
      image: "/orientacao_vocacional.svg",
    },
  ];

  const availableDates = [
    { date: "2024-01-15", day: "Segunda", dayNum: "15", month: "Jan" },
    { date: "2024-01-16", day: "Terça", dayNum: "16", month: "Jan" },
    { date: "2024-01-17", day: "Quarta", dayNum: "17", month: "Jan" },
    { date: "2024-01-18", day: "Quinta", dayNum: "18", month: "Jan" },
    { date: "2024-01-19", day: "Sexta", dayNum: "19", month: "Jan" },
    { date: "2024-01-22", day: "Segunda", dayNum: "22", month: "Jan" },
  ];

  const availableTimes = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = () => {
    // Aqui seria feita a integração com backend
    console.log("Agendamento criado:", {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      ...formData,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col items-center justify-between">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-blue rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="lara-signature">Lara Movió</h2>
                <p className="text-sm text-blue-600">Psicóloga Clínica</p>
              </div>
            </div>
            <div className="flex flex-col w-full items-start space-x-4">
              <div>
                <h1 className="text-2xl font-bold text-blue-900">
                  Agendar Atendimento
                </h1>
                <p className="text-blue-600">Passo {step} de 4</p>
              </div>
              <Link href="/">
                <Button variant="ghost" size="sm" className="text-blue-900">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Voltar
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex items-center justify-between mb-8">
          {[1, 2, 3, 4].map((num) => (
            <div key={num} className="flex items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  step >= num
                    ? "bg-gradient-blue text-white"
                    : "bg-blue-100 text-blue-400"
                }`}
              >
                {step > num ? <CheckCircle className="w-6 h-6" /> : num}
              </div>
              {num < 4 && (
                <div
                  className={`h-1 w-20 mx-2 ${
                    step > num ? "bg-gradient-blue" : "bg-blue-100"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        {/* Step 1: Escolha do Serviço */}
        {step === 1 && (
          <Card className="animate-fade-in border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-blue-900">
                Escolha seu Serviço
              </CardTitle>
              <CardDescription className="text-blue-700">
                Selecione o tipo de atendimento que melhor atende suas
                necessidades
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                {services.map((service) => (
                  <Card
                    key={service.id}
                    className={`cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                      selectedService === service.id
                        ? "ring-2 ring-blue-500 bg-blue-50"
                        : "border-blue-200"
                    }`}
                    onClick={() => setSelectedService(service.id)}
                  >
                    <div className="relative h-48">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover rounded-t-lg"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-t-lg"></div>
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
                      <p className="text-blue-700 mb-4">
                        {service.description}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-2xl font-bold text-gradient-blue">
                          {service.price}
                        </span>
                        {selectedService === service.id && (
                          <CheckCircle className="w-6 h-6 text-green-500" />
                        )}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="flex justify-end mt-8">
                <Button
                  onClick={nextStep}
                  disabled={!selectedService}
                  className="bg-gradient-blue hover:bg-blue-700 text-white px-8"
                >
                  Continuar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Escolha de Data e Horário */}
        {step === 2 && (
          <Card className="animate-fade-in border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-blue-900">
                Data e Horário
              </CardTitle>
              <CardDescription className="text-blue-700">
                Escolha a data e horário que melhor se adequa à sua agenda
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Seleção de Data */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    Escolha a Data
                  </h3>
                  <div className="grid grid-cols-3 gap-3">
                    {availableDates.map((dateOption) => (
                      <Card
                        key={dateOption.date}
                        className={`cursor-pointer transition-all duration-300 hover:shadow-lg ${
                          selectedDate === dateOption.date
                            ? "ring-2 ring-blue-500 bg-blue-50"
                            : "border-blue-200"
                        }`}
                        onClick={() => setSelectedDate(dateOption.date)}
                      >
                        <CardContent className="p-4 text-center">
                          <div className="text-sm text-blue-600">
                            {dateOption.day}
                          </div>
                          <div className="text-2xl font-bold text-blue-900">
                            {dateOption.dayNum}
                          </div>
                          <div className="text-sm text-blue-600">
                            {dateOption.month}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Seleção de Horário */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    Escolha o Horário
                  </h3>
                  <div className="grid grid-cols-4 gap-3">
                    {availableTimes.map((time) => (
                      <Button
                        key={time}
                        variant={selectedTime === time ? "default" : "outline"}
                        className={`h-12 ${
                          selectedTime === time
                            ? "bg-gradient-blue hover:bg-blue-700 text-white"
                            : "border-blue-300 text-blue-700 hover:bg-blue-50"
                        }`}
                        onClick={() => setSelectedTime(time)}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>

                  {selectedDate && selectedTime && (
                    <Card className="mt-6 bg-blue-50 border-blue-200">
                      <CardContent className="p-4">
                        <div className="flex items-center">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                          <div>
                            <div className="font-bold text-blue-900">
                              Agendamento Selecionado
                            </div>
                            <div className="text-blue-700">
                              {
                                availableDates.find(
                                  (d) => d.date === selectedDate
                                )?.day
                              }
                              ,{" "}
                              {
                                availableDates.find(
                                  (d) => d.date === selectedDate
                                )?.dayNum
                              }{" "}
                              de{" "}
                              {
                                availableDates.find(
                                  (d) => d.date === selectedDate
                                )?.month
                              }{" "}
                              às {selectedTime}
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  onClick={prevStep}
                  variant="outline"
                  className="border-blue-300 text-blue-700"
                >
                  Voltar
                </Button>
                <Button
                  onClick={nextStep}
                  disabled={!selectedDate || !selectedTime}
                  className="bg-gradient-blue hover:bg-blue-700 text-white px-8"
                >
                  Continuar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Informações Pessoais */}
        {step === 3 && (
          <Card className="animate-fade-in border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-blue-900">
                Suas Informações
              </CardTitle>
              <CardDescription className="text-blue-700">
                Preencha seus dados para finalizar o agendamento
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Nome *
                  </label>
                  <Input
                    placeholder="Seu nome"
                    value={formData.nome}
                    onChange={(e) => handleInputChange("nome", e.target.value)}
                    className="border-blue-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Sobrenome *
                  </label>
                  <Input
                    placeholder="Seu sobrenome"
                    value={formData.sobrenome}
                    onChange={(e) =>
                      handleInputChange("sobrenome", e.target.value)
                    }
                    className="border-blue-200 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    E-mail *
                  </label>
                  <Input
                    type="email"
                    placeholder="seu@email.com"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    className="border-blue-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Telefone *
                  </label>
                  <Input
                    placeholder="(11) 99999-9999"
                    value={formData.telefone}
                    onChange={(e) =>
                      handleInputChange("telefone", e.target.value)
                    }
                    className="border-blue-200 focus:border-blue-500"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Data de Nascimento *
                  </label>
                  <Input
                    type="date"
                    value={formData.nascimento}
                    onChange={(e) =>
                      handleInputChange("nascimento", e.target.value)
                    }
                    className="border-blue-200 focus:border-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-blue-900 mb-2">
                    Gênero
                  </label>
                  <Select
                    value={formData.genero}
                    onValueChange={(value) =>
                      handleInputChange("genero", value)
                    }
                  >
                    <SelectTrigger className="border-blue-200 focus:border-blue-500">
                      <SelectValue placeholder="Selecione" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="feminino">Feminino</SelectItem>
                      <SelectItem value="masculino">Masculino</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                      <SelectItem value="nao_informar">
                        Prefiro não informar
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  Endereço
                </label>
                <Input
                  placeholder="Rua, número, bairro, cidade"
                  value={formData.endereco}
                  onChange={(e) =>
                    handleInputChange("endereco", e.target.value)
                  }
                  className="border-blue-200 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  Modalidade de Atendimento *
                </label>
                <Select
                  value={formData.modalidade}
                  onValueChange={(value) =>
                    handleInputChange("modalidade", value)
                  }
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-500">
                    <SelectValue placeholder="Selecione a modalidade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="presencial">Presencial</SelectItem>
                    <SelectItem value="online">Online</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  É sua primeira vez em terapia? *
                </label>
                <Select
                  value={formData.primeiraVez}
                  onValueChange={(value) =>
                    handleInputChange("primeiraVez", value)
                  }
                >
                  <SelectTrigger className="border-blue-200 focus:border-blue-500">
                    <SelectValue placeholder="Selecione uma opção" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="sim">
                      Sim, é minha primeira vez
                    </SelectItem>
                    <SelectItem value="nao">
                      Não, já fiz terapia antes
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-blue-900 mb-2">
                  Motivo do Atendimento (opcional)
                </label>
                <textarea
                  placeholder="Descreva brevemente o que te trouxe até aqui..."
                  value={formData.motivoAtendimento}
                  onChange={(e) =>
                    handleInputChange("motivoAtendimento", e.target.value)
                  }
                  className="w-full p-3 border border-blue-200 rounded-lg focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 resize-none"
                  rows={4}
                />
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  onClick={prevStep}
                  variant="outline"
                  className="border-blue-300 text-blue-700"
                >
                  Voltar
                </Button>
                <Button
                  onClick={nextStep}
                  disabled={
                    !formData.nome ||
                    !formData.sobrenome ||
                    !formData.email ||
                    !formData.telefone ||
                    !formData.nascimento ||
                    !formData.modalidade ||
                    !formData.primeiraVez
                  }
                  className="bg-gradient-blue hover:bg-blue-700 text-white px-8"
                >
                  Continuar
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: Confirmação */}
        {step === 4 && (
          <Card className="animate-fade-in border-0 shadow-xl bg-white/90 backdrop-blur-sm">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl text-blue-900">
                Confirmar Agendamento
              </CardTitle>
              <CardDescription className="text-blue-700">
                Revise os dados do seu agendamento antes de finalizar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Resumo do Agendamento */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    Resumo do Agendamento
                  </h3>

                  <Card className="bg-blue-50 border-blue-200 mb-4">
                    <CardContent className="p-4">
                      <div className="flex items-center mb-3">
                        <Brain className="w-5 h-5 text-blue-600 mr-2" />
                        <span className="font-bold text-blue-900">
                          {
                            services.find((s) => s.id === selectedService)
                              ?.title
                          }
                        </span>
                      </div>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-blue-700">
                          <Calendar className="w-4 h-4 mr-2" />
                          {
                            availableDates.find((d) => d.date === selectedDate)
                              ?.day
                          }
                          ,{" "}
                          {
                            availableDates.find((d) => d.date === selectedDate)
                              ?.dayNum
                          }{" "}
                          de{" "}
                          {
                            availableDates.find((d) => d.date === selectedDate)
                              ?.month
                          }
                        </div>
                        <div className="flex items-center text-blue-700">
                          <Clock className="w-4 h-4 mr-2" />
                          {selectedTime} (
                          {
                            services.find((s) => s.id === selectedService)
                              ?.duration
                          }
                          )
                        </div>
                        <div className="flex items-center text-blue-700">
                          {formData.modalidade === "presencial" ? (
                            <MapPin className="w-4 h-4 mr-2" />
                          ) : (
                            <Video className="w-4 h-4 mr-2" />
                          )}
                          {formData.modalidade === "presencial"
                            ? "Presencial"
                            : "Online"}
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-blue-300">
                        <div className="flex justify-between items-center">
                          <span className="font-bold text-blue-900">
                            Valor:
                          </span>
                          <span className="text-2xl font-bold text-gradient-blue">
                            {
                              services.find((s) => s.id === selectedService)
                                ?.price
                            }
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {formData.modalidade === "presencial" && (
                    <Card className="bg-yellow-50 border-yellow-200">
                      <CardContent className="p-4">
                        <div className="flex items-start">
                          <MapPin className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                          <div>
                            <div className="font-bold text-yellow-800">
                              Endereço do Consultório
                            </div>
                            <div className="text-yellow-700">
                              Rua das Flores, 123 - Centro
                              <br />
                              São Paulo, SP - CEP: 01234-567
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </div>

                {/* Dados Pessoais */}
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4">
                    Dados Pessoais
                  </h3>

                  <Card className="bg-gray-50 border-gray-200">
                    <CardContent className="p-4 space-y-3">
                      <div>
                        <span className="font-medium text-gray-700">Nome:</span>
                        <span className="ml-2 text-gray-900">
                          {formData.nome} {formData.sobrenome}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          E-mail:
                        </span>
                        <span className="ml-2 text-gray-900">
                          {formData.email}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          Telefone:
                        </span>
                        <span className="ml-2 text-gray-900">
                          {formData.telefone}
                        </span>
                      </div>
                      <div>
                        <span className="font-medium text-gray-700">
                          Data de Nascimento:
                        </span>
                        <span className="ml-2 text-gray-900">
                          {formData.nascimento}
                        </span>
                      </div>
                      {formData.genero && (
                        <div>
                          <span className="font-medium text-gray-700">
                            Gênero:
                          </span>
                          <span className="ml-2 text-gray-900">
                            {formData.genero}
                          </span>
                        </div>
                      )}
                      <div>
                        <span className="font-medium text-gray-700">
                          Primeira vez em terapia:
                        </span>
                        <span className="ml-2 text-gray-900">
                          {formData.primeiraVez === "sim" ? "Sim" : "Não"}
                        </span>
                      </div>
                      {formData.motivoAtendimento && (
                        <div>
                          <span className="font-medium text-gray-700">
                            Motivo:
                          </span>
                          <p className="mt-1 text-gray-900">
                            {formData.motivoAtendimento}
                          </p>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                  <div>
                    <div className="font-bold text-blue-900">Importante</div>
                    <div className="text-blue-700 text-sm">
                      • Confirme seus dados antes de finalizar o agendamento
                      <br />
                      • Você receberá um e-mail de confirmação com todos os
                      detalhes
                      <br />
                      • Em caso de cancelamento, avise com pelo menos 24h de
                      antecedência
                      <br />• Para primeiro atendimento, chegue 10 minutos antes
                      do horário
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <Button
                  onClick={prevStep}
                  variant="outline"
                  className="border-blue-300 text-blue-700"
                >
                  Voltar
                </Button>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button className="bg-gradient-blue hover:bg-blue-700 text-white px-8">
                      Confirmar Agendamento
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="text-center text-blue-900">
                        <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                        Agendamento Confirmado!
                      </DialogTitle>
                      <DialogDescription className="text-center">
                        Seu agendamento foi realizado com sucesso. Você receberá
                        um e-mail de confirmação em breve.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="text-center space-y-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="font-bold text-blue-900">
                          Próximos Passos:
                        </div>
                        <div className="text-sm text-blue-700">
                          • Verifique seu e-mail para detalhes completos
                          <br />
                          • Adicione o compromisso à sua agenda
                          <br />• Prepare-se para sua sessão
                        </div>
                      </div>
                    </div>
                    <DialogFooter>
                      <Link href="/" className="w-full">
                        <Button className="w-full bg-gradient-blue hover:bg-blue-700 text-white">
                          Voltar ao Início
                        </Button>
                      </Link>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
