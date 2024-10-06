import React from 'react';
import {UserType} from "../../types/types";
import {S} from "./User_Styles"

type UserPropsType = {
    user: UserType
}

export const User: React.FC<UserPropsType> = ({user}) => {
    return (
        <S.User>
            <p><b>username:</b> {user.username}</p>
            <p><b>email:</b> {user.email}</p>
            <p><b>city:</b> {user.address.city}</p>
            <p><b>website:</b> {user.website}</p>
            <p><b>company:</b> {user.company.name}</p>
        </S.User>
    );
};