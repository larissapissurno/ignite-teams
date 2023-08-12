import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonStylesProps = "primary" | "secondary";

type ButtonProps = {
  variant: ButtonStylesProps;
};

export const Container = styled(TouchableOpacity)<ButtonProps>`
  flex: 1;

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
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.WHITE};
`;
