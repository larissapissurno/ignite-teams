import { Text } from "react-native";
import { BackButton, BackIcon, Container, Logo } from "./Header.styles";
import logoImg from "@assets/logo.png";

type HeaderProps = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: HeaderProps) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIcon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
