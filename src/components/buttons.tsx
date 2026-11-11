import { Pressable, Text } from "react-native";

// Types
type ButtonVariant = "primary" | "danger" | "outline";

type AppButtonProps = {
  title: string;
  onPress: () => void;
  variant?: ButtonVariant;
  disabled?: boolean;
  className?: string;
};

// Variant styles
const containerStyles: Record<ButtonVariant, string> = {
  primary: "bg-brand-blue active:bg-brand-blue/80",
  danger: "bg-brand-coral active:bg-brand-coral/80",
  outline: "bg-transparent border border-brand-blue active:bg-brand-blue/10",
};

const textStyles: Record<ButtonVariant, string> = {
  primary: "text-white",
  danger: "text-white",
  outline: "text-brand-blue",
};

// Component
export const AppButton = ({
  title,
  onPress,
  variant = "primary",
  disabled = false,
  className = "",
}: AppButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      accessibilityRole="button"
      className={`flex-row items-center justify-center rounded-xl px-5 py-3.5 ${
        containerStyles[variant]
      } ${disabled ? "opacity-50" : ""} ${className}`}
    >
      <Text className={`text-base font-semibold ${textStyles[variant]}`}>
        {title}
      </Text>
    </Pressable>
  );
};

export default AppButton;
