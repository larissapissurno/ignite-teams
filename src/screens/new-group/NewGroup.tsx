import { Header } from "@components/header/Header";
import { Container, Content, Icon } from "./NewGroup.styles";
import { Highlight } from "@components/highlight/Highlight";
import { Button } from "@components/button/Button";
import { Input } from "@components/input/Input";

export function NewGroup() {
  return (
    <Container>
      <Header showBackButton />

      <Content>
        <Icon />

        <Highlight
          title="New team"
          subtitle="create a new team to add your friends"
        />

        <Input placeholder="Awesome team name" />

        <Button title="Add" style={{ marginTop: 20 }} />
      </Content>
    </Container>
  );
}
