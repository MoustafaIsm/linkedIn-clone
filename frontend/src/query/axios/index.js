import axios from "axios";

export const authInstance = axios.create({
    baseURL: 'http://localhost:8000/auth',
    headers: {
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Credentials': true
    }
})

export const baseInstance = axios.create({
    baseURL: 'localhost:8000',
    headers: {
        "Access-Control-Allow-Origin": "*",
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
})