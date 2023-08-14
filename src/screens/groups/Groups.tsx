import React, { useCallback, useEffect } from "react";
import { Header } from "@components/header/Header";
import { Container } from "./Groups.styles";
import { Highlight } from "@components/highlight/Highlight";
import { GroupCard } from "@components/group-card/GroupCard";
import { FlatList } from "react-native";
import { EmptyList } from "@components/empty-list/EmptyList";
import { Button } from "@components/button/Button";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { getAllGroups } from "@storage/group/get-all-groups";

export function Groups() {
  const navigation = useNavigation();

  const [groups, setGroups] = React.useState<string[]>([]);

  function handleNewGroup() {
    navigation.navigate("new");
  }

  async function fetchGroups() {
    try {
      const data = await getAllGroups();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight
        title="Teams"
        subtitle="Find your friends and start a group!"
      />

      <FlatList
        style={{ width: "100%" }}
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 ? { flex: 1 } : {}}
        ListEmptyComponent={() => (
          <EmptyList message="How about creating a new team?" />
        )}
        showsVerticalScrollIndicator={false}
      />

      <Button title="Add new team" onPress={handleNewGroup} />
    </Container>
  );
}
