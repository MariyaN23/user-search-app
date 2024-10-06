import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Field = styled.input`
    padding: 10px;
    border: 1px solid ${theme.colors.borderColor};
    border-radius: 5px;
    font-size: 16px;
    width: 50%;
`

const SearchError = styled.div`
    color: ${theme.colors.error};
    border: 1px solid ${theme.colors.error};
    border-radius: 5px;
    max-width: 300px;
    height: 30px;
    padding: 5px;
    margin: 0 auto;
`

export const S = {
    Field,
    SearchError,
}