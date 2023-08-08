import React from "react";
import { Header } from "@components/header/Header";
import { Container } from "./Groups.styles";
import { Highlight } from "@components/highlight/Highlight";

export function Groups() {
  return (
    <Container>
      <Header />
      <Highlight
        title="Teams"
        subtitle="Find your friends and start a group!"
      />
    </Container>
  );
}
