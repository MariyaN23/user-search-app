import axios from "axios";
import {UserType} from "../types/types";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const api = {
    async getUsers(username: string): Promise<UserType[]> {
        const res = username ? await instance.get<UserType[]>(`users?username=${username}`)
            : await instance.get<UserType[]>(`users`)
        return res.data
    }
}