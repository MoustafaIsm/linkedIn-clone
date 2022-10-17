import { authInstance } from '../axios';

export const login = async (data) => {
    const response = await authInstance.post('/login', data);
    return await response.data;
}

export const register = async (data) => {
    const response = await authInstance.post('/register', data);
    return await response.data;
}