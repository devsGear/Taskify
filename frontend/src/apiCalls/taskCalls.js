import axios from "axios";
import { API_BASE_URL } from "./config";

const api = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
});

export async function getTasks() {
    try {
        const response = await api.get("/tasks");
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Network error" };
    }
}

export async function createTask(taskData) {
    try {
        const response = await api.post("/tasks", taskData);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Network error" };
    }
}

export async function getTasksByCategory(category) {
    try {
        const response = await api.get(`/tasks/category?category=${category}`);
        return response.data;
    } catch (error) {
        throw error.response?.data || { message: "Network error" };
    }
}