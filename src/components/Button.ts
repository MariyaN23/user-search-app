import styled from "styled-components";
import {theme} from "../styles/Theme";

export const Button = styled.button`
    padding: 7px 20px;
    background-color: ${theme.colors.accent};
    color: ${theme.colors.onHover};
    border: 1px solid ${theme.colors.borderColor};
    border-radius: 5px;
    font-size: 16px;

    &:hover {
        background-color: ${theme.colors.onHover};
        color: ${theme.colors.accent};
    }
`