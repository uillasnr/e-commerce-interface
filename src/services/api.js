import axios from "axios";


const apiEcommerce = axios.create({
    baseURL: 'http://localhost:3001'
})

apiEcommerce.interceptors.request.use(async config => {
    const userData = await localStorage.getItem('Ecommerce:userData')
    const token = JSON.parse(userData).token
    config.headers.authorization = `Bearer ${token}`
    return config
})

export default apiEcommerce
