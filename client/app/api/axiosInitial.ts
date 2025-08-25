import axios from "axios";


export const api = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 10000,
    withCredentials: true
});

api.interceptors.response.use(
    res => res.data,
    async (error) => {
        // можно обработать 401, например разлогинить пользователя
        if (error.response?.status === 401) {
            // например, вызвать logout или редирект на страницу логина
            console.log("Unauthorized!");
        }
        return Promise.reject(error); // 🔑 обязательно пробрасываем ошибку дальше
    }
);