import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type BottomNavBarProps = {
  activeTab: 'home' | 'scan' | 'history' | 'learn' | 'settings';
};

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab }) => {
  const router = useRouter();

  return (
    <View className="absolute bottom-0 left-0 w-full z-50 flex-row justify-around items-center px-gutter py-2 h-[80px] bg-surface-container-high border-t-2 border-outline-variant">
      
      {/* Scan Tab */}
      <Pressable 
        onPress={() => router.push('/home')}
        className={`flex-col items-center justify-center p-2 min-h-[56px] w-1/4 rounded-lg transition-all ${
          activeTab === 'scan' || activeTab === 'home'
            ? 'bg-primary-container border-2 border-primary-fixed'
            : 'hover:bg-secondary-container'
        }`}
      >
        <MaterialIcons 
          name="photo-camera" 
          size={24} 
          color={activeTab === 'scan' || activeTab === 'home' ? '#705d00' : '#c8c6c5'} 
        />
        <Text className={`font-label-lg text-label-lg mt-1 ${activeTab === 'scan' || activeTab === 'home' ? 'text-on-primary-container' : 'text-secondary'}`}>
          Scan
        </Text>
      </Pressable>

      {/* History Tab */}
      <Pressable 
        onPress={() => router.push('/history')}
        className={`flex-col items-center justify-center p-2 min-h-[56px] w-1/4 rounded-lg transition-all ${
          activeTab === 'history'
            ? 'bg-primary-container border-2 border-primary-fixed'
            : 'hover:bg-secondary-container'
        }`}
      >
        <MaterialIcons 
          name="history" 
          size={24} 
          color={activeTab === 'history' ? '#705d00' : '#c8c6c5'} 
        />
        <Text className={`font-label-lg text-label-lg mt-1 ${activeTab === 'history' ? 'text-on-primary-container' : 'text-secondary'}`}>
          History
        </Text>
      </Pressable>

      {/* Settings / Learn Tab */}
      <Pressable 
        onPress={() => router.push('/settings')}
        className={`flex-col items-center justify-center p-2 min-h-[56px] w-1/4 rounded-lg transition-all ${
          activeTab === 'settings'
            ? 'bg-primary-container border-2 border-primary-fixed'
            : 'hover:bg-secondary-container'
        }`}
      >
        <MaterialIcons 
          name="settings" 
          size={24} 
          color={activeTab === 'settings' ? '#705d00' : '#c8c6c5'} 
        />
        <Text className={`font-label-lg text-label-lg mt-1 ${activeTab === 'settings' ? 'text-on-primary-container' : 'text-secondary'}`}>
          Settings
        </Text>
      </Pressable>

    </View>
  );
};
