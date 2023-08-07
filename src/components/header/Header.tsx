import { Text } from "react-native";
import { Container, Logo } from "./Header.styles";
import logoImg from "@assets/logo.png";

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} />
    </Container>
  );
}
