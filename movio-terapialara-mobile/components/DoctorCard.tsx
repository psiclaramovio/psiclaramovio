import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { Star, MapPin, Clock, Brain } from "lucide-react-native";

interface Doctor {
  id: number;
  name: string;
  specialty: string;
  rating: number;
  reviews: number;
  image: string;
  distance: string;
  nextAvailable: string;
  fee: string;
}

interface DoctorCardProps {
  doctor: Doctor;
}

export default function DoctorCard({ doctor }: DoctorCardProps) {
  return (
    <TouchableOpacity className="bg-white border border-gray-200 rounded-2xl p-4 mb-3 shadow-sm">
      <View className="flex-row">
        <Image
          source={{
            uri: "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
          }}
          className="w-16 h-16 rounded-2xl mr-4"
        />
        <View className="flex-1">
          <View className="flex-row items-center justify-between mb-1">
            <Text className="font-semibold text-gray-900 text-lg">
              {doctor.name}
            </Text>
            <TouchableOpacity className="p-1">
              <Brain size={20} color="gray" />
            </TouchableOpacity>
          </View>

          <Text className="text-gray-600 mb-2">{doctor.specialty}</Text>

          <View className="flex-row items-center mb-2">
            <Star size={14} color="#fbbf24" fill="#fbbf24" />
            <Text className="text-gray-700 text-sm ml-1">
              {doctor.rating} ({doctor.reviews} reviews)
            </Text>
          </View>

          <View className="flex-row items-center justify-between">
            <View className="flex-row items-center">
              <MapPin size={14} color="gray" />
              <Text className="text-gray-500 text-sm ml-1">
                {doctor.distance}
              </Text>
            </View>
            <View className="flex-row items-center">
              <Clock size={14} color="gray" />
              <Text className="text-gray-500 text-sm ml-1">
                {doctor.nextAvailable}
              </Text>
            </View>
          </View>

          <View className="flex-row items-center justify-between mt-3">
            <Text className="font-semibold text-[#0165fc] text-lg">
              {doctor.fee}
            </Text>
            <TouchableOpacity className="bg-[#0165fc] px-4 py-2 rounded-xl">
              <Text className="text-white font-medium">Book Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
