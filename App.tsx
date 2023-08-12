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
import { Groups } from "@screens/groups/Groups";
import { NewGroup } from "@screens/new-group/NewGroup";
import { Players } from "@screens/players/Players";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      {fontsLoaded ? <Players /> : <Loading />}
    </ThemeProvider>
  );
}
