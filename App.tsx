import React from "react";
import { ThemeProvider } from "styled-components/native";
import theme from "@themes/default";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import { Loading } from "@components/loading/Loading";
import { StatusBar } from "react-native";
import { Routes } from "@routes/Routes";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTheme } from "styled-components";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
