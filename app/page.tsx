"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  Bell,
  Calendar,
  Clock,
  MapPin,
  Star,
  Heart,
  Phone,
  MessageCircle,
  ChevronRight,
  Home,
  User,
  Plus,
} from "lucide-react"

export default function DoctorAppointmentApp() {
  const [activeTab, setActiveTab] = useState("home")
  const [selectedDoctor, setSelectedDoctor] = useState(null)

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      rating: 4.8,
      reviews: 127,
      image: "/female-doctor.png",
      distance: "2.5 km",
      nextAvailable: "Today 2:30 PM",
      fee: "$80",
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Dermatologist",
      rating: 4.9,
      reviews: 203,
      image: "/male-doctor.png",
      distance: "1.8 km",
      nextAvailable: "Tomorrow 10:00 AM",
      fee: "$65",
    },
    {
      id: 3,
      name: "Dr. Emily Davis",
      specialty: "Pediatrician",
      rating: 4.7,
      reviews: 156,
      image: "/female-pediatrician.png",
      distance: "3.2 km",
      nextAvailable: "Today 4:15 PM",
      fee: "$70",
    },
  ]

  const appointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "Today",
      time: "2:30 PM",
      status: "confirmed",
      image: "/female-doctor.png",
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Dermatologist",
      date: "Tomorrow",
      time: "10:00 AM",
      status: "pending",
      image: "/male-doctor.png",
    },
  ]

  const categories = [
    { name: "General", icon: "🏥", color: "bg-blue-100" },
    { name: "Cardiology", icon: "❤️", color: "bg-red-100" },
    { name: "Dermatology", icon: "🧴", color: "bg-green-100" },
    { name: "Pediatrics", icon: "👶", color: "bg-yellow-100" },
    { name: "Neurology", icon: "🧠", color: "bg-purple-100" },
    { name: "Orthopedics", icon: "🦴", color: "bg-orange-100" },
  ]

  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      {/* Header */}
      <div className="bg-[#0165fc] text-white p-4 rounded-b-3xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold">Good Morning!</h1>
            <p className="text-blue-100">How are you feeling today?</p>
          </div>
          <div className="flex items-center gap-3">
            <Bell className="w-6 h-6" />
            <Avatar className="w-10 h-10">
              <AvatarImage src="/user-profile-illustration.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <Input placeholder="Search doctors, specialties..." className="pl-10 bg-white border-0 rounded-xl h-12" />
        </div>
      </div>

      {/* Main Content */}
      <div className="p-4 pb-20">
        {activeTab === "home" && (
          <>
            {/* Categories */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Categories</h2>
                <Button variant="ghost" size="sm" className="text-[#0165fc]">
                  See All
                </Button>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {categories.map((category, index) => (
                  <Card key={index} className="p-3 text-center border-0 shadow-sm">
                    <div
                      className={`w-12 h-12 ${category.color} rounded-xl flex items-center justify-center mx-auto mb-2`}
                    >
                      <span className="text-xl">{category.icon}</span>
                    </div>
                    <p className="text-sm font-medium text-gray-700">{category.name}</p>
                  </Card>
                ))}
              </div>
            </div>

            {/* Upcoming Appointments */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Upcoming Appointments</h2>
                <Button variant="ghost" size="sm" className="text-[#0165fc]">
                  View All
                </Button>
              </div>
              {appointments.map((appointment) => (
                <Card key={appointment.id} className="mb-3 border-0 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={appointment.image || "/placeholder.svg"} />
                        <AvatarFallback>DR</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                        <p className="text-sm text-gray-600">{appointment.specialty}</p>
                        <div className="flex items-center gap-4 mt-1">
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Calendar className="w-4 h-4" />
                            {appointment.date}
                          </div>
                          <div className="flex items-center gap-1 text-sm text-gray-600">
                            <Clock className="w-4 h-4" />
                            {appointment.time}
                          </div>
                        </div>
                      </div>
                      <Badge
                        variant={appointment.status === "confirmed" ? "default" : "secondary"}
                        className={appointment.status === "confirmed" ? "bg-green-100 text-green-800" : ""}
                      >
                        {appointment.status}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Top Doctors */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-gray-900">Top Doctors</h2>
                <Button variant="ghost" size="sm" className="text-[#0165fc]">
                  See All
                </Button>
              </div>
              {doctors.map((doctor) => (
                <Card key={doctor.id} className="mb-3 border-0 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="w-16 h-16">
                        <AvatarImage src={doctor.image || "/placeholder.svg"} />
                        <AvatarFallback>DR</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-gray-900">{doctor.name}</h3>
                            <p className="text-sm text-gray-600 mb-1">{doctor.specialty}</p>
                            <div className="flex items-center gap-1 mb-2">
                              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              <span className="text-sm font-medium">{doctor.rating}</span>
                              <span className="text-sm text-gray-500">({doctor.reviews} reviews)</span>
                            </div>
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                <MapPin className="w-4 h-4" />
                                {doctor.distance}
                              </div>
                              <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {doctor.nextAvailable}
                              </div>
                            </div>
                          </div>
                          <Heart className="w-5 h-5 text-gray-400" />
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <span className="font-semibold text-[#0165fc]">{doctor.fee}</span>
                          <Button size="sm" className="bg-[#0165fc] hover:bg-blue-600">
                            Book Now
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}

        {activeTab === "appointments" && (
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">My Appointments</h2>
            {appointments.map((appointment) => (
              <Card key={appointment.id} className="mb-4 border-0 shadow-sm">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-14 h-14">
                      <AvatarImage src={appointment.image || "/placeholder.svg"} />
                      <AvatarFallback>DR</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{appointment.doctor}</h3>
                      <p className="text-sm text-gray-600">{appointment.specialty}</p>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Calendar className="w-4 h-4" />
                          {appointment.date}
                        </div>
                        <div className="flex items-center gap-1 text-sm text-gray-600">
                          <Clock className="w-4 h-4" />
                          {appointment.time}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Button size="sm" variant="outline" className="w-10 h-10 p-0 bg-transparent">
                        <Phone className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="outline" className="w-10 h-10 p-0 bg-transparent">
                        <MessageCircle className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-4">
                    <Button variant="outline" className="flex-1 bg-transparent">
                      Reschedule
                    </Button>
                    <Button className="flex-1 bg-[#0165fc] hover:bg-blue-600">View Details</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {activeTab === "profile" && (
          <div>
            <div className="text-center mb-8">
              <Avatar className="w-24 h-24 mx-auto mb-4">
                <AvatarImage src="/user-profile-illustration.png" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-semibold text-gray-900">John Doe</h2>
              <p className="text-gray-600">john.doe@email.com</p>
            </div>

            <div className="space-y-3">
              {[
                { icon: User, label: "Personal Information", hasChevron: true },
                { icon: Calendar, label: "My Appointments", hasChevron: true },
                { icon: Heart, label: "Favorite Doctors", hasChevron: true },
                { icon: Bell, label: "Notifications", hasChevron: true },
                { icon: Phone, label: "Help & Support", hasChevron: true },
              ].map((item, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-[#0165fc]" />
                        </div>
                        <span className="font-medium text-gray-900">{item.label}</span>
                      </div>
                      {item.hasChevron && <ChevronRight className="w-5 h-5 text-gray-400" />}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md bg-white border-t border-gray-200">
        <div className="flex items-center justify-around py-2">
          {[
            { id: "home", icon: Home, label: "Home" },
            { id: "appointments", icon: Calendar, label: "Appointments" },
            { id: "add", icon: Plus, label: "Book" },
            { id: "messages", icon: MessageCircle, label: "Messages" },
            { id: "profile", icon: User, label: "Profile" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex flex-col items-center py-2 px-3 rounded-lg transition-colors ${
                activeTab === tab.id ? "text-[#0165fc] bg-blue-50" : "text-gray-500"
              }`}
            >
              {tab.id === "add" ? (
                <div className="w-12 h-12 bg-[#0165fc] rounded-full flex items-center justify-center mb-1">
                  <tab.icon className="w-6 h-6 text-white" />
                </div>
              ) : (
                <tab.icon className="w-6 h-6 mb-1" />
              )}
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
