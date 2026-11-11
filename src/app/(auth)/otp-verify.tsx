import { router } from "expo-router";
import { useState } from "react";
import { Text, View } from "react-native";
import { AppButton } from "../../components/buttons";
import Screen from "../../components/emptyScreen";
import { AppInput } from "../../components/input";

const CODE_LENGTH = 6;

// Screen
export default function OtpVerify() {
  const [code, setCode] = useState("");
  const [error, setError] = useState<string | undefined>();
  const complete = code.length === CODE_LENGTH;

  const onVerify = () => {
    if (!complete) {
      setError(`Enter all ${CODE_LENGTH} digits`);
      return;
    }
    setError(undefined);
    router.replace("/(root)/(tabs)");
  };

  return (
    <Screen scroll>
      <View className="flex-1 justify-center py-8">
        {
          // Heading
        }
        <Text className="text-[28px] font-bold text-brand-text-primary">
          Enter code
        </Text>
        <Text className="mt-2 text-[15px] text-brand-text-secondary">
          We sent a 6 digit code to your email
        </Text>

        {
          // Code
        }
        <View className="mt-8">
          <AppInput
            label="Code"
            placeholder="123456"
            value={code}
            onChangeText={(text) => {
              setCode(text.replace(/[^0-9]/g, "").slice(0, CODE_LENGTH));
              if (error) setError(undefined);
            }}
            error={error}
            keyboardType="number-pad"
            maxLength={CODE_LENGTH}
            textContentType="oneTimeCode"
            autoComplete="sms-otp"
            returnKeyType="done"
            onSubmitEditing={onVerify}
            inputClassName="text-center text-2xl font-semibold tracking-[6px]"
          />
        </View>

        {
          // Actions
        }
        <View className="mt-7 gap-3">
          <AppButton
            title="Verify"
            onPress={onVerify}
            disabled={!complete}
          />
          <AppButton
            title="Back"
            variant="outline"
            onPress={() => router.back()}
          />
        </View>
      </View>
    </Screen>
  );
}
