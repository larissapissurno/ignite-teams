import { Header } from "@components/header/Header";
import { Container, Form, ListHeader, PlayersQuantity } from "./Players.styles";
import { Highlight } from "@components/highlight/Highlight";
import { ButtonIcon } from "@components/button-icon/ButtonIcon";
import { Input } from "@components/input/Input";
import { useEffect, useState } from "react";
import { Alert, FlatList } from "react-native";
import { Filter } from "@components/filter/Filter";
import { PlayerCard } from "@components/player-card/PlayerCard";
import { EmptyList } from "@components/empty-list/EmptyList";
import { Button } from "@components/button/Button";
import {
  ParamListBase,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { PlayerScreenRouteProp } from "src/@types/navigation";
import { AppError } from "@utils/AppError";
import { PlayerDTO, addPlayer } from "@storage/player/add-player";
import { getPlayersByGroup } from "@storage/player/get-players-by-group";
import { removePlayer } from "@storage/player/remove-player";
import { removeGroup } from "@storage/group/remove-group";

export function Players() {
  const [teams, setTeams] = useState<string[]>(["Team A", "Team B"]);
  const [players, setPlayers] = useState<PlayerDTO[]>([]);
  const [newPlayerName, setNewPlayerName] = useState<string>("");
  const [activeTeam, setActiveTeam] = useState<string>(teams[0]);

  const {
    params: { group },
  } = useRoute<PlayerScreenRouteProp>();

  const navigation = useNavigation();

  const filteredPlayers = players.filter((item) => item.team === activeTeam);

  async function handleNewPlayer() {
    try {
      if (!newPlayerName?.trim()) {
        throw new AppError("Player name is required");
      }

      const newPlayer = {
        name: newPlayerName,
        team: activeTeam,
      };

      await addPlayer(newPlayer, group);
      setPlayers((oldPlayers) => [...oldPlayers, newPlayer]);
      setNewPlayerName("");
    } catch (error) {
      console.debug(error);

      if (error instanceof AppError) {
        Alert.alert("New Player", error.message);
      } else {
        Alert.alert("New Player", "Unexpected error");
      }
    }
  }

  async function handleRemovePlayer(playerName: string) {
    try {
      const newPlayerList = await removePlayer(playerName, group);

      setPlayers(newPlayerList);
    } catch (error) {
      console.debug(error);

      if (error instanceof AppError) {
        Alert.alert("Remove Player", error.message);
      } else {
        Alert.alert("Remove Player", "Unexpected error");
      }
    }
  }

  async function handleRemoveGroup() {
    try {
      await removeGroup(group);
      navigation.navigate("groups");
    } catch (error) {
      console.debug(error);

      if (error instanceof AppError) {
        Alert.alert("Remove Group", error.message);
      } else {
        Alert.alert("Remove Group", "Unexpected error");
      }
    }
  }

  useEffect(() => {
    getPlayersByGroup(group).then(setPlayers);
  }, []);

  return (
    <Container>
      <Header showBackButton />

      <Highlight title={group} subtitle="add players and organize teams" />

      <Form>
        <Input
          placeholder="Player name"
          autoCorrect={false}
          value={newPlayerName}
          onChangeText={setNewPlayerName}
        />

        <ButtonIcon icon="add" onPress={handleNewPlayer} />
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

        <PlayersQuantity>{filteredPlayers.length}</PlayersQuantity>
      </ListHeader>

      <FlatList
        data={filteredPlayers}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <PlayerCard name={item.name} onRemove={handleRemovePlayer} />
        )}
        ListEmptyComponent={() => (
          <EmptyList message="Add new players to this team" />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 ? { flex: 1 } : {},
        ]}
      />

      <Button
        title="Remove group"
        variant="secondary"
        onPress={handleRemoveGroup}
      />
    </Container>
  );
}
