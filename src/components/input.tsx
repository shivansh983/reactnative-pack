import { useState } from "react";
import { Text, TextInput, View, type TextInputProps } from "react-native";

// Types
type AppInputProps = TextInputProps & {
  label?: string;
  error?: string;
  className?: string;
  inputClassName?: string;
};

// Component
export const AppInput = ({
  label,
  error,
  className = "",
  inputClassName = "",
  onFocus,
  onBlur,
  ...rest
}: AppInputProps) => {
  const [focused, setFocused] = useState(false);

  const borderClass = error
    ? "border-brand-coral"
    : focused
    ? "border-brand-blue"
    : "border-brand-surface-border";

  return (
    <View className={className}>
      {label ? (
        <Text className="mb-2 text-sm font-medium text-brand-text-secondary">
          {label}
        </Text>
      ) : null}

      <TextInput
        placeholderTextColor="#5C5F68"
        cursorColor="#1A85FF"
        selectionColor="#1A85FF"
        onFocus={(e) => {
          setFocused(true);
          onFocus?.(e);
        }}
        onBlur={(e) => {
          setFocused(false);
          onBlur?.(e);
        }}
        className={`w-full rounded-xl border bg-brand-surface px-4 py-3.5 text-base text-brand-text-primary ${borderClass} ${inputClassName}`}
        {...rest}
      />

      {error ? (
        <Text className="mt-1.5 text-xs text-brand-coral">{error}</Text>
      ) : null}
    </View>
  );
};

export default AppInput;
