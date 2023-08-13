import { Header } from "@components/header/Header";
import { Container, Form, ListHeader, PlayersQuantity } from "./Players.styles";
import { Highlight } from "@components/highlight/Highlight";
import { ButtonIcon } from "@components/button-icon/ButtonIcon";
import { Input } from "@components/input/Input";
import { useState } from "react";
import { FlatList } from "react-native";
import { Filter } from "@components/filter/Filter";

// type Team = {
//   name: string;
//   isActive: boolean;
// };

export function Players() {
  const [teams, setTeams] = useState<string[]>(["Team 1", "Team 2", "Team 3"]);
  const [players, setPlayers] = useState<string[]>([]);

  const [activeTeam, setActiveTeam] = useState<string>(teams[0]);

  return (
    <Container>
      <Header showBackButton />

      <Highlight title="Team name" subtitle="add players and organize teams" />

      <Form>
        <Input placeholder="Player name" autoCorrect={false} />

        <ButtonIcon icon="add" />
      </Form>

      <ListHeader>
        <FlatList
          horizontal
          data={teams}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === activeTeam}
              onPress={() => setActiveTeam(item)}
            />
          )}
        />

        <PlayersQuantity>{players.length}</PlayersQuantity>
      </ListHeader>
    </Container>
  );
}
