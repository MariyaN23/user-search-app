import {GlobalStyle} from "../../styles/Global.styled";
import {UserSearch} from "../UserSearch/UserSearch";
import {UserList} from "../UserList/UserList";
import {UserType} from "../../types/types";
import {useState} from "react";

export const SearchApp = () => {
    const [users, setUsers] = useState<UserType[]>([])
    const [wasSearch, setWasSearch] = useState<boolean>(false)
    const setUsersHandler = (users: UserType[])=>{
        setUsers(users)
        setWasSearch(true)
    }
    return (
        <>
            <GlobalStyle/>
            <UserSearch setUsers={setUsersHandler} />
            {wasSearch && <UserList users={users} />}
        </>
    );
};