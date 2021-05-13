import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { appTheme } from '../theme/appTheme';

interface Props {
  text: string;
  color?: keyof typeof buttonColors;
  fat?: boolean;
  onPress?: () => void;
}

export const CalcButton = ({
  text,
  color = 'darkGray',
  fat,
  onPress,
}: Props) => {
  const getColor = () => {
    switch (color) {
      case 'gray':
        return 'black';
      default:
        return 'rgba(255, 255, 255, 0.9)';
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
      <View
        style={[
          appTheme.button,
          buttonColors[color],
          { width: fat ? 180 : 80 },
        ]}>
        <Text style={{ ...appTheme.buttonText, color: getColor() }}>
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const buttonColors = StyleSheet.create({
  gray: {
    backgroundColor: '#9B9B9B',
  },
  darkGray: {
    backgroundColor: '#2D2D2D',
  },
  orange: {
    backgroundColor: '#FF9427',
  },
});
