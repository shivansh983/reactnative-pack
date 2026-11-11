import { router } from "expo-router";
import { useState } from "react";
import {  Text, View } from "react-native";
import { AppButton } from "../../components/buttons";
import Screen from "../../components/emptyScreen";
import { AppInput } from "../../components/input";

export default function SignIn() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Screen scroll>
        <View className="flex-1 justify-center">
          {
            // Header
          }
          <Text className="text-[28px] font-bold text-brand-text-primary">
            Sign in
          </Text>
          <Text className="mt-2 text-[15px] text-brand-text-secondary">
            Enter your details to continue
          </Text>

          {
            // Form
          }
          <View className="mt-8 gap-4">
            <AppInput
              label="Name"
              placeholder="Enter your name"
              value={username}
              onChangeText={setUsername}
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
            />
            <AppInput
              label="Password"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              returnKeyType="done"
            />
          </View>

          {
            // Actions
          }
          <View className="mt-7 gap-3">
            <AppButton
              title="Sign in"
              onPress={() => router.replace("/(root)/(tabs)")}
            />
            <AppButton
              title="Create account"
              variant="outline"
              onPress={() => router.push("/sign-up")}
            />
          </View>
        </View>
    </Screen>
  );
}
