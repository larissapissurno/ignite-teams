import { Touchable, TouchableOpacityProps } from "react-native";
import { Container, FilterStyleProps, Label } from "./Filter.styles";

type FilterProps = TouchableOpacityProps &
  FilterStyleProps & {
    title: string;
  };

export function Filter({ title, isActive, ...rest }: FilterProps) {
  return (
    <Container isActive={isActive} {...rest}>
      <Label>{title}</Label>
    </Container>
  );
}
