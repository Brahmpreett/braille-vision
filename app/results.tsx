import React from 'react';
import { View, Text, Pressable, Image, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { TopAppBar } from '../components/TopAppBar';
import { BottomNavBar } from '../components/BottomNavBar';

export default function ResultsScreen() {
  const router = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <TopAppBar title="Translation Result" variant="solid" />

      <ScrollView className="flex-1 px-container-padding max-w-2xl mx-auto w-full pt-4 mb-[80px]" showsVerticalScrollIndicator={false}>
        <View className="flex-col gap-stack-gap-lg">
          {/* Main Content Card */}
          <View className="bg-surface-container-high rounded-xl p-container-padding border-2 border-primary-container shadow-lg mb-4">
            <View className="flex-row items-center justify-between mb-stack-gap-sm">
              <View className="bg-surface-variant px-3 py-1 rounded-full border border-outline">
                <Text className="text-on-surface-variant text-label-lg font-label-lg uppercase tracking-widest">
                  Detected: English
                </Text>
              </View>
              <View className="flex-row items-center gap-2">
                <MaterialIcons name="check-circle" size={24} color="#ffd600" />
                <Text className="font-headline-sm text-headline-sm text-primary-container font-bold">
                  Verified
                </Text>
              </View>
            </View>

            {/* Translation Text */}
            <View className="bg-surface-container-low rounded-lg p-stack-gap-md min-h-[200px] border-l-4 border-primary-container">
              <Text className="font-headline-md-mobile text-headline-md-mobile text-on-surface leading-snug">
                Caution: Automatic doors. Please wait for the green signal before proceeding to the platform.
              </Text>
            </View>
          </View>

          {/* Metrics */}
          <View className="flex-row gap-stack-gap-sm mb-4">
            <View className="flex-1 bg-surface-container-high p-stack-gap-md rounded-xl border border-outline-variant flex-col justify-center items-center">
              <Text className="text-on-surface-variant font-label-lg mb-1 uppercase tracking-tight">Confidence</Text>
              <Text className="text-primary-container font-headline-lg-mobile font-bold">98%</Text>
            </View>
            <View className="flex-1 bg-surface-container-high p-stack-gap-md rounded-xl border border-outline-variant flex-col justify-center items-center">
              <Text className="text-on-surface-variant font-label-lg mb-1 uppercase tracking-tight">Braille Grade</Text>
              <Text className="text-secondary font-headline-lg-mobile font-bold">Grade 1</Text>
            </View>
          </View>

          {/* Image Placeholder */}
          <View className="bg-surface-container rounded-xl p-container-padding border border-outline-variant overflow-hidden h-[120px] mb-8 relative justify-center">
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDf21zJN_Ek2p266FiriXTViy-Wv-MvL4IGZoPonRc98p5R_C7abvOyotz7F5XK5hNzp0zZFZBHLiNpSSWkz70X-c0O0RdMfoFCZekQ8xppIM9N6cM2bM-oiTweZHr7r5p9Rtl7XZZQyX2psDQRXkIarLdQ_zvXoh3cqXTre_h1vWJ8RqntII1LvcnvuwpF8NcYeyPkBXi_ZKh47jEbIfs192wOj7-rEIMt7XBwUEHBAlqt66nBz9Yr17Uts0pFo4WbpzUwrlY48ls' }}
              className="absolute inset-0 w-full h-full object-cover opacity-20"
            />
            <View className="flex-row items-center gap-4 z-10 pl-4">
              <View className="w-[56px] h-[56px] rounded-full border-2 border-primary-container flex items-center justify-center bg-background">
                <MaterialIcons name="photo-camera" size={24} color="#ffd600" />
              </View>
              <View>
                <Text className="font-body-md text-body-md text-on-surface">Source Image Captured</Text>
                <Text className="font-label-lg text-label-lg text-on-surface-variant">View original capture</Text>
              </View>
            </View>
          </View>

          {/* Action Bar */}
          <View className="flex-col gap-4 mb-8">
            <Pressable className="bg-primary-container h-[56px] rounded-lg flex-row items-center justify-center gap-4 active:scale-95 transition-transform shadow-lg">
              <MaterialIcons name="volume-up" size={32} color="#3a3000" />
              <Text className="text-on-primary font-headline-sm font-bold">Listen</Text>
            </Pressable>

            <View className="flex-row gap-2">
              <Pressable className="flex-1 bg-surface-container-high border-2 border-outline-variant h-[96px] rounded-lg flex-col items-center justify-center active:scale-95 hover:border-primary-container">
                <MaterialIcons name="content-copy" size={28} color="#e5e2e1" className="mb-2" />
                <Text className="text-on-surface font-label-lg mt-2">Copy</Text>
              </Pressable>
              <Pressable className="flex-1 bg-surface-container-high border-2 border-outline-variant h-[96px] rounded-lg flex-col items-center justify-center active:scale-95 hover:border-primary-container">
                <MaterialIcons name="save" size={28} color="#e5e2e1" className="mb-2" />
                <Text className="text-on-surface font-label-lg mt-2">Save</Text>
              </Pressable>
              <Pressable className="flex-1 bg-surface-container-high border-2 border-outline-variant h-[96px] rounded-lg flex-col items-center justify-center active:scale-95 hover:border-primary-container">
                <MaterialIcons name="share" size={28} color="#e5e2e1" className="mb-2" />
                <Text className="text-on-surface font-label-lg mt-2">Share</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </ScrollView>

      <BottomNavBar activeTab="history" />
    </SafeAreaView>
  );
}
