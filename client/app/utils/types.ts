import {AxiosResponse} from "axios";

export interface IAuthDto {
    email: string,
    password: string
}

export interface IUser{
    id: string;
    email?: string;
    role?: string;
    name?: string;
    surname?: string;
}

export interface IAuthState{
    user: IUser | null;
    setUser: (user: AxiosResponse<any>) => void;
}