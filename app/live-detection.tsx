import React, { useState } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { BottomNavBar } from '../components/BottomNavBar';
import Animated, { 
  useSharedValue, 
  withRepeat, 
  withTiming, 
  useAnimatedStyle,
  Easing,
  withSequence
} from 'react-native-reanimated';

export default function LiveDetectionScreen() {
  const router = useRouter();
  const [flashOn, setFlashOn] = useState(false);
  const [voiceOn, setVoiceOn] = useState(false);

  const scanLinePosition = useSharedValue(0);
  const pulseOpacity = useSharedValue(0.3);

  React.useEffect(() => {
    scanLinePosition.value = withRepeat(
      withTiming(100, { duration: 4000, easing: Easing.linear }),
      -1,
      false
    );
    pulseOpacity.value = withRepeat(
      withSequence(
        withTiming(1, { duration: 1000 }),
        withTiming(0.3, { duration: 1000 })
      ),
      -1,
      true
    );
  }, []);

  const animatedScanLineStyle = useAnimatedStyle(() => ({
    top: `${scanLinePosition.value}%`,
  }));

  const animatedBoxStyle = useAnimatedStyle(() => ({
    borderColor: `rgba(255, 214, 0, ${pulseOpacity.value})`,
  }));

  const TopBarRightElements = (
    <View className="flex-row gap-2">
      <Pressable 
        onPress={() => setFlashOn(!flashOn)}
        className="w-[56px] h-[56px] items-center justify-center bg-surface-container-high/60 rounded-full active:scale-95 transition-all"
      >
        <MaterialIcons 
          name={flashOn ? "flashlight-on" : "flashlight-off"} 
          size={24} 
          color={flashOn ? "#ffd600" : "#e5e2e1"} 
        />
      </Pressable>
      <Pressable 
        onPress={() => setVoiceOn(!voiceOn)}
        className="w-[56px] h-[56px] items-center justify-center bg-surface-container-high/60 rounded-full active:scale-95 transition-all"
      >
        <MaterialIcons 
          name="record-voice-over" 
          size={24} 
          color={voiceOn ? "#ffd600" : "#e5e2e1"} 
        />
      </Pressable>
      <Pressable 
        onPress={() => router.push('/settings')}
        className="w-[56px] h-[56px] items-center justify-center bg-surface-container-high/60 rounded-full active:scale-95 transition-all"
      >
        <MaterialIcons name="settings" size={24} color="#e5e2e1" />
      </Pressable>
    </View>
  );

  return (
    <View className="flex-1 bg-background">
      {/* Full Screen Camera View Mockup */}
      <View className="absolute inset-0 z-0 bg-surface-container-lowest">
        <Image 
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB3T8714LoqonSp-N7r_gm3iSt7ogS4K0M4hkG2WMxVQwyrzYvtsUC-ppiC_ePCAMx_Mul8jTBXVXkhVLsJR4ONtU1ttxiR2w04IU922zhWC2y2QFEaV-8vvwEjnWMk5pXLCnYX5zuLBS2i3BLg6vL_5ExX_wOFBNOroDtnGbBFqB-got7AHoIW5sZgs4Hm5yB-O5Djm8MIWWdzpEErqvq0h8nWrfByvjENRW-w5p5DtSXVrHvQjO2kJYtw1fzsEoChkBbdqbqro8M' }}
          className="w-full h-full object-cover opacity-60"
        />
        <View className="absolute inset-0 bg-black/30" />
        <Animated.View 
          className="absolute left-0 w-full h-[2px] bg-primary-container shadow-[0_0_15px_#ffd600] z-10"
          style={animatedScanLineStyle}
        />
      </View>

      {/* AI Bounding Boxes Overlays */}
      <View className="absolute inset-0 z-10 pointer-events-none p-container-padding">
        <Animated.View 
          className="absolute top-[30%] left-[20%] w-[120px] h-[80px] border-2 rounded-lg bg-primary-container/10 justify-center"
          style={animatedBoxStyle}
        >
          <View className="absolute -top-7 left-0 bg-primary-container px-2 py-0.5 rounded">
            <Text className="text-on-primary-fixed font-label-lg text-label-lg">Confidence: 98%</Text>
          </View>
          <View className="absolute -bottom-7 left-0">
            <Text className="text-primary-fixed font-bold text-label-lg">"Hello"</Text>
          </View>
        </Animated.View>

        <Animated.View 
          className="absolute top-[45%] right-[15%] w-[160px] h-[100px] border-2 rounded-lg bg-primary-container/10 justify-center"
          style={animatedBoxStyle}
        >
          <View className="absolute -top-7 left-0 bg-primary-container px-2 py-0.5 rounded">
            <Text className="text-on-primary-fixed font-label-lg text-label-lg">Confidence: 94%</Text>
          </View>
          <View className="absolute -bottom-7 left-0">
            <Text className="text-primary-fixed font-bold text-label-lg">"World"</Text>
          </View>
        </Animated.View>
      </View>

      {/* Top App Bar Cluster */}
      <SafeAreaView edges={['top']} className="absolute top-0 left-0 w-full z-50">
        <View className="flex-row justify-between items-center h-[72px] px-container-padding bg-background/40">
          <View className="flex-row items-center gap-4">
            <Pressable 
              onPress={() => router.back()}
              className="w-[56px] h-[56px] flex items-center justify-center bg-surface-container-high/60 rounded-full active:scale-95"
            >
              <MaterialIcons name="arrow-back" size={24} color="#e5e2e1" />
            </Pressable>
            <Text className="font-headline-sm-mobile text-headline-sm-mobile font-bold text-primary-fixed tracking-tight">
              BrailleVision
            </Text>
          </View>
          {TopBarRightElements}
        </View>
      </SafeAreaView>

      {/* UI Overlay for Feedback & Action */}
      <View className="absolute inset-0 flex-col justify-end items-center z-40 pb-[120px] pointer-events-box-none">
        <View className="mb-stack-gap-lg flex-col items-center gap-2">
          <View className="bg-surface-container-highest/90 border-2 border-primary-container px-6 py-3 rounded-full flex-row items-center gap-3">
            <View className="w-3 h-3 bg-primary-container rounded-full shadow-[0_0_8px_#ffd600]" />
            <Text className="text-on-surface font-label-lg text-label-lg uppercase tracking-widest">Ready to scan</Text>
          </View>
          <View className="bg-background/40 px-4 py-1 rounded-lg">
            <Text className="text-on-surface-variant font-body-md text-body-md">Align Braille text within frame</Text>
          </View>
        </View>

        {/* Primary Capture Button */}
        <View className="items-center justify-center w-full">
          <Pressable 
            onPress={() => router.push('/processing')}
            className="w-[88px] h-[88px] rounded-full bg-primary-container border-4 border-background flex items-center justify-center active:scale-90 transition-transform"
          >
            <View className="w-[64px] h-[64px] rounded-full border-2 border-on-primary-container flex items-center justify-center">
              <MaterialIcons name="photo-camera" size={40} color="#705d00" />
            </View>
          </Pressable>
        </View>
      </View>

      <BottomNavBar activeTab="scan" />
    </View>
  );
}
