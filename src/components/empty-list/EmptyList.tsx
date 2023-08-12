import { Container, Message } from "./EmptyList.styles";

type EmptyListProps = {
  message: string;
};

export function EmptyList({ message }: EmptyListProps) {
  return (
    <Container>
      <Message>{message}</Message>
    </Container>
  );
}
