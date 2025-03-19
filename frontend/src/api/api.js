import axios from "axios";
const local = 'https://webmicroagrotec-backend.onrender.com'
const production = ''
const api = axios.create({
    baseURL : `${local}/api`
})

export default api
