import { Text, TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./GroupCard.styles";

type GroupCardProps = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title, ...rest }: GroupCardProps): JSX.Element {
  return (
    <Container {...rest}>
      <Icon />
      <Title>{title}</Title>
    </Container>
  );
}
