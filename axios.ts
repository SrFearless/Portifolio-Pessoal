import axios from "axios";

export const makeRequest = axios.create({
    baseURL:"http://localhost:8000/api/"
})

export const makeInicial = axios.create({
    baseURL:"http://localhost:8000/"
})