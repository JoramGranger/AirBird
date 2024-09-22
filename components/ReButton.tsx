// ReusableButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import colors from '../theme/colors';

interface ReusableButtonProps {
  variant: 'primary' | 'secondary' | 'white' | 'danger' | 'disabled';
  onPress?: () => void; // Optional onPress prop
  title: string; // Title of the button
}

const ReButton: React.FC<ReusableButtonProps> = ({ variant, onPress, title }) => {
  const isDisabled = variant === 'disabled';

  return (
    <TouchableOpacity
      style={[styles.button, styles[variant]]}
      onPress={!isDisabled ? onPress : undefined}
      disabled={isDisabled}
    >
      <Text style={[styles.text, isDisabled && styles.textDisabled]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    width: '90%',
  },
  primary: {
    backgroundColor: colors.secondary,
    color: colors.white,
  },
  secondary: {
    backgroundColor: colors.white,
    borderColor: colors.secondary
  },
  white: {
    backgroundColor: colors.white,
  },
  danger: {
    backgroundColor: colors.danger,
  },
  disabled: {
    backgroundColor: colors.textPrimary,
  },
  text: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: 'bold',
  },
  textDisabled: {
    color: colors.textSecondary,
  },
});

export default ReButton;
