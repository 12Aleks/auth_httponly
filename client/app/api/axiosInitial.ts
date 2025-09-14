import axios from "axios";


export const api = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 10000,
    withCredentials: true
});

let isRefreshing = false;
   api.interceptors.response.use(
    res => res.data,
    async (error) => {
        const originalRequest = error.config;
        if (error.response?.status === 401 && !originalRequest._retry) {
            if (!isRefreshing) {
                isRefreshing = true;
                try {
                    await api.post("/auth/refresh");
                    isRefreshing = false;
                    originalRequest._retry = true;
                    return api(originalRequest); // повторяем запрос
                } catch (e) {
                    isRefreshing = false;
                    console.log("Refresh failed, redirect to login");
                }
            }
        }
    }
);