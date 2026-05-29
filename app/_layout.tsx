import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import '../global.css';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="home" />
        <Stack.Screen name="live-detection" />
        <Stack.Screen name="processing" />
        <Stack.Screen name="results" />
        <Stack.Screen name="history" />
        <Stack.Screen name="settings" />
      </Stack>
    </SafeAreaProvider>
  );
}
