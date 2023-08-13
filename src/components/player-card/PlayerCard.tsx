import { ButtonIcon } from "@components/button-icon/ButtonIcon";
import { Container, Icon, Name } from "./PlayerCard.styles";

type PlayerCardProps = {
  name: string;
  onRemove: (player: string) => void;
};

export function PlayerCard({ name, onRemove }: PlayerCardProps) {
  return (
    <Container>
      <Icon name="person" />

      <Name>{name}</Name>

      <ButtonIcon
        icon="close"
        variant="secondary"
        onPress={() => onRemove(name)}
      />
    </Container>
  );
}
