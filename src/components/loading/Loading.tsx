import React from "react";
import { View, Text } from "react-native";
import { Container, LoadIndicator } from "./Loading.styles";

export function Loading() {
  return (
    <Container>
      <LoadIndicator />
    </Container>
  );
}
