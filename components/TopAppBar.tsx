import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

type TopAppBarProps = {
  title?: string;
  variant?: 'solid' | 'transparent';
  onBackPress?: () => void;
  rightElements?: React.ReactNode;
};

export const TopAppBar: React.FC<TopAppBarProps> = ({ 
  title = "BrailleVision", 
  variant = 'solid', 
  onBackPress,
  rightElements 
}) => {
  const router = useRouter();

  const handleBack = () => {
    if (onBackPress) {
      onBackPress();
    } else if (router.canGoBack()) {
      router.back();
    }
  };

  const isSolid = variant === 'solid';

  return (
    <View 
      className={`w-full z-50 flex-row justify-between items-center px-container-padding ${
        isSolid 
          ? 'bg-surface border-b-2 border-outline-variant h-[56px]' 
          : 'bg-background/80 h-[72px] pt-2'
      }`}
    >
      <View className="flex-row items-center gap-4">
        <Pressable 
          onPress={handleBack}
          className={`active:scale-95 transition-all flex items-center justify-center ${
            isSolid ? 'p-2 rounded-lg hover:bg-surface-variant' : 'w-[56px] h-[56px] bg-surface-container-high/60 rounded-full'
          }`}
        >
          <MaterialIcons name="arrow-back" size={24} color={isSolid ? "#ffe170" : "#e5e2e1"} />
        </Pressable>
        <Text className="font-headline-sm-mobile text-headline-sm-mobile font-bold text-primary-fixed">
          {title}
        </Text>
      </View>
      
      <View className="flex-row gap-2 items-center">
        {rightElements ? (
          rightElements
        ) : (
          <Pressable 
            onPress={() => router.push('/settings')}
            className={`active:scale-95 transition-all flex items-center justify-center ${
              isSolid ? 'p-2 rounded-lg hover:bg-surface-variant' : 'w-[56px] h-[56px] bg-surface-container-high/60 rounded-full'
            }`}
          >
            <MaterialIcons name="settings" size={24} color={isSolid ? "#ffe170" : "#e5e2e1"} />
          </Pressable>
        )}
      </View>
    </View>
  );
};
