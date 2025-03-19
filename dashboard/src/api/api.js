import axios from "axios";

const api = axios.create({
    baseURL : 'https://webmicroagrotec-backend.onrender.com/api'
})

export default api
