import { Stack } from "expo-router";

// Group settings
export const unstable_settings = {
  anchor: "sign-in",
};

// Layout
export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        contentStyle: { backgroundColor: "#0B0E14" },
      }}
    >
      {
        // Screens
      }
      <Stack.Screen name="sign-in" />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="otp-verify" />
    </Stack>
  );
}
