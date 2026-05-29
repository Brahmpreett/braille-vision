import React from 'react';
import { View, Text, Pressable, Image, ScrollView } from 'react-native';
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
  Easing
} from 'react-native-reanimated';

export default function HomeScreen() {
  const router = useRouter();

  const scanLinePosition = useSharedValue(0);

  React.useEffect(() => {
    scanLinePosition.value = withRepeat(
      withTiming(100, { duration: 3000, easing: Easing.inOut(Easing.ease) }),
      -1,
      true
    );
  }, []);

  const animatedScanLineStyle = useAnimatedStyle(() => {
    return {
      top: `${10 + scanLinePosition.value * 0.8}%`,
      opacity: scanLinePosition.value < 50 ? 0.2 + (scanLinePosition.value / 50) * 0.8 : 1 - ((scanLinePosition.value - 50) / 50) * 0.8,
    };
  });

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <TopAppBar title="BrailleVision" variant="solid" />

      <ScrollView className="flex-1 mb-[80px]" showsVerticalScrollIndicator={false}>
        {/* Hero Section: Camera Preview */}
        <View className="relative h-[397px] w-full bg-surface-container-lowest overflow-hidden">
          <Animated.View 
            className="absolute left-0 right-0 h-[4px] bg-primary-container shadow-[0_0_20px_#ffd600] z-20"
            style={animatedScanLineStyle}
          />
          <Image 
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQ9tLYBg0EJVKo9nKMsMV2hCODqK7j84qFsW9z912nFOxha2Q868_2gOAxLYqI_TllFvkTV6Jp5FOn3px1BqiN7hsAKtOwivbTXtvI7bzoenrYrWv4vMHUSc_91HnSD5OUn6ahIc45-xkwi0QO6MEq6TqF5T3FeGflkDQfRlSJOaVYxoC7JgelP1WuqdNVESq13BN5XQybpkxm4Yp3wDp4Q4YQO-r6K0mjmxiON4hg4A01O_VQJI8nnsspQMj-kurfvQoIy-yE7TM' }}
            className="w-full h-full object-cover opacity-80"
            style={{ tintColor: 'gray' }} // Approximation for grayscale contrast-125
          />
          
          {/* Overlay Info */}
          <View className="absolute top-4 left-4 bg-black/60 px-3 py-1 rounded-full border border-primary-fixed/30 flex-row items-center gap-2">
            <View className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
            <Text className="font-label-lg text-label-lg text-on-surface">LIVE FEED: GRADE 2</Text>
          </View>

          {/* Corner Brackets */}
          <View className="absolute inset-0 border-[32px] border-transparent pointer-events-none">
            <View className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-primary-fixed rounded-tl-xl" />
            <View className="absolute top-0 right-0 w-12 h-12 border-t-4 border-r-4 border-primary-fixed rounded-tr-xl" />
            <View className="absolute bottom-0 left-0 w-12 h-12 border-b-4 border-l-4 border-primary-fixed rounded-bl-xl" />
            <View className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-primary-fixed rounded-br-xl" />
          </View>
        </View>

        {/* Action Area */}
        <View className="px-container-padding py-stack-gap-md space-y-gutter">
          {/* Primary Action */}
          <Pressable 
            onPress={() => router.push('/live-detection')}
            className="w-full min-h-[80px] bg-primary-container rounded-xl flex-row items-center justify-center gap-4 border-2 border-primary-fixed active:scale-[0.98] transition-transform shadow-lg mb-4"
          >
            <MaterialIcons name="photo-camera" size={40} color="#705d00" />
            <Text className="font-headline-md-mobile text-headline-md-mobile text-on-primary-container uppercase tracking-wider">
              Scan Braille
            </Text>
          </Pressable>

          {/* Secondary Grid */}
          <View className="flex-row justify-between mb-4 gap-4">
            <Pressable 
              onPress={() => router.push('/history')}
              className="flex-1 min-h-[80px] bg-surface-container-high border-2 border-outline-variant rounded-xl flex-col items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <MaterialIcons name="history" size={32} color="#ffe170" />
              <Text className="font-label-lg text-label-lg text-on-surface">History</Text>
            </Pressable>
            <Pressable 
              className="flex-1 min-h-[80px] bg-surface-container-high border-2 border-outline-variant rounded-xl flex-col items-center justify-center gap-2 active:scale-95 transition-all"
            >
              <MaterialIcons name="menu-book" size={32} color="#ffe170" />
              <Text className="font-label-lg text-label-lg text-on-surface">Learn</Text>
            </Pressable>
          </View>

          {/* Recent Scan Snippet */}
          <View className="bg-surface-container border-2 border-outline-variant rounded-xl p-stack-gap-sm">
            <View className="flex-row items-center justify-between mb-2">
              <Text className="font-label-lg text-label-lg text-on-surface-variant">LAST TRANSLATION</Text>
              <Text className="text-xs text-on-surface-variant/60 uppercase">2 mins ago</Text>
            </View>
            <View className="p-4 bg-background rounded-lg border border-outline-variant/30">
              <Text className="font-body-md text-body-md text-primary-fixed-dim leading-relaxed">
                "Danger: Do not touch the internal components while the device is powered on."
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <BottomNavBar activeTab="home" />
    </SafeAreaView>
  );
}
