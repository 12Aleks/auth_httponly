
import {api} from "@/app/api/axiosInitial";
import {ILoginDto, IRegisterDto} from "@/app/lib/zodSchema";


export const authApi = {
    login: async (dto: ILoginDto) => {
        const res = await api.post('/auth/login', dto);
        return res;
    },
    logout: async () => {
        const res = await api.post('/auth/logout');
        return res;
    },
    register: async (dto: IRegisterDto) => {
        const res = await api.post('/auth/register', {
            ...dto
        });
        return res;
    },
    isLogin: async () => {
        const res = await api.get('/users/profile');
        console.log(res);
        return res;
    }
}