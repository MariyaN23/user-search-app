import {S} from "./UserSearch_Styles";
import {Container} from "../../components/Container";
import {Button} from "../../components/Button";
import {Search} from "lucide-react";
import {api} from "../../api/api";
import {UserType} from "../../types/types";
import React, {ChangeEvent, useState} from "react";

type UserSearchPropsType = {
    setUsers: (data: UserType[]) => void
}

export const UserSearch: React.FC<UserSearchPropsType> = ({setUsers}) => {
    const [inputValue, setInputValue] = useState("")
    const [error, setError] = useState(false)
    const searchUsers = async () => {
        try {
            setError(false)
            const data: UserType[] = await api.getUsers(inputValue)
            setUsers(data)
        } catch (error: any) {
            setError(error.message)
        }
    }
    const userNameSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
    }
    return (
        <>
            <Container>
                <S.Field placeholder={"Enter user name"}
                         type={"text"}
                         value={inputValue}
                         onChange={userNameSearchHandler}/>
                <Button onClick={() => searchUsers()}>
                    <Search size={20} />
                </Button>
            </Container>
            {error && <S.SearchError>{error}</S.SearchError>}
        </>
    );
};