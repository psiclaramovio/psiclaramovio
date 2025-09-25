import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

interface Category {
  name: string;
  icon: string;
  color: string;
}

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <TouchableOpacity className="w-[30%] mb-4">
      <View className={`${category.color} p-4 rounded-2xl items-center`}>
        <Text className="text-2xl mb-2">{category.icon}</Text>
        <Text className="text-sm font-medium text-gray-700 text-center">
          {category.name}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
