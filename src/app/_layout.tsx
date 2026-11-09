import "../../global.css";
import { Slot } from "expo-router";

// Root layout. <Slot /> is like {children} in React — it renders whatever
// route is currently active without adding any navigator of its own.
// Global providers (fonts, auth, query client, theme) go here later.
export default function RootLayout() {
  return <Slot />;
}
