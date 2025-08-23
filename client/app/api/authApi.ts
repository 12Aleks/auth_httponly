import {IAuthDto} from "@/app/utils/types";
import {api} from "@/app/api/axiosInitial";


export const authApi = {
    login: async (dto: IAuthDto) => {
        const res = await api.post('/auth/login', dto);
        return res.data;
    },
    logout: async () => {
        const res = await api.post('/auth/logout');
        return res.data;
    },
    register: async () => {
        const res = await api.post('/auth/register');
        return res.data;
    }
}