import React, { useState } from 'react';
import { View, Text, Pressable, ScrollView, Switch, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { TopAppBar } from '../components/TopAppBar';
import { BottomNavBar } from '../components/BottomNavBar';
import Slider from '@react-native-community/slider';

export default function SettingsScreen() {
  const [speed, setSpeed] = useState(1.0);
  const [fontSize, setFontSize] = useState<'small' | 'medium' | 'large' | 'xl'>('medium');
  const [darkMode, setDarkMode] = useState(true);
  const [highContrast, setHighContrast] = useState(false);
  const [offlineMode, setOfflineMode] = useState(false);

  const FontButton = ({ size, label }: { size: 'small' | 'medium' | 'large' | 'xl', label: string }) => {
    const isActive = fontSize === size;
    return (
      <Pressable 
        onPress={() => setFontSize(size)}
        className={`flex-1 h-[56px] border-2 rounded-lg items-center justify-center active:scale-95 ${
          isActive 
            ? 'border-primary-container bg-primary-container' 
            : 'border-outline-variant bg-transparent'
        }`}
      >
        <Text className={`font-bold text-label-lg ${isActive ? 'text-on-primary-container' : 'text-on-surface'}`}>
          {label}
        </Text>
      </Pressable>
    );
  };

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <TopAppBar title="Accessibility Settings" variant="solid" />

      <ScrollView className="flex-1 px-container-padding max-w-3xl mx-auto w-full pt-[24px] mb-[80px]" showsVerticalScrollIndicator={false}>
        <View className="flex-col space-y-stack-gap-lg mb-8">
          <Text className="text-on-surface-variant font-body-md mb-4">
            Configure your personal interaction preferences for high-speed Braille translation and voice output.
          </Text>

          <View className="flex-col gap-4">
            {/* Speed Slider */}
            <View className="bg-surface-container border border-outline-variant rounded-xl p-6 min-h-[120px] justify-center">
              <View className="flex-row justify-between items-start mb-4">
                <View className="flex-1">
                  <Text className="font-headline-sm text-on-surface font-bold">Speech Speed</Text>
                  <Text className="text-on-surface-variant text-label-lg mt-1">Adjust how fast the AI reads translated Braille.</Text>
                </View>
                <View className="bg-secondary-container px-3 py-1 rounded">
                  <Text className="text-on-secondary-container text-label-lg font-bold">{speed.toFixed(1)}x</Text>
                </View>
              </View>
              <View className="flex-row items-center gap-4">
                <MaterialIcons name="speed" size={24} color="#d0c6ab" />
                <Slider 
                  className="flex-1 h-[40px]"
                  minimumValue={0.5}
                  maximumValue={2.0}
                  step={0.1}
                  value={speed}
                  onValueChange={setSpeed}
                  minimumTrackTintColor="#ffd600"
                  maximumTrackTintColor="#474746"
                  thumbTintColor="#ffd600"
                />
              </View>
            </View>

            {/* Font Size Selector */}
            <View className="bg-surface-container border border-outline-variant rounded-xl p-6 min-h-[140px] justify-center">
              <View className="mb-4">
                <Text className="font-headline-sm text-on-surface font-bold">Font Size</Text>
                <Text className="text-on-surface-variant text-label-lg mt-1">Choose the text scale for translated content.</Text>
              </View>
              <View className="flex-row flex-wrap gap-2">
                <FontButton size="small" label="Small" />
                <FontButton size="medium" label="Medium" />
                <FontButton size="large" label="Large" />
                <FontButton size="xl" label="Extra Large" />
              </View>
            </View>

            {/* Toggles */}
            <View className="bg-surface-container border border-outline-variant rounded-xl p-6 h-[100px] flex-row items-center justify-between">
              <View className="flex-1">
                <Text className="font-headline-sm text-on-surface font-bold">Dark Mode</Text>
                <Text className="text-on-surface-variant text-label-lg mt-1">Optimized for low-light environments.</Text>
              </View>
              <Switch 
                value={darkMode}
                onValueChange={setDarkMode}
                trackColor={{ false: '#474746', true: '#ffd600' }}
                thumbColor={'#ffffff'}
              />
            </View>

            <View className="bg-surface-container border border-outline-variant rounded-xl p-6 h-[100px] flex-row items-center justify-between">
              <View className="flex-1">
                <Text className="font-headline-sm text-on-surface font-bold">High Contrast</Text>
                <Text className="text-on-surface-variant text-label-lg mt-1">Maximum visual separation for low vision.</Text>
              </View>
              <Switch 
                value={highContrast}
                onValueChange={setHighContrast}
                trackColor={{ false: '#474746', true: '#ffd600' }}
                thumbColor={'#ffffff'}
              />
            </View>

            <View className="bg-surface-container border border-outline-variant rounded-xl p-6 h-[100px] flex-row items-center justify-between">
              <View className="flex-1">
                <Text className="font-headline-sm text-on-surface font-bold">Offline Mode</Text>
                <Text className="text-on-surface-variant text-label-lg mt-1">Process translations locally without data.</Text>
              </View>
              <Switch 
                value={offlineMode}
                onValueChange={setOfflineMode}
                trackColor={{ false: '#474746', true: '#ffd600' }}
                thumbColor={'#ffffff'}
              />
            </View>
          </View>

          {/* Descriptive Image */}
          <View className="mt-8 rounded-xl overflow-hidden h-[192px] justify-center items-center">
            <Image 
              source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDJrhq9-mTW5aaGLTJAw-BnjX4SSiset3Q7-w1SOHKGhT62VQIIDA1euzD0ruB8O24eYhc-bYtC9cdYH0GOuuUTr4GoMognVM6oVGhj7NkCZnJPx9uxTh291ZwSXXi2kzHQ45-6HJpT_iuk-rcpW7uDnwpJBq3nU48iXXKCHOc_3CUOEeSG7t8G0XYPdgE5X7pyWgiNmkbq9lMvP_h9TlkvU5z0_r3MkHkSoKQWRI3HEtpNPYS7ig8xwUZ8zERb2cuNivoxz13nqMw' }}
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
            />
            <Text className="text-primary-fixed font-headline-sm italic text-center px-6">
              "Empowering independence through precise digital sight."
            </Text>
          </View>
        </View>
      </ScrollView>

      <BottomNavBar activeTab="settings" />
    </SafeAreaView>
  );
}
