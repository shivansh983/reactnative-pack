import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { Icon, Label, NativeTabs } from "expo-router/unstable-native-tabs";
import { Platform } from "react-native";

// Config
const useNativeTabs = Platform.OS === "ios";

const COLORS = {
  background: "#0B0E14",
  active: "#4A9EFF",
  inactive: "#5C5F68",
  border: "#232838",
};

// Layout
export default function TabLayout() {
  // iOS: native tab bar
  if (useNativeTabs) {
    return (
      <NativeTabs
        backgroundColor={COLORS.background}
        tintColor={COLORS.active}
        iconColor={{ default: COLORS.inactive, selected: COLORS.active }}
        labelStyle={{
          default: { color: COLORS.inactive },
          selected: { color: COLORS.active },
        }}
      >
        <NativeTabs.Trigger name="index">
          <Icon sf="house.fill" />
          <Label>Home</Label>
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="jobList">
          <Icon sf="list.bullet" />
          <Label>Jobs</Label>
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="profile">
          <Icon sf="person.fill" />
          <Label>Profile</Label>
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="setting">
          <Icon sf="gearshape.fill" />
          <Label>Settings</Label>
        </NativeTabs.Trigger>
      </NativeTabs>
    );
  }

  // Android / web: JS tab bar
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.active,
        tabBarInactiveTintColor: COLORS.inactive,
        tabBarStyle: {
          backgroundColor: COLORS.background,
          borderTopColor: COLORS.border,
          paddingTop: 4,
          height: 64,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="jobList"
        options={{
          title: "Jobs",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="setting"
        options={{
          title: "Settings",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings-sharp" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
