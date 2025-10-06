import { PropsWithChildren, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/colors';
import { useColorScheme } from '@/hooks/use-color-scheme';

export function Collapsible({ children, title }: PropsWithChildren & { title: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const theme = useColorScheme() ?? 'light';
  const height = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    height: withTiming(height.value),
    overflow: 'hidden',
  }));

  return (
    <ThemedView>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 6,
          paddingVertical: 12,
        }}
        onPress={() => {
          if (isOpen) {
            height.value = 0;
          } else {
            height.value = 200; // Adjust based on content
          }
          setIsOpen(!isOpen);
        }}
        activeOpacity={0.8}>
        <IconSymbol
          name="chevron.right"
          size={18}
          weight="medium"
          color={theme === 'light' ? Colors.light.icon : Colors.dark.icon}
          style={{
            transform: [{ rotate: isOpen ? '90deg' : '0deg' }],
          }}
        />
        <ThemedText type="defaultSemiBold">{title}</ThemedText>
      </TouchableOpacity>
      <Animated.View style={animatedStyle}>
        <ThemedView style={{ gap: 6, marginLeft: 24 }}>{children}</ThemedView>
      </Animated.View>
    </ThemedView>
  );
}
