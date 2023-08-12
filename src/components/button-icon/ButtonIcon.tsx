import { TouchableOpacityProps } from "react-native";
import {
  ButtonIconStyleVariantProps,
  Container,
  Icon,
} from "./ButtonIcon.styles";
import { MaterialIcons } from "@expo/vector-icons";

type ButtonIconProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  variant?: ButtonIconStyleVariantProps;
};

export function ButtonIcon({
  icon,
  variant = "primary",
  ...rest
}: ButtonIconProps) {
  return (
    <Container variant={variant} {...rest}>
      <Icon name={icon} variant={variant} />
    </Container>
  );
}
