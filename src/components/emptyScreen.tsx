import type { ReactNode } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Types
type ScreenProps = {
  children: ReactNode;
  // Not for screens with a FlatList
  scroll?: boolean;
  keyboardOffset?: number;
};

// Component
export default function Screen({
  children,
  scroll = false,
  keyboardOffset = 0,
}: ScreenProps) {
  return (
    <SafeAreaView className="flex-1 bg-brand-bg">
      <KeyboardAvoidingView
        className="flex-1"
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={keyboardOffset}
      >
        {scroll ? (
          <ScrollView
            className="flex-1"
            contentContainerClassName="grow px-5"
            keyboardShouldPersistTaps="handled"
            keyboardDismissMode="on-drag"
            showsVerticalScrollIndicator={false}
          >
            {children}
          </ScrollView>
        ) : (
          <View className="flex-1 px-5">{children}</View>
        )}
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
