import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { AppButton } from "../../components/buttons";
import Screen from "../../components/emptyScreen";
import { AppInput } from "../../components/input";

// Types
type Errors = {
  name?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
};

// Screen
export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  // Validation
  const validate = () => {
    const next: Errors = {};

    if (!name.trim()) next.name = "Enter your name";

    if (!email.trim()) next.email = "Enter your email";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
      next.email = "Enter a valid email";

    if (password.length < 8)
      next.password = "Password must be 8+ characters";

    if (!confirmPassword) next.confirmPassword = "Re-enter your password";
    else if (confirmPassword !== password)
      next.confirmPassword = "Passwords don't match";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = () => {
    if (validate()) router.push("/otp-verify");
  };

  return (
    <Screen scroll>
      <View className="flex-1 justify-center py-8">
        {
          // Heading
        }
        <Text className="text-[28px] font-bold text-brand-text-primary">
          Create account
        </Text>
        <Text className="mt-2 text-[15px] text-brand-text-secondary">
          Fill in your details to get started
        </Text>

        {
          // Form
        }
        <View className="mt-8 gap-4">
          <AppInput
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
            error={errors.name}
            autoCapitalize="words"
            autoCorrect={false}
            returnKeyType="next"
          />
          <AppInput
            label="Email"
            placeholder="you@gmail.com"
            value={email}
            onChangeText={setEmail}
            error={errors.email}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="next"
          />
          <AppInput
            label="Password"
            placeholder="8+ characters"
            value={password}
            onChangeText={setPassword}
            error={errors.password}
            secureTextEntry
            autoCapitalize="none"
            returnKeyType="next"
          />
          <AppInput
            label="Confirm password"
            placeholder="Re-enter your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            error={errors.confirmPassword}
            secureTextEntry
            autoCapitalize="none"
            returnKeyType="done"
            onSubmitEditing={onSubmit}
          />
        </View>

        {
          // Actions
        }
        <View className="mt-7 gap-3">
          <AppButton title="Continue" onPress={onSubmit} />
          <AppButton
            title="I have an account"
            variant="outline"
            onPress={() => router.back()}
          />
        </View>
      </View>
    </Screen>
  );
}
