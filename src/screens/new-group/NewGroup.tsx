import { Header } from "@components/header/Header";
import { Container, Content, Icon } from "./NewGroup.styles";
import { Highlight } from "@components/highlight/Highlight";
import { Button } from "@components/button/Button";
import { Input } from "@components/input/Input";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { newGroup } from "@storage/group/new-group";
import { AppError } from "@utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState<string>("");

  const navigation = useNavigation();

  async function handleNewGroup() {
    try {
      if (group.length === 0) {
        throw new AppError("Group name cannot be empty");
      }

      await newGroup(group);
      navigation.navigate("players", { group });
    } catch (error) {
      console.debug(error);

      if (error instanceof AppError) {
        Alert.alert("New group", error.message);
      } else {
        Alert.alert("New group", "Something went wrong");
      }
    }
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

        <Input placeholder="Awesome team name" onChangeText={setGroup} />

        <Button
          title="Add"
          style={{ marginTop: 20 }}
          onPress={handleNewGroup}
        />
      </Content>
    </Container>
  );
}
