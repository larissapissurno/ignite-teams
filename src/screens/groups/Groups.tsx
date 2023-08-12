import React from "react";
import { Header } from "@components/header/Header";
import { Container } from "./Groups.styles";
import { Highlight } from "@components/highlight/Highlight";
import { GroupCard } from "@components/group-card/GroupCard";
import { FlatList } from "react-native";
import { EmptyList } from "@components/empty-list/EmptyList";

export function Groups() {
  const [groups, setGroups] = React.useState<string[]>([]);

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
      />
    </Container>
  );
}
