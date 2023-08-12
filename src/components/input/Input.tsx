import { TextInputProps } from "react-native";
import { Container } from "./Input.styles";

type InputProps = TextInputProps & {};

export function Input({ ...rest }: InputProps) {
  return <Container {...rest} />;
}
