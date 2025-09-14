import {AxiosResponse} from "axios";

export interface IAuthDto {
    email: string,
    password: string
}

export interface IUser{
    id: string;
    email: string;
    role: string;
    name: string;
    surname: string;
    password?: string;
    isActive?: boolean;
    createdAt?: string;
    updatedAt?: string;
}

export interface IAuthState{
    user: IUser | null;
    setUser: (user: IUser) => void;
}

export interface IStatus{
    message: string,
    isAuth: boolean
}
