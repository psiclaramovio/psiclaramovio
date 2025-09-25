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
  Users,
  FileText,
  Phone,
  Mail,
  MapPin,
  Search,
  Filter,
  Plus,
  Edit,
  Eye,
  MoreVertical,
  Bell,
  Settings,
  LogOut,
  BarChart3,
  Activity,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Heart,
  Video,
  MessageCircle,
  Star,
  Download,
  Brain,
} from "lucide-react";

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview");
  const [selectedPatient, setSelectedPatient] = useState(null);

  const stats = [
    {
      title: "Pacientes Ativos",
      value: "127",
      change: "+12%",
      icon: Users,
      color: "text-blue-600",
    },
    {
      title: "Atendimentos Hoje",
      value: "8",
      change: "+2",
      icon: Calendar,
      color: "text-green-600",
    },
    {
      title: "Taxa de Satisfação",
      value: "98%",
      change: "+3%",
      icon: Star,
      color: "text-yellow-600",
    },
    {
      title: "Receita Mensal",
      value: "R$ 15.240",
      change: "+18%",
      icon: TrendingUp,
      color: "text-purple-600",
    },
  ];

  const upcomingAppointments = [
    {
      id: 1,
      patient: "Maria Silva",
      time: "09:00",
      type: "Terapia Individual",
      status: "confirmado",
      avatar: "/placeholder-user.jpg",
      mode: "presencial",
    },
    {
      id: 2,
      patient: "João Santos",
      time: "10:30",
      type: "Terapia de Casal",
      status: "confirmado",
      avatar: "/placeholder-user.jpg",
      mode: "online",
    },
    {
      id: 3,
      patient: "Ana Costa",
      time: "14:00",
      type: "Orientação Vocacional",
      status: "pendente",
      avatar: "/placeholder-user.jpg",
      mode: "presencial",
    },
    {
      id: 4,
      patient: "Carlos Oliveira",
      time: "15:30",
      type: "Terapia Individual",
      status: "confirmado",
      avatar: "/placeholder-user.jpg",
      mode: "online",
    },
  ];

  const patients = [
    {
      id: 1,
      name: "Maria Silva",
      email: "maria@email.com",
      phone: "(11) 99999-1111",
      lastSession: "2024-01-10",
      nextSession: "2024-01-15",
      status: "ativo",
      progress: "excelente",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 2,
      name: "João Santos",
      email: "joao@email.com",
      phone: "(11) 99999-2222",
      lastSession: "2024-01-08",
      nextSession: "2024-01-15",
      status: "ativo",
      progress: "bom",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 3,
      name: "Ana Costa",
      email: "ana@email.com",
      phone: "(11) 99999-3333",
      lastSession: "2024-01-05",
      nextSession: "2024-01-15",
      status: "ativo",
      progress: "regular",
      avatar: "/placeholder-user.jpg",
    },
  ];

  const recentActivities = [
    {
      type: "appointment",
      text: "Atendimento com Maria Silva concluído",
      time: "Há 2 horas",
    },
    {
      type: "note",
      text: "Prontuário de João Santos atualizado",
      time: "Há 4 horas",
    },
    {
      type: "booking",
      text: "Novo Atendimento agendado - Ana Costa",
      time: "Há 6 horas",
    },
    {
      type: "payment",
      text: "Pagamento recebido - Carlos Oliveira",
      time: "Há 1 dia",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-blue-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-blue rounded-xl flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="lara-signature">Lara Movió</h1>
                <p className="text-xs text-blue-600">Dashboard Profissional</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="relative">
                <Bell className="w-5 h-5 text-blue-700" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="w-5 h-5 text-blue-700" />
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarImage src="/lara4.png" />
                <AvatarFallback className="bg-gradient-blue text-white">
                  LM
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-white/70 p-1 rounded-xl mb-6">
          {[
            { id: "overview", label: "Visão Geral", icon: BarChart3 },
            { id: "appointments", label: "Atendimentos", icon: Calendar },
            { id: "patients", label: "Pacientes", icon: Users },
            { id: "records", label: "Prontuários", icon: FileText },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-gradient-blue text-white shadow-lg"
                  : "text-blue-700 hover:bg-blue-50"
              }`}
            >
              <tab.icon className="w-4 h-4 mr-2" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-6 animate-fade-in">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg bg-white/90 backdrop-blur-sm hover:shadow-xl transition-all animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">{stat.title}</p>
                        <p className="text-2xl font-bold text-blue-900">
                          {stat.value}
                        </p>
                        <p
                          className={`text-sm ${
                            stat.change.startsWith("+")
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {stat.change} vs. mês anterior
                        </p>
                      </div>
                      <div
                        className={`w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center`}
                      >
                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {/* Today's Appointments */}
              <div className="lg:col-span-2">
                <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                  <CardHeader>
                    <CardTitle className="text-blue-900 flex items-center">
                      <Calendar className="w-5 h-5 mr-2" />
                      Atendimentos de Hoje
                    </CardTitle>
                    <CardDescription>
                      {upcomingAppointments.length} atendimentos agendados
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {upcomingAppointments.map((appointment) => (
                      <div
                        key={appointment.id}
                        className="flex items-center justify-between p-4 bg-blue-50 rounded-lg"
                      >
                        <div className="flex items-center space-x-3">
                          <Avatar className="w-10 h-10">
                            <AvatarImage src={appointment.avatar} />
                            <AvatarFallback>
                              {appointment.patient
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-medium text-blue-900">
                              {appointment.patient}
                            </p>
                            <p className="text-sm text-blue-600">
                              {appointment.type}
                            </p>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2">
                            <Clock className="w-4 h-4 text-blue-600" />
                            <span className="font-medium text-blue-900">
                              {appointment.time}
                            </span>
                          </div>
                          <div className="flex items-center space-x-2 mt-1">
                            {appointment.mode === "online" ? (
                              <Video className="w-4 h-4 text-blue-600" />
                            ) : (
                              <MapPin className="w-4 h-4 text-blue-600" />
                            )}
                            <Badge
                              variant={
                                appointment.status === "confirmado"
                                  ? "default"
                                  : "secondary"
                              }
                            >
                              {appointment.status}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Recent Activities */}
              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900 flex items-center">
                    <Activity className="w-5 h-5 mr-2" />
                    Atividades Recentes
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {recentActivities.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm text-blue-900">{activity.text}</p>
                        <p className="text-xs text-blue-600">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* Appointments Tab */}
        {activeTab === "appointments" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-blue-900">
                Gerenciar Atendimentos
              </h2>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  className="border-blue-300 text-blue-700"
                >
                  <Filter className="w-4 h-4 mr-2" />
                  Filtrar
                </Button>
                <Button className="bg-gradient-blue hover:bg-blue-700 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Atendimento
                </Button>
              </div>
            </div>

            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {upcomingAppointments.map((appointment) => (
                    <div
                      key={appointment.id}
                      className="flex items-center justify-between p-4 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={appointment.avatar} />
                          <AvatarFallback>
                            {appointment.patient
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-blue-900">
                            {appointment.patient}
                          </p>
                          <p className="text-sm text-blue-600">
                            {appointment.type}
                          </p>
                          <div className="flex items-center space-x-4 mt-1">
                            <div className="flex items-center text-sm text-blue-600">
                              <Clock className="w-4 h-4 mr-1" />
                              {appointment.time}
                            </div>
                            <div className="flex items-center text-sm text-blue-600">
                              {appointment.mode === "online" ? (
                                <Video className="w-4 h-4 mr-1" />
                              ) : (
                                <MapPin className="w-4 h-4 mr-1" />
                              )}
                              {appointment.mode}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant={
                            appointment.status === "confirmado"
                              ? "default"
                              : "secondary"
                          }
                        >
                          {appointment.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Patients Tab */}
        {activeTab === "patients" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-blue-900">
                Gerenciar Pacientes
              </h2>
              <div className="flex space-x-2">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
                  <Input
                    placeholder="Buscar pacientes..."
                    className="pl-10 border-blue-200"
                  />
                </div>
                <Button className="bg-gradient-blue hover:bg-blue-700 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Paciente
                </Button>
              </div>
            </div>

            <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {patients.map((patient) => (
                    <div
                      key={patient.id}
                      className="flex items-center justify-between p-4 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors"
                    >
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={patient.avatar} />
                          <AvatarFallback>
                            {patient.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-blue-900">
                            {patient.name}
                          </p>
                          <div className="flex items-center space-x-4 text-sm text-blue-600">
                            <div className="flex items-center">
                              <Mail className="w-4 h-4 mr-1" />
                              {patient.email}
                            </div>
                            <div className="flex items-center">
                              <Phone className="w-4 h-4 mr-1" />
                              {patient.phone}
                            </div>
                          </div>
                          <div className="flex items-center space-x-4 mt-1 text-sm">
                            <span className="text-blue-600">
                              Última sessão: {patient.lastSession}
                            </span>
                            <Badge
                              variant={
                                patient.progress === "excelente"
                                  ? "default"
                                  : patient.progress === "bom"
                                  ? "secondary"
                                  : "outline"
                              }
                            >
                              {patient.progress}
                            </Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Records Tab */}
        {activeTab === "records" && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold text-blue-900">
                Prontuários Médicos
              </h2>
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  className="border-blue-300 text-blue-700"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Exportar
                </Button>
                <Button className="bg-gradient-blue hover:bg-blue-700 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Novo Registro
                </Button>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900">
                    Prontuários Recentes
                  </CardTitle>
                  <CardDescription>
                    Últimas atualizações nos prontuários dos pacientes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {patients.map((patient) => (
                    <div
                      key={patient.id}
                      className="flex items-center justify-between p-4 bg-blue-50 rounded-lg"
                    >
                      <div className="flex items-center space-x-3">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={patient.avatar} />
                          <AvatarFallback>
                            {patient.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium text-blue-900">
                            {patient.name}
                          </p>
                          <p className="text-sm text-blue-600">
                            Atualizado em {patient.lastSession}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Badge variant="outline" className="bg-white">
                          {patient.status}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <FileText className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white/90 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-blue-900">Estatísticas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-900">127</div>
                    <div className="text-sm text-blue-600">
                      Total de Prontuários
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">15</div>
                    <div className="text-sm text-blue-600">
                      Atualizados Esta Semana
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600">3</div>
                    <div className="text-sm text-blue-600">
                      Pendentes de Revisão
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
