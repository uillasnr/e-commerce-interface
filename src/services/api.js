import axios from "axios";


const apiEcommerce = axios.create({
    baseURL: 'http://localhost:3001'
})

apiEcommerce.interceptors.request.use(async config => {
    const userData = await localStorage.getItem('e-commerce:userData')
    const token = userData && JSON.parse(userData).token
    config.headers.authorization = `Bearer ${token}`
    return config
})

export default apiEcommerce
