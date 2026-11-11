import Ionicons from "@expo/vector-icons/Ionicons";
import { Text, View } from "react-native";

// Types
export type StatTone = "blue" | "success" | "coral" | "muted";

type StatCardProps = {
  label: string;
  value: string | number;
  icon: keyof typeof Ionicons.glyphMap;
  tone?: StatTone;
};

// Tone styles
const iconWrap: Record<StatTone, string> = {
  blue: "bg-brand-blue/15",
  success: "bg-brand-success/15",
  coral: "bg-brand-coral/15",
  muted: "bg-brand-text-muted/15",
};

const iconColor: Record<StatTone, string> = {
  blue: "#1A85FF",
  success: "#3DDC84",
  coral: "#FF6B4A",
  muted: "#8A8D96",
};

// Component
export const StatCard = ({
  label,
  value,
  icon,
  tone = "blue",
}: StatCardProps) => {
  return (
    <View className="flex-1 rounded-2xl border border-brand-surface-border bg-brand-surface p-4">
      <View
        className={`h-9 w-9 items-center justify-center rounded-full ${iconWrap[tone]}`}
      >
        <Ionicons name={icon} size={18} color={iconColor[tone]} />
      </View>

      <Text className="mt-3 text-2xl font-bold text-brand-text-primary">
        {value}
      </Text>
      <Text className="mt-0.5 text-xs text-brand-text-secondary">{label}</Text>
    </View>
  );
};

export default StatCard;
