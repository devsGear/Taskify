import axios from "axios";

import { API_BASE_URL } from "./config";

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
});

export async function register(userData){
    try {
        const response = await api.post("/auth/register", userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
}

export async function login(userData) {
    try {
        const response = await api.post("/auth/login", userData);
        return response.data;
    } catch (error) {
        throw error.response.data;
        
    }
}