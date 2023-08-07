import { DefaultTheme } from "styled-components";
import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${(props) => props.theme.COLORS.GRAY_600};
  align-items: center;
  justify-content: center;

  padding: 24px;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 32px;
`;