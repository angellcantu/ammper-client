'use strict';

import axios, { AxiosResponse, AxiosError } from 'axios';

/* creating the instance */
const api = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    timeout: 15000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export {
    api,
    AxiosError,
    type AxiosResponse
};