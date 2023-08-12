import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { MaterialIcons } from "@expo/vector-icons";

export type ButtonIconStyleVariantProps = "primary" | "secondary";

type ContainerProps = {
  variant: ButtonIconStyleVariantProps;
};

export const Container = styled(TouchableOpacity)<ContainerProps>`
  width: 56px;
  height: 56px;

  justify-content: center;
  align-items: center;

  margin-left: 12px;
`;

export const Icon = styled(MaterialIcons).attrs<ContainerProps>(
  ({ theme, variant }) => ({
    size: 24,
    color: variant === "primary" ? theme.COLORS.GREEN_700 : theme.COLORS.RED,
  })
)``;
