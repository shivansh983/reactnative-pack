import { Redirect } from "expo-router";

// Auth state
const isSignedIn = false;

// Entry redirect
export default function Index() {
  if (isSignedIn) {
    return <Redirect href="/(root)/(tabs)" />;
  }

  return <Redirect href="/sign-in" />;
}
