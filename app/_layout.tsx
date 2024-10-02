import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { COLORS, FONT } from "../constants/theme";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";
import { View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

// This prevents SplashScreen from auto hiding while the fonts are loaded.
SplashScreen.preventAutoHideAsync();

export default function AppLayout() {
  // After the custom fonts have loaded, we can hide the splash screen and display the app screen.
  const [fontsLoaded] = useFonts({
    PromptRegular: require("../assets/fonts/Prompt-Regular.ttf"),
    PromptBold: require("../assets/fonts/Prompt-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <Tabs
          screenOptions={{
            headerStyle: {
              backgroundColor: COLORS.primary,
            },
            headerTintColor: COLORS.lightWhite,
            headerTitleStyle: {
              fontFamily: FONT.bold,
            },
          }}
        >
          <Tabs.Screen
            name="index"
            options={{
              tabBarLabel: "Home",
              title: "Home",
              tabBarIcon: ({ color }) => (
                <Ionicons name="home" size={32} color={color} />
              ),
            }}
          />
          <Tabs.Screen
            name="todo"
            options={{
              tabBarLabel: "Todo",
              title: "Todo",
              tabBarIcon: ({ color }) => (
                <Ionicons name="list" size={32} color={color} />
              ),
            }}
          />
        </Tabs>
      </View>
    </GestureHandlerRootView>
  );
}
