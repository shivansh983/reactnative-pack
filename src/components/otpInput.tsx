import { useRef, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

// Types
type OtpInputProps = {
  value: string;
  onChangeText: (value: string) => void;
  length?: number;
  error?: string;
};

// Component
export const OtpInput = ({
  value,
  onChangeText,
  length = 6,
  error,
}: OtpInputProps) => {
  const inputRef = useRef<TextInput>(null);
  const [focused, setFocused] = useState(false);

  const handleChange = (text: string) => {
    const digits = text.replace(/[^0-9]/g, "").slice(0, length);
    onChangeText(digits);
    if (digits.length === length) inputRef.current?.blur();
  };

  return (
    <View>
      <Pressable
        className="relative flex-row gap-2"
        onPress={() => inputRef.current?.focus()}
      >
        {Array.from({ length }).map((_, i) => {
          const char = value[i];
          const active =
            focused && (i === value.length || (i === length - 1 && !!char));

          const boxClass = error
            ? "border-brand-coral bg-brand-coral/5"
            : active
            ? "border-brand-blue bg-brand-blue/10"
            : char
            ? "border-brand-surface-border bg-brand-surface"
            : "border-brand-surface-border bg-brand-surface/40";

          return (
            <View
              key={i}
              className={`h-14 flex-1 items-center justify-center rounded-xl border-2 ${boxClass}`}
            >
              {char ? (
                <Text className="text-2xl font-semibold text-brand-text-primary">
                  {char}
                </Text>
              ) : (
                <View
                  className={`h-1.5 w-1.5 rounded-full ${
                    active ? "bg-brand-blue" : "bg-brand-text-muted"
                  }`}
                />
              )}
            </View>
          );
        })}

        {
          // One real input stretched over the boxes, so paste and SMS autofill work
        }
        <TextInput
          ref={inputRef}
          value={value}
          onChangeText={handleChange}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          selection={{ start: value.length, end: value.length }}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete="sms-otp"
          maxLength={length}
          caretHidden
          className="absolute inset-0 text-center opacity-0"
        />
      </Pressable>

      {error ? (
        <Text className="mt-2 text-xs text-brand-coral">{error}</Text>
      ) : null}
    </View>
  );
};

export default OtpInput;
