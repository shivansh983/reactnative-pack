import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, Pressable, Switch, Text, View } from "react-native";
import Screen from "../../../components/emptyScreen";

// Types
type RowProps = {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  hint?: string;
  onPress?: () => void;
  right?: React.ReactNode;
  danger?: boolean;
  first?: boolean;
};

// Row
const Row = ({
  icon,
  label,
  hint,
  onPress,
  right,
  danger = false,
  first = false,
}: RowProps) => {
  const content = (
    <View
      className={`flex-row items-center gap-3 p-4 ${
        first ? "" : "border-t border-brand-surface-border"
      }`}
    >
      <View className="h-9 w-9 items-center justify-center rounded-full bg-brand-surface-border">
        <Ionicons
          name={icon}
          size={17}
          color={danger ? "#FF6B4A" : "#8A8D96"}
        />
      </View>

      <View className="flex-1">
        <Text
          className={`text-sm font-medium ${
            danger ? "text-brand-coral" : "text-brand-text-primary"
          }`}
        >
          {label}
        </Text>
        {hint ? (
          <Text className="mt-0.5 text-xs text-brand-text-secondary">
            {hint}
          </Text>
        ) : null}
      </View>

      {right ?? (
        <Ionicons name="chevron-forward" size={16} color="#5C5F68" />
      )}
    </View>
  );

  if (!onPress) return content;

  return (
    <Pressable onPress={onPress} className="active:bg-brand-surface-border/40">
      {content}
    </Pressable>
  );
};

// Section
const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <View className="mt-7">
    <Text className="mb-2 text-xs font-semibold uppercase tracking-wide text-brand-text-muted">
      {title}
    </Text>
    <View className="overflow-hidden rounded-2xl border border-brand-surface-border bg-brand-surface">
      {children}
    </View>
  </View>
);

// Screen
export default function SettingScreen() {
  const [pushEnabled, setPushEnabled] = useState(true);
  const [emailAlerts, setEmailAlerts] = useState(false);
  const [openToWork, setOpenToWork] = useState(true);

  const todo = (what: string) =>
    Alert.alert(what, "Not added yet", [{ text: "OK" }]);

  const onSignOut = () =>
    Alert.alert("Sign out", "You'll have to sign in again.", [
      { text: "Cancel", style: "cancel" },
      {
        text: "Sign out",
        style: "destructive",
        onPress: () => router.replace("/(auth)/sign-in"),
      },
    ]);

  const toggle = (value: boolean, onChange: (next: boolean) => void) => (
    <Switch
      value={value}
      onValueChange={onChange}
      trackColor={{ false: "#232838", true: "#1A85FF" }}
      thumbColor="#F2EFE9"
    />
  );

  return (
    <Screen scroll>
      <View className="py-6">
        <Text className="text-[26px] font-bold text-brand-text-primary">
          Settings
        </Text>

        {
          // Profile summary
        }
        <Pressable
          onPress={() => router.push("/profile")}
          className="mt-5 flex-row items-center gap-3 rounded-2xl border border-brand-surface-border bg-brand-surface p-4 active:opacity-80"
        >
          <View className="h-12 w-12 items-center justify-center rounded-full bg-brand-blue/15">
            <Text className="text-lg font-bold text-brand-blue">S</Text>
          </View>
          <View className="flex-1">
            <Text className="text-base font-semibold text-brand-text-primary">
              Shivansh
            </Text>
            <Text className="mt-0.5 text-xs text-brand-text-secondary">
              View profile
            </Text>
          </View>
          <Ionicons name="chevron-forward" size={16} color="#5C5F68" />
        </Pressable>

        <Section title="Job search">
          <Row
            first
            icon="megaphone-outline"
            label="Open to work"
            hint="Show my profile to recruiters"
            right={toggle(openToWork, setOpenToWork)}
          />
          <Row
            icon="document-text-outline"
            label="Resume"
            hint="resume.pdf"
            onPress={() => todo("Resume")}
          />
          <Row
            icon="bookmark-outline"
            label="Saved jobs"
            hint="12 jobs"
            onPress={() => todo("Saved jobs")}
          />
        </Section>

        <Section title="Notifications">
          <Row
            first
            icon="notifications-outline"
            label="Push notifications"
            right={toggle(pushEnabled, setPushEnabled)}
          />
          <Row
            icon="mail-outline"
            label="Email alerts"
            right={toggle(emailAlerts, setEmailAlerts)}
          />
        </Section>

        <Section title="Account">
          <Row
            first
            icon="lock-closed-outline"
            label="Change password"
            onPress={() => todo("Change password")}
          />
          <Row
            icon="shield-checkmark-outline"
            label="Privacy"
            onPress={() => todo("Privacy")}
          />
          <Row
            icon="help-circle-outline"
            label="Help"
            onPress={() => todo("Help")}
          />
        </Section>

        <Section title="Other">
          <Row
            first
            danger
            icon="log-out-outline"
            label="Sign out"
            onPress={onSignOut}
            right={<View />}
          />
          <Row
            danger
            icon="trash-outline"
            label="Delete account"
            onPress={() => todo("Delete account")}
            right={<View />}
          />
        </Section>

        <Text className="mt-8 text-center text-xs text-brand-text-muted">
          v1.0.0
        </Text>
      </View>
    </Screen>
  );
}
