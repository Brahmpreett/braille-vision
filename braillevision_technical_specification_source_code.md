# BrailleVision Production Architecture

## Tech Stack
- **Frontend**: Expo SDK, TypeScript, Expo Router (File-based routing), NativeWind (Tailwind CSS for RN), Reanimated 3 (Animations), Zustand (State), React Query (Data Fetching).
- **Backend**: Python 3.10+, FastAPI, OpenCV (Preprocessing), ONNX Runtime (Inference), SQLAlchemy (History).

## Project Structure
```text
braillevision/
├── app/                  # Expo Router Screens
├── components/           # Shared UI (Buttons, Cards, Modals)
├── features/             # Business Logic (Camera, Translation, History)
├── services/             # API & Native Modules (Speech, Camera, Backend)
├── store/                # Zustand State (Settings, Auth)
├── types/                # TypeScript Interfaces
├── utils/                # Helpers (Formatters, Constants)
└── backend/              # FastAPI Python Service
    ├── models/           # ONNX/TFLite models
    ├── core/             # Braille Logic (Segmentation, Translation)
    └── api/              # FastAPI Routes
```

## 1. Frontend: State Management (store/useSettingsStore.ts)
```typescript
import { create } from 'zustand';

interface SettingsState {
  fontSize: 'small' | 'medium' | 'large' | 'extra-large';
  speechSpeed: number;
  highContrast: boolean;
  darkMode: boolean;
  setSettings: (settings: Partial<SettingsState>) => void;
}

export const useSettingsStore = create<SettingsState>((set) => ({
  fontSize: 'medium',
  speechSpeed: 1.0,
  highContrast: false,
  darkMode: true,
  setSettings: (newSettings) => set((state) => ({ ...state, ...newSettings })),
}));
```

## 2. Frontend: Camera Feature (features/camera/LiveDetection.tsx)
```tsx
import React, { useState, useRef } from 'react';
import { Camera, CameraView } from 'expo-camera';
import { View, TouchableOpacity, Text } from 'react-native';
import * as Speech from 'expo-speech';
import { useSettingsStore } from '@/store/useSettingsStore';

export const LiveDetection = () => {
  const [facing, setFacing] = useState('back');
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const { speechSpeed } = useSettingsStore();

  const handleCapture = async () => {
    // Capture logic & send to FastAPI backend
    Speech.speak("Analyzing Braille...", { rate: speechSpeed });
  };

  return (
    <View className="flex-1 bg-black">
      <CameraView style={{ flex: 1 }} facing={facing}>
        {/* Bounding Box Overlays rendered here */}
        <View className="absolute bottom-10 w-full items-center">
          <TouchableOpacity 
            onPress={handleCapture}
            className="w-20 h-20 rounded-full bg-primary border-4 border-white items-center justify-center"
          >
            <View className="w-16 h-16 rounded-full bg-yellow-400" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
};
```

## 3. Backend: Braille Pipeline (backend/core/pipeline.py)
```python
import cv2
import numpy as np
import onnxruntime as ort

class BraillePipeline:
    def __init__(self, model_path: str):
        self.session = ort.InferenceSession(model_path)
    
    def preprocess(self, image_bytes):
        # Convert bytes to CV2 mat
        nparr = np.frombuffer(image_bytes, np.uint8)
        img = cv2.imdecode(nparr, cv2.IMREAD_GRAYSCALE)
        # Thresholding for dot enhancement
        _, thresh = cv2.threshold(img, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)
        return thresh

    def segment_cells(self, processed_img):
        # Logic to find 2x3 grid patterns
        pass

    def translate_to_english(self, dots):
        # Mapping bitmask to English characters
        braille_map = { (1,0,0,0,0,0): 'a', (1,1,0,0,0,0): 'b', ... }
        return braille_map.get(tuple(dots), "?")

# FastAPI App
from fastapi import FastAPI, UploadFile

app = FastAPI()

@app.post("/recognize")
async def recognize_braille(file: UploadFile):
    content = await file.read()
    # Execute Pipeline
    return {"text": "Caution: Automatic doors", "confidence": 0.98}
```

## 4. Navigation (app/_layout.tsx)
```tsx
import { Stack } from 'expo-router';
import { ThemeProvider } from '@/context/ThemeContext';

export default function Layout() {
  return (
    <ThemeProvider>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" /> {/* Splash */}
        <Stack.Screen name="home" />
        <Stack.Screen name="scan" />
        <Stack.Screen name="results" />
        <Stack.Screen name="settings" />
      </Stack>
    </ThemeProvider>
  );
}
```
