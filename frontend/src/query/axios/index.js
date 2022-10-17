import axios from "axios";

export const authInstance = axios.create({
    baseURL: 'localhost:8000/auth',
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
})

export const baseInstance = axios.create({
    baseURL: 'localhost:8000',
    headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})