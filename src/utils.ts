import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER,
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