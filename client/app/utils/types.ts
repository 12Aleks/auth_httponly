export interface IAuthDto {
    email: string,
    password: string
}

export interface IUser{
    id: string;
    email: string;
    role: string;
}

export interface IAuthState{
    user: IUser | null;
    setUser: (user: IUser | null) => void;
}