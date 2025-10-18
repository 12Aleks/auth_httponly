import axios from "axios";
import Cookies from "js-cookie";

export const api = axios.create({
    baseURL: "http://localhost:5000",
    timeout: 10000,
    withCredentials: true
});

let isRefreshing = false;

// Check csrfToken
api.interceptors.request.use(
    (config) => {
        const csrfToken = Cookies.get("csrfToken");
        if (csrfToken) {
            config.headers["X-CSRF-Token"] = csrfToken;
        }
        return config;
    },
    (error) => Promise.reject(error)
);


api.interceptors.response.use(
    (res) => res, // if all ok
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
                    if (typeof window !== "undefined") {
                        window.location.href = "/login";
                    }
                }
            }
        }

        return Promise.reject(error);
    }
);