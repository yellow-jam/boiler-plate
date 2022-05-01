import axios from 'axios';
import {
    LOGIN_USER,
    REGISTER_USER
} from './types';

export function loginUser(dataTosubmit) {
    const request = axios.post('/api/users/login', dataTosubmit)
    .then(response => response.data ) // 서버에서 받은 데이터를 리퀘스트에 저장

    return { // 리듀서로 보내기
        type: 'LOGIN_USER',
        payload: request
    }
}

export function registerUser(dataTosubmit) {
    const request = axios.post('/api/users/register', dataTosubmit)
    .then(response => response.data ) // 서버에서 받은 데이터를 리퀘스트에 저장

    return { // 리듀서로 보내기
        type: 'REGISTER_USER',
        payload: request
    }
}