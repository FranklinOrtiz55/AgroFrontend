

// archivo para configurar el axios para realizar las llamadas a la api del backend

import axios from "axios";

const agroApi = axios.create({

    baseURL: process.env.REACT_APP_BACKEND_URL
})

// configuracion de interceptores.
agroApi.interceptors.request.use(config => {

    config.headers = {
        'Content-Type': "application/json",
        'x-acces-token': localStorage.getItem("token"),
         }
    return config;
})

export default (agroApi);