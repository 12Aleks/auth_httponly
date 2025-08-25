import {IAuthDto} from "@/app/utils/types";
import {api} from "@/app/api/axiosInitial";


export const authApi = {
    login: async (dto: IAuthDto) => {
        const res = await api.post('/auth/login', dto);
        return res;
    },
    logout: async () => {
        const res = await api.post('/auth/logout');
        return res;
    },
    register: async (dto: IAuthDto, role: string = 'user') => {
        const res = await api.post('/auth/register', {
            ...dto,
            role
        });
        return res;
    },
    isLogin: async () => {
        const res = await api.get('/users/profile');
        console.log(res);
        return res;
    }
}