import React from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import Animated, { 
  useSharedValue, 
  withRepeat, 
  withSequence, 
  withTiming, 
  useAnimatedStyle 
} from 'react-native-reanimated';

export default function SplashScreen() {
  const router = useRouter();
  
  const pulseScale = useSharedValue(0.95);
  const pulseOpacity = useSharedValue(0.8);

  React.useEffect(() => {
    pulseScale.value = withRepeat(
      withSequence(
        withTiming(1.02, { duration: 2000 }),
        withTiming(0.95, { duration: 2000 })
      ),
      -1,
      true
    );
    pulseOpacity.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 2000 }),
        withTiming(0.8, { duration: 2000 })
      ),
      -1,
      true
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: pulseScale.value }],
      opacity: pulseOpacity.value,
      shadowColor: 'rgba(255, 214, 0, 0.3)',
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 1,
      shadowRadius: 15,
      elevation: 5,
    };
  });

  return (
    <SafeAreaView className="flex-1 bg-background items-center justify-between font-body-md text-body-md p-container-padding">
      <View className="w-full items-center py-stack-gap-md" />
      
      <View className="flex-1 flex-col items-center justify-center w-full max-w-md mx-auto">
        <View className="relative mb-stack-gap-lg">
          <Animated.View className="flex items-center justify-center rounded-full" style={animatedStyle}>
            {/* The actual image from the splash screen HTML could be loaded here. We'll use a placeholder colored circle to simulate the logo glow */}
            <View className="w-48 h-48 md:w-64 md:h-64 bg-primary-container/20 rounded-full items-center justify-center border-4 border-primary-container">
               <Text className="text-primary-container font-headline-lg font-bold">BV</Text>
            </View>
          </Animated.View>
        </View>

        <View className="text-center space-y-stack-gap-sm px-gutter items-center">
          <Text className="font-headline-lg-mobile text-headline-lg-mobile md:font-headline-lg md:text-headline-lg text-primary-container tracking-tighter">
            BrailleVision
          </Text>
          <Text className="font-body-lg text-body-lg text-on-surface-variant max-w-[280px] text-center opacity-90 mt-2">
            Reading Braille. Empowering Communication.
          </Text>
        </View>
      </View>

      <View className="w-full max-w-md pb-12">
        <Pressable 
          onPress={() => router.push('/home')}
          className="w-full h-[56px] bg-primary-container rounded-lg flex-row items-center justify-center gap-stack-gap-sm active:scale-95 transition-all"
        >
          <Text className="text-on-primary-fixed font-headline-sm-mobile text-headline-sm-mobile md:font-headline-sm md:text-headline-sm">
            Get Started
          </Text>
          <MaterialIcons name="arrow-forward" size={24} color="#221b00" />
        </Pressable>

        <Text className="mt-stack-gap-md text-center text-on-surface-variant font-label-lg text-label-lg opacity-60">
          Optimized for accessibility and real-time translation.
        </Text>
      </View>
    </SafeAreaView>
  );
}
