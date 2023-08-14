import { TextInput, TextInputProps } from "react-native";
import { Container } from "./Input.styles";
import { useTheme } from "styled-components/native";
import { RefObject } from "react";

type InputProps = TextInputProps & {
  inputRef?: RefObject<TextInput>;
};

export function Input({ inputRef, ...rest }: InputProps) {
  const theme = useTheme();

  return (
    <Container
      ref={inputRef}
      placeholderTextColor={theme.COLORS.GRAY_300}
      {...rest}
    />
  );
}
