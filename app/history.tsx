import React from 'react';
import { View, Text, Pressable, ScrollView, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';
import { TopAppBar } from '../components/TopAppBar';
import { BottomNavBar } from '../components/BottomNavBar';

export default function HistoryScreen() {
  const historyData = [
    {
      id: 1,
      date: 'Oct 24, 2023 • 14:30',
      grade: 'Grade 2 Braille',
      text: '"Caution: Hazardous materials beyond this point. Eye protection required."',
    },
    {
      id: 2,
      date: 'Oct 24, 2023 • 09:15',
      grade: 'Grade 1 Braille',
      text: '"Meeting Room 402 - Dr. Aris Thorne. Please knock before entering."',
    },
    {
      id: 3,
      date: 'Oct 23, 2023 • 18:45',
      grade: 'Grade 2 Braille',
      text: '"Ingredients: Organic Oat Flour, Sea Salt, Natural Flavors, Sunflower Oil."',
    },
  ];

  return (
    <SafeAreaView className="flex-1 bg-background" edges={['top']}>
      <TopAppBar title="Translation History" variant="solid" />

      <ScrollView className="flex-1 px-container-padding pt-6 mb-[80px]" showsVerticalScrollIndicator={false}>
        {/* Search Bar */}
        <View className="relative mb-4">
          <MaterialIcons name="search" size={24} color="#ffd600" className="absolute left-4 top-4 z-10" />
          <TextInput 
            className="w-full h-[56px] bg-surface-container-high border-2 border-outline rounded-lg pl-14 pr-4 text-on-surface font-label-lg focus:border-primary-container"
            placeholder="Search translations..."
            placeholderTextColor="#d0c6ab"
          />
        </View>

        {/* Date Filters */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-row mb-6 py-2">
          <Pressable className="px-6 py-2 bg-primary-container border-2 border-primary-fixed rounded-full active:scale-95 mr-2">
            <Text className="text-on-primary-container font-label-lg">All Time</Text>
          </Pressable>
          <Pressable className="px-6 py-2 bg-surface-container-high border-2 border-outline-variant rounded-full active:scale-95 mr-2">
            <Text className="text-on-surface font-label-lg">Today</Text>
          </Pressable>
          <Pressable className="px-6 py-2 bg-surface-container-high border-2 border-outline-variant rounded-full active:scale-95 mr-2">
            <Text className="text-on-surface font-label-lg">Yesterday</Text>
          </Pressable>
          <Pressable className="px-6 py-2 bg-surface-container-high border-2 border-outline-variant rounded-full active:scale-95 mr-2">
            <Text className="text-on-surface font-label-lg">This Week</Text>
          </Pressable>
        </ScrollView>

        {/* History List */}
        <View className="flex-col gap-4 mb-8">
          {historyData.map((item) => (
            <View key={item.id} className="bg-surface-container p-container-padding rounded-xl border-2 border-outline-variant hover:border-primary-container">
              <View className="flex-row justify-between items-start mb-2">
                <View>
                  <Text className="text-on-surface-variant font-label-lg uppercase tracking-widest mb-1">{item.date}</Text>
                  <View className="bg-surface-container-highest px-3 py-1 rounded self-start mb-3">
                    <Text className="text-secondary font-label-lg text-sm">{item.grade}</Text>
                  </View>
                </View>
                <Pressable>
                  <MaterialIcons name="more-vert" size={24} color="#d0c6ab" />
                </Pressable>
              </View>

              <Text className="text-on-surface font-headline-sm-mobile mb-4" numberOfLines={2}>
                {item.text}
              </Text>

              <View className="flex-row items-center justify-between gap-4 pt-4 border-t border-outline-variant/30">
                <Pressable className="flex-1 h-[56px] bg-primary-container rounded-lg flex-row items-center justify-center gap-3 active:scale-95">
                  <MaterialIcons name="play-arrow" size={24} color="#705d00" />
                  <Text className="text-on-primary-container font-bold text-lg">LISTEN</Text>
                </Pressable>
                <Pressable className="w-[56px] h-[56px] bg-surface-container-high border-2 border-outline-variant rounded-lg flex items-center justify-center active:scale-95">
                  <MaterialIcons name="share" size={24} color="#ffe170" />
                </Pressable>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      <BottomNavBar activeTab="history" />
    </SafeAreaView>
  );
}
