import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack>
    <Stack.Screen name="loadingScreen" options={{ title: 'loadingScreen'}} /> 
    <Stack.Screen name="loginScreen" options={{ title: 'loginScreen'}} /> 
    <Stack.Screen name="forgotPasswordScreen" options={{ title: 'forgotPasswordScreen' }} /> 
    <Stack.Screen name="registerScreen" options={{ title: 'registerScreen' }} /> 
  </Stack>;
}
