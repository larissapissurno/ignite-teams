import { Platform } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  ${Platform.OS === "ios" ? css`padding: 48px 0;` : css`padding: 0;`}
`;

export const Logo = styled.Image`
  width: 46px;
  height: 56px;
`;