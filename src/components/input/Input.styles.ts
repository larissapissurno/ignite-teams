import { TextInput } from "react-native";
import styled from "styled-components/native";
import { css } from "styled-components/native";

export const Container = styled(TextInput)`
  ${({ theme }) => css`
    flex: 1;
    width: 100%;

    min-height: 56px;
    max-height: 56px;

    background-color: ${theme.COLORS.GRAY_700};
    color: ${theme.COLORS.WHITE};

    border-radius: 6px;
    padding: 6px 16px;

    font-size: ${theme.FONT_SIZE.MD}px;
    font-family: ${theme.FONT_FAMILY.REGULAR};
  `};
`;
