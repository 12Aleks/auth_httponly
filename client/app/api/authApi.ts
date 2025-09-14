
import {api} from "@/app/api/axiosInitial";
import {ILoginDto, IRegisterDto} from "@/app/lib/zodSchema";
import {IStatus, IUser} from "@/app/utils/types";


export const authApi = {
    login: async (dto: ILoginDto): Promise<IStatus> => {
        return api.post('/auth/login', dto);
    },
    logout: async (): Promise<IStatus> => {
        return api.post('/auth/logout');
    },
    register: async (dto: IRegisterDto):Promise<IUser> => {
        const res = await api.post('/auth/register', {
            ...dto
        });
        return res.data;
    },
    isLogin: async ():Promise<IUser> => {
        const res = await api.get('/users/profile');
        console.log('isLogin', res);
        return res.data;
    }
}