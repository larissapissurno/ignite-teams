import { Header } from "@components/header/Header";
import { Container, Form, ListHeader, PlayersQuantity } from "./Players.styles";
import { Highlight } from "@components/highlight/Highlight";
import { ButtonIcon } from "@components/button-icon/ButtonIcon";
import { Input } from "@components/input/Input";
import { useState } from "react";
import { FlatList } from "react-native";
import { Filter } from "@components/filter/Filter";
import { PlayerCard } from "@components/player-card/PlayerCard";

// type Team = {
//   name: string;
//   isActive: boolean;
// };

export function Players() {
  const [teams, setTeams] = useState<string[]>(["Team 1", "Team 2", "Team 3"]);
  const [players, setPlayers] = useState<string[]>([
    "Player 1",
    "Player 2",
    "Player 3",
    "Player 4",
    "Player 5",
    "Player 6",
  ]);

  const [activeTeam, setActiveTeam] = useState<string>(teams[0]);

  function handleRemovePlayer(player: string) {
    setPlayers((oldPlayers) => oldPlayers.filter((item) => item !== player));
  }

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

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={handleRemovePlayer} />
        )}
      />
    </Container>
  );
}
