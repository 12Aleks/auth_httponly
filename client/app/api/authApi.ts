
import {api} from "@/app/api/axiosInitial";
import {ILoginDto, IRegisterDto} from "@/app/lib/zodSchema";
import {IStatus, IUser} from "@/app/utils/types";


export const authApi = {
    login: async (dto: ILoginDto): Promise<IStatus> => {
       const res = await api.post('/auth/login', dto);
       if(!res?.data?.isAuth) return {message: 'Invalid email or password', isAuth: false}
       return res?.data
    },
    logout: async (): Promise<IStatus> => {
        return await api.post('/auth/logout');
    },
    register: async (dto: IRegisterDto):Promise<IUser> => {
        const res = await api.post('/auth/register', {
            ...dto
        });
        return res.data;
    },
    isLogin: async ():Promise<IUser> => {
        const res = await api.get('/users/profile');
        return res?.data;
    }
}