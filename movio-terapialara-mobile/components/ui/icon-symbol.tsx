import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SymbolWeight } from 'expo-symbols';
import React from 'react';
import { OpaqueColorValue, StyleProp, ViewStyle } from 'react-native';

// Add a simple mapping for the most common SF Symbols to Material Icons
const SYMBOL_MAPPING: Record<string, keyof typeof MaterialIcons.glyphMap> = {
  'chevron.left.forwardslash.chevron.right': 'code',
  'chevron.right': 'chevron-right',
  'house.fill': 'home',
  'paperplane.fill': 'send',
};

export function IconSymbol({
  name,
  size = 24,
  color,
  style,
  weight,
}: {
  name: string;
  size?: number;
  color: string | OpaqueColorValue;
  style?: StyleProp<ViewStyle>;
  weight?: SymbolWeight;
}) {
  // Map the SF Symbol name to a Material Icon name
  const iconName = SYMBOL_MAPPING[name] || 'help-outline';
  
  return (
    <MaterialIcons
      color={color}
      size={size}
      name={iconName}
      style={style}
    />
  );
}
