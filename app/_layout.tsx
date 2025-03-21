import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { Appearance, Button, StyleSheet, Text, TouchableOpacity } from "react-native";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  const isDarkTheme = colorScheme === "dark";

  if (!loaded) {
    return null;
  }

  const handleThemeChange = () => {
    Appearance.setColorScheme(isDarkTheme ? "light" : "dark");
  };

  const styles = makeStyles(isDarkTheme);

  return (
    <ThemeProvider value={isDarkTheme ? DarkTheme : DefaultTheme}>
      <Stack>
        <Stack.Screen name="+not-found" />
        <Stack.Screen
          name="/news/list"
          options={{ title: "Новости", headerTitle: "Новости" }}
        />
      </Stack>
      <StatusBar style="auto" />
      <TouchableOpacity onPress={handleThemeChange} style={styles.btn}>
        <Text style={styles.text}>
          {isDarkTheme ? 'L' : 'D'}
        </Text>
      </TouchableOpacity>
    </ThemeProvider>
  );
}

const makeStyles = (isDarkTheme: boolean) => StyleSheet.create({
  btn: {
    position: 'absolute',
    right: 20,
    bottom: 20,
    width: 40,
    height: 40,
    backgroundColor: isDarkTheme ? 'white' : 'gray',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center'
  },
  text: {
    color: isDarkTheme ? 'gray' : 'white',
    textAlign: 'center',
    verticalAlign: 'middle',
  },
});
