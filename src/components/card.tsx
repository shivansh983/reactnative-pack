import { Pressable, View } from "react-native";
import type { ReactNode } from "react";

// Types
type CardVariant = "elevated" | "outline" | "flat";

type AppCardProps = {
  children: ReactNode;
  onPress?: () => void;
  className?: string;
  variant?: CardVariant;
};

// Variant styles
const variantStyles: Record<CardVariant, string> = {
  elevated: "bg-brand-surface border border-brand-surface-border",
  outline: "bg-transparent border border-brand-surface-border",
  flat: "bg-brand-surface/50 border-0",
};

// Component
export const AppCard = ({
  children,
  onPress,
  className = "",
  variant = "elevated",
}: AppCardProps) => {
  const baseStyles = `rounded-2xl p-4 my-2 ${variantStyles[variant]} ${className}`;

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        accessibilityRole="button"
        className={`${baseStyles} active:opacity-80 active:scale-[0.99]`}
      >
        {children}
      </Pressable>
    );
  }

  return <View className={baseStyles}>{children}</View>;
};

export default AppCard;
