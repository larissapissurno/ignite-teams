import { Header } from "@components/header/Header";
import { Container, Form } from "./Players.styles";
import { Highlight } from "@components/highlight/Highlight";
import { ButtonIcon } from "@components/button-icon/ButtonIcon";
import { Input } from "@components/input/Input";

export function Players() {
  return (
    <Container>
      <Header showBackButton />

      <Highlight title="Team name" subtitle="add players and organize teams" />

      <Form>
        <Input placeholder="Player name" autoCorrect={false} />

        <ButtonIcon icon="add" />
      </Form>
    </Container>
  );
}
