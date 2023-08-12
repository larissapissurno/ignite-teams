import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export type ButtonStylesProps = "primary" | "secondary";

type ButtonProps = {
  variant: ButtonStylesProps;
};

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;
  width: 100%;

  min-height: 56px;
  max-height: 56px;

  background-color: ${({ theme, variant }) => {
    switch (variant) {
      case "primary":
        return theme.COLORS.GREEN_700;
      case "secondary":
        return theme.COLORS.RED_DARK;
      default:
        return theme.COLORS.GREEN_700;
    }
  }};

  justify-content: center;
  align-items: center;

  border-radius: 6px;
`;

export const Label = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
    color: ${theme.COLORS.WHITE};
  `};
`;
