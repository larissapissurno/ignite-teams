import { TouchableOpacityProps } from "react-native";
import { ButtonStylesProps, Container, Label } from "./Button.styles";

type ButtonProps = TouchableOpacityProps & {
  title: string;
  variant?: ButtonStylesProps;
};

export function Button({
  title,
  variant = "primary",
  onPress,
  ...rest
}: ButtonProps) {
  return (
    <Container variant={variant} onPress={onPress} {...rest}>
      <Label>{title}</Label>
    </Container>
  );
}
