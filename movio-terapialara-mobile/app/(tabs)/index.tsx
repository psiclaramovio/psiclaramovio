import { SafeAreaView } from "react-native-safe-area-context";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
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
} from "lucide-react-native";

import CategoryCard from "../../components/CategoryCard";
import AppointmentCard from "../../components/AppointmentCard";
import DoctorCard from "../../components/DoctorCard";

export default function HomeScreen() {
  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      rating: 4.8,
      reviews: 127,
      image: "female-doctor.png",
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
      image: "male-doctor.png",
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
      image: "female-pediatrician.png",
      distance: "3.2 km",
      nextAvailable: "Today 4:15 PM",
      fee: "$70",
    },
  ];

  const appointments = [
    {
      id: 1,
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "Today",
      time: "2:30 PM",
      status: "confirmed",
      image: "female-doctor.png",
    },
    {
      id: 2,
      doctor: "Dr. Michael Chen",
      specialty: "Dermatologist",
      date: "Tomorrow",
      time: "10:00 AM",
      status: "pending",
      image: "male-doctor.png",
    },
  ];

  const categories = [
    { name: "General", icon: "🏥", color: "bg-blue-100" },
    { name: "Cardiology", icon: "❤️", color: "bg-red-100" },
    { name: "Dermatology", icon: "🧴", color: "bg-green-100" },
    { name: "Pediatrics", icon: "👶", color: "bg-yellow-100" },
    { name: "Neurology", icon: "🧠", color: "bg-purple-100" },
    { name: "Orthopedics", icon: "🦴", color: "bg-orange-100" },
  ];

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        <View className="bg-[#0165fc] text-white p-4 rounded-b-3xl">
          <View className="flex-row items-center justify-between mb-6">
            <View>
              <Text className="text-xl font-semibold text-white">
                Good Morning!
              </Text>
              <Text className="text-blue-100">How are you feeling today?</Text>
            </View>
            <View className="flex-row items-center gap-3">
              <Bell size={24} color="white" />
              <Image
                source={{
                  uri: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
                }}
                className="w-10 h-10 rounded-full"
              />
            </View>
          </View>

          <View className="relative">
            <View className="absolute left-3 top-1/2 -translate-y-1/2 z-10">
              <Search size={20} color="gray" />
            </View>
            <TextInput
              placeholder="Search doctors, specialties..."
              className="pl-10 bg-white border-0 rounded-xl h-12 text-gray-900"
              placeholderTextColor="#9CA3AF"
            />
          </View>
        </View>

        <View className="p-4 pb-20">
          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-lg font-semibold text-gray-900">
                Categories
              </Text>
              <TouchableOpacity>
                <Text className="text-[#0165fc]">See All</Text>
              </TouchableOpacity>
            </View>
            <View className="flex-row flex-wrap justify-between">
              {categories.map((category, index) => (
                <CategoryCard key={index} category={category} />
              ))}
            </View>
          </View>

          <View className="mb-6">
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-lg font-semibold text-gray-900">
                Upcoming Appointments
              </Text>
              <TouchableOpacity>
                <Text className="text-[#0165fc]">View All</Text>
              </TouchableOpacity>
            </View>
            {appointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </View>

          <View>
            <View className="flex-row items-center justify-between mb-4">
              <Text className="text-lg font-semibold text-gray-900">
                Top Doctors
              </Text>
              <TouchableOpacity>
                <Text className="text-[#0165fc]">See All</Text>
              </TouchableOpacity>
            </View>
            {doctors.map((doctor) => (
              <DoctorCard key={doctor.id} doctor={doctor} />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
