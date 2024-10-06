import styled from "styled-components";
import {theme} from "../../styles/Theme";

const User = styled.div`
    width: 300px;
    padding: 20px;
    border: 1px solid ${theme.colors.borderColor};
    border-radius: 5px;
    font-weight: normal;
    
    p {
        color: ${theme.colors.font};
    }
    
    b {
        color: ${theme.colors.accent};
    }
`

export const S = {
    User
}