import React, { useState, useEffect } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { TopAppBar } from '../components/TopAppBar';
import { BottomNavBar } from '../components/BottomNavBar';
import Animated, { 
  useSharedValue, 
  withRepeat, 
  withTiming, 
  useAnimatedStyle,
  Easing,
  withSequence
} from 'react-native-reanimated';

export default function ProcessingScreen() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const scanLinePosition = useSharedValue(-100);
  const pulseScale = useSharedValue(0.95);
  const pulseOpacity = useSharedValue(0.8);

  useEffect(() => {
    scanLinePosition.value = withRepeat(
      withTiming(400, { duration: 2500, easing: Easing.inOut(Easing.ease) }),
      -1,
      false
    );

    pulseScale.value = withRepeat(
      withSequence(
        withTiming(1.05, { duration: 1000 }),
        withTiming(0.95, { duration: 1000 })
      ),
      -1,
      true
    );

    pulseOpacity.value = withRepeat(
      withSequence(
        withTiming(0.4, { duration: 1000 }),
        withTiming(0.8, { duration: 1000 })
      ),
      -1,
      true
    );

    // Mock progression
    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev < 4) return prev + 1;
        clearInterval(interval);
        // After finishing, navigate to results
        setTimeout(() => router.push('/results'), 1000);
        return prev;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const animatedScanLineStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: `${scanLinePosition.value}%` }],
  }));

  const pulseStyle = useAnimatedStyle(() => ({
    transform: [{ scale: pulseScale.value }],
    opacity: pulseOpacity.value,
  }));

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <TopAppBar title="BrailleVision" variant="solid" />

      <View className="flex-1 items-center justify-center px-container-padding pb-[80px]">
        {/* Processing Canvas */}
        <View className="relative w-full aspect-square max-h-[360px] rounded-xl overflow-hidden mb-stack-gap-lg bg-surface-container border-2 border-outline-variant">
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCS8ZDcm55MAuu_GCyl4Y3uGFs1G1qLDLkkL3qylOiJOZZWaez8tjFHmgjDTXO42JyVQzANeyHw1n22jhh9V_3n4EnKROUxKJr7UmdyeTifS-Z0hCaxb8TpjCfUrkfatIKgDBEv1uNDVqLaEJzTTAHYU89ba18WdsyHWuLn7Zp3pkdVIFl0JUZkhKiuCqdKPuLCZLeKaoO6STjLs8DafXxg4Va6ppyy4fHjrLw49Hxa9yhnJkV_Uq5Tc_7Vm5dcolfOuWeHrWr9jh4' }}
            className="w-full h-full object-cover"
            blurRadius={8}
            style={{ opacity: 0.6 }}
          />

          {/* Scanning Overlay */}
          <View className="absolute inset-0 flex items-center justify-center">
            <Animated.View 
              className="absolute w-48 h-48 rounded-full border-4 border-primary-container"
              style={pulseStyle}
            />
            {/* Spinning Ring Mock */}
            <View className="absolute w-40 h-40 rounded-full border-8 border-primary-container border-t-transparent animate-spin" />
            <MaterialIcons name="photo-camera" size={48} color="#ffd600" />
            <Animated.View 
              className="absolute top-0 left-0 w-full h-[2px] bg-primary-container shadow-[0_0_15px_#ffd600]"
              style={animatedScanLineStyle}
            />
          </View>
        </View>

        {/* Status & Steps */}
        <View className="w-full space-y-stack-gap-md text-center">
          <View className="mb-stack-gap-lg items-center">
            <Text className="font-headline-md-mobile text-headline-md-mobile text-primary-container mb-2 font-bold">
              Analyzing Braille
            </Text>
            <Text className="text-on-surface-variant font-body-md">
              Please hold steady while the AI extracts information.
            </Text>
          </View>

          <View className="w-full space-y-3">
            {/* Step 1 */}
            <View className={`flex-row items-center gap-4 p-4 rounded-lg border-l-4 transition-all ${currentStep >= 1 ? 'bg-surface-container-high border-primary-container' : 'bg-surface-container border-outline-variant opacity-60'}`}>
              <View className={`w-[32px] h-[32px] flex items-center justify-center rounded-full ${currentStep > 1 ? 'bg-primary-container' : 'bg-transparent border-2 border-primary-container'}`}>
                {currentStep > 1 ? (
                  <MaterialIcons name="check" size={16} color="#002022" />
                ) : (
                  <View className="w-2 h-2 bg-primary-container rounded-full animate-bounce" />
                )}
              </View>
              <Text className={`font-label-lg ${currentStep >= 1 ? 'text-on-surface' : 'text-on-surface-variant'}`}>Detecting Braille...</Text>
            </View>

            {/* Step 2 */}
            <View className={`flex-row items-center gap-4 p-4 rounded-lg border-l-4 transition-all ${currentStep >= 2 ? 'bg-surface-container-high border-primary-container' : 'bg-surface-container border-outline-variant opacity-60'}`}>
              <View className={`w-[32px] h-[32px] flex items-center justify-center rounded-full ${currentStep > 2 ? 'bg-primary-container' : currentStep === 2 ? 'bg-transparent border-2 border-primary-container' : 'border-2 border-outline-variant'}`}>
                {currentStep > 2 ? (
                  <MaterialIcons name="check" size={16} color="#002022" />
                ) : currentStep === 2 ? (
                  <View className="w-2 h-2 bg-primary-container rounded-full animate-bounce" />
                ) : (
                  <MaterialIcons name="schedule" size={16} color="#4d4632" />
                )}
              </View>
              <Text className={`font-label-lg ${currentStep >= 2 ? 'text-on-surface' : 'text-on-surface-variant'}`}>Extracting Dots...</Text>
            </View>

            {/* Step 3 */}
            <View className={`flex-row items-center gap-4 p-4 rounded-lg border-l-4 transition-all ${currentStep >= 3 ? 'bg-surface-container-high border-primary-container' : 'bg-surface-container border-outline-variant opacity-60'}`}>
              <View className={`w-[32px] h-[32px] flex items-center justify-center rounded-full ${currentStep > 3 ? 'bg-primary-container' : currentStep === 3 ? 'bg-transparent border-2 border-primary-container' : 'border-2 border-outline-variant'}`}>
                {currentStep > 3 ? (
                  <MaterialIcons name="check" size={16} color="#002022" />
                ) : currentStep === 3 ? (
                  <View className="w-2 h-2 bg-primary-container rounded-full animate-bounce" />
                ) : (
                  <MaterialIcons name="schedule" size={16} color="#4d4632" />
                )}
              </View>
              <Text className={`font-label-lg ${currentStep >= 3 ? 'text-on-surface' : 'text-on-surface-variant'}`}>Translating Pattern...</Text>
            </View>

            {/* Step 4 */}
            <View className={`flex-row items-center gap-4 p-4 rounded-lg border-l-4 transition-all ${currentStep >= 4 ? 'bg-surface-container-high border-primary-container' : 'bg-surface-container border-outline-variant opacity-60'}`}>
              <View className={`w-[32px] h-[32px] flex items-center justify-center rounded-full ${currentStep > 4 ? 'bg-primary-container' : currentStep === 4 ? 'bg-transparent border-2 border-primary-container' : 'border-2 border-outline-variant'}`}>
                {currentStep > 4 ? (
                  <MaterialIcons name="check" size={16} color="#002022" />
                ) : currentStep === 4 ? (
                  <View className="w-2 h-2 bg-primary-container rounded-full animate-bounce" />
                ) : (
                  <MaterialIcons name="volume-up" size={16} color="#4d4632" />
                )}
              </View>
              <Text className={`font-label-lg ${currentStep >= 4 ? 'text-on-surface' : 'text-on-surface-variant'}`}>Generating Speech...</Text>
            </View>
          </View>
        </View>

        {/* Cancel Button */}
        <View className="mt-stack-gap-lg w-full">
          <Pressable 
            onPress={() => router.back()}
            className="w-full h-[56px] bg-secondary-container rounded-lg flex-row items-center justify-center gap-2 active:scale-95 transition-all"
          >
            <MaterialIcons name="close" size={24} color="#b7b5b4" />
            <Text className="text-on-secondary-container font-bold">CANCEL SCAN</Text>
          </Pressable>
        </View>
      </View>

      <BottomNavBar activeTab="scan" />
    </SafeAreaView>
  );
}
