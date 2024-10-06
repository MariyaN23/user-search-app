import React from 'react';
import {S} from "./UserList_Styles";
import {Container} from "../../components/Container";
import {User} from "../User/User";
import {UserType} from "../../types/types";

type UserListPropsType = {
    users: UserType[]
}

export const UserList: React.FC<UserListPropsType> = ({users}) => {
    return (
        <Container>
            <S.UserList>
                {!users.length
                    ? <S.NoResults>Users not found</S.NoResults>
                    : <S.FoundResults>
                        {users.length === 1
                            ? "1 result found"
                            : `${users.length} results found`}</S.FoundResults>}
                <S.UsersResult>
                    {users.map((u, index) => (
                        <User user={u} key={index}/>
                    ))}
                </S.UsersResult>
            </S.UserList>
        </Container>
    );
};