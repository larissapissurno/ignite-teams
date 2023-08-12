import { TextInputProps } from "react-native";
import { Container } from "./Input.styles";
import { useTheme } from "styled-components/native";

type InputProps = TextInputProps & {};

export function Input({ ...rest }: InputProps) {
  const theme = useTheme();

  return <Container placeholderTextColor={theme.COLORS.GRAY_300} {...rest} />;
}
