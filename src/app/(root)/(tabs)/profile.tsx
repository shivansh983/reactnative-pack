import Ionicons from "@expo/vector-icons/Ionicons";
import { Alert, Text, View } from "react-native";
import { AppButton } from "../../../components/buttons";
import Screen from "../../../components/emptyScreen";

// Types
type Experience = {
  id: string;
  role: string;
  company: string;
  period: string;
  summary: string;
};

// Sample profile
const profile = {
  name: "Shivansh",
  headline: "React Native Developer",
  location: "Pune, IN",
  about:
    "Learning React Native by building this job app. Still a work in progress.",
  skills: ["React Native", "TypeScript", "Expo", "NativeWind", "Node.js"],
};

const experience: Experience[] = [
  {
    id: "e1",
    role: "Frontend Developer",
    company: "Company 1",
    period: "2024 - Present",
    summary: "Built mobile screens and reusable components.",
  },
  {
    id: "e2",
    role: "Frontend Intern",
    company: "Company 2",
    period: "2023 - 2024",
    summary: "Worked on landing pages and dashboards.",
  },
];

// Screen
export default function ProfileScreen() {
  const todo = (what: string) =>
    Alert.alert(what, "Not added yet", [{ text: "OK" }]);

  return (
    <Screen scroll>
      <View className="py-6">
        {
          // Header
        }
        <View className="items-center">
          <View className="h-20 w-20 items-center justify-center rounded-full bg-brand-blue/15">
            <Text className="text-3xl font-bold text-brand-blue">
              {profile.name.charAt(0)}
            </Text>
          </View>

          <Text className="mt-3 text-xl font-bold text-brand-text-primary">
            {profile.name}
          </Text>
          <Text className="mt-0.5 text-sm text-brand-text-secondary">
            {profile.headline}
          </Text>

          <View className="mt-1 flex-row items-center gap-1">
            <Ionicons name="location-outline" size={13} color="#8A8D96" />
            <Text className="text-xs text-brand-text-secondary">
              {profile.location}
            </Text>
          </View>
        </View>

        {
          // Actions
        }
        <View className="mt-5 flex-row gap-3">
          <AppButton
            title="Edit profile"
            className="flex-1"
            onPress={() => todo("Edit profile")}
          />
          <AppButton
            title="Share"
            variant="outline"
            className="flex-1"
            onPress={() => todo("Share profile")}
          />
        </View>

        {
          // Quick stats
        }
        <View className="mt-5 flex-row rounded-2xl border border-brand-surface-border bg-brand-surface">
          {[
            { label: "Profile views", value: 148 },
            { label: "Applications", value: 24 },
            { label: "Interviews", value: 3 },
          ].map((stat, i) => (
            <View
              key={stat.label}
              className={`flex-1 items-center py-4 ${
                i > 0 ? "border-l border-brand-surface-border" : ""
              }`}
            >
              <Text className="text-lg font-bold text-brand-text-primary">
                {stat.value}
              </Text>
              <Text className="mt-0.5 text-[11px] text-brand-text-secondary">
                {stat.label}
              </Text>
            </View>
          ))}
        </View>

        {
          // About
        }
        <Text className="mt-7 text-lg font-semibold text-brand-text-primary">
          About
        </Text>
        <Text className="mt-2 text-sm leading-5 text-brand-text-secondary">
          {profile.about}
        </Text>

        {
          // Skills
        }
        <Text className="mt-7 text-lg font-semibold text-brand-text-primary">
          Skills
        </Text>
        <View className="mt-3 flex-row flex-wrap gap-2">
          {profile.skills.map((skill) => (
            <View
              key={skill}
              className="rounded-full border border-brand-surface-border bg-brand-surface px-3 py-1.5"
            >
              <Text className="text-xs text-brand-text-primary">{skill}</Text>
            </View>
          ))}
        </View>

        {
          // Experience
        }
        <Text className="mt-7 text-lg font-semibold text-brand-text-primary">
          Experience
        </Text>
        <View className="mt-3 overflow-hidden rounded-2xl border border-brand-surface-border bg-brand-surface">
          {experience.map((item, i) => (
            <View
              key={item.id}
              className={`flex-row gap-3 p-4 ${
                i > 0 ? "border-t border-brand-surface-border" : ""
              }`}
            >
              <View className="h-10 w-10 items-center justify-center rounded-xl bg-brand-surface-border">
                <Ionicons name="briefcase-outline" size={17} color="#8A8D96" />
              </View>

              <View className="flex-1">
                <Text className="text-sm font-semibold text-brand-text-primary">
                  {item.role}
                </Text>
                <Text className="mt-0.5 text-xs text-brand-text-secondary">
                  {item.company} - {item.period}
                </Text>
                <Text className="mt-1.5 text-xs leading-4 text-brand-text-muted">
                  {item.summary}
                </Text>
              </View>
            </View>
          ))}
        </View>

        {
          // Resume
        }
        <Text className="mt-7 text-lg font-semibold text-brand-text-primary">
          Resume
        </Text>
        <View className="mt-3 flex-row items-center gap-3 rounded-2xl border border-brand-surface-border bg-brand-surface p-4">
          <View className="h-10 w-10 items-center justify-center rounded-xl bg-brand-coral/15">
            <Ionicons name="document-text-outline" size={18} color="#FF6B4A" />
          </View>
          <View className="flex-1">
            <Text className="text-sm font-medium text-brand-text-primary">
              resume.pdf
            </Text>
            <Text className="mt-0.5 text-xs text-brand-text-secondary">
              Updated 2w ago
            </Text>
          </View>
          <AppButton
            title="Replace"
            variant="outline"
            onPress={() => todo("Replace resume")}
          />
        </View>
      </View>
    </Screen>
  );
}
