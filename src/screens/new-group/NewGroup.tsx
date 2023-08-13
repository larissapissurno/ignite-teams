import { Header } from "@components/header/Header";
import { Container, Content, Icon } from "./NewGroup.styles";
import { Highlight } from "@components/highlight/Highlight";
import { Button } from "@components/button/Button";
import { Input } from "@components/input/Input";
import { useNavigation } from "@react-navigation/native";

export function NewGroup() {
  const navigation = useNavigation();

  function handleNewGroup() {
    navigation.navigate("players", { group: "Casa" });
  }

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

        <Button
          title="Add"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  );
}
