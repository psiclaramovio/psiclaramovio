import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-1 items-center justify-center">
        <Text className="text-xl font-semibold text-gray-900">Profile</Text>
        <Text className="text-gray-600 mt-2">Your profile information</Text>
      </View>
    </SafeAreaView>
  );
}
