import { Header } from "@components/header/Header";
import { Container, Form } from "./Players.styles";
import { Highlight } from "@components/highlight/Highlight";
import { ButtonIcon } from "@components/button-icon/ButtonIcon";
import { Input } from "@components/input/Input";
import { useState } from "react";
import { FlatList } from "react-native";
import { Filter } from "@components/filter/Filter";

export function Players() {
  const [teams, setTeams] = useState<string[]>([]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight title="Team name" subtitle="add players and organize teams" />

      <Form>
        <Input placeholder="Player name" autoCorrect={false} />

        <ButtonIcon icon="add" />
      </Form>

      {/* <FlatList
        horizontal
        data={teams}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Filter title={item} isActive />}
      /> */}

      <Filter title="Team 1" isActive />
    </Container>
  );
}
