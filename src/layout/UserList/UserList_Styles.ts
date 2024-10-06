import styled from "styled-components";
import {theme} from "../../styles/Theme";

const UserList = styled.div`
    color: ${theme.colors.accent};
    font-weight: bold;
`
const UsersResult = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 10px;
`
const NoResults = styled.div`
    color: ${theme.colors.error};
`
const FoundResults = styled.div`
    color: ${theme.colors.font};
`

export const S = {
    UserList,
    UsersResult,
    NoResults,
    FoundResults
}