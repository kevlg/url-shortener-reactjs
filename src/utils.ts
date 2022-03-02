import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3030/',
    timeout: 1000,
});

export const renewToken = () => {
    if (!axiosInstance.defaults.headers.common['Authorization']) {
        const token = sessionStorage.getItem("token");

        if (token) {
            axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
        }
    }
};